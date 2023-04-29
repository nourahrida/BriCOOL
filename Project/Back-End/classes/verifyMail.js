const templateVerifyMail = ({ customerName, verificationLink, logoName }) => {
  return (
    `<!DOCTYPE html>
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
                <img src="${logoName}" alt="GigSource logo" preserveAspectRatio="none" width="200" height="90" >
              </div>
              <h1>Verify Your Account</h1>
              <p>Dear <b>${customerName}</b>,</p>
              <p>Thank you for creating an account with us. We are excited to have you as a member of our community!</p>
              <p>To complete your registration, please click on the verification button below:</p>
              <a href="${verificationLink}" class="button">Verify Your Account</a>
              <p>If you did not create an account with us, please ignore this email.</p>
              <p>If you have any questions or concerns, please do not hesitate to contact us by replying to this email or by sending an email to GigSource@gmail.com.</p>
              <p>Thank you for choosing GigSource !</p>
            </div>
            <div class="footer">
              <p>This email was sent from GigSource, located at Casablanca. To unsubscribe or update your email preferences, please <a href="${process.env.URL_WEB_SITE}">click here</a>.</p>
            </div>
          </body>
        </html>
        `
  )
};

const mailOption = (to, customerName, verificationLink) => {
  return {
    to: to,
    subject: "Confirm your account on GigSource",
    html: templateVerifyMail({ customerName, verificationLink, logoName: "cid:logoGigSource" }),
    attachments: [
      {
        filename: 'logoGigSource.png',
        path: './attachments/logoGigSource-noBg.png',
        cid: 'logoGigSource'
      }
    ]
  };
};

export default mailOption;