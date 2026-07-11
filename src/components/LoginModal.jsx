import React, { useState } from "react";
import {login,forgotPassword} from "../api/authApi";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Search,
  Moon,
  ShoppingCart,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

export default function LoginPage({ onLoginSuccess, onSwitchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

const [showForgotPassword, setShowForgotPassword] = useState(false);
 const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    setError("");

    const res = await login({
      email,
      password,
    });

    console.log(res);

    if (res.success) {
      // Save JWT if your backend returns one
      if (res.token) {
        localStorage.setItem("token", res.token);
      }

      // Save user if needed
      if (res.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
      }

      // Notify App.jsx
      onLoginSuccess(res.user);
    } else {
      setError(res.message || "Login failed");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};
const handleChangePassword = async () => {
  try {
    setChangeLoading(true);
    setChangeError("");

    const body = {
      currentPassword,
      newPassword,
    };

    // Customer
    const res = await changeCustomerPassword(body);

    // Seller
    // const res = await changeSellerPassword(body);

    if (res.success) {
      alert("Password changed successfully");

      setShowChangePassword(false);
      setCurrentPassword("");
      setNewPassword("");
    } else {
      setChangeError(res.message);
    }
  } catch (err) {
    setChangeError(
      err.response?.data?.message || "Failed to change password"
    );
  } finally {
    setChangeLoading(false);
  }
};
const [forgotLoading, setForgotLoading] = useState(false);

const handleForgotPassword = async () => {
  try {
    setForgotLoading(true);

    const res = await forgotPassword(email);

    alert(res.message);
    setShowForgotPassword(false);

  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  } finally {
    setForgotLoading(false);
  }
};
  return (
    <div>
      {/* Top utility bar */}
     

      {/* Login card */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-slate-500 mb-8 text-center text-sm md:text-base">
          Sign in to your account to continue shopping
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 md:p-9 w-full max-w-md flex flex-col gap-5"
        >
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-800">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-800">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me / Forgot password */}
          <div className="flex items-center justify-between text-sm -mt-1">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>
            <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-blue-600 font-medium hover:underline"
          >
            Forgot your password?
          </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors mt-1"
          >
            Sign In
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm text-slate-500 -mt-1">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up now
            </button>
          </p>
        </form>

      </main>
     {showForgotPassword && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-full max-w-md">

      <h2 className="text-xl font-bold mb-4">
        Forgot Password
      </h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowForgotPassword(false)}
          className="border px-4 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
        onClick={handleForgotPassword}
        disabled={forgotLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        {forgotLoading ? "Sending..." : "Send Reset Link"}
      </button>
      </div>

    </div>
  </div>
)}
    </div>
  );
}