import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const revealVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    zoomIn: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    zoomOut: { opacity: 0, scale: 1.15, transition: { duration: 0.35, ease: 'easeIn' } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
      setHasPlayed(true);
    }, 750);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float bg-orange-500"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float bg-orange-500" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-orange-500"></div>
      </div>

      {/* Initial State: Glassmorphism Card with Title + Play Button */}
      {!hasPlayed && (
        <div className="flex flex-col items-center justify-center w-full z-10 relative">
          {/* Glassmorphism Card */}
          <motion.div
            className="glassmorphism-card p-8 rounded-xl flex flex-col items-center justify-center w-full"
            style={{ zIndex: 20, height: '100vh' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-12" style={{ background: 'linear-gradient(to right, #FF8C00, #FF4500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Flash Verse
            </h1>
            <motion.button
              className="mt-2 p-0.5 rounded-full bg-orange-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/40 transition-all"
              whileHover={{ scale: 1.1, boxShadow: '0 0 0 8px #FFA50022' }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlay}
              aria-label="Reveal Hero Content"
              role="button"
              disabled={isPlaying}
              style={{
                pointerEvents: isPlaying ? 'none' : 'auto',
                opacity: isPlaying ? 0.7 : 1,
                background: 'linear-gradient(to right, #FF8C00, #FF4500)',
                padding: '15px 30px',
                borderRadius: '50px',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              <span className="flex items-center justify-center w-20 h-20 bg-white rounded-full text-orange-500 text-4xl font-bold animate-pulse">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#FFA500" fillOpacity="0.1" />
                  <polygon points="14,11 26,18 14,25" fill="#FFA500"/>
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* CSS for Glassmorphism Effect */}
      <style jsx>{`
        .glassmorphism-card {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          padding: 2rem;
          width: 100%;
        }
      `}</style>

      {/* Animate the rest of the content in with zoomIn/zoomOut */}
      <AnimatePresence>
        {isPlaying && !hasPlayed && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 bg-black w-full"
            initial="hidden"
            animate="zoomIn"
            exit="zoomOut"
            variants={revealVariants}
            style={{ minHeight: '100vh' }}
          />
        )}
      </AnimatePresence>

      {/* Full Hero content after animation */}
      {hasPlayed && (
        <motion.div
          className="container mx-auto px-6 py-32 relative z-10 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full">
            {/* Existing Content */}
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

            {/* 3D Phone Mockup Area */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="glass-card p-3 rounded-[40px] glow-box">
                <div className="bg-black rounded-[36px] p-4 relative overflow-hidden h-[525px] w-[260px]">
                  {/* Notch/Camera Cutout */}
                  <div className="absolute top-2 w-20 h-6 bg-black rounded-b-lg left-1/2 transform -translate-x-1/2"></div>
                  {/* Screen Content */}
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in w-full" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">9+</div>
              <div className="text-sm text-gray-300">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">Web3</div>
              <div className="text-sm text-gray-300">Native</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">$FLASH</div>
              <div className="text-sm text-gray-300">Token</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">ICO</div>
              <div className="text-sm text-gray-300">Live Now</div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
