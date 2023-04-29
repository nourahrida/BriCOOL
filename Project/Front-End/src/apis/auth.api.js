import API from "./index";

const path = "/user/";
export const signIn = (formData) => API.post(`${path}signIn`,formData);
export const signUp = (formData) => API.post(`${path}signUp`,formData);
export const verifyMail = (id) => API.post(`${path}verifyMail`,id);
export const verifyMailResend = (formData) => API.post(`${path}verifyMailResend`,formData);




//export const signWithGoogle = (formData) => API.post(`${"/user/signWithGoogle"}`,formData);