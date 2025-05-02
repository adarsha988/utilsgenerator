const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587 ,
  secure: false,
  auth: {
    user: "adarashkd57@gmail.com",
    pass: "deej ggzw wsjv vmhs",
  },
});
const sendEmail = async ({value,QrData}) => {
  
  const base64Image = QrData.qr.split("base64,")[1];

  const info = await transporter.sendMail({
    from: "adarashkd57@gmail.com",
    to: value,
    subject: "Your QR Code",
    html: `
      <p>Here is your QR Code:</p>
      <img src="cid:qrcode@cid" style="width: 300px; height: 300px;" />
    `,
    attachments: [
      {
        filename: "qrcode.png",
        content: base64Image,
        encoding: "base64",
        cid: "qrcode@cid", // referenced in the HTML
      },
    ],
  });
  return info.messageId
};
module.exports={sendEmail}
