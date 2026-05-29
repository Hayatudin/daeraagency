import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0079FE] bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full w-fit">
                Contact Info
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight font-sans">
                Get In Touch With <br />Our Certified Agents
              </h2>
              <p className="text-navy-500 text-sm sm:text-base leading-relaxed">
                Have questions about working abroad, legal requirements, or current contracts? Message us directly or visit our Bole head office. Our team responds within 24 hours.
              </p>
            </div>

            {/* Quick Contact Card List */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 p-5 rounded-[1.8rem] bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-[#0079FE] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5.5 h-5.5 text-[#0079FE]" />
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[10px] text-navy-400 font-extrabold uppercase tracking-wider">Call Agent</span>
                  <a href="tel:0924054412" className="text-base font-black text-navy-950 hover:text-[#0079FE] transition-colors font-sans">
                    0924054412
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-[1.8rem] bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 fill-current text-emerald-600" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.405.002 9.761-4.353 9.764-9.766.002-2.623-1.017-5.088-2.872-6.944C16.39 2.037 13.91 1.016 11.29 1.016c-5.412 0-9.768 4.354-9.771 9.768-.002 1.802.49 3.57 1.42 5.124l-.993 3.624 3.702-.972zm13.115-7.14c-.218-.109-1.288-.636-1.487-.71-.199-.074-.344-.109-.49.109-.145.218-.563.71-.69.854-.127.14-.253.158-.47.05-2.222-.88-3.527-1.95-4.42-3.485-.236-.407.236-.378.675-1.253.072-.14.036-.263-.018-.372-.054-.109-.49-1.18-.67-1.618-.176-.425-.354-.367-.49-.374-.125-.007-.27-.009-.413-.009-.144 0-.377.054-.576.273-.198.218-.755.738-.755 1.8 0 1.062.772 2.087.88 2.232.108.145 1.52 2.32 3.68 3.25.515.221.917.354 1.23.454.517.165.987.141 1.36.084.414-.063 1.288-.526 1.467-1.034.18-.507.18-.941.127-1.033-.053-.09-.199-.145-.417-.254z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[10px] text-navy-400 font-extrabold uppercase tracking-wider">WhatsApp Calling</span>
                  <a href="https://wa.me/251924054412" target="_blank" rel="noopener noreferrer" className="text-base font-black text-navy-950 hover:text-[#0079FE] transition-colors font-sans">
                    +251 924 054 412
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-[1.8rem] bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-[#0079FE] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5.5 h-5.5 text-[#0079FE]" />
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[10px] text-navy-400 font-extrabold uppercase tracking-wider">Email Inquiry</span>
                  <a href="mailto:ziyusheka@gmail.com" className="text-base font-black text-navy-950 hover:text-[#0079FE] transition-colors break-all font-sans">
                    ziyusheka@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-[1.8rem] bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-[#0079FE] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5.5 h-5.5 text-[#0079FE]" />
                </div>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[10px] text-navy-400 font-extrabold uppercase tracking-wider">Office Location</span>
                  <span className="text-sm font-black text-navy-950 leading-snug font-sans">
                    Bole Area, Sub City, Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Response Pledge */}
            <div className="flex gap-3 items-center text-xs font-semibold text-navy-500 bg-brand-50/50 border border-navy-100/50 p-4 rounded-2xl mt-2">
              <Clock className="w-4 h-4 text-[#0079FE] flex-shrink-0 animate-pulse-slow" />
              <span>Response Time Guarantee: Under 24 Business Hours</span>
            </div>
          </div>

          {/* Map Column (replaces form) */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] overflow-hidden border border-navy-100 shadow-sm h-[380px] lg:h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d390.99973492329735!2d38.68584766842883!3d8.979823775800353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1780038109580!5m2!1sen!2set"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
