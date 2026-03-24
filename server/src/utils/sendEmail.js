const transporter = require("../config/email");

const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `Liquid <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });

    console.log("Email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.error("Email error:", error);
    // rethrow so callers (controllers) can handle failing sends
    throw error;
  }
};

module.exports = sendEmail;