import React, { useState } from "react";
import { Store, ShieldCheck, DollarSign, Users, Award, Briefcase, PlusCircle, CheckCircle } from "lucide-react";

export default function SellerRegister() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    gstin: "",
    phone: "",
    category: "Bags & Footwear",
    location: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-10" id="seller-register-page">
      {!isRegistered ? (
        <>
          {/* Intro header with statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase flex items-center gap-1.5">
                <Store className="w-4 h-4 text-orange-500" />
                <span>Seller Portal</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white leading-tight">
                Grow your business in Jaipur with HelloMem
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Are you a local designer, artisan, manufacturer, or shop owner in Jaipur? Sell your clothes, footwear, home decors, or accessories directly to local and national consumers. We provide free photoshoot guides, automated pickup logistics, and zero middle-men fees!
              </p>

              {/* Perks grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-500 flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">0% Commission</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Keep 100% of your listed earnings without hidden platform fees.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-500 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">15K+ Active Buyers</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Instant exposure to loyal customers looking for premium Jaipur styles.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Reliable Logistics</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Our pickup partner collects packages directly from your warehouse.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 dark:bg-pink-950/20 text-pink-500 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Direct Weekly Payout</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Funds settled into your verified bank account every single Tuesday.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application form card */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
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

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer text-xs uppercase tracking-wider mt-2"
                >
                  Register Shop
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        /* Immersive Seller Dashboard Mockup! */
        <div className="flex flex-col gap-8 bg-slate-50 dark:bg-slate-900/40 p-6 md:p-8 border border-gray-150 dark:border-slate-800 rounded-3xl shadow-sm">
          {/* Top welcome status */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-lg shadow-orange-500/10">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Store Onboarding Completed</span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Welcome to HelloMem, {formData.shopName || "Jaipur Artisans"}!
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-950/40 px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Merchant Live On Portal</span>
            </div>
          </div>

          {/* Key metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today's Revenue</span>
              <p className="text-lg font-black text-slate-950 dark:text-white mt-1">₹0.00</p>
              <span className="text-[10px] text-slate-400 block mt-1">Settles Tuesday</span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Listings</span>
              <p className="text-lg font-black text-slate-950 dark:text-white mt-1">1</p>
              <span className="text-[10px] text-green-500 font-bold block mt-1">Pending Approval</span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Unshipped Orders</span>
              <p className="text-lg font-black text-slate-950 dark:text-white mt-1">0</p>
              <span className="text-[10px] text-slate-400 block mt-1">Pickup within 24h</span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4.5 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Customer Rating</span>
              <p className="text-lg font-black text-slate-950 dark:text-white mt-1">5.0 ★</p>
              <span className="text-[10px] text-slate-400 block mt-1">Based on brand verification</span>
            </div>
          </div>

          {/* Action workspace split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Create mock product */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-6 border border-gray-150 dark:border-slate-800 rounded-2xl shadow-xs">
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider border-b border-gray-100 dark:border-slate-800 pb-2.5 flex items-center gap-2">
                <PlusCircle className="w-4.5 h-4.5 text-orange-500" />
                <span>Upload New Listing to HelloMem Catalogue</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Product Title</label>
                  <input
                    type="text"
                    defaultValue="Jaipuri Hand-printed Cotton Bed Sheet"
                    className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Selling Price (₹)</label>
                  <input
                    type="number"
                    defaultValue="499"
                    className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Stock Count Available</label>
                <input
                  type="number"
                  defaultValue="150"
                  className="text-xs px-3.5 py-2.5 border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg focus:outline-none w-1/2"
                />
              </div>

              <button
                onClick={() => alert("Congratulations! Your product is successfully queued for approval by Rishu International QC team.")}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-sm mt-5 cursor-pointer"
              >
                Submit Product For Verification
              </button>
            </div>

            {/* Right: Quick checklist guidelines */}
            <div className="lg:col-span-4 bg-orange-50/50 dark:bg-slate-900 p-6 border border-orange-100 dark:border-slate-800 rounded-2xl flex flex-col gap-4">
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-4.5 h-4.5 text-orange-500" />
                <span>Next Milestones</span>
              </h3>

              <div className="flex flex-col gap-3.5 text-xs">
                <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Onboarding Profile Verified</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5 text-orange-500">2</span>
                  <span>Photo shoot guidelines shared via WhatsApp</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5 text-slate-400">3</span>
                  <span>Logistic pickup partner mapping scheduled</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5 text-slate-400">4</span>
                  <span>Recieve first local order in Jaipur!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
