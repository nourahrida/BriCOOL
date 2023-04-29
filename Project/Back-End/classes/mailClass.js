import nodemailer from 'nodemailer';

export const sendMail = async (_mail_option) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER ,
            pass: process.env.MAIL_PASS
        }
    })
    const mail_option = { ..._mail_option, from: process.env.MAIL_USER  };
    // {
    //     from: 'FreeLancer Morocco',
    //     to: 'animatricessiaap@gmail.com',
    //     subject: 'test',
    //     text: 'test text',
    //html
    // }

    const result = await transport.sendMail(mail_option);
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