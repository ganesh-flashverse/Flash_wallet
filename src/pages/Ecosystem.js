import React from 'react';
import EcosystemCarousel from './EcosystemCarousel';

const Ecosystem = () => {
  return (
    <div className="pt-8 text-center min-h-screen bg-black text-white w-full">
      <h2 className="text-5xl font-bold text-orange-400 drop-shadow-xl mb-4 inline-block border-b-4 rounded-2xl border-yellow-400/20 glow px-4 py-2">
        Flash Ecosystem
      </h2>
      <EcosystemCarousel />
    
    </div>
  );
};

export default Ecosystem;
