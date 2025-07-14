import React from 'react';
import Aurora from './Aurora';
import { ReactComponent as Logo } from './assets/logo.svg';

export function Demo() {
  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col overflow-hidden bg-black">
      {/* Aurora Animated Background */}
      <div className="absolute inset-0 z-0">
        <Aurora />
      </div>

      {/* Glassmorphic Navbar */}
      <div className="relative z-10 w-full flex justify-center px-4 pt-6 pb-2">
        <nav className="w-full max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-10 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo className="h-9 w-9" />
            <span className="font-extrabold text-xl tracking-widest text-orange-400 drop-shadow-md">Flash</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-orange-400 transition duration-300">Home</a>
            <a href="#" className="hover:text-orange-400 transition duration-300">Ecosystem</a>
            <a href="#" className="hover:text-orange-400 transition duration-300">Tokenomics</a>
            <a href="#" className="hover:text-orange-400 transition duration-300">ICO</a>
            <a href="#" className="hover:text-orange-400 transition duration-300">NFTs</a>

            <button className="ml-6 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition duration-300">
              Start Trading
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Button */}
      <div className="flex md:hidden justify-end px-8 pb-2 relative z-10">
        <button className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition duration-300">
          Start Trading
        </button>
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4 relative z-10">
        <div className="relative z-10 pt-16 pb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Step into the Future
            <br />
            <span className="text-orange-400">of Crypto Trading</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto mt-4 mb-10 text-lg md:text-xl leading-relaxed">
            Maximize your potential with a powerful platform <br /> built to shape the future of digital trading.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-20">
            <button className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg hover:shadow-xl transition duration-300">
              Sign Up for Free
            </button>
            <button className="px-8 py-3 rounded-full border border-zinc-700 bg-zinc-900/70 hover:bg-zinc-800 text-orange-400 font-semibold text-base shadow-md hover:shadow-lg transition duration-300">
              Live Demo
            </button>
          </div>
        </div>

        {/* Crypto Icons Row */}
        <div className="flex items-center justify-center gap-16 md:gap-32 relative z-10 pb-12">
          <span className="block">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M32 8L32 56" stroke="#FF8C1A" strokeWidth="4" strokeLinecap="round" />
              <path d="M32 8L12 32L32 40L52 32L32 8Z" fill="#111" stroke="#FF8C1A" strokeWidth="2" />
              <path d="M12 32L32 56L52 32" stroke="#FF8C1A" strokeWidth="2" />
            </svg>
          </span>
          <span className="block animate-pulse">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" fill="#111" stroke="#FF8C1A" strokeWidth="4" />
              <text x="40" y="54" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#FF8C1A" fontFamily="monospace">฿</text>
            </svg>
          </span>
          <span className="block">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <ellipse cx="32" cy="40" rx="24" ry="12" fill="#111" stroke="#FF8C1A" strokeWidth="4" />
              <ellipse cx="32" cy="24" rx="24" ry="12" fill="#111" stroke="#FF8C1A" strokeWidth="4" />
              <rect x="8" y="24" width="48" height="16" fill="#111" stroke="#FF8C1A" strokeWidth="4" />
            </svg>
          </span>
        </div>
      </main>
    </div>
  );
}
