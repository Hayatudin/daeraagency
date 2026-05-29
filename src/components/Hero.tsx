"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Users, Award, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-bg-purple"
    >
      {/* Subtle Background Accent Blobs */}
      <div className="absolute top-24 -left-20 w-80 h-80 rounded-full bg-brand-100/30 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-brand-200/20 blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Left */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-brand-50 border border-brand-100 text-[#0079FE] px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase self-center lg:self-start shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#0079FE]" />
              <span>Government Certified Placement Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black text-navy-950 tracking-tight leading-[1.08] font-sans">
              Connecting Talent <br className="hidden sm:inline" />
              Where Opportunities <span className="text-[#0079FE]">Thrive</span>
            </h1>

            <p className="text-base sm:text-lg text-navy-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              DAERA connects talented professionals with premier employers across Saudi Arabia, UAE, Kuwait, Jordan, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <a
                href="#jobs"
                className="w-full sm:w-auto text-center bg-[#0079FE] hover:bg-[#0263e2] text-white px-8 py-4 rounded-full font-bold shadow-md shadow-brand-500/10 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Job Openings</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-white border border-navy-200 text-navy-800 px-8 py-4 rounded-full font-semibold hover:bg-navy-50 hover:border-navy-300 active:scale-95 transition-all duration-300 flex items-center justify-center"
              >
                Contact Agent
              </a>
            </div>

            {/* Quick trust bullet points in HireNest style */}
            <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto lg:mx-0 border-t border-navy-100 pt-6 text-xs text-navy-600 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                <span>100% Legal Visa Track</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                <span>Direct GCC Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                <span>Ethical Recruitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                <span>24/7 Welfare Support</span>
              </div>
            </div>
          </div>

          {/* Overlapping Asymmetrical Flat Collage Right (Inspired by HireNest cutout + clean shapes) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6 lg:py-0 min-h-[380px] sm:min-h-[460px]">
            {/* Center Main Panel - Saudi Arabia */}
            <div className="relative w-48 h-64 sm:w-60 sm:h-80 bg-white rounded-[2rem] overflow-hidden border border-navy-100/50 shadow-md z-20 transition-all duration-500">
              <img
                src="/saudi.jpg"
                alt="Saudi Arabia Careers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#bae0fd]">Featured Host</p>
                <h4 className="text-lg font-black tracking-tight">SAUDI ARABIA</h4>
              </div>
            </div>

            {/* Overlapping Bottom-Right Panel - UAE */}
            <div className="absolute bottom-0 right-4 sm:right-8 w-36 h-48 sm:w-44 sm:h-56 bg-white rounded-[1.8rem] overflow-hidden border border-navy-100/50 shadow-md z-30 translate-y-6 sm:translate-y-8 transition-all duration-500">
              <img
                src="/uae.png"
                alt="UAE Placements"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-5 text-white text-left">
                <h4 className="text-sm font-bold tracking-tight">UNITED ARAB EMIRATES</h4>
              </div>
            </div>

            {/* Overlapping Top-Left Panel - Kuwait */}
            <div className="absolute top-0 left-4 sm:left-8 w-32 h-44 sm:w-40 sm:h-52 bg-white rounded-[1.8rem] overflow-hidden border border-navy-100/50 shadow-md z-10 -translate-y-6 sm:-translate-y-8 transition-all duration-500">
              <img
                src="/kuwait.png"
                alt="Kuwait Careers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-5 text-white text-left">
                <h4 className="text-sm font-bold tracking-tight">KUWAIT</h4>
              </div>
            </div>

            {/* Floating Info Badges with sleek glass styling details */}
            <div className="absolute bottom-12 left-0 sm:left-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-navy-100/80 flex items-center gap-3 shadow-md z-30 animate-float">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-[#0079FE] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#0079FE]" />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-navy-400 font-extrabold uppercase tracking-widest">Placements</div>
                <div className="text-sm font-black text-navy-900">5,000+ Deployed</div>
              </div>
            </div>

            <div className="absolute top-12 right-0 sm:right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-navy-100/80 flex items-center gap-3 shadow-md z-30 animate-float" style={{ animationDelay: "-2.5s" }}>
              <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-navy-400 font-extrabold uppercase tracking-widest">Opportunities</div>
                <div className="text-sm font-black text-navy-900">12+ Industries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grayscale Trusted Employers Bar inspired by Thrive/HireNest templates */}
        <div className="mt-20 pt-8 border-t border-navy-100/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <span className="text-[10px] font-extrabold text-navy-400 uppercase tracking-widest">
            TRUSTED BY LEADING INTERNATIONAL GROUPS
          </span>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 sm:gap-12 opacity-35 grayscale hover:opacity-50 transition-opacity">
            <span className="font-extrabold tracking-wider text-navy-950 text-xs sm:text-sm font-sans uppercase">ARAMCO</span>
            <span className="font-extrabold tracking-wider text-navy-950 text-xs sm:text-sm font-sans uppercase">AL-MARAI</span>
            <span className="font-extrabold tracking-wider text-navy-950 text-xs sm:text-sm font-sans uppercase">SABIC</span>
            <span className="font-extrabold tracking-wider text-navy-950 text-xs sm:text-sm font-sans uppercase">KUWAIT-PETROLEUM</span>
            <span className="font-extrabold tracking-wider text-navy-950 text-xs sm:text-sm font-sans uppercase">AIRTECH</span>
          </div>
        </div>
      </div>
    </section>
  );
}

