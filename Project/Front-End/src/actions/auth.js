import * as API from "../apis/auth.api";
import { MESSAGE, AUTH } from "../constants/authType";
import { toast } from "../components/helpers/toast";
import { encrypt } from "../encryptDecrypt";

export const signUp = (formData, navigate, setLoading) => async (dispatch) => {
    try {
        const { data } = await API.signUp(formData);

        if (data?.message) {
            // await dispatch({ type: MESSAGE, data });
            toast("error", data.message);
            setLoading(false);
        }
        else {
            await dispatch({ type: AUTH, data });
            toast("success", "Successful registration");
            setLoading(false);
            navigate("/login");
        }

    } catch (err) {
        setLoading(false);
        console.log(err);
    }
}

export const login = (formData, navigate, setLoading, setInvalid) => async (dispatch) => {
    try {
        formData = { ...formData, password: encrypt(formData.password) }

        const { data } = await API.signIn(formData); // { email, password } 

        if (data?.message && data?.token) {
            await dispatch({ type: AUTH, data });
            setInvalid({ message: data?.message, invalid: true, VerifyMail: true });
            setLoading(false);
        }
        else if (data?.message) {
            //await dispatch({ type: MESSAGE, data });
            setInvalid({ message: data?.message, invalid: true });
            //toast("error", data.message);
        }
        else {
            await dispatch({ type: AUTH, data });
            toast("success", "Successful connection");
            setLoading(false);
            navigate("/");
        }

    } catch (err) {
        setLoading(false);
        console.log(err);
    }
};

export const verifyMailResend = ({ id, email }, setLoadingPage) => async (dispatch) => {
    try {
        const { status, data } = await API.verifyMailResend({ id, email });

        status === 200 ? toast("success", data.message) : toast("error", data.message)

        setLoadingPage(false);
    } catch (err) {
        setLoadingPage(false);
        console.log(err);
    }
}

export const verifyMail = (id, setMessage) => async () => {
    try {
        const { data } = await API.verifyMail({ id: id });

        setMessage(data.message);

    } catch (err) {
        console.log(err);
    }
}

export const ForgotPassword = () => async (dispatch) => {
    try {
       

    } catch (err) {
        console.log(err);
    }
}