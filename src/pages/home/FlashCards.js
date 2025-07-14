import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Keyframes for the border glow animation
const glowAnimation = `
  @keyframes borderGlow {
    0% {
      box-shadow: 0 0 5px rgba(249, 115, 22, 0.6), 0 0 10px rgba(249, 115, 22, 0.4);
    }
    50% {
      box-shadow: 0 0 15px rgba(249, 115, 22, 0.8), 0 0 20px rgba(249, 115, 22, 0.6);
    }
    100% {
      box-shadow: 0 0 5px rgba(249, 115, 22, 0.6), 0 0 10px rgba(249, 115, 22, 0.4);
    }
  }
`;

// Insert the keyframes into the document head
const styleElement = document.createElement('style');
styleElement.innerHTML = glowAnimation;
document.head.appendChild(styleElement);

const modules = [
  {
    name: 'Flash Food',
    icon: '🍔',
    description: 'Order food instantly',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    name: 'Flash Ride',
    icon: '🚗',
    description: 'Book rides in seconds',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Flash Grocery',
    icon: '🛒',
    description: 'Fresh groceries delivered',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Flash Video',
    icon: '📺',
    description: 'Stream premium content',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Flash Wallet',
    icon: '💰',
    description: 'Secure crypto wallet',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'FlashPay',
    icon: '💳',
    description: 'Instant payments',
    gradient: 'from-indigo-400 to-purple-500'
  },
  {
    name: 'Flash DEX',
    icon: '📊',
    description: 'Decentralized exchange',
    gradient: 'from-teal-400 to-blue-500'
  },
  {
    name: 'Flash CEX',
    icon: '💹',
    description: 'Centralized trading',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    name: 'Flash NFTs',
    icon: '🎨',
    description: 'Create & trade NFTs',
    gradient: 'from-violet-400 to-purple-500'
  }
];

const FlashCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-black w-full text-white mt-2">
      <motion.div
        className="px-4 sm:px-6 lg:px-8 max-w-full"
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            Your <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Super App</span> for Everything
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Nine powerful modules integrated into one seamless experience. From daily essentials to advanced crypto trading.
          </p>
        </div>

        <div className="mx-auto max-w-screen-xl px-4">
          <Slider {...settings}>
            {modules.map((module, index) => (
              <div key={module.name} className="px-6 py-4">
                <motion.div
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg border border-transparent hover:border-orange-500 relative p-4"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: 'linear-gradient(to bottom right, #27272a, #18181b)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(249, 115, 22, 0.6)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'borderGlow 1.5s infinite';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = 'none';
                  }}
                >
                  <div className="p-8 text-center relative overflow-hidden rounded-full">
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${module.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300 ease-in-out">
                      {module.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {module.name}
                    </h3>
                    <p className="text-zinc-400 mb-8">
                      {module.description}
                    </p>
                    <div className={`inline-block px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r ${module.gradient} text-white shadow-md`}>
                      Coming Soon
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-zinc-400 mb-8">
            Ready to experience the future of super apps?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-[0_10px_20px_rgba(249,115,22,0.6)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Modules
            </motion.button>
            <motion.button
              className="border-2 border-orange-500 text-orange-500 px-10 py-5 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FlashCards;
