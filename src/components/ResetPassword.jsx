import { useState } from "react";
import { resetPassword } from "../api/authApi";
import { Lock, Eye, EyeOff, ShieldCheck, ArrowLeft } from "lucide-react";

export default function ResetPassword({ token }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" or "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (!password) {
      setMessage({ text: "Please enter a new password.", type: "error" });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: "Password must be at least 6 characters long.", type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    try {
      setLoading(true);
      const res = await resetPassword(token, password);

      if (res.success) {
        setMessage({ text: "Password reset successfully! Redirecting...", type: "success" });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        setMessage({ text: res.message || "Failed to reset password. Please try again.", type: "error" });
      }
    } catch (err) {
      setMessage({ 
        text: err.response?.data?.message || "Something went wrong. Link may be expired or invalid.", 
        type: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
      {/* Decorative light gradient backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="w-full max-w-md bg-white border border-gray-150 p-8 rounded-2xl shadow-xl transition-all duration-300 relative z-10">
        
        {/* Header Icon */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-orange-50 text-orange-500 p-4 rounded-full shadow-inner mb-4 animate-pulse">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Reset Password
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xs">
            Please enter your new password below to secure your HelloMem account.
          </p>
        </div>

        {/* Status Messages */}
        {message.text && (
          <div className={`p-4 mb-6 rounded-xl border text-sm flex items-center gap-3 animate-fade-in ${
            message.type === "success" 
              ? "bg-green-50 border-green-200 text-green-800" 
              : "bg-red-50 border-red-200 text-red-800"
          }`}>
            {message.type === "success" ? (
              <ShieldCheck className="w-5 h-5 shrink-0 text-green-600" />
            ) : (
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">!</span>
            )}
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* New Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50/50 border border-gray-250 focus:border-orange-500 focus:bg-white rounded-xl py-3 pl-4 pr-11 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Confirm New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-50/50 border border-gray-250 focus:border-orange-500 focus:bg-white rounded-xl py-3 px-4 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all text-sm"
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/20 transform active:scale-[0.98] transition-all cursor-pointer text-sm tracking-wide mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Updating Password..." : "Reset Password"}
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-8 border-t border-gray-100 pt-5 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </a>
        </div>

      </div>
    </div>
  );
}