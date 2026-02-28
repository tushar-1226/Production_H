import { useState } from "react";
import { Smartphone } from "lucide-react";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        <h2 className="text-2xl font-semibold text-gray-900">
          Sign In to Your Account
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Log in to continue with your product installations, support plans,
          or customization requests.
        </p>

        <form className="mt-6 space-y-5">

          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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

            <div className="text-right mt-1">
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline hover:text-blue-700 cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            className="w-full cursor-pointer bg-[#06283D] text-white py-2.5 rounded-lg font-medium hover:bg-[#041e2e] transition"
          >
            Sign in
          </button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button className="font-medium text-blue-700 cursor-pointer hover:underline">
            Create Account?
          </button>
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