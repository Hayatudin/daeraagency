"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Globe, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Jobs", href: "#jobs" },
    { name: "Destinations", href: "#destinations" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#FAF9F6] text-navy-600 py-2 px-4 sm:px-6 md:px-8 border-b border-navy-100/50 text-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 font-medium">
          <div className="flex items-center gap-6">
            <a
              href="tel:0924054412"
              className="flex items-center gap-2 hover:text-[#0079FE] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0079FE]" />
              <span>0924054412</span>
            </a>
            <a
              href="mailto:ziyusheka@gmail.com"
              className="flex items-center gap-2 hover:text-[#0079FE] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0079FE]" />
              <span>ziyusheka@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-navy-500">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-accent-teal animate-pulse-slow" />
              Licensed Foreign Employment Agency
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full py-5 px-4 sm:px-6 md:px-8 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-sm py-4 border-b border-navy-100/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo in HireNest. styling */}
          <a href="#home" className="flex items-center gap-1 group">
            <span className="font-extrabold text-2xl tracking-tight text-navy-950 font-sans">
              DAERA
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0079FE] self-end mb-1.5 animate-pulse-slow"></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-[13px] text-navy-600 hover:text-navy-950 tracking-tight transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA in Thrive styling */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-[#0079FE] hover:bg-[#0263e2] text-white px-6 py-2.5 rounded-full font-bold text-[13px] hover:shadow-lg hover:shadow-brand-500/20 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-navy-800 hover:bg-navy-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute top-[105px] right-4 left-4 rounded-2xl glass-effect p-6 shadow-xl border border-white/20 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bold text-base text-navy-800 hover:text-[#0079FE] transition-colors py-2 border-b border-navy-100/50"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#0079FE] hover:bg-[#0263e2] text-white text-center py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
