import express from "express";
import { signUp, signIn, verifyMail, verifyMailResend } from "../controllers/userController.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/verifyMail", verifyMail);
router.post("/verifyMailResend", verifyMailResend);

export default router;