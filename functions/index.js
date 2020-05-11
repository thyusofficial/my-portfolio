const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
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

const viewPath = path.resolve(__dirname, 'views', 'email');

transporter.use(
  'compile',
  hbs({
    viewEngine: {
      extname: '.hbs', // handlebars extension
      layoutsDir: viewPath, // location of handlebars templates
      defaultLayout: 'index', // name of main template
      partialsDir: viewPath, // location of your subtemplates aka. header, footer etc
    },
    viewPath,
    extName: '.hbs',
  })
);

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { fullName, email, message } = req.body;

    const mailOptions = {
      from: `${fullName} <${email}>`,
      to: 'matheus.silvacardoso10@gmail.com',
      subject: 'Contato Matheus',
      template: 'index',
      context: {
        name: fullName,
        email,
        message,
      },
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.status(200).send(info);
    });
  });
});
