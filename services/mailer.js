const nodemailer = require("nodemailer");
const transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "3007",
  auth: {
    user: "adarashkd57@gmail.com",
    pass: "frkhgnhtbigqgnmw",
  },
});
const sendEmail = async (payload) => {
  const { from, to, message } = payload;
  const info = await transpoter.sendMail({
    from: from.toString(),
    to: to.toString(),
    subject: "Hello",
    text:"hello world",
    html:"<b> hello world</b>"
  });
  return info.messageId
};
module.exports={sendEmail}
