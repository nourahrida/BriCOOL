import { AUTH, LOGOUT, MESSAGE } from "../constants/authType";

const auth = (state = { token: null ,message : ""}, action) => {
    switch (action.type) { 
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ token: action.data.token }));
            return { ...state, token: action?.data.token };
        case LOGOUT:
            localStorage.clear();
            return { ...state, token: null };
        case MESSAGE:
            return { ...state ,message: action?.data.message};
        default:
            return state;

    }
}
export default auth;