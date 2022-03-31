const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jayadarwade524@gmail.com",
    pass: "jaya@2001",
  },
});
var mailOptions = {
  from: "jayadarwade524@gmail.com",
  to: "tanu.kelde123@gmail.com",
  subject: "email verification",
  text: "jaya email verification done...",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) 
     console.log(error);
  else 
     console.log("Email send " + info.response);
});
