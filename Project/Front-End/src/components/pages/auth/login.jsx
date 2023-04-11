import React, { useState ,useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Checkbox as CH2 } from "@material-tailwind/react";
import { PrimaryButton, SecondaryButton } from "../../controls/buttons";
import { Checkbox, Input } from "../../controls/field";
import { Link, Loader ,PageAnimation} from "../../utils/utils";
import  useLocalStorage  from "../../helpers/useLocalStorage";
import { toast } from "../../helpers/toast";
import AuthLayout from "../../layouts/authLayout";

const Login = () => {
    const navigate = useNavigate();
    const dataFromRegister =  JSON.parse(localStorage.getItem("userInfoLogin"));
    const defaultMessage = {
        email: [],
        password: []
    };
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [email, setEmail] = useState(dataFromRegister?.email);
    const [password, setPassword] = useState(dataFromRegister?.password);
    //console.table(user);
    const login = () => {
        setLoading(true);
        setTimeout(() => {
            toast("success", "Successful connection");
            setLoading(false);
        }, 2000);
        
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
        <PageAnimation >


        <AuthLayout
            title={
                <>
                     Welcome to GigSource 
                </>
            }
        >
           
            <h3 className="text-center text-xl font-semibold text-gray-700">Login to Account</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Please sign-in to your account and start the adventure.
            </p>

            {invalid && (
                <div className="my-2 text-center text-red-600 bg-red-100 py-2 rounded-md">
                    Invalid email or password
                </div>
            )}

            <form className="space-y-5">
                <div>
                    <Input
                        label={"Email"}
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
                        error={errorMessage.password}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Checkbox id="remember" label="Remember Me" />
                    {/* <CH2 label="Remember Me" id="remember"  /> */}
                    <Link href="/forgot-password">Forgot Password?</Link>
                </div>

                <PrimaryButton onClick={login} disabled={loading}>
                    {loading && <Loader color={"white"} />}
                    <span>Login to account</span>
                </PrimaryButton>

                <div className="flex items-center justify-center space-x-3">
                    <hr className="w-12" />
                    <span className="font-bold uppercase text-xs text-gray-400">Or</span>
                    <hr className="w-12" />
                </div>

                <div className="flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold">
                    <SecondaryButton as="a" href="#auth-google">
                        <FcGoogle className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5" />

                        <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
                            Continue with Google
                        </span>
                    </SecondaryButton>

                    <SecondaryButton as="a" href="#auth-facebook">
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
          

        </AuthLayout></PageAnimation>
    );
};

export default Login;
