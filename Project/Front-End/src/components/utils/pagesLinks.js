import React,{lazy} from "react";
//link
export const page404 = "/page404";
export const loginPage = "/login";
export const homePage = "/";
export const registerPage = "/register";
export const forgotPassword = "/forgot-password";
export const verifyMail = "/verifyMail" ;
export const resetPassword = "/resetPassword";
// lazy loading
export const LazyPage404 = lazy(() => import("../pages/error/page404"));
export const LazyLoginPage = lazy(() => import("../pages/auth/login"));
export const LazyHomePage = lazy(() => import("../pages/home/home"));
export const LazyRegisterPage = lazy(() => import("../pages/auth/register"));
export const LazyForgotPassword = lazy(() => import("../pages/auth/forgotPassword"));
export const LazyVerifyMail = lazy(() => import("../pages/auth/VerifyMail"));
export const LazyResetPassword = lazy(() => import("../pages/auth/resetPassword"));