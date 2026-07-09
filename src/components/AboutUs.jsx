import React from "react";
import {
  Target,
  Heart,
  ShieldCheck,
  Award,
  Globe,
  Users,
} from "lucide-react";
 
const stats = [
  { value: "10M+", label: "Active Users" },
  { value: "500K+", label: "Products" },
  { value: "50K+", label: "Sellers" },
  { value: "99.9%", label: "Uptime" },
];
 
const values = [
  {
    icon: Heart,
    title: "Customer First",
    desc: "Every decision we make starts with what's best for our customers.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Security",
    desc: "Your data and transactions are protected with industry-leading security.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "We verify every seller and product to maintain the highest standards.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "Making entrepreneurship accessible to everyone, everywhere.",
  },
];
 
const leaders = [
  {
    name: "Nawal Kishore",
    role: "Chief Executive Officer",
    bio: "An inspiring leader with a vision to revolutionize e-commerce in India.",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Ronak Sankhala",
    role: "Chief Technology Officer",
    bio: "A tech visionary dedicated to building innovative solutions for the e-commerce landscape.",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Rajendra",
    role: "Chief Marketing Officer",
    bio: "A strategic thinker with a passion for driving brand growth and customer engagement.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Babita Kumari",
    role: "Sales and Marketing Head",
    bio: "A results-driven professional with a knack for identifying market opportunities and building strong client relationships.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
  },
];
 
const quickLinks = [
  "Home",
  "Products",
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "Shipping Policy",
];
 
const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Books & Media",
];
 
export default function AboutUs() {
  return (
    <div className="w-full bg-white text-slate-800" id="about-us-page">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 px-6 py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Hellomem</h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90">
          Empowering millions of entrepreneurs and customers to succeed in the digital economy
        </p>
      </div>
 
      {/* Our Mission */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          </div>
          <p className="text-blue-600 font-semibold mb-4">
            HelloMem Operated by RISHU INTERNATIONAL
          </p>
          <p className="text-slate-600 leading-relaxed">
            At Hellomem, we believe in democratizing commerce by enabling anyone to
            start, sustain, and grow their business online. We're committed to
            making entrepreneurship accessible to everyone, regardless of their
            background or resources.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
 
      {/* Our Impact */}
      <div className="bg-slate-50 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Impact</h2>
          <p className="text-slate-500">Numbers that reflect our commitment to excellence</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-500">{s.value}</div>
              <div className="text-slate-500 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Our Values */}
      <div className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Values</h2>
          <p className="text-slate-500">The principles that guide everything we do</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3 px-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
 
      {/* Leadership Team */}
      <div className="bg-slate-50 py-16 px-6">
        <div className="text-center mb-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Leadership Team</h2>
          </div>
          <p className="text-slate-500">Meet the people driving our mission forward</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-3"
            >
              <img
                src={l.img}
                alt={l.name}
                className="w-20 h-20 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-bold text-slate-900">{l.name}</h3>
              <p className="text-blue-600 text-sm font-semibold">{l.role}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
 
      {/* Join Our Journey */}
      <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Join Our Journey</h2>
        <p className="text-white/90 mb-8">
          Be part of the future of commerce. Start your entrepreneurial journey with us today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition">
            Become a Seller
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Join Our Team
          </button>
        </div>
      </div> 
    </div>
  );
}