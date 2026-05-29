import React from "react";
import { ShieldCheck, FileSpreadsheet, Zap, HeartHandshake, Award, Play } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Licensed & Certified",
      desc: "Fully registered agency operating under strict compliance with state foreign employment ministries.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Safe & Ethical",
      desc: "No hidden costs. We pre-screen every employer to guarantee safe, legal, and fair working environments.",
      icon: HeartHandshake,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Fast Visa Track",
      desc: "Highly experienced administrative desk ensuring quick processing of contracts, embassy bookings, and approvals.",
      icon: Zap,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Ongoing Support",
      desc: "Our responsibility doesn't end at placement. We provide 24/7 support even after you land abroad.",
      icon: FileSpreadsheet,
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-transparent border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0079FE] bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight font-sans">
            Why Choose Us
          </h2>
          <p className="text-navy-500 max-w-xl text-sm sm:text-base leading-relaxed">
            Building trust through transparency. We prioritize our candidates' security, growth, and legal peace of mind.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center gap-5 p-6 rounded-3xl border border-navy-100/50 bg-white hover:border-[#0079FE]/30 hover:bg-[#0079FE]/5 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                {/* Rounded Icon Container */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border group-hover:scale-105 transition-transform duration-300 ${item.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-[15px] text-navy-950 tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-navy-500 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Split Banner (from inspiration visual style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 rounded-[2.5rem] overflow-hidden">
          {/* Left Promo Card */}
          <div className="lg:col-span-5 relative min-h-[320px] rounded-[2.2rem] overflow-hidden group border border-navy-100/30">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              alt="Gulf Recruitment Network"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 to-navy-900/90"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-1.5 w-fit border border-white/10 text-xs font-bold uppercase tracking-wider">
                Pre-Departure Program
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-4xl font-black text-[#bae0fd]">100%</div>
                <h4 className="text-xl font-bold font-sans">Fully Sponsored Training</h4>
                <p className="text-xs text-navy-200 leading-relaxed max-w-xs">
                  For selected candidate placements in Saudi Arabia & UAE. All language, professional skill and cultural orientation are fully provided.
                </p>
              </div>
            </div>
          </div>

          {/* Right Video / Story Card */}
          <div className="lg:col-span-7 relative min-h-[320px] rounded-[2.2rem] overflow-hidden group flex items-center justify-center border border-navy-100/30">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Candidate Orientation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-navy-950/45 transition-colors"></div>
            
            {/* Play Button Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center p-6">
              <button className="w-16 h-16 rounded-full bg-white text-[#0079FE] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group/play">
                <Play className="w-6 h-6 fill-[#0079FE] ml-1 group-hover/play:scale-105 transition-transform" />
              </button>
              <div className="text-white">
                <h4 className="font-extrabold text-xl sm:text-2xl font-sans">Watch Our Orientation Story</h4>
                <p className="text-xs text-navy-200 mt-1 max-w-sm">
                  See how we prepare candidates for a successful life and career abroad, from classes to departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
