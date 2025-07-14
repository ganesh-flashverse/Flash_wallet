import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRocket, FaLock, FaExchangeAlt, FaWallet, FaStream, FaUtensils, FaTaxi, FaAppleAlt, FaCoins, FaChartLine, FaUserShield, FaVideo, FaHandHoldingUsd } from 'react-icons/fa';

const slides = [
  {
    name: 'Flash App',
    icon: <FaRocket className="text-orange-400" />,
    description: 'All-in-One Super App',
    modules: [
      { icon: <FaUtensils className="text-orange-300" />, name: 'Flash Food', description: 'Order food instantly' },
      { icon: <FaTaxi className="text-blue-300" />, name: 'Flash Ride', description: 'Book rides in seconds' },
      { icon: <FaAppleAlt className="text-green-300" />, name: 'Flash Grocery', description: 'Fresh groceries delivered' },
    ],
  },
  {
    name: 'Flash CEX',
    icon: <FaLock className="text-pink-400" />,
    description: 'Centralized Crypto Exchange',
    details: 'Trade crypto with ease on a secure and user-friendly platform. Access spot trading, portfolio tracking, and fiat on-ramp services.',
    icons: [<FaCoins className="text-yellow-400" />, <FaChartLine className="text-blue-400" />],
  },
  {
    name: 'Flash DEX',
    icon: <FaExchangeAlt className="text-teal-400" />,
    description: 'Decentralized Exchange',
    details: 'Swap tokens directly from your wallet, without intermediaries. Powered by smart contracts for full control and privacy.',
    icons: [<FaCoins className="text-yellow-400" />, <FaUserShield className="text-orange-400" />],
  },
  {
    name: 'Flash Wallet',
    icon: <FaWallet className="text-yellow-400" />,
    description: 'Your Secure Digital Wallet',
    details: 'Store, send, and receive crypto securely. Supports multi-chain assets with easy backup and recovery.',
    icons: [<FaCoins className="text-yellow-400" />, <FaUserShield className="text-orange-400" />],
  },
  {
    name: 'Flash Stream',
    icon: <FaStream className="text-purple-400" />,
    description: 'Stream & Earn',
    details: 'Watch, stream, and earn crypto rewards. A new era of decentralized content monetization.',
    icons: [<FaVideo className="text-pink-300" />, <FaHandHoldingUsd className="text-green-400" />],
  },
];

const EcosystemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="w-full py-12 bg-black">
      <div className="mx-auto max-w-7xl px-1">
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={slide.name} className="px-2  py-4">
              <motion.div
                className={` border-zinc-900 premium-glass-card py-6 px-2 shadow-lg rounded-2xl border-2 border-transparent hover:border-zinc-600 transition-all duration-300 flex flex-col items-center min-h-[420px] ${idx === 2 ? 'z-20 scale-105' : 'z-10 scale-95'}`}
                whileHover={{ scale: 1.07, boxShadow: "0 10px 28px 0 rgba(249, 116, 22, 0.14)" }}
              >
                <div className="flex flex-col items-center mb-4 ">
                  <div className="text-5xl mb-3 drop-shadow-xl">{slide.icon}</div>
                  <h3 className="text-2xl font-bold text-orange-300 mb-1">{slide.name}</h3>
                  <div className="text-base text-zinc-300 mb-2">{slide.description}</div>
                </div>
                {slide.modules ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-2">
                    {slide.modules.map((mod, i) => (
                      <div key={mod.name} className="bg-zinc-900/70 rounded-xl p-3 flex flex-col items-center border border-zinc-800 shadow text-center">
                        <div className="text-2xl mb-1">{mod.icon}</div>
                        <div className="font-bold text-orange-100 mb-1 text-sm">{mod.name}</div>
                        <div className="text-zinc-200 text-xs mb-1">{mod.description}</div>
                        <div className="text-xs text-orange-400">Coming Soon</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-zinc-900/70 rounded-xl p-5 shadow border border-zinc-800 max-w-sm w-full mx-auto mb-2">
                    <div className="text-zinc-200 mb-2 text-sm text-center">{slide.details}</div>
                    <div className="flex justify-center mt-2">
                      {slide.icons.map((icon, i) => (
                        <span key={i} className="mx-1 text-xl">{icon}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-4">
                  <span className="inline-block px-6 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md uppercase tracking-widest">Flashverse</span>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EcosystemCarousel;
