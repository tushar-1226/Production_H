import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [mode, setMode] = useState("login")

    const handleAuth = async (e) => {
        e.preventDefault();

        try {

            const url =
                mode === "login"
                    ? "/auth/login"
                    : "/auth/register";

            const res = await axios.post(url, {
                userName,
                email,
                password
            });
            console.log(res.data)

            // save token only on login
            localStorage.setItem("token", res.data.token);
            console.log( localStorage.getItem("token"))
            setTimeout(() => {
                console.log("After 2s:", localStorage.getItem("token"));
            }, 2000);

            navigate("/shop");



        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#eaf6f6] px-4">

            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 animate-fade transition-all duration-300">

                <h2 className="text-2xl font-semibold text-gray-900">

                    {mode == "login" ? ("Sign In to Your Account") : ("Create Your Acoount")}

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
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@gmail.com"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {mode == "signup" ? (
                                <>
                                    Create Password <span className="text-red-500">*</span>
                                </>
                            ) : (
                                <>
                                    Password <span className="text-red-500">*</span>
                                </>
                            )
                            }

                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500"
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>

                        {mode === "login" && (
                            <div className="text-right mt-1">
                                <button className="text-sm text-gray-600 hover:underline">
                                    Forgot Password?
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        className="w-full cursor-pointer bg-[#06283D] text-white py-2.5 rounded-lg font-medium hover:bg-[#041e2e] transition"
                    >
                        {mode === "login" ? "Sign In" : "Create Account"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    {mode === "login" ? (
                        <>
                            Don’t have an account?{" "}
                            <button
                                onClick={() => setMode("signup")}
                                className="font-medium text-blue-700 hover:underline"
                            >
                                Create Account
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button
                                onClick={() => setMode("login")}
                                className="font-medium text-blue-700 hover:underline"
                            >
                                Sign In
                            </button>
                        </>
                    )}
                </p>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t"></div>
                    <span className="px-3 text-sm text-gray-400">OR</span>
                    <div className="flex-grow border-t"></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        Google
                    </button>

                    <button className="border cursor-pointer rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                        <Smartphone size={17} /> Phone
                    </button>
                </div>

                <p className="text-xs text-center text-gray-400 mt-6">
                    By creating account you agree to Company{" "}
                    <span className="underline">Terms of Service</span> and{" "}
                    <span className="underline">Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
}
export default Auth