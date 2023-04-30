import User from "../modules/users.js";
// import bcrypt from "bcryptjs";
import { encrypt, IsMatch } from "../classes/encryptDecrypt.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../classes/mail.js";
import mailOption from "../classes/mailOption.js";
import mongoose from "mongoose";

export const signUp = async (req, res) => {
    try {
        const { email, password, phoneNumber, cPassword } = req.body;
        //400 bad request

        if (!email || !password || !phoneNumber || !cPassword) return res.status(202).json({ message: "Please complete your information" });

        if (!(cPassword === password)) return res.status(202).json({ message: "Passwords do not match" });

        const condition = {
            $and: [
                { $exists: { fromGoogle: false } },
                { $or: [{ email: email }, { phoneNumber: phoneNumber }] }
            ]
        };

        const ifUserExist = (await User.find(condition).count() || 0) === 0 ? false : true;

        if (ifUserExist) return res.status(202).json({ message: "This mail or phone number is already registered, try to login" });

        const CryptData = {
            email: email,
            password: await encrypt(password), //await bcrypt.hash(password, config.cryptBase),
            phoneNumber: phoneNumber,
        };

        const user = new User(CryptData);

        await user.save();

        const token = jwt.sign({ email: email, id: user._id, phoneNumber: phoneNumber, password: CryptData.password }, "user", { expiresIn: "8h" });

        const verificationLink = process.env.URL_WEB_SITE + "/verifyMail?id=" + user._id;

        await sendMail(mailOption(email, email.split("@")[0], verificationLink));

        res.status(200).json({ token: token });

    } catch (error) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
};

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(202).json({ message: "Please complete your information" });

        const condition = {
            $and: [
                { $exists: { fromGoogle: false } },
                { email: email }
            ]
        }

        const existingUser = await User.findOne(condition);

        if (!existingUser) return res.status(202).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await IsMatch(existingUser.password, password);//await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(202).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, phoneNumber: existingUser.phoneNumber, verifiedEmail: existingUser.verifiedEmail, islogin: true }, "user", { expiresIn: "8h" });

        if (!existingUser.verifiedEmail) return res.status(202).json({ message: "Please verify your email.", token: token });

        await User.findByIdAndUpdate(existingUser._id, { lastConnectionDate: Date.now() });

        res.status(200).json({ token: token });

    } catch (error) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
};

export const verifyMail = async (req, res) => {
    try {
        const { id } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(202).json({ message: "This user is not found !" });
        
        const condition = {
            $and: [
                { $exists: { fromGoogle: false } },
                { _id: id },
                { verifiedEmail: true }
            ]
        }

        const existingUser = await User.findOne(condition);

        if (existingUser) return res.status(202).json({ message: "Your gmail account already activated." });

        await User.findByIdAndUpdate(id, { verifiedEmail: true });

        res.status(200).json({ message: "Your gmail account has been successfully activated." });

    } catch (error) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
};

export const verifyMailResend = async (req, res) => {
    try {

        const { id, email } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(202).json({ message: "This user is not found !" });

        const verificationLink = process.env.URL_WEB_SITE + "/verifyMail?id=" + id;

        await sendMail(mailOption(email, email.split("@")[0], verificationLink));

        res.status(200).json({ message: "Email sent successfully." });

    } catch (error) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
};

export const ForgotPassword = async (req,res) => {
    try {
       const { email } = req.body;

    } catch (err) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
}