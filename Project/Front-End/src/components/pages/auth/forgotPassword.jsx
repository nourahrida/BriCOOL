import React, { useState } from "react";
import { PrimaryButton } from "../../controls/buttons";
import { Input } from "../../controls/field";
import { Link, Loader } from "../../utils/utils";
import AuthLayout from "../../layouts/authLayout";
import { useDispatch } from "react-redux";
import {forgotPassword} from "../../../actions/auth";

const ForgotPassword = () => {
  const [validationMessage, setValidationMessage] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true);
    setValidationMessage([]);
    if (email) {
      if (
        email &&
        (email.indexOf("@") === -1 ||
          email.indexOf("@") !== email.lastIndexOf("@"))
      ) {
        setLoading(false);
        setValidationMessage(["email is not valid"]);
        //toast("error", "Failed to reload account");
      } else {
        // toast("success","An email has been sent to you to reset your password.");
        dispatch(forgotPassword({email,setLoading}));
      }
    } else {
      setLoading(false);
      setValidationMessage(["This field is required"]);
    }
  };

//   useEffect(() => {
//     !loading
//       ? document.getElementById("preloader").classList.add("hidden")
//       : document.getElementById("preloader").classList.remove("hidden");
//   }, [loading]);

  return (
    <AuthLayout title={<>Welcome to GigSource</>}>
      <h3 className="dark:text-white text-center text-xl font-semibold text-gray-700">
        Reset password
      </h3>
      <p className="text-gray-700 dark:text-white text-center text-sm mt-2 mb-10">
        If you forgot your password, don't worry! we’ll email you <br />{" "}
        instructions to reset your password.
      </p>

      <form className="space-y-5">
        <div>
          <Input
            label={"Email"}
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={validationMessage}
          />
        </div>

        <PrimaryButton onClick={onSubmit} disabled={loading}>
          {loading && <Loader color={"white"} />}
          <span>Send Reset Link</span>
        </PrimaryButton>

        <p className="text-sm text-center">
          <Link href="/login">Back to Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
