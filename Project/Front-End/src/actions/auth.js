import * as API from "../apis/auth.api";
import { AUTH } from "../constants/authType";
import { toast } from "../components/helpers/toast";
import { encrypt } from "../encryptDecrypt";
import { homePage, loginPage } from "../components/utils/pagesLinks";

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
            navigate(loginPage);
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
            navigate(homePage);
        }

    } catch (err) {
        setLoading(false);
        console.log(err);
    }
};

export const verifyMailResend = ({ id, email }, setLoadingPage) => async (dispatch) => {
    try {
        const { status, data } = await API.verifyMailResend({ id, email });

        status === 200 ?
            toast("success", data.message) :
            toast("error", data.message)

        setLoadingPage(false);
    } catch (err) {
        setLoadingPage(false);
        console.log(err);
    }
};

export const verifyMail = async (id, setMessage) => {
    try {
        const { data } = await API.verifyMail({ id: id });

        setMessage(data.message);

    } catch (err) {
        console.log(err);
    }
};

export const forgotPassword = ({ email, setLoading }) => async (dispatch) => {
    try {
        const { data, status } = await API.forgotPassword(email);

        setLoading(false);

        status === 200 ?
            toast("success", data.message) :
            toast("error", data.message)


    } catch (err) {
        setLoading(false);
        console.log(err);
    }
};

export const resetPassword = ({ id, password, setLoading, navigate }) => async (dispatch) => {
    try {
        const { data, status } = await API.resetPassword(id, password);

        setLoading(false);

        if (status === 200) {
            toast("success", data.message);
            navigate(loginPage)
        } else toast("error", data.message)

    } catch (err) {
        setLoading(false);
        console.log(err);
    }
};

export const loginWithGoogle = (formData, loadingG, navigate) => async (dispatch) => {
    try {
        const { data } = await API.loginWithGoogle(formData);

        if (data?.message) {
            toast("error", data.message);
            loadingG(false);
        } else {
            await dispatch({ type: AUTH, data })
            toast("success", "Successful connection");
            loadingG(false);
            navigate(homePage);
        }


    } catch (err) {
        loadingG(false);
        console.log(err);
    }
}