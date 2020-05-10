const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
require('dotenv').config();

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { fullName, email, message } = req.body;

    const mailOptions = {
      from: `${fullName} <${email}>`,
      to: 'matheus.silvacardoso10@gmail.com',
      subject: 'Contato Matheus',
      html: `<p style="font-size: 16px; color: #222222;">${message}</p>
          <br />
          <footer>
          <p style="font-size: 14px; color: #222222;">Nome: ${fullName}</p>
          <br />
          <p style="font-size: 14px; color: #222222;">Email: ${email}</p>
          </footer>
      `,
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.status(200).send(info);
    });
  });
});
