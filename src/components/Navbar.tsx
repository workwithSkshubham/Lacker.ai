"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050510]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Lacker<span className="gradient-text">.ai</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25">
              Get Started Free
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 dark:border-white/5">
            <div className="flex flex-col gap-3">
              <a href="#features" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <div className="flex flex-col gap-2 mt-2 px-3">
                <button className="py-2 text-sm text-gray-700 dark:text-gray-300">Sign In</button>
                <button className="py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">Get Started Free</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
