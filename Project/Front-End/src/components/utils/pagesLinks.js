import React from "react";
//link
export const page404 = "/page404";
export const loginPage = "/login";
export const homePage = "/";
export const registerPage = "/register";
export const forgotPassword = "/forgot-password";
export const verifyMail = "/verifyMail" ;
export const resetPassword = "/resetPassword";
// lazy loading
export const LazyPage404 = React.lazy(() => import("../pages/error/page404"));
export const LazyLoginPage = React.lazy(() => import("../pages/auth/login"));
export const LazyHomePage = React.lazy(() => import("../pages/home/home"));
export const LazyRegisterPage = React.lazy(() => import("../pages/auth/register"));
export const LazyForgotPassword = React.lazy(() => import("../pages/auth/forgotPassword"));
export const LazyVerifyMail = React.lazy(() => import("../pages/auth/VerifyMail"));
export const LazyResetPassword = React.lazy(() => import("../pages/auth/resetPassword"));