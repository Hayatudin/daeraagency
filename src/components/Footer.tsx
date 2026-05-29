import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] border-t border-navy-100 pt-16 pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 text-left">
            <a href="#home" className="flex items-center gap-1 group">
              <span className="font-extrabold text-2xl tracking-tight text-navy-950 font-sans">
                DAERA
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0079FE] self-end mb-1.5 animate-pulse-slow"></span>
            </a>
            <p className="text-xs sm:text-sm text-navy-500 leading-relaxed max-w-xs">
              Empowering individuals by connecting them to premium career opportunities abroad. Providing trust, security, and guidance at every stage.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-navy-200 flex items-center justify-center text-navy-500 hover:bg-[#0079FE] hover:border-[#0079FE] hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-navy-200 flex items-center justify-center text-navy-500 hover:bg-[#0079FE] hover:border-[#0079FE] hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-navy-200 flex items-center justify-center text-navy-500 hover:bg-[#0079FE] hover:border-[#0079FE] hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-bold text-[14px] text-navy-950 uppercase tracking-widest mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-navy-500 font-medium">
              <li>
                <a href="#home" className="hover:text-[#0079FE] flex items-center gap-1 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0079FE] flex items-center gap-1 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-[#0079FE] flex items-center gap-1 transition-colors">
                  Featured Jobs
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#0079FE] flex items-center gap-1 transition-colors">
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="text-left">
            <h4 className="font-bold text-[14px] text-navy-950 uppercase tracking-widest mb-5 font-sans">
              Core Verticals
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-navy-500 font-medium">
              <li>Skilled Labor Placement</li>
              <li>Healthcare & Caregiving</li>
              <li>Hospitality & Tourism</li>
              <li>Pre-Departure Training</li>
              <li>Legal Visa Processing</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <h4 className="font-bold text-[14px] text-navy-950 uppercase tracking-widest mb-5 font-sans">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-navy-500 font-medium">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#0079FE] flex-shrink-0 mt-0.5" />
                <span>Bole Area, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#0079FE] flex-shrink-0" />
                <a href="tel:0924054412" className="hover:text-[#0079FE] transition-colors font-sans">
                  0924054412
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#0079FE] flex-shrink-0" />
                <a href="mailto:ziyusheka@gmail.com" className="hover:text-[#0079FE] transition-colors break-all font-sans">
                  ziyusheka@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-100/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-400 font-bold">
          <div>
            <p>&copy; {currentYear} DAERA Agency. All rights reserved.</p>
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-[#0079FE] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0079FE] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
