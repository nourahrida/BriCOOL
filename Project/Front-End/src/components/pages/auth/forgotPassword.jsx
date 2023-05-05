import React, { useState } from "react";

import { PrimaryButton } from "../../controls/buttons";
import { Input } from "../../controls/field";
import { Link, Loader } from "../../utils/utils";
import { toast } from "../../helpers/toast";
import AuthLayout from "../../layouts/authLayout.jsx";

const ForgotPassword = () => {
    const [validationMessage, setValidationMessage] = useState([]);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (email) {
                if (
                    email &&
                    (email.indexOf("@") === -1 ||
                        email.indexOf("@") !== email.lastIndexOf("@"))
                ) {
                    setValidationMessage(["email is not valid"]);
                    toast("error", "Failed to reload account");
                } else {
                    toast(
                        "success",
                        "An email has been sent to you to reset your password."
                    );
                    setEmail("");
                    setValidationMessage([]);
                }
            } else {
                toast("error", "Failed to reload account");
                setValidationMessage(["This field is required"]);
            }
        }, 3000);
    };

    return (
        <AuthLayout
            title={
                <>
                     Welcome to GigSource
                </>
            }
        >
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
