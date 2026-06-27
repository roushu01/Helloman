import React, { useState } from "react";
import {Mail,Phone,MapPin,Send,ShoppingBag} from "lucide-react";


export default function Footer({ setView, setSelectedCategory }) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setView("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageClick = (page) => {
    setView(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1528] text-gray-300 transition-colors border-t border-slate-800" id="hellomem-footer">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" id="footer-upper">
        {/* Left Column: HelloMem Intro */}
        <div className="flex flex-col gap-5" id="footer-about-col">
          {/* Logo */}
          <div 
            onClick={() => handlePageClick("home")}
            className="flex items-center gap-2 cursor-pointer group w-max"
          >
            <div className="bg-orange-500 text-white p-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-black tracking-tight text-orange-500">Hello</span>
              <span className="text-xl font-black tracking-tight text-white ml-0.5">Mem</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            We empower vendors and customers through a seamless e-commerce platform, offering trusted products, secure payments, and excellent customer support.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-3 text-sm mt-2" id="footer-contact-details">
            <a href="mailto:info@hellomem.com" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors">
              <Mail className="w-4.5 h-4.5 text-orange-500 shrink-0" />
              <span>info@hellomem.com</span>
            </a>
            <a href="tel:+919829381718" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors">
              <Phone className="w-4.5 h-4.5 text-orange-500 shrink-0" />
              <span>+91 9829381718</span>
            </a>
            <div className="flex items-start gap-2.5 text-gray-400">
              <MapPin className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
              <span>Jaipur, Rajasthan 302015</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4" id="footer-links-col">
          <h3 className="text-white text-base font-bold tracking-wider">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <button onClick={() => handlePageClick("home")} className="hover:text-orange-400 transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick("products")} className="hover:text-orange-400 transition-colors cursor-pointer">
                Products
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick("about")} className="hover:text-orange-400 transition-colors cursor-pointer">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handlePageClick("contact")} className="hover:text-orange-400 transition-colors cursor-pointer">
                Contact Us
              </button>
            </li>
            <li><a href="#privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="#refund" className="hover:text-orange-400 transition-colors">Refund Policy</a></li>
            <li><a href="#shipping" className="hover:text-orange-400 transition-colors">Shipping Policy</a></li>
            <li><a href="#payment" className="hover:text-orange-400 transition-colors">Payment Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Featured Categories */}
        <div className="flex flex-col gap-4" id="footer-categories-col">
          <h3 className="text-white text-base font-bold tracking-wider">Categories</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <button onClick={() => handleCategoryClick("Electronics")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Electronics
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("Women Ethnic")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Fashion (Ethnic)
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("Women Western")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Fashion (Western)
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("Home & Kitchen")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Home & Garden
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("Beauty & Health")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Beauty & Personal Care
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("Sports & Fitness")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Sports & Outdoors
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("Books")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Books & Media
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Social */}
        <div className="flex flex-col gap-6" id="footer-newsletter-col">
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-base font-bold tracking-wider">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest deals and updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 mt-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg border border-slate-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow"
              >
                <Send className="w-4 h-4" />
                <span>{isSubscribed ? "Subscribed!" : "Subscribe"}</span>
              </button>
            </form>
          </div>

          {/* Social media links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-semibold">Follow Us</h4>
            <div className="flex gap-3" id="footer-social-circles">
             
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="bg-[#080f1e] py-6 border-t border-slate-900" id="footer-bottom">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © 2026 HelloMem | Owned & Operated by RISHU INTERNATIONAL.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-gray-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
