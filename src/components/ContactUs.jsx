import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-10" id="contact-us-page">
      {/* Intro section */}
      <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
        <h1 className="text-3xl font-black text-slate-950 :text-white tracking-tight">Get in Touch</h1>
        <p className="text-sm text-slate-500 :text-slate-400">
          Have an inquiry regarding bulk orders, shipping durations, or partnering as a local manufacturer? Reach out and we will respond in under 2 hours!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info: 5 Cols */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card 1: Main coordinates */}
          <div className="bg-white :bg-slate-900  rounded-2xl p-6 shadow-sm flex flex-col gap-5">
            <h3 className="text-sm font-black text-slate-900 :text-white uppercase tracking-wider border-b border-gray-100 :border-slate-800 pb-3">
              Office Details
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 :bg-gray-950/20 text-gray-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Main Address</h4>
                  <p className="text-sm font-semibold text-slate-800 :text-gray-100 mt-0.5">
                    HelloMem Office, C-Scheme, Jaipur, Rajasthan 302015
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 :bg-gray-950/20 text-gray-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Direct Line</h4>
                  <p className="text-sm font-semibold text-slate-800 :text-gray-100 mt-0.5">
                    +91 9829381718
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 :bg-gray-950/20 text-gray-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Support</h4>
                  <p className="text-sm font-semibold text-slate-800 :text-gray-100 mt-0.5">
                    info@hellomem.com
                  </p>
                </div>
              </div>
            </div>
          </div>

     
        </div>

        {/* Contact Form: 7 Cols */}
        <div className="lg:col-span-7">
          <div className="bg-white :bg-slate-900  rounded-2xl p-6 md:p-8 shadow-sm">
            {isSent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-14 h-14 rounded-full bg-green-50 :bg-green-950/30 text-green-500 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 :text-white">Message Dispatched!</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-[260px] leading-relaxed mx-auto">
                    Your query has been logged. Our customer success representative will email you back within 2 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSent(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-sm font-black text-slate-900 :text-white uppercase tracking-wider border-b border-gray-100 :border-slate-800 pb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  <span>Send a Message</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyesh Mishra"
                      className="text-xs px-3.5 py-2.5 border border-gray-200 :border-slate-700 bg-gray-50 :bg-slate-800 text-slate-800 :text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="text-xs px-3.5 py-2.5 border border-gray-200 :border-slate-700 bg-gray-50 :bg-slate-800 text-slate-800 :text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Bulk ordering clutches for gifting"
                    className="text-xs px-3.5 py-2.5 border border-gray-200 :border-slate-700 bg-gray-50 :bg-slate-800 text-slate-800 :text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Message Body</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please write down your detailed request here..."
                    className="text-xs px-3.5 py-2.5 border border-gray-200 :border-slate-700 bg-gray-50 :bg-slate-800 text-slate-800 :text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4.5 h-4.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
