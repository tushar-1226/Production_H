import { useState } from "react";
import { Smartphone } from "lucide-react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const Auth = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [mode, setMode] = useState("login");

  const [showPassword, setShowPassword] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {

      const res = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`
          }
        }
      );

      const user = await res.json();

      const response = await axios.post("/auth/google", {
        name: user.name,
        email: user.email,
        picture: user.picture
      });

      localStorage.setItem("token", response.data.token);

      navigate("/shop");

    },
    onError: () => {
      console.log("Login Failed");
    }
  });

  const handleAuth = async (e) => {
    e.preventDefault();

    try {

      if (mode === "signup") {

        await axios.post("/auth/send-otp", { email });

        navigate("/verify-otp", {
          state: { email, userName, password }
        });

      } else {

        const res = await axios.post("/auth/login", {
          email,
          password
        });

        localStorage.setItem("token", res.data.token);

        navigate("/shop");
      }

    } catch (error) {

      console.log(error.response?.data);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#eaf6f6] px-4">

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        <h2 className="text-2xl font-semibold text-gray-900">

          {mode === "login"
            ? "Sign In to Your Account"
            : "Create Your Account"}

        </h2>

        <p className="text-gray-500 text-sm mt-2">

          {mode === "login"
            ? "Log in to continue with your product installations."
            : "Create an account to start using our platform."}

        </p>

        <form onSubmit={handleAuth} className="mt-6 space-y-5">

          {mode === "signup" && (

            <div>

              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              />

            </div>

          )}

          <div>

            <label className="block text-sm font-medium mb-1">
              Email *
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full border rounded-lg px-4 py-2"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-1">
              Password *
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full border rounded-lg px-4 py-2 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? "🙈" : "👁"}
              </button>

            </div>

          </div>

          <button
            className="w-full bg-[#06283D] text-white py-2.5 rounded-lg"
          >

            {mode === "login" ? "Sign In" : "Create Account"}

          </button>

        </form>


        {/* Switch Mode */}

        <p className="text-center text-sm text-gray-600 mt-4">

          {mode === "login" ? (

            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="font-medium text-blue-700"
              >
                Create Account
              </button>
            </>

          ) : (

            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="font-medium text-blue-700"
              >
                Sign In
              </button>
            </>

          )}

        </p>


        {/* Divider */}

        <div className="flex items-center my-6">

          <div className="flex-grow border-t"></div>

          <span className="px-3 text-sm text-gray-400">
            OR
          </span>

          <div className="flex-grow border-t"></div>

        </div>


        {/* Social login */}

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={() => googleLogin()}
            className="border rounded-lg py-2 flex items-center justify-center gap-2">

            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />

            Google

          </button>

          <button className="border rounded-lg py-2 flex items-center justify-center gap-2">

            <Smartphone size={17} /> Phone

          </button>

        </div>

      </div>

    </div>

  );
};

export default Auth;