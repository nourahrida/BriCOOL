import nodemailer from 'nodemailer';
import dotenv from "dotenv";

export const sendMail = async (req, res) => {
    var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER ,
            pass: process.env.MAIL_PASS
        }
    })
    const mail_option = {
        from: 'FreeLancer Morocco',
        to: 'animatricessiaap@gmail.com',
        subject: 'test',
        text: 'test text',
    }
    const result = await transport.sendMail(mail_option);
    res.status(200).json({ message: result });
    // return Promise((resolve, reject) => {
    //     var transport = nodemailer.createTransport({
    //         service,
    //         auth : {
    //             use : '',
    //             pass : ''
    //         }
    //     })
    //     const mail_option = {
    //         from:'',
    //         to:'',
    //         subject:'',
    //         text:'',
    //     }
    //     transport.sendMail(mail_option,(err,info) => {
    //         if (err) return reject(err);
    //         else return resolve(info);
    //     }) 
    // })
}