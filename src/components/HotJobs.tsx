"use client";

import React, { useState } from "react";
import { Check, X, ShieldAlert, Award, Send } from "lucide-react";

interface Job {
  id: number;
  title: string;
  category: string;
  image: string;
}

export default function HotJobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs: Job[] = [
    {
      id: 1,
      title: "Commercial Cleaning",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Elderly Caregiving",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Housemaid Placements",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Heavy Vehicle Driver",
      category: "Skilled Trades",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <section id="jobs" className="py-24 bg-transparent border-t border-brand-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100">
            Latest Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Hot Job Openings
          </h2>
          <p className="text-navy-500 max-w-xl text-sm sm:text-base leading-relaxed">
            Direct legal recruitment pathways for foreign employment in high demand sectors.
          </p>
        </div>

        {/* Premium Organic Cutout Grid (1 Row on Desktop, minimized h-80 cards, transparent backgrounds) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map(job => (
            <div
              key={job.id}
              className="relative h-80 rounded-[2.5rem] overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Full Card Cover Image */}
              <img
                src={job.image}
                alt={job.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent"></div>

              {/* Title overlay positioned at bottom-left */}
              <div className="absolute bottom-5 left-7 text-white z-10 pr-16 text-left">
                <h3 className="text-base font-extrabold tracking-wide uppercase leading-tight">
                  {job.title}
                </h3>
              </div>

              {/* Bottom-Right Organic Border-Radius Cutout */}
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[1.8rem] flex items-center justify-center z-10" style={{ background: '#fcfbfe' }}>
                {/* Curved transitions for organic nested radius */}
                <div className="absolute bottom-16 right-0 w-3 h-3 bg-transparent rounded-br-[0.8rem]" style={{ boxShadow: '3px 3px 0 0 #fcfbfe' }}></div>
                <div className="absolute bottom-0 right-16 w-3 h-3 bg-transparent rounded-br-[0.8rem]" style={{ boxShadow: '3px 3px 0 0 #fcfbfe' }}></div>

                {/* Round button in the center of the cutout */}
                <button
                  onClick={() => handleApply(job)}
                  className="w-11 h-11 rounded-full bg-[#bae0fd] hover:bg-brand-500 hover:scale-105 text-white flex items-center justify-center shadow-sm transition-all duration-300 group/btn"
                >
                  <svg
                    className="w-4.5 h-4.5 stroke-white stroke-[2.5] transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Popup Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl border border-brand-100 flex flex-col gap-6 relative animate-in scale-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-navy-400 hover:bg-navy-50 hover:text-navy-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-md w-fit">
                <Award className="w-3.5 h-3.5" />
                <span>Job Application Form</span>
              </div>
              <h3 className="font-extrabold text-xl text-navy-950 pr-8 leading-tight">
                Applying for: {selectedJob.title}
              </h3>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal shadow-inner animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-extrabold text-navy-900 text-lg">Application Submitted!</h4>
                  <p className="text-navy-500 text-sm mt-1 max-w-xs">
                    Our agency team will evaluate your profile and contact you at the provided details shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-navy-50/50 border border-brand-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-navy-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-navy-50/50 border border-brand-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-navy-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0912345678"
                      className="w-full bg-navy-50/50 border border-brand-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-navy-900"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                    Experience & Remarks (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your years of experience or training..."
                    className="w-full bg-navy-50/50 border border-brand-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all resize-none text-navy-900"
                  ></textarea>
                </div>

                <div className="flex gap-2 items-start bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-[11px] text-amber-800 leading-normal mt-1">
                  <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Security Notice:</strong> DAERA Agency never requests payment for screening or interview scheduling. Be cautious of recruitment fraud.
                  </p>
                </div>

                <button
                  type="submit"
                  className="gradient-bg-brand text-white text-center py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
