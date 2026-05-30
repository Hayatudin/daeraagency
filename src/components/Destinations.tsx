import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface Country {
  name: string;
  count: string;
  yOffset: string;
  svgFile: string;
}

export default function Destinations() {
  const row1: Country[] = [
    {
      name: "Saudi Arabia",
      count: "1,500+ Deployed",
      yOffset: "mt-10",
      svgFile: "sa.svg",
    },
    {
      name: "UAE",
      count: "980+ Deployed",
      yOffset: "mt-10",
      svgFile: "ae.svg",
    },
    {
      name: "Kuwait",
      count: "750+ Deployed",
      yOffset: "mt-0",
      svgFile: "kw.svg",
    },
    {
      name: "Bahrain",
      count: "450+ Deployed",
      yOffset: "mt-10",
      svgFile: "bh.svg",
    },
    {
      name: "Jordan",
      count: "380+ Deployed",
      yOffset: "mt-2",
      svgFile: "jo.svg",
    },
    {
      name: "Oman",
      count: "320+ Deployed",
      yOffset: "mt-12",
      svgFile: "om.svg",
    },
  ];

  const row2: Country[] = [
    {
      name: "Qatar",
      count: "600+ Deployed",
      yOffset: "mt-8",
      svgFile: "qa.svg",
    },
    {
      name: "Lebanon",
      count: "200+ Deployed",
      yOffset: "mt-2",
      svgFile: "lb.svg",
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-transparent border-t border-navy-100 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-50/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3 mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0079FE] bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100">
            Where We Deploy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight font-sans">
            Our Active Destinations
          </h2>
          <p className="text-navy-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            We operate fully certified legal recruitment pathways strictly to premier Asian Arab nations. We partner with vetted employers to guarantee safe working conditions, compliance, and candidate dignity.
          </p>
        </div>

        {/* Wavy Timeline Map Display */}
        <div className="relative">
          
          {/* Row 1 (6 countries on one row on desktop) */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative py-12 min-h-[360px]">
            
            {/* Curved dotted line in background */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 -z-10 pointer-events-none">
              <svg className="w-full h-full stroke-brand-200" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 100">
                <path
                  d="M 0 80 Q 50 80, 100 80 T 200 80 T 300 40 T 400 80 T 500 48 T 600 88"
                  strokeDasharray="6,8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {row1.map((country) => (
              <div
                key={country.name}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-300 ${country.yOffset}`}
              >
                {/* Country Silhouette loaded via CSS Mask to allow perfect styling color control */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <div
                    className="w-20 h-20 bg-navy-300 group-hover:bg-[#0079FE] group-hover:scale-110 transition-all duration-500 drop-shadow-sm filter"
                    style={{
                      WebkitMaskImage: `url(/countries/${country.svgFile})`,
                      maskImage: `url(/countries/${country.svgFile})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  ></div>
                </div>

                {/* Dot indicator aligned on wave */}
                <div className="relative w-4.5 h-4.5 rounded-full bg-white border-[4px] border-[#0079FE] shadow-md group-hover:scale-125 transition-transform duration-300 z-10 my-4">
                  <span className="absolute inset-0.5 rounded-full bg-[#0079FE] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>

                {/* Text details */}
                <div className="mt-4">
                  <h3 className="font-extrabold text-sm text-navy-950 group-hover:text-[#0079FE] transition-colors font-sans">
                    {country.name}
                  </h3>
                  <p className="text-[11px] text-navy-400 font-bold mt-1 uppercase tracking-wide">
                    {country.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (2 countries at the bottom on desktop) */}
          <div className="hidden lg:flex justify-center gap-24 relative py-12 min-h-[300px] mt-6">
            
            {/* Secondary wave path for Row 2 */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 -z-10 pointer-events-none flex justify-center">
              <svg className="w-1/3 h-full stroke-brand-200" fill="none" preserveAspectRatio="none" viewBox="0 0 400 100">
                <path
                  d="M 50 70 Q 150 30, 250 50"
                  strokeDasharray="6,8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {row2.map((country) => (
              <div
                key={country.name}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-300 w-44 ${country.yOffset}`}
              >
                {/* Country Silhouette */}
                <div className="h-24 flex items-center justify-center mb-4">
                  <div
                    className="w-20 h-20 bg-navy-300 group-hover:bg-[#0079FE] group-hover:scale-110 transition-all duration-500 drop-shadow-sm filter"
                    style={{
                      WebkitMaskImage: `url(/countries/${country.svgFile})`,
                      maskImage: `url(/countries/${country.svgFile})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  ></div>
                </div>

                {/* Dot indicator aligned on wave */}
                <div className="relative w-4.5 h-4.5 rounded-full bg-white border-[4px] border-[#0079FE] shadow-md group-hover:scale-125 transition-transform duration-300 z-10 my-4">
                  <span className="absolute inset-0.5 rounded-full bg-[#0079FE] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>

                {/* Text details */}
                <div className="mt-4">
                  <h3 className="font-extrabold text-sm text-navy-950 group-hover:text-[#0079FE] transition-colors font-sans">
                    {country.name}
                  </h3>
                  <p className="text-[11px] text-navy-400 font-bold mt-1 uppercase tracking-wide">
                    {country.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Fallback Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:hidden mt-8">
            {[...row1, ...row2].map((country) => (
              <div
                key={country.name}
                className="bg-navy-50/50 border border-brand-100 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:border-[#0079FE]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 bg-white rounded-xl shadow-sm border border-brand-50">
                  <div
                    className="w-12 h-12 bg-navy-300 group-hover:bg-[#0079FE] transition-colors duration-500"
                    style={{
                      WebkitMaskImage: `url(/countries/${country.svgFile})`,
                      maskImage: `url(/countries/${country.svgFile})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  ></div>
                </div>
                <h3 className="font-extrabold text-sm text-navy-900 group-hover:text-[#0079FE] transition-colors font-sans">
                  {country.name}
                </h3>
                <p className="text-[10px] text-navy-500 font-extrabold uppercase mt-1">
                  {country.count}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-accent-teal font-extrabold mt-3 border-t border-brand-100/50 pt-3 w-full justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Licensed</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Embassy procedures bottom links */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0079FE] hover:text-[#0263e2] transition-colors group/explore"
          >
            <span>Learn About Embassy Procedures</span>
            <ArrowRight className="w-4 h-4 group-hover/explore:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
