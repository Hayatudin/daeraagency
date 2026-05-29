import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-50 border-t border-brand-100 pt-16 pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl gradient-bg-brand flex items-center justify-center text-white font-bold shadow-md shadow-brand-500/20">
                D
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-navy-900">
                DAERA
              </span>
            </div>
            <p className="text-sm text-navy-600 leading-relaxed">
              Empowering individuals by connecting them to premium career opportunities abroad. Providing trust, security, and guidance at every stage.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-navy-900 mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-brand-500">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm text-navy-600">
              <li>
                <a href="#home" className="hover:text-brand-600 flex items-center gap-1 transition-colors">
                  Home <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-600 flex items-center gap-1 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-brand-600 flex items-center gap-1 transition-colors">
                  Featured Jobs
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-brand-600 flex items-center gap-1 transition-colors">
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h4 className="font-bold text-navy-900 mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-brand-500">
              Core Verticals
            </h4>
            <ul className="space-y-3.5 text-sm text-navy-600">
              <li>Skilled Labor Placement</li>
              <li>Healthcare & Caregiving</li>
              <li>Hospitality & Tourism</li>
              <li>Pre-Departure Training</li>
              <li>Legal Visa Processing</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-navy-900 mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-brand-500">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-navy-600">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Bole Area, Sub City, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <a href="tel:0924054412" className="hover:text-brand-600 font-medium transition-colors">
                  0924054412
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <a href="mailto:ziyusheka@gmail.com" className="hover:text-brand-600 font-medium transition-colors break-all">
                  ziyusheka@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-200/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-500">
          <div className="flex items-center gap-1.5 font-medium">
          </div>
          <div>
            <p>&copy; {currentYear} DAERA Agency. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
