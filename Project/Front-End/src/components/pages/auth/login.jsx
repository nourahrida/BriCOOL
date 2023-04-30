import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../controls/buttons";
import { Checkbox, Input } from "../../controls/field";
import { Link, Loader } from "../../utils/utils";
import AuthLayout from "../../layouts/authLayout";
import decode from "jwt-decode";
import { login, verifyMailResend } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import { decrypt } from "../../../encryptDecrypt";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var dataFromRegister = localStorage.getItem("profile");
  dataFromRegister = dataFromRegister && decode(dataFromRegister);
  const defaultMessage = {
    email: [],
    password: [],
  };
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState({
    message: "",
    invalid: false,
    VerifyMail: false,
  });
  const [loadingPage, setLoadingPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultMessage);
  const [email, setEmail] = useState(dataFromRegister?.email || "");
  const [password, setPassword] = useState(
    dataFromRegister?.password ? decrypt(dataFromRegister?.password) : ""
  );

  useEffect(() => {
      if (dataFromRegister?.verifiedEmail){
        navigate("/");
      }
  }, [dataFromRegister]);

  useEffect(() => {
    !loadingPage ?
            document.getElementById("preloader").classList.add("hidden") :
            document.getElementById("preloader").classList.remove("hidden") ;
  }, [loadingPage]);

  const handleClickResend = () => {
    setLoadingPage(true);
    dispatch(
      verifyMailResend(
        {
          id: dataFromRegister.id,
          email: dataFromRegister.email,
        },
        setLoadingPage
      )
    );
  };

  const handlelogin = async () => {
    setInvalid({ message: "", invalid: false });
    setErrorMessage(defaultMessage);
    setLoading(true);
    const newErrorMessage = Object.assign({}, defaultMessage);
    if (!email) {
      newErrorMessage.email = ["This field is required"];
    }
    if (!password) {
      newErrorMessage.password = ["This field is required"];
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
      await dispatch(
        login({ email, password }, navigate, setLoading, setInvalid)
      );

      setLoading(false);
    } else {
      setErrorMessage(newErrorMessage);
      setLoading(false);
    }

    // setTimeout(() => {
    //     const newErrorMessage = defaultMessage;
    //     if (!email) {
    //         newErrorMessage.email = ["This field is required"];
    //     }
    //     if (!password) {
    //         newErrorMessage.password = ["This field is required"];
    //     }

    //     if (
    //         email === (process.env.REACT_APP_LOGIN || "paydunya@gmail.com") &&
    //         password === (process.env.REACT_APP_PASSWORD || "12345")
    //     ) {
    //         setInvalid(true);
    //         toast("success", "Successful connection");
    //         config.AUTH.DRIVER.setItem("user", {
    //             name: "Paydunya",
    //             permissions: ["reload-account", "dashboard", "transfer-money"]
    //         });
    //         navigate(config.AUTH.REDIRECT_LOGIN);
    //     }

    //     if (!email || !password || email !== "paydunya@gmail.com" || password !== "12345") {
    //         if (
    //             email !== process.env.REACT_APP_LOGIN ||
    //             password !== process.env.REACT_APP_PASSWORD
    //         ) {
    //             setInvalid(true);
    //         } else {
    //             setInvalid(false);
    //         }
    //         toast("error", "Connection failed");
    //     }

    //     setErrorMessage(newErrorMessage);
    //     setLoading(false);
    // }, 3000);
  };

  return (
    <AuthLayout title={<>Welcome to GigSource</>}>
      <h3 className="dark:text-white text-center text-xl font-semibold text-gray-700">
        Login to Account
      </h3>
      <p className="text-gray-700 dark:text-white text-center text-sm mt-2 mb-10">
        Please sign-in to your account and start the adventure.
      </p>

      {invalid.invalid && (
        <div className="my-2 text-center text-red-600 bg-red-200 py-2 rounded-md">
          {invalid.message}{" "}
          {invalid.VerifyMail && (
            <button
              type="button"
              className="transition-all text-sm text-indigo-600 hover:text-indigo-700"
              onClick={handleClickResend}
            >
              Resend ?
            </button>
          )}
        </div>
      )}

      <form className="text-gray-700 dark:text-white space-y-5">
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

        <div className="flex items-center justify-between">
          <Checkbox id="remember" label="Remember Me" />
          {/* <CH2 label="Remember Me" id="remember"  /> */}
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>

        <PrimaryButton onClick={handlelogin} disabled={loading}>
          {loading && <Loader color={"white"} />}
          <span>Login to account</span>
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
          Don't have an account? <Link href="/register">Register</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
