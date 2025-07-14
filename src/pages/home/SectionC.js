import React, { useState, useEffect, useRef } from 'react';
import { FaEthereum, FaBitcoin, FaMonero, FaDashcube, FaViacoin, FaCoins } from 'react-icons/fa';
import { SiTether, SiLitecoin, SiRipple, SiDogecoin, SiStellar, SiZcash, SiChainlink } from 'react-icons/si';

export default function SectionC() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16 relative overflow-hidden mt-2">
      {/* Glow effect behind the cube */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-96 h-96 rounded-full bg-orange-500 opacity-20 blur-3xl" />
      </div>

      {/* Header */}
      <div className="text-center z-10 mb-16">
        <div className="text-xs md:text-sm text-orange-400 tracking-widest mb-2 font-semibold uppercase">400 Cryptocurrencies</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 drop-shadow-xl">Entire Crypto Universe</h1>
      </div>

      {/* 3D Cube */}
      <div className="relative flex items-center justify-center mb-16 z-10" style={{ perspective: '1000px' }}>
        <RotatingCube />
      </div>

      {/* Crypto Icons Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 z-10 max-w-5xl mt-16">
        {[
          FaBitcoin, FaMonero, SiTether, SiLitecoin, SiRipple, SiDogecoin, SiStellar, SiZcash, SiChainlink, FaDashcube, FaViacoin, FaCoins
        ].map((Icon, i) => (
          <span key={i} className="bg-zinc-900/70 rounded-xl p-2 shadow-md border border-zinc-800 flex items-center justify-center text-2xl text-orange-300">
            <Icon />
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="text-zinc-300 text-center max-w-xl mx-auto text-base md:text-lg z-10">
        Experience a comprehensive selection of cryptocurrencies available on our platform. Manage your investments with confidence and enhance your returns with meticulous precision.
      </div>
    </div>
  );
}

function RotatingCube() {
  const [rotation, setRotation] = useState({ x: 20, y: 20 });
  const cubeRef = useRef(null);

  useEffect(() => {
    let x = rotation.x;
    let y = rotation.y;
    let vx = 0.05;
    let vy = 0.07;
    let rafId;

    const animate = () => {
      vx += (Math.random() - 0.5) * 0.01;
      vy += (Math.random() - 0.5) * 0.01;

      vx = Math.max(Math.min(vx, 0.1), -0.1);
      vy = Math.max(Math.min(vy, 0.1), -0.1);

      x += vx;
      y += vy;

      setRotation({ x, y });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [rotation]);

  return (
    <div
      ref={cubeRef}
      className="w-40 h-40"
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x * 10}deg) rotateY(${rotation.y * 10}deg)`,
        transition: 'transform 0.5s ease-out'
      }}
    >
      <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/80 to-zinc-900 rounded-2xl shadow-[0_0_60px_10px_rgba(255,140,67,0.5)] flex items-center justify-center border-4 border-orange-400/30" style={{ transform: 'rotateY(0deg) translateZ(60px)' }}>
        <FaEthereum className="text-7xl text-orange-400 drop-shadow-[0_0_30px_rgba(255,140,67,0.7)]" />
      </div>
      <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/80 to-zinc-900 rounded-2xl flex items-center justify-center shadow-[0_0_60px_10px_rgba(255,140,67,0.5)] border-4 border-orange-400/30" style={{ transform: 'rotateY(90deg) translateZ(60px)' }}>
        <FaBitcoin className="text-7xl text-orange-400" />
      </div>
      <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/80 to-zinc-900 rounded-2xl flex items-center justify-center shadow-[0_0_60px_10px_rgba(255,140,67,0.5)] border-4 border-orange-400/30" style={{ transform: 'rotateY(180deg) translateZ(60px)' }}>
        <FaMonero className="text-7xl text-orange-400" />
      </div>
      <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/80 to-zinc-900 rounded-2xl flex items-center justify-center shadow-[0_0_60px_10px_rgba(255,140,67,0.5)] border-4 border-orange-400/30" style={{ transform: 'rotateY(-90deg) translateZ(60px)' }}>
        <SiTether className="text-7xl text-orange-400" />
      </div>
      <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/80 to-zinc-900 rounded-2xl flex items-center justify-center shadow-[0_0_60px_10px_rgba(255,140,67,0.5)] border-4 border-orange-400/30" style={{ transform: 'rotateX(90deg) translateZ(60px)' }}>
        <SiRipple className="text-7xl text-orange-400" />
      </div>
      <div className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/80 to-zinc-900 rounded-2xl flex items-center justify-center shadow-[0_0_60px_10px_rgba(255,140,67,0.5)] border-4 border-orange-400/30" style={{ transform: 'rotateX(-90deg) translateZ(60px)' }}>
        <FaDashcube className="text-7xl text-orange-400" />
      </div>
    </div>
  );
}
