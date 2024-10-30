const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourEmail@gmail.com', // replace with your email
    pass: 'yourEmailPassword' // replace with your email password or app-specific password
  }
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'hardhik2017@gmail.com', // replace with your email
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const nodemailer = require("nodemailer");

// exports.handler = async function (event, context) {
//   if (event.httpMethod !== "POST") {
//     return { statusCode: 405, body: "Method Not Allowed" };
//   }

//   const { name, email, message } = JSON.parse(event.body);

//   // Setup nodemailer transport
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_RECEIVER,
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return { statusCode: 200, body: "Message sent successfully" };
//   } catch (error) {
//     return { statusCode: 500, body: `Failed to send message: ${error}` };
//   }
// };
