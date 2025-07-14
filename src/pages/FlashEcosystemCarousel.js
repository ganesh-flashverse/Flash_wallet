import React, { useState, useEffect, useRef } from 'react';
import { FaRocket, FaLock, FaExchangeAlt, FaWallet, FaStream, FaUtensils, FaTaxi, FaAppleAlt, FaCoins, FaChartLine, FaUserShield, FaVideo, FaHandHoldingUsd } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const slides = [
  {
    title: "Flash App",
    description: "All-in-One Super App",
    icon: FaRocket,
    borderColor: "border-orange-400/20",
    items: [
      { icon: FaUtensils, title: "Flash Food", description: "Order food instantly", color: "text-orange-300", borderColor: "border-orange-400/20" },
      { icon: FaTaxi, title: "Flash Ride", description: "Book rides in seconds", color: "text-blue-300", borderColor: "border-blue-400/20" },
      { icon: FaAppleAlt, title: "Flash Grocery", description: "Fresh groceries delivered", color: "text-green-300", borderColor: "border-green-400/20" },
    ],
  },
  {
    title: "Flash CEX",
    description: "Centralized Crypto Exchange",
    icon: FaLock,
    borderColor: "border-pink-400/20",
    details: "Trade crypto with ease on a secure and user-friendly platform. Access spot trading, portfolio tracking, and fiat on-ramp services.",
    icons: [FaCoins, FaChartLine],
  },
  {
    title: "Flash DEX",
    description: "Decentralized Exchange",
    icon: FaExchangeAlt,
    borderColor: "border-teal-400/20",
    details: "Swap tokens directly from your wallet, without intermediaries. Powered by smart contracts for full control and privacy.",
    icons: [FaCoins, FaUserShield],
  },
  {
    title: "Flash Wallet",
    description: "Your Secure Digital Wallet",
    icon: FaWallet,
    borderColor: "border-yellow-400/20",
    details: "Store, send, and receive crypto securely. Supports multi-chain assets with easy backup and recovery.",
    icons: [FaCoins, FaUserShield],
  },
  {
    title: "Flash Stream",
    description: "Stream & Earn",
    icon: FaStream,
    borderColor: "border-purple-400/20",
    details: "Watch, stream, and earn crypto rewards. A new era of decentralized content monetization.",
    icons: [FaVideo, FaHandHoldingUsd],
  },
];

const Slide = ({ children, variants, transition }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

const AnimatedIcon = ({ icon: Icon, variants, transition, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
      transition={transition}
    >
      <Icon className={className} />
    </motion.div>
  );
};

const FlashEcosystemCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTransition = { duration: 0.5 };
  const slideVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === slides.length) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(0)`;
          setTimeout(() => {
            carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
          }, 10);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 10);
    } else {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-3/4 mx-auto overflow-hidden">
      <div className="flex" ref={carouselRef} style={{ transition: 'transform 0.5s ease-in-out' }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Slide variants={index === 0 ? { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } } : slideVariants} transition={slideTransition}>
              <div className={`p-6 flex flex-col items-center justify-center min-h-[400px] ${slide.borderColor} rounded-2xl w-6/6 mx-auto border`}>
                <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-1 flex items-center gap-2">
                  <AnimatedIcon icon={slide.icon} variants={iconVariants} transition={slideTransition} className="inline-block text-4xl" /> {slide.title}
                </h3>
                <div className="text-lg text-orange-200 mb-6">{slide.description}</div>
                {slide.items ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-xl">
                    {slide.items.map((item, i) => (
                      <div key={i} className={`bg-white/10 rounded-xl p-5 flex flex-col items-center shadow ${item.borderColor} glass-card`}>
                        <AnimatedIcon icon={item.icon} variants={iconVariants} transition={slideTransition} className={`text-3xl ${item.color} mb-2`} />
                        <div className="font-bold text-orange-100 mb-1">{item.title}</div>
                        <div className="text-zinc-200 text-sm mb-1">{item.description}</div>
                        <div className="text-xs text-orange-400 mt-2">Coming Soon</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`bg-white/10 rounded-xl p-6 shadow ${slide.borderColor} max-w-md`}>
                    <div className="text-zinc-200 mb-2">{slide.details}</div>
                    <div className="flex justify-center mt-4">
                      {slide.icons.map((Icon, i) => (
                        <AnimatedIcon key={i} icon={Icon} variants={iconVariants} transition={slideTransition} className="text-2xl text-pink-300 mx-2" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Slide>
          </div>
        ))}
        {/* Duplicate the first slide to create a seamless loop */}
        <div className="w-full flex-shrink-0">
          <Slide variants={slideVariants} transition={slideTransition}>
            <div className={`p-6 flex flex-col items-center justify-center min-h-[400px] ${slides[0].borderColor} rounded-2xl w-6/6 mx-auto border`}>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-1 flex items-center gap-2">
                <AnimatedIcon icon={slides[0].icon} variants={iconVariants} transition={slideTransition} className="inline-block text-4xl" /> {slides[0].title}
              </h3>
              <div className="text-lg text-orange-200 mb-6">{slides[0].description}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl">
                {slides[0].items.map((item, i) => (
                  <div key={i} className={`bg-white/10 rounded-xl p-5 flex flex-col items-center shadow ${item.borderColor} glass-card`}>
                    <AnimatedIcon icon={item.icon} variants={iconVariants} transition={slideTransition} className={`text-3xl ${item.color} mb-2`} />
                    <div className="font-bold text-orange-100 mb-1">{item.title}</div>
                    <div className="text-zinc-200 text-sm mb-1">{item.description}</div>
                    <div className="text-xs text-orange-400">Coming Soon</div>
                  </div>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default FlashEcosystemCarousel;
