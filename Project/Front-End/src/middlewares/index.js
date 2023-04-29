import { Navigate } from "react-router-dom";
import decode from "jwt-decode";

export const IsAuth = ({ children }) => {
    let userData = localStorage.getItem("profile");

    userData = userData && decode(userData);

    return (userData?.verifiedEmail &&  userData?.islogin) ? <Navigate to="/" /> : children ;
};
