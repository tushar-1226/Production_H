import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";

const OtpVerify = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // protect route
  if (!location.state) {
    navigate("/auth");
  }

  const { email, userName, password } = location.state;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (element, index) => {

    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;

    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleBackspace = (e, index) => {

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }

  };

  const verifyOtp = async () => {

    const finalOtp = otp.join("");

    try {

      const res = await axios.post("/auth/verify-otp", {
        email,
        userName,
        password,
        otp: finalOtp
      });

      localStorage.setItem("token", res.data.token);

      navigate("/shop");

    } catch (error) {

      alert(error.response?.data?.message || "Invalid OTP");

    }

  };

  const resendOtp = async () => {

    try {

      await axios.post("/auth/send-otp", { email });

      alert("OTP resent!");

    } catch (error) {

      alert("Error sending OTP");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#eaf6f6]">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">

        <h2 className="text-2xl font-semibold mb-2">
          Enter OTP
        </h2>

        <p className="text-gray-500 mb-6">
          Please enter the 6-digit code sent to
          <br />
          <strong>{email}</strong>
        </p>

        <div className="flex justify-center gap-3 mb-6">

          {otp.map((data, index) => (

            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="w-12 h-12 border text-center text-xl rounded-lg focus:ring-2 focus:ring-blue-500"
            />

          ))}

        </div>

        <button
          onClick={verifyOtp}
          className="w-full bg-[#06283D] text-white py-2.5 rounded-lg mb-4"
        >
          Continue
        </button>

        <p className="text-sm text-gray-500">

          Didn’t receive the code?{" "}

          <button
            onClick={resendOtp}
            className="text-blue-600 underline"
          >
            Click to resend
          </button>

        </p>

      </div>

    </div>
  );
};

export default OtpVerify;