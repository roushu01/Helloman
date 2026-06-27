import React from "react";
import { Award, ShieldCheck, Heart, Sparkles, Compass } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-12" id="about-us-page">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[260px] sm:h-[350px] md:h-[400px]" id="about-hero">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&auto=format&fit=crop&q=80"
          alt="Jaipur Heritage Craft"
          className="w-full h-full object-cover brightness-[0.5]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white z-10 gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-orange-400 uppercase">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>Since 2015</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Our Jaipur Story
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed font-medium">
            Empowering regional craftspersons, small vendors, and local manufactures by connecting them with buyers globally through an honest, simple shopping portal.
          </p>
        </div>
      </div>

      {/* Philosophy Splits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="about-splits">
        <div className="flex flex-col gap-5 text-slate-700 dark:text-slate-300">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Honest Craftsmanship</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white leading-tight">
            Connecting Jaipur's Rich Heritage directly to your Home
          </h2>
          <p className="text-sm leading-relaxed">
            HelloMem is Jaipur's leading direct-to-consumer online shopping platform. Established to remove high middle-men commissions, we bring you authentic Jaipuri block prints, premium hand-embroidered leather footwear, clutch bags, and durable appliances directly from manufacturers.
          </p>
          <p className="text-sm leading-relaxed">
            By eliminating expensive storage layers, we guarantee that our artisans are paid fair living wages while our customers receive unmatched value.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-gray-150 dark:border-slate-800 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
            alt="Handcrafting process"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Core Values Bento Grid */}
      <div className="flex flex-col gap-6" id="about-values">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">Our Pillars</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Every product packed and shipped through Rishu International carries our vow of supreme local quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-500 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Authentic Sourcing</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We conduct rigorous verification processes for each local seller to ensure all leather fabrics, cotton materials, and appliances comply with premier standards.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Zero-risk Returns</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Not satisfied with the sizing or material touch? We offer hassle-free, no-questions-asked 7-day pickup and replacements with instant refunds.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/20 text-pink-500 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Loved by thousands</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              With over 15,000 completed shipments in Rajasthan, HelloMem has built an unbreakable reputation for safe packaging, timely doorstep delivery, and premium care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
