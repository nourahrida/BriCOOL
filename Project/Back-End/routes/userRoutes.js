import express from "express";
import { signUp, signIn, verifyMail, verifyMailResend, forgotPassword, resetPassword, loginWithGoogle } from "../controllers/userController.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/verifyMail", verifyMail);
router.post("/verifyMailResend", verifyMailResend);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/loginWithGoogle", loginWithGoogle)

export default router;