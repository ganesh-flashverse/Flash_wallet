import { motion } from 'framer-motion';


export default function HowToBuy() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-start py-16 px-4 text-white w-full">
      {/* Heading Card */}
      <motion.div
        className="max-w-3xl w-full border border-orange-400 rounded-2xl p-10 mt-8 mb-16 text-center bg-gradient-to-br from-zinc-900 to-black shadow-2xl"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
          Buy crypto in 4 Steps<br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">– The FLASHVERSE Way!</span>
        </div>
        <div className="text-base md:text-lg text-zinc-400 font-medium">
          New to crypto? No worries. We make it easy, fast, and secure to buy USDT and more — with The Flashverse AI.
        </div>
      </motion.div>
      {/* Step 1 Section */}
      <motion.div
        className="w-full max-w-2xl flex flex-col items-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
      >
        <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-center drop-shadow">Step 1</div>
        <div className="text-xl md:text-2xl font-bold text-white mb-2 text-center">Go to Official Flashverse Page</div>
        {/* Checkerboard placeholder for image */}
        <div className="w-72 h-36 bg-[repeating-linear-gradient(45deg,_#27272a_0_20px,_#18181b_20px_40px)] border border-orange-400 rounded-xl mb-4"></div>
        <motion.div
          className="border border-orange-400 rounded-2xl p-6 w-full text-left text-lg font-semibold bg-gradient-to-br from-zinc-900 to-black text-zinc-200"
          whileHover={{ scale: 1.03, boxShadow: "0 4px 16px rgba(249,115,22,0.15)" }}
        >
          Start smart. Always access Flashverse via the official, verified site. Bookmark the site to avoid phishing scams.
        </motion.div>
      </motion.div>

     
    </section>
  );
}
