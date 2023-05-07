import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthLayout from "../../layouts/authLayout";
import { Input } from "../../controls/field";
import { PrimaryButton } from "../../controls/buttons";
import { Link, Loader } from "../../utils/utils";
import decode from "jwt-decode";
import { homePage, loginPage } from "../../utils/pagesLinks";
import config from "../../../configs/config";
import { toast } from "../../helpers/toast";
import { resetPassword } from "../../../actions/auth";
function useQuery() {
  return new URLSearchParams(useLocation().search); // search for get all query from url
}

function ResetPassword() {
  const defaultMessage = {
    password: [],
    cpassword: [],
  };
  const Query = useQuery();
  const token = Query.get("token");
  const navigate = useNavigate();
  const [id, setId] = useState();
  useEffect(() => {
    if (token === null) navigate(homePage);
    try {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()){
        toast("error", "This link has expired !");
        navigate(homePage);
      }
      else setId(decodeToken.id);
    } catch (error) {
      toast("error", "Url is not valide, Please try again !");
      navigate(homePage);
    }
  }, [token]);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultMessage);
  const onSubmit = () => {
    setLoading(true);
    const newErrorMessage = Object.assign({}, defaultMessage);
    if (!password) {
      newErrorMessage.password = ["This field is required"];
    }
    if (!cpassword) {
      newErrorMessage.cpassword = ["This field is required"];
    }
    if (password && cpassword && password !== cpassword) {
      newErrorMessage.cpassword = ["Passwords do not match"];
    }
    const isAllFieldsEmpty = Object.values(newErrorMessage).every(
      (field) => field.length === 0
    );

    if (isAllFieldsEmpty) dispatch(resetPassword({ id,password, setLoading, navigate }));
    else {
      setErrorMessage(newErrorMessage);
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   message ?
  //           document.getElementById("preloader").classList.add("hidden") :
  //           document.getElementById("preloader").classList.remove("hidden") ;
  // }, [message]);
  return (
    <>
      <AuthLayout title={<>Welcome to {config.APP_NAME}</>}>
        <h3 className="dark:text-white text-center text-xl font-semibold text-gray-700">
          Reset password
        </h3>
        <p className="text-gray-700 dark:text-white text-center text-sm mt-2 mb-10">
          {/* If you forgot your password, don't worry! we’ll email you <br />{" "}
          instructions to reset your password. */}
        </p>

        <form className="space-y-5">
          <div>
            <Input
              label={"New Password"}
              id="Password"
              type="Password"
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              error={errorMessage.password}
            />
          </div>
          <div>
            <Input
              label={"Re-type Password"}
              id="Cpassword"
              type="Password"
              placeholder="Re-type Password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              error={errorMessage.cpassword}
            />
          </div>

          <PrimaryButton onClick={onSubmit} disabled={loading}>
            {loading && <Loader color={"white"} />}
            <span>Submit</span>
          </PrimaryButton>

          <p className="text-sm text-center">
            <Link href={loginPage}>Back to Login</Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
}

export default ResetPassword;
