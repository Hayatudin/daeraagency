import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  text: string;
  image: string;
}

export default function Testimonials() {
  const list: Testimonial[] = [
    {
      id: 1,
      name: "Saba Alene",
      role: "Professional Caregiver",
      location: "Muscat, Oman",
      text: "DAERA changed my life. They handled the paperwork and visa processing with absolute integrity. I'm now working in Muscat at a modern healthcare facility, and the accommodation provided is excellent.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Yared Abraham",
      role: "Pastry Chef",
      location: "Riyadh, Saudi Arabia",
      text: "The agency team was transparent at every step. They didn't charge any hidden fees and helped me prepare for the hotel group's interview. I'm very satisfied with my current contract and salary.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Fatuma Mohammed",
      role: "Registered Nurse",
      location: "Abu Dhabi, UAE",
      text: "I was worried about the legal documentation, but DAERA walked me through the embassy process step-by-step. Their post-arrival team in Abu Dhabi even checked in on me during my first week.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-transparent border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0079FE] bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight font-sans">
            Candidate Feedback
          </h2>
          <p className="text-navy-500 max-w-xl text-sm sm:text-base leading-relaxed">
            Read inspiring feedback from candidates who found legal, secure employment abroad through our agency services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-navy-100/50 p-8 rounded-[2.2rem] relative hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-navy-100/25 group-hover:text-navy-100/40 transition-colors" />

              <div className="flex flex-col gap-5 text-left">
                {/* Star Ratings */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-navy-600 leading-relaxed font-medium relative z-10">
                  "{item.text}"
                </p>
              </div>

              {/* Candidate Info Footer */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-navy-100/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-navy-200"
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-sm text-navy-950 font-sans">{item.name}</h4>
                  <div className="text-[10px] text-navy-500 font-semibold uppercase mt-0.5">
                    {item.role} • <span className="text-[#0079FE] font-bold">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Ribbon below testimonials (Inspiration trusted by section context) */}
        <div className="mt-20 border-t border-navy-100/60 pt-12 text-center flex flex-col items-center gap-6">
          <div className="text-[10px] font-extrabold text-navy-400 uppercase tracking-widest">
            VERIFIED PARTNER MINISTRIES & EMPLOYERS
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-60 transition-opacity">
            <div className="flex items-center gap-1.5 font-extrabold text-navy-950 text-xs tracking-widest font-sans">
              <ShieldCheck className="w-5 h-5 text-accent-teal" />
              <span>MINISTRY OF LABOUR</span>
            </div>
            <div className="font-black text-navy-950 text-sm tracking-wider font-sans">
              SAUDI MUSANED
            </div>
            <div className="font-black text-navy-950 text-sm tracking-wider font-sans">
              DOHA HOSPITALITY
            </div>
            <div className="font-black text-navy-950 text-sm tracking-wider font-sans">
              GULF CAREERS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
