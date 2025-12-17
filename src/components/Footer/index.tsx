"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <footer className="relative z-10 bg-gradient-to-b from-white via-white to-[#FF7A00] pt-8 sm:pt-10 md:pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop View */}
          <div className="hidden md:flex md:flex-wrap md:justify-between pb-8">
            {/* Logo and Social Icons */}
            <div className="w-full md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo/logo.png"
                  alt="BizOn Digital Logo"
                  width={200}
                  height={60}
                  className="w-auto h-10 sm:h-12"
                />
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-900 hover:text-black transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div className="w-full md:w-1/6 mb-6 md:mb-0">
              <h3 className="text-base font-semibold text-gray-800 mb-3">Company</h3>
              <ul className="space-y-1.5">
                <li><Link href="/about" className="text-sm text-gray-700 hover:text-black transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-700 hover:text-black transition-colors">Contact Us</Link></li>
                <li><Link href="/blog" className="text-sm text-gray-700 hover:text-black transition-colors">Blog</Link></li>
                <li><Link href="/services" className="text-sm text-gray-700 hover:text-black transition-colors">Services</Link></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="w-full md:w-1/6 mb-6 md:mb-0">
              <h3 className="text-base font-semibold text-gray-800 mb-3">Services</h3>
              <ul className="space-y-1.5">
                <li><Link href="/services/seo" className="text-sm text-gray-700 hover:text-black transition-colors">SEO</Link></li>
                <li><Link href="/services/paid-ads" className="text-sm text-gray-700 hover:text-black transition-colors">Paid Ads</Link></li>
                <li><Link href="/services/social-media" className="text-sm text-gray-700 hover:text-black transition-colors">Social Media</Link></li>
                <li><Link href="/services/branding" className="text-sm text-gray-700 hover:text-black transition-colors">Branding</Link></li>
                <li><Link href="/services/web-development" className="text-sm text-gray-700 hover:text-black transition-colors">Web Development</Link></li>
                <li><Link href="/services/ecommerce" className="text-sm text-gray-700 hover:text-black transition-colors">E-Commerce</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="w-full md:w-1/6 mb-6 md:mb-0">
              <h3 className="text-base font-semibold text-gray-800 mb-3">Support</h3>
              <ul className="space-y-1.5">
                <li><Link href="/terms" className="text-sm text-gray-700 hover:text-black transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-700 hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="text-sm text-gray-700 hover:text-black transition-colors">Refund Policy</Link></li>
                <li><Link href="/help" className="text-sm text-gray-700 hover:text-black transition-colors">Help Desk</Link></li>
                <li><Link href="/faq" className="text-sm text-gray-700 hover:text-black transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact Actions */}
            <div className="w-full md:w-1/6 mb-6 md:mb-0">
              <h3 className="text-base font-semibold text-gray-800 mb-3">Get Started</h3>
              <div className="space-y-3">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openGetQuote'))}
                  className="w-full text-center bg-[#FF7A00] hover:bg-[#e66d00] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden pb-6 text-center">
            {/* Logo */}
            <div className="mb-5 flex justify-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="BizOn Digital Logo"
                  width={180}
                  height={54}
                  className="w-auto h-10"
                />
              </Link>
            </div>

            {/* Company Section */}
            <div className="mb-3">
              <button
                onClick={() => toggleSection("company")}
                className="w-full flex items-center justify-center py-3 text-center gap-2"
              >
                <h3 className="text-base font-semibold text-gray-800">Company</h3>
                <svg
                  className={`w-5 h-5 text-black transition-transform ${openSection === "company" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === "company" && (
                <ul className="pb-3 space-y-1.5">
                  <li><Link href="/about" className="text-sm text-gray-700 block">About Us</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-700 block">Contact Us</Link></li>
                  <li><Link href="/blog" className="text-sm text-gray-700 block">Blog</Link></li>
                  <li><Link href="/services" className="text-sm text-gray-700 block">Services</Link></li>
                </ul>
              )}
            </div>

            {/* Services Section */}
            <div className="mb-3">
              <button
                onClick={() => toggleSection("services")}
                className="w-full flex items-center justify-center py-3 text-center gap-2"
              >
                <h3 className="text-base font-semibold text-gray-800">Services</h3>
                <svg
                  className={`w-5 h-5 text-black transition-transform ${openSection === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === "services" && (
                <ul className="pb-3 space-y-1.5">
                  <li><Link href="/services/seo" className="text-sm text-gray-700 block">SEO</Link></li>
                  <li><Link href="/services/paid-ads" className="text-sm text-gray-700 block">Paid Ads</Link></li>
                  <li><Link href="/services/social-media" className="text-sm text-gray-700 block">Social Media</Link></li>
                  <li><Link href="/services/branding" className="text-sm text-gray-700 block">Branding</Link></li>
                  <li><Link href="/services/web-development" className="text-sm text-gray-700 block">Web Development</Link></li>
                  <li><Link href="/services/ecommerce" className="text-sm text-gray-700 block">E-Commerce</Link></li>
                </ul>
              )}
            </div>

            {/* Support Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("support")}
                className="w-full flex items-center justify-center py-3 text-center gap-2"
              >
                <h3 className="text-base font-semibold text-gray-800">Support</h3>
                <svg
                  className={`w-5 h-5 text-black transition-transform ${openSection === "support" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === "support" && (
                <ul className="pb-3 space-y-1.5">
                  <li><Link href="/terms" className="text-sm text-gray-700 block">Terms & Conditions</Link></li>
                  <li><Link href="/privacy" className="text-sm text-gray-700 block">Privacy Policy</Link></li>
                  <li><Link href="/refund" className="text-sm text-gray-700 block">Refund Policy</Link></li>
                  <li><Link href="/help" className="text-sm text-gray-700 block">Help Desk</Link></li>
                  <li><Link href="/faq" className="text-sm text-gray-700 block">FAQ</Link></li>
                </ul>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mb-4 space-y-3">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openGetQuote'))}
                className="w-full bg-[#FF7A00] hover:bg-[#e66d00] text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <Link href="#" className="text-gray-900 hover:text-black" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-900 hover:text-black" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-900 hover:text-black" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-900 hover:text-black" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 py-4">
            <p className="text-center text-sm text-gray-800">
              Copyright © 2025 BizOndigital | Developed by BizOndigital
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
