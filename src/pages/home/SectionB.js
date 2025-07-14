import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { SiTether } from 'react-icons/si';

function Demo() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10 mt-8">
          <div className="text-xs text-orange-400 tracking-widest mb-2 font-semibold">JOIN THE REVOLUTION</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Setting a New Standard<br />in Digital Trading
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Our innovative exchange technology delivers unmatched performance, making digital trading more effective.
          </p>
        </div>
        
        

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          {/* Stock Prices Card */}
          <div className="relative bg-black/60 rounded-2xl shadow-xl flex-1 p-7 flex flex-col justify-between min-w-[320px] border border-[#393939] backdrop-blur-lg overflow-hidden" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.65)', border: '1.5px solid rgba(255,255,255,0.07)'}}>
  <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow: '0 0 0 1.5px rgba(255,255,255,0.07)'}}></div>
  <div className="mb-6 relative z-10">
    <div className="text-lg font-semibold mb-5 text-white">Stock Prices</div>
    {/* Bitcoin Row */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl"><FaBitcoin className="text-[#F7931A]" /></span>
        <div>
          <div className="font-semibold text-white">Bitcoin</div>
          <div className="text-xs text-gray-400">BTC · $61,493.37</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-lg text-white">0.289472</div>
        <div className="text-xs font-semibold text-[#FF8C43] flex items-center justify-end">10.55% <span className="ml-1">&#8599;</span></div>
      </div>
    </div>
    {/* Tether Row */}
    <div className="flex items-center justify-between opacity-60">
      <div className="flex items-center gap-3">
        <span className="text-2xl"><SiTether className="text-[#26A17B]" /></span>
        <div>
          <div className="font-semibold text-white">Tether</div>
          <div className="text-xs text-gray-400">USDT · $0.998</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-lg text-white">857.56283</div>
        <div className="text-xs font-semibold text-[#FF8C43] flex items-center justify-end">8.67% <span className="ml-1">&#8599;</span></div>
      </div>
    </div>
  </div>
  <div className="text-sm text-white mt-4 relative z-10">
    <span className="font-bold">Live Data.</span>
    <span className="text-gray-300"> Access up-to-date cryptocurrency prices and transaction volumes for efficient trading.</span>
  </div>
</div>
          {/* Bitcoin Price Card */}
          <div className="relative bg-black/60 rounded-2xl shadow-xl flex-1 p-7 flex flex-col justify-between min-w-[320px] border border-[#393939] backdrop-blur-lg overflow-hidden" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.65)', border: '1.5px solid rgba(255,255,255,0.07)'}}>
  <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow: '0 0 0 1.5px rgba(255,255,255,0.07)'}}></div>
  <div className="mb-6 relative z-10">
    <div className="flex items-center justify-between mb-6">
      <div className="text-base font-semibold text-white opacity-70">Bitcoin Price</div>
      <div className="text-xs bg-[#232323] rounded px-2 py-1 text-gray-400 font-medium">Last 28 days <span className="ml-1">&#9660;</span></div>
    </div>
    <div className="text-4xl font-bold mb-2 text-white tracking-tight">$61,493.37</div>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[#FF8C43] text-sm font-semibold">&#8599; 1,431.37$ (3.37%)</span>
    </div>
    <div className="w-full h-24 flex items-end">
      {/* Simulated glowing graph using SVG */}
      <svg width="100%" height="100%" viewBox="0 0 320 80" fill="none">
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFA726" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFA726" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="url(#glow)"
          strokeWidth="4"
          strokeLinejoin="round"
          points="0,70 40,60 80,65 120,30 160,55 200,20 240,45 280,30 320,55"
          opacity="0.95"
        />
        <circle cx="200" cy="20" r="5" fill="#FFA726" />
        <text x="210" y="18" fontSize="12" fill="#fff" opacity="0.8">$58,675.81</text>
      </svg>
    </div>
  </div>
  <div className="text-sm text-white mt-4 relative z-10">
    <span className="font-bold">Advanced Tools.</span>
    <span className="text-gray-300"> Leverage our advanced analytics to enhance your crypto trading strategy.</span>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
