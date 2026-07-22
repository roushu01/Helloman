import React, { useState } from "react";
import { signup } from "../api/authApi";
import {
  Search,
  Moon,
  ShoppingCart,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

const COUNTRIES = ["India", "United States", "United Kingdom", "Canada", "Australia"];
const STATES = ["Rajasthan", "Delhi", "Maharashtra", "Karnataka", "Gujarat"];

export default function SignupPage({ onSignupSuccess, onSwitchToLogin }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    shippingAddress: "",
    country: "",
    state: "",
    cityId: "",
    postalCode: "",
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    password: form.password,

    mobileNumber: form.mobile,

    address: {
      shippingAddress: form.shippingAddress,
      country: form.country,
      state: form.state,
      cityId: form.cityId,
      postalCode: form.postalCode,
    },
  };

  try {
    const user = await signup(payload);

    onSignupSuccess({
      ...user,
      name: `${payload.firstName} ${payload.lastName}`,
    });

  }catch (err) {
  console.error(err);

  return user.status(500).json({
    success: false,
    message: err.message,
    error: err,
  });
}
};

  const inputClass =
    "w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white placeholder-gray-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500";

  return (
    <div >
      {/* Signup card */}
      <main className="flex-1 flex flex-col items-center  py-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 md:p-9 w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-600 text-center mb-2">
            Create your account
          </h1>
          <p className="text-slate-500 text-center text-sm mb-7">
            Sign up to get started with Hellomem
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* First / Last name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-800">First Name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={update("firstName")}
                  placeholder="First Name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-800">Last Name</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={update("lastName")}
                  placeholder="Last Name"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-800">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="Email Address"
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-800">Password</label>
              <input
                type="password"
                required
                value={form.password}
                onChange={update("password")}
                placeholder="Password"
                className={inputClass}
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-800">Mobile Number</label>
              <input
                type="tel"
                required
                value={form.mobile}
                onChange={update("mobile")}
                placeholder="Mobile Number"
                className={inputClass}
              />
            </div>

            {/* Shipping Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-800">Shipping Address</label>
              <input
                type="text"
                required
                value={form.shippingAddress}
                onChange={update("shippingAddress")}
                placeholder="Shipping Address"
                className={inputClass}
              />
            </div>

            {/* Country / State */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-800">Country</label>
                <div className="relative">
                  <select
                    required
                    value={form.country}
                    onChange={update("country")}
                    className="w-full appearance-none px-4 pr-9 py-3 text-sm border border-gray-200 rounded-xl bg-white text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                  >
                    <option value="">Select Country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-800">State/Province</label>
                <div className="relative">
                  <select
                    required
                    value={form.state}
                    onChange={update("state")}
                    className="w-full appearance-none px-4 pr-9 py-3 text-sm border border-gray-200 rounded-xl bg-white text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                  >
                    <option value="">Select State/Province</option>
                    {STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* City ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-800">City ID (optional)</label>
              <input
                type="text"
                value={form.cityId}
                onChange={update("cityId")}
                placeholder="City ID (optional)"
                className={inputClass}
              />
            </div>

            {/* Postal Code */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-800">Postal Code</label>
              <input
                type="text"
                required
                value={form.postalCode}
                onChange={update("postalCode")}
                placeholder="Postal Code"
                className={inputClass}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold py-3 rounded-xl transition-all shadow-md mt-1"
            >
              Sign Up
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-slate-500 -mt-1">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </main>     
    </div>
  );
}