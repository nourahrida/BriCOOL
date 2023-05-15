const templateVerifyMail = ({ customerName, verificationLink, logoName }) => {
  return `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>Verify your account</title>
            <style>
              *{
                color : black ;
              }
              body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                color: #444444;
                background-color: #f2f2f2;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #dddddd;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px #dddddd;
              }
              h1 {
                margin-top: 0;
                font-size: 28px;
                font-weight: bold;
                text-align: center;
                color: #212121;
              }
              p {
                margin-bottom: 20px;
              }
              .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #008CBA;
                color: #ffffff !important;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
              }
              .button:hover {
                background-color: #00698C;
              }
              .logo {
                text-align: center;
                margin-bottom: 20px;
              }
              .footer {
                background-color: #f2f2f2;
                color: #666666;
                padding: 10px;
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo">
                <img src="${logoName}" alt="${process.env.APP_NAME} logo" preserveAspectRatio="none" width="200" height="90" >
              </div>
              <h1>Verify Your Account</h1>
              <p>Dear <b>${customerName}</b>,</p>
              <p>Thank you for creating an account with us. We are excited to have you as a member of our community!</p>
              <p>To complete your registration, please click on the verification button below:</p>
              <a href="${verificationLink}" class="button">Verify Your Account</a>
              <p>If you did not create an account with us, please ignore this email.</p>
              <p>If you have any questions or concerns, please do not hesitate to contact us by replying to this email or by sending an email to ${process.env.APP_EMAIL}.</p>
              <p>Thank you for choosing ${process.env.APP_NAME} !</p>
            </div>
            <div class="footer">
              <p>This email was sent from ${process.env.APP_NAME}, located at Casablanca. To unsubscribe or update your email preferences, please <a href="${process.env.URL_WEB_SITE}">click here</a>.</p>
            </div>
          </body>
        </html>
        `;
};

const templateResetPassword = ({ customerName,verificationLink, logoName }) => {
  return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Forgot Password</title>
      <style>
      *{
        color : black ;
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #333;
          margin-top: 0;
        }
        
        p {
          color: #555;
          margin-bottom: 20px;
        }
        
        .btn {
          display: inline-block;
          background-color: #4caf50;
          color: #ffffff !important;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
        }
        
        .btn:hover {
          background-color: #45a049;
        }
      .footer {
          background-color: #f2f2f2;
          color: #666666;
          padding: 10px;
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
                  }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img src="${logoName}" alt="Logo" width="200" height="90">
        </div>
        <h2>Forgot Password</h2>
        <p>Hello ${customerName},</p>
        <p>You have requested to reset your password. Please click the button below to reset it.</p>
        <a class="btn" href="${verificationLink}">Reset Password</a>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Best regards,</p>
        <p>${process.env.APP_NAME} Team.</p>
      </div>
      <div class="footer">
         <p>This email was sent from ${process.env.APP_NAME}, located at Casablanca. To unsubscribe or update your email preferences, please <a href="${process.env.URL_WEB_SITE}">click here</a>.</p>
      </div>
    </body>
    </html>
    `;
};

const mailOption = (
  to,
  customerName,
  verificationLink,
  subject,
  templateName
) => {
  let html = "";

  switch (templateName) {
    case "templateVerifyMail":
      html = templateVerifyMail({
        customerName,
        verificationLink,
        logoName: "cid:logoGigSource",
      });
    case "templateResetPassword":
      html = templateResetPassword({
        customerName,
        verificationLink,
        logoName: "cid:logoGigSource",
      });
  }

  return {
    to: to,
    subject: subject, //"Confirm your account on GigSource",
    html: html,
    attachments: [
      {
        filename: "logoGigSource.png",
        path: "./attachments/logoGigSource-noBg.png",
        cid: "logoGigSource",
      },
    ],
  };
};

export default mailOption;
