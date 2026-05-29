"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Users, Award, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden gradient-bg-purple"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-brand-200/40 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-brand-300/30 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Left */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-semibold self-center lg:self-start border border-brand-200 shadow-sm">
              <Award className="w-3.5 h-3.5" />
              <span>Leading Foreign Recruitment Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.1] mb-2">
              Unlock Your <br />
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Gulf & Arab Careers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-navy-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              DAERA connects talented professionals with premier employers across Asian Arab countries like Saudi Arabia, UAE, Kuwait, Bahrain, Jordan, Oman, Qatar, Lebanon and beyond. We streamline visa processing, legal documentation, and job placements to shape a secure career path.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <a
                href="#jobs"
                className="w-full sm:w-auto text-center gradient-bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-brand-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Job Openings</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-white border border-brand-200 text-navy-800 px-8 py-4 rounded-2xl font-semibold hover:bg-brand-50/50 hover:border-brand-300 transition-colors"
              >
                Contact Agent
              </a>
            </div>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto lg:mx-0 border-t border-brand-200/60 pt-6 text-sm text-navy-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-teal" />
                <span>100% Approved Visa Track</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-teal" />
                <span>Government Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-teal" />
                <span>Ethical Recruitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-teal" />
                <span>Pre-Departure Briefings</span>
              </div>
            </div>
          </div>

          {/* Overlapping Diamond Image Grid Right */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-12 lg:py-0 min-h-[380px] sm:min-h-[460px]">
            {/* Center diamond element (Main) - Saudi Arabia */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 bg-white rounded-[32px] overflow-hidden rotate-45 border-4 border-white shadow-xl shadow-brand-500/10 z-20 group hover:scale-105 transition-transform duration-500">
              <img
                src="/saudi.jpg"
                alt="Saudi Arabia Placement"
                className="w-full h-full object-cover -rotate-45 scale-[1.4] transition-transform duration-500 group-hover:scale-[1.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent -rotate-45"></div>
            </div>

            {/* Top diamond - Kuwait */}
            <div className="absolute top-0 w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-[24px] overflow-hidden rotate-45 border-4 border-white shadow-lg shadow-brand-500/10 z-10 -translate-y-8 sm:-translate-y-12 translate-x-2 lg:translate-x-0 group hover:scale-105 transition-transform duration-500">
              <img
                src="/kuwait.png"
                alt="Kuwait Placement"
                className="w-full h-full object-cover -rotate-45 scale-[1.4] transition-transform duration-500 group-hover:scale-[1.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent -rotate-45"></div>
            </div>

            {/* Right diamond - UAE */}
            <div className="absolute right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-[24px] overflow-hidden rotate-45 border-4 border-white shadow-lg shadow-brand-500/10 z-10 translate-x-4 sm:translate-x-8 group hover:scale-105 transition-transform duration-500">
              <img
                src="/uae.png"
                alt="UAE Placement"
                className="w-full h-full object-cover -rotate-45 scale-[1.4] transition-transform duration-500 group-hover:scale-[1.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent -rotate-45"></div>
            </div>

            {/* Left diamond - Qatar */}
            <div className="absolute left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-[20px] overflow-hidden rotate-45 border-4 border-white shadow-lg shadow-brand-500/10 z-10 -translate-x-4 sm:-translate-x-8 group hover:scale-105 transition-transform duration-500">
              <img
                src="/qatar.png"
                alt="Qatar Placement"
                className="w-full h-full object-cover -rotate-45 scale-[1.4] transition-transform duration-500 group-hover:scale-[1.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent -rotate-45"></div>
            </div>

            {/* Floating Info Badges to mimic travel UI styling detail */}
            <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-16 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-brand-100 flex items-center gap-3 shadow-xl z-30 animate-float">
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-navy-400 font-semibold uppercase tracking-wider">Candidate Network</div>
                <div className="text-sm font-extrabold text-navy-900">5,000+ Placed</div>
              </div>
            </div>

            <div className="absolute top-6 left-6 sm:top-12 sm:left-16 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-brand-100 flex items-center gap-3 shadow-xl z-30 animate-float" style={{ animationDelay: "-2s" }}>
              <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-navy-400 font-semibold uppercase tracking-wider">Job Opportunities</div>
                <div className="text-sm font-extrabold text-navy-900">12+ Industries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
