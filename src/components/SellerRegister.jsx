import React, { useState } from "react";
import {
  Store,
  ShieldCheck,
  DollarSign,
  Users,
  Award,
  Briefcase,
  PlusCircle,
  CheckCircle,
  Lock,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";

export default function SellerRegister({ onSellerLogin }) {
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    gstin: "",
    phone: "",
    category: "Bags & Footwear",
    location: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });
const handleRegister = (e) => {
  e.preventDefault();

 const sellerData = {
  id: 1,
  role: "seller",      // <-- add
  name: formData.fullName,
  shopName: formData.shopName,
  phone: formData.phone,
};

onSellerLogin(sellerData);
};

const handleLogin = (e) => {
  e.preventDefault();

  if (
    loginData.identifier === "hellomem" &&
    loginData.password === "123456"
  ) {
    onSellerLogin({
      id: 1,
      role: "seller",      // <-- add this
      name: "Roushni Kumari",
      shopName: "HelloMem Store",
      email: "hellomem@gmail.com",
    });
  } else {
    alert("Invalid username or password");
  }
};
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-10" id="seller-register-page">
   
        <>
          {/* Intro header with statistics */}
          <div className="flex justify-center  items-center">
           
            {/* Auth card */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
              {/* Login / Sign Up Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
                <button
                  type="button"
                  onClick={() => setAuthMode("login")}
                  className={`text-xs font-black uppercase tracking-wider py-2.5 rounded-lg transition-colors cursor-pointer ${
                    authMode === "login"
                      ? "bg-white dark:bg-slate-900 text-orange-500 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode("signup")}
                  className={`text-xs font-black uppercase tracking-wider py-2.5 rounded-lg transition-colors cursor-pointer ${
                    authMode === "signup"
                      ? "bg-white dark:bg-slate-900 text-orange-500 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {authMode === "login" ? (
                /* ---------------- LOGIN FORM ---------------- */
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div className="border-b border-gray-100 dark:border-slate-800 pb-3">
                    <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      Seller Login
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Welcome back! Access your seller dashboard</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Mobile Number or Email</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        value={loginData.identifier}
                        onChange={(e) => setLoginData({ ...loginData, identifier: e.target.value })}
                        placeholder="9829XXXXXX or you@shop.com"
                        className="w-full text-xs pl-9 pr-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Password</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Lock className="w-4 h-4" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full text-xs pl-9 pr-9 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[11px]">
                    <label className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      Remember me
                    </label>
                    <button
                      type="button"
                      onClick={() => alert("Password reset link sent! (Simulated)")}
                      className="text-orange-500 font-bold hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider mt-2"
                  >
                    Login to Dashboard
                  </button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                    New seller on HelloMem?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthMode("signup")}
                      className="text-orange-500 font-bold hover:underline cursor-pointer"
                    >
                      Create an account
                    </button>
                  </p>
                </form>
              ) : (
                /* ---------------- SIGN UP FORM ---------------- */
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                  <div className="border-b border-gray-100 dark:border-slate-800 pb-3">
                    <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      Seller Application
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Start selling in Jaipur under 5 minutes</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Contact Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Shop / Brand Name</label>
                    <input
                      type="text"
                      required
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                      placeholder="e.g. Jaipur Royal Clutches"
                      className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp Mobile</label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9829XXXXXX"
                        className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">GSTIN (Optional)</label>
                      <input
                        type="text"
                        value={formData.gstin}
                        onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                        placeholder="08AAAAA0000A1Z5"
                        className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Primary Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option value="Bags & Footwear">Bags & Footwear</option>
                        <option value="Women Ethnic">Women Ethnic</option>
                        <option value="Women Western">Women Western</option>
                        <option value="Men">Men</option>
                        <option value="Home & Kitchen">Home & Kitchen</option>
                        <option value="Electronics">Electronics</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Pickup Location</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Johri Bazaar, Jaipur"
                        className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Create Password</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Lock className="w-4 h-4" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={6}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="At least 6 characters"
                        className="w-full text-xs pl-9 pr-9 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider mt-2"
                  >
                    Register Shop
                  </button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                    Already a HelloMem seller?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthMode("login")}
                      className="text-orange-500 font-bold hover:underline cursor-pointer"
                    >
                      Login instead
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </>

       
        </div>
      

  );
}