import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../controls/buttons";
import { Checkbox, Input } from "../../controls/field";
import { Link, Loader } from "../../utils/utils";
import { toast } from "../../helpers/toast";
import AuthLayout from "../../layouts/authLayout";

const Register = () => {
    const navigate = useNavigate();
    const defaultMessage = {
        email: [],
        password: [],
        telephone: [],
        confirmationPassword : [],
        agreetermsAndConditions : []
    };
    
    const [loading, setLoading] = useState(false);
    const [telephone, setTelephone] = useState("");
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [email, setEmail] = useState("");
    const [confirmationPassword,setConfirmationPassword] = useState("");
    const [password, setPassword] = useState("");
    const [agreetermsAndConditions, setAgreetermsAndConditions] = useState(false);
    const userSchema = {
        telephone:telephone,
        email:email,
        password:password
    }
    const register = () => {
        setLoading(true);
        setTimeout(async () => {
            const newErrorMessage = defaultMessage;
            if (!email) {
                newErrorMessage.email = ["This field is required"];
            }
            if (!password) {
                newErrorMessage.password = ["This field is required"];
            }

            if (!telephone) {
                newErrorMessage.telephone = ["This field is required"];
            }

            if (!confirmationPassword){
                newErrorMessage.confirmationPassword = ["This field is required"];
            }

            if ( password !== confirmationPassword){
                newErrorMessage.confirmationPassword = ["Passwords do not match"];
            }

            if (telephone.length !== 10) {
                newErrorMessage.telephone = ["Phone number not valide"];
            }

            if ( (email) && ((email.indexOf("@") === -1) || (email.indexOf("@") !== email.lastIndexOf("@"))) ) {
                newErrorMessage.email = ["email is not valid"];
            }

           
            if (email && telephone && password && (password === confirmationPassword)) {
                if(!agreetermsAndConditions){
                    toast("error", "Agree to Terms and Conditions First");
                }else{
                    await localStorage.setItem("userInfoLogin",JSON.stringify(userSchema))
                    toast("success", "Successful registration");
                    navigate("/login");
                }
            }
            else {
                toast("error", "Failed registration");
            }
            setErrorMessage(defaultMessage);
            setLoading(false);
        }, 2000);
    };

    return (
        <AuthLayout
            title={
                <>
                     Welcome to GigSource 
                </>
            }
        >
            <h3 className="text-center text-xl font-semibold text-gray-700">Create New Account</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Use your remail email continue with Nioboard (it's free)!
            </p>

            <form className="space-y-4">
                

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

                <div>
                    <Input
                        label={"Confirmation password"}
                        id="confirmation_password"
                        type="password"
                        placeholder="Enter password"
                        value={confirmationPassword}
                        onChange={e => setConfirmationPassword(e.target.value)}
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
                        onChange={e => setTelephone(e.target.value)}
                        error={errorMessage.telephone}
                    />
                </div>

                <div>
                    <Checkbox 
                    id="agreetermsAndConditions" 
                    terms_and_conditions 
                    onChangeFunction={ (event) => setAgreetermsAndConditions(event.target.checked)}
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
};

export default Register;
