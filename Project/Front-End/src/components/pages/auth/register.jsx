import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../controls/buttons";
import { Checkbox, Input } from "../../controls/field";
import { Link, Loader } from "../../utils/utils";
import { toast } from "../../helpers/toast";
import AuthLayout from "../../layouts/authLayout";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../actions/auth";
import { decrypt } from "../../../encryptDecrypt";
import decode from "jwt-decode";

function Register() {
  const dispatch = useDispatch();
  var userData = localStorage.getItem("profile");
  userData = userData && decode(userData);
  //const test = localStorage.getItem("profile");
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.verifiedEmail){
      navigate("/");
    }
}, [userData]);

  //   useEffect(() => {
  //     if (auth.message) toast("error", auth.message);
  //     else if (auth.token) {
  //       toast("success", "Successful registration");
  //       navigate("/login");
  //     }
  //   }, [auth]);

  const defaultMessage = {
    email: [],
    password: [],
    telephone: [],
    confirmationPassword: [],
    agreetermsAndConditions: [],
  };

  const [loading, setLoading] = useState(false);
  const [telephone, setTelephone] = useState("");
  const [errorMessage, setErrorMessage] = useState(defaultMessage);
  const [email, setEmail] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [password, setPassword] = useState("");
  const [agreetermsAndConditions, setAgreetermsAndConditions] = useState(false);
//   useEffect(() => {
 
  
//         console.log(agreetermsAndConditions);
 
//   }, [agreetermsAndConditions]);

  const userSchema = {
    phoneNumber: telephone,
    email: email,
    password: password,
    cPassword: confirmationPassword,
  };

  const register = (e) => {
    setLoading(true);

    const newErrorMessage = Object.assign({}, defaultMessage);
    if (!email) {
      newErrorMessage.email = ["This field is required"];
    }
    if (!password) {
      newErrorMessage.password = ["This field is required"];
    }

    if (!telephone) {
      newErrorMessage.telephone = ["This field is required"];
    }

    if (!confirmationPassword) {
      newErrorMessage.confirmationPassword = ["This field is required"];
    }

    if (password !== confirmationPassword) {
      newErrorMessage.confirmationPassword = ["Passwords do not match"];
    }

    if (telephone.length !== 10) {
      newErrorMessage.telephone = ["Phone number not valide"];
    }

    if (
      email &&
      (email.indexOf("@") === -1 ||
        email.indexOf("@") !== email.lastIndexOf("@"))
    ) {
      newErrorMessage.email = ["email is not valid"];
    }

    const isAllFieldsEmpty = Object.values(newErrorMessage).every(
      (field) => field.length === 0
    );

    if (isAllFieldsEmpty) {
      if (!agreetermsAndConditions) {
        toast("error", "Agree to Terms and Conditions First");
        setLoading(false);
      } else {
        dispatch(signUp(userSchema,navigate,setLoading));
        // await localStorage.setItem("userInfoLogin",JSON.stringify(userSchema))
        //toast("success", "Successful registration");
        // navigate("/login");
        //console.log(auth);
      }
    } else {
      toast("error", "Failed registration");
      setLoading(false);
    }
    setErrorMessage(newErrorMessage);
    //setLoading(false);
  };

  
  return (
    <AuthLayout title={<>Welcome to GigSource</>}>
      <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white">
        Create New Account
      </h3>
      <p className="text-center text-gray-700 text-sm mt-2 mb-10 dark:text-white">
        Use your remail email continue with Nioboard (it's free)!
      </p>

      <form className="space-y-4 text-gray-700 dark:text-white">
        <div>
          <Input
            label={"Email"}
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errorMessage.email}
          />
        </div>

        <div>
          <Input
            label={"Password"}
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorMessage.password}
          />
        </div>

        <div>
          <Input
            label={"Re-type Password"}
            id="confirmation_password"
            type="password"
            placeholder="Enter password"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
            error={errorMessage.confirmationPassword}
          />
        </div>

        <div>
          <Input
            label={"Phone number"}
            id="phone_number"
            type="number"
            placeholder="Enter phone number"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            error={errorMessage.telephone}
          />
        </div>

        <div>
          <Checkbox
            id="agreetermsAndConditions"
            terms_and_conditions
            setAgreetermsAndConditions = {setAgreetermsAndConditions}
            agreetermsAndConditions = {agreetermsAndConditions}
    
            label="I agree to privacy policy & terms"
          />
        </div>

        <PrimaryButton onClick={register}>
          {loading && <Loader color={"white"} />}
          <span>Sign up</span>
        </PrimaryButton>

        <div className="flex items-center justify-center space-x-3">
          <hr className="w-12" />
          <span className="font-bold uppercase text-xs text-gray-400">Or</span>
          <hr className="w-12" />
        </div>

        <div className="lg:flex xl:flex 2xl:flex md:flex items-center 2xl:space-x-4 md:space-x-2 lg:space-x-2 xl:space-x-4 text-sm font-semibold sm:inline">
          <SecondaryButton as="a" href="#auth-google" cStyle="!mb-2">
            <FcGoogle className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5" />

            <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
              Continue with Google
            </span>
          </SecondaryButton>

          <SecondaryButton as="a" href="#auth-facebook" cStyle="!mb-2">
            <RiFacebookCircleFill className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600" />

            <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
              Continue with Facebook
            </span>
          </SecondaryButton>
        </div>

        <p className="text-sm text-center">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;
