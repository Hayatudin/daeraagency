import React from "react";
import { UserCheck, ShieldCheck, FileCheck2, Compass } from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Talent Assessment",
      description: "Rigorous skill evaluation, background verification, and language proficiency testing to match candidates with premier professional standards.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "Gulf & Arab Placement",
      description: "Direct connections with verified employers in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, and Lebanon.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Visa & Documentation",
      description: "Comprehensive support for visa filing, contracts clearance, embassy processing, and local agency approvals.",
      icon: FileCheck2,
    },
    {
      num: "04",
      title: "Pre-Departure Briefings",
      description: "Providing orientation on destination laws, workplace safety, cultural norms, and post-arrival integration support.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Best Services
          </h2>
          <p className="text-navy-500 max-w-xl text-sm sm:text-base">
            Providing comprehensive and reliable support to candidates and foreign employers at every stage of the recruitment process.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-brand-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-transparent hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-6"
              >
                {/* Accent Hover Line */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-brand-500 rounded-t-3xl transition-colors duration-300"></div>

                <div className="flex justify-between items-center">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  {/* Card Number */}
                  <span className="text-4xl font-black text-brand-100 group-hover:text-brand-200 transition-colors">
                    {service.num}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-lg text-navy-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
