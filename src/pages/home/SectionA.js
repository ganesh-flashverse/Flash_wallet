import { FaBitcoin } from 'react-icons/fa';
import { SiTether } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMotionDiv, setShowMotionDiv] = useState(false);

  const carouselItems = [
    { icon: '⚡', title: 'Flash Food', description: 'Order in seconds' },
    { icon: '🚗', title: 'Flash Ride', description: 'Ride in seconds' },
    { icon: '💰', title: 'Flash Wallet', description: 'Secure your assets' },
    { icon: '💳', title: 'FlashPay', description: 'Pay in a flash' },
    { icon: '🛒', title: 'Flash Grocery', description: 'Grocery delivered fast' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleExploreFlashClick = () => {
    setShowMotionDiv(true);
  };

  return (
    <div className="pt-16 pb-12 text-center">
      {!showMotionDiv && (
        <>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Step into the Future<br />
            <span className="text-orange-400">of Flash Verse</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto mt-4 mb-10 text-lg md:text-xl leading-relaxed">
            Built to shape the future.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-20">
            <button
              onClick={handleExploreFlashClick}
              className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg hover:shadow-xl transition duration-300"
            >
              Explore Flash
            </button>
            <button className="px-8 py-3 rounded-full border border-zinc-700 bg-zinc-900/70 hover:bg-zinc-800 text-orange-400 font-semibold text-base shadow-md hover:shadow-lg transition duration-300">
              Join ICO
            </button>
          </div>
        </>
      )}

      {showMotionDiv && (
        <motion.div
          className="container mx-auto relative z-10 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full">
            <div className="text-center md:text-left w-full md:w-1/2">
              <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in">
                One App.{' '}
                <span className="text-gradient">Every</span>{' '}
                Possibility.
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Food, Rides, Crypto, Content – All in One Flash.
                <br />
                <span className="text-orange-500 font-semibold">Buy, Ride, Watch, Earn – In a Flash.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <button
                  className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:opacity-90 transition-opacity glow-box"
                >
                  Explore Ecosystem
                </button>
                <button
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Join ICO
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
              <div className="glass-card p-3 rounded-[40px] glow-box">
                <div className="bg-black rounded-[36px] p-4 relative overflow-hidden h-[525px] w-[260px] border">
                  <div className="absolute top-2 w-20 h-6 bg-black rounded-b-lg left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-black h-full rounded-[30px] flex flex-col items-center justify-center pt-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-white px-4"
                      >
                        <div className="text-6xl mb-6">{carouselItems[currentIndex].icon}</div>
                        <div className="text-2xl font-bold mb-2">{carouselItems[currentIndex].title}</div>
                        <div className="text-lg opacity-90">{carouselItems[currentIndex].description}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      )}
    </div>
  );
}
