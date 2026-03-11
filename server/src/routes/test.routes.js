const express = require("express")
const sendEmail =  require("../utils/sendEmail.js");

const router = express.Router();

router.get("/send-test", async (req, res) => {

  await sendEmail(
    "chakrawalharshit@gmail.com",
    "Test Email",
    "Your Liquid website email system is working!"
  );

  res.send("Email sent!");
});

module.exports = router