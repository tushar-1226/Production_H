const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// verify connection configuration and log helpful hint on auth failure
transporter.verify().then(() => {
  console.log('Email transporter ready');
}).catch(err => {
  console.error('Email transporter failed to verify — check EMAIL_USER/EMAIL_PASS and Gmail app password / 2FA settings:', err.message || err);
});

module.exports = transporter;