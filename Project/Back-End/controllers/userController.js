import User from "../modules/users.js";
// import bcrypt from "bcryptjs";
import { decrypt, encrypt, IsMatch } from "../classes/encryptDecrypt.js";
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

        await sendMail(mailOption(email, email.split("@")[0], verificationLink, `Confirm your account on ${process.env.APP_NAME}`, "templateVerifyMail"));

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

        if (existingUser) return res.status(202).json({ message: `Your gmail account already activated. Login to your ${process.env.APP_NAME} account` });

        await User.findByIdAndUpdate(id, { verifiedEmail: true });

        res.status(200).json({ message: `Your gmail account has been successfully activated. Login to your ${process.env.APP_NAME} account` });

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

        await sendMail(mailOption(email, email.split("@")[0], verificationLink, `Confirm your account on ${process.env.APP_NAME}`, "templateVerifyMail"));

        res.status(200).json({ message: "Email sent successfully." });

    } catch (error) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
};

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const condition = {
            $and: [
                { $exists: { fromGoogle: false } },
                { email: email }
            ]
        };

        const options = { email: 1, lastName: 1, firstName: 1 };

        const existingUser = await User.findOne(condition, options);

        if (!existingUser) return res.status(202).json({ message: "email adresse doesn't exist." });

        const token = jwt.sign({
            id: encrypt(existingUser._id)
        }, "tokenResetPassword", { expiresIn: "1h" });

        const verificationLink = process.env.URL_WEB_SITE + "/resetPassword?token=" + token;

        await sendMail(mailOption(existingUser.email, (existingUser?.lastName && existingUser?.firstName ? `${existingUser?.lastName} ${existingUser?.firstName}` : email.split("@")[0]), verificationLink, `Reset your password on ${process.env.APP_NAME}`, "templateVerifyMail"));

        res.status(200).json({ message: "Email sent successfully." });

    } catch (err) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(err);
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { id, newPassword } = req.body;

        if (!id) return res.status(202).json({ message: "This link is not valide. Please tyr again." });

        if (!newPassword) return res.status(202).json({ message: "The password is empty!" });

        const decryptId = decrypt(id);

        // const existingUser = await User.findOne({_id : decryptId});

        // if (!existingUser) return res.status(202).json({ message: "This user is not found !" });

        if (!mongoose.mongoose.Types.ObjectId.isValid(decryptId)) return res.status(202).json({ message: "This user is not found !" });

        await User.updateOne({ _id: decryptId }, { password: encrypt(newPassword) });

        res.status(200).json({ message: "The password changed successfully." });

    } catch (err) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(err);
    }
};

export const loginWithGoogle = async (req, res) => {
    try {
        const { email, familyName, givenName, googleId, imageUrl } = req.body;

        if (!email || !googleId) return res.status(202).json({ message: "Error server. please try again !" });

        const condition = {
            $and: [
                { $exists: { fromGoogle: true } },
                { email: email }
            ]
        };

        const user = await User.findOne(condition);

        let token = null;

        if (user) {
            // generate token for user
            await User.findByIdAndUpdate(user._id, { lastConnectionDate: Date.now() });
            token = jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.image,
                    islogin: true,
                    verifiedEmail: true,
                }, "user", { expiresIn: "8h" });
        } else {
            // create user and genereate token 
            const data = {
                email: email,
                firstName: givenName,
                lastName: familyName,
                googleId: googleId,
                image: imageUrl,
                verifiedEmail: true,

            };

            const user = new User(data);

            await user.save();

            token = jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.image,
                    verifiedEmail: true,
                    islogin: true
                }, "user", { expiresIn: "8h" });
        }

        res.status(200).json({ token: token });

    } catch (error) {
        res.status(202).json({ message: "Error server, please try again." });
        console.log(error);
    }
};