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
      <div className="bg-navy-900 text-navy-100 py-2.5 px-4 sm:px-6 md:px-8 border-b border-navy-800 text-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-6">
            <a
              href="tel:0924054412"
              className="flex items-center gap-2 hover:text-brand-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>0924054412</span>
            </a>
            <a
              href="mailto:ziyusheka@gmail.com"
              className="flex items-center gap-2 hover:text-brand-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>ziyusheka@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-navy-400">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-brand-500 animate-pulse-slow" />
              Licensed Foreign Employment Agency
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full py-4 px-4 sm:px-6 md:px-8 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-md py-3"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl gradient-bg-brand flex items-center justify-center text-white font-bold shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <span className="font-extrabold text-2xl tracking-wider text-navy-900 group-hover:text-brand-600 transition-colors">
              DAERA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-navy-700 hover:text-brand-600 transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="gradient-bg-brand text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2"
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
            className="absolute top-[90px] right-4 left-4 rounded-2xl glass-effect p-6 shadow-xl border border-white/20 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-semibold text-lg text-navy-800 hover:text-brand-600 transition-colors py-2 border-b border-navy-100/50"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="gradient-bg-brand text-white text-center py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
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
