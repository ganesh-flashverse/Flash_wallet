import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaSearchDollar } from 'react-icons/fa';

export default function Profile() {
  return (
    <motion.section
      className="min-h-screen w-md bg-black text-white flex flex-col justify-center items-center px-2 py-2 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Diagonal Fade Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(24,24,24,0) 60%, rgba(24,24,24,0.85) 100%)',
        }}
      />
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 border border-zinc-700/40 shadow-2xl p-10 mt-12">
        <h2 className="text-3xl font-black mb-8 text-orange-400 drop-shadow">Profile</h2>
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-zinc-400 mb-1 font-semibold">Name</label>
            <input className="w-full border border-zinc-700 bg-zinc-900 rounded-2xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-semibold">Email</label>
            <input className="w-full border border-zinc-700 bg-zinc-900 rounded-2xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-semibold">Wallet Address</label>
            <input className="w-full border border-zinc-700 bg-zinc-900 rounded-2xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all" type="text" placeholder="Wallet Address" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Token Balance */}
            <motion.div
              className="border border-zinc-700 rounded-2xl p-6 flex flex-col justify-between min-h-[120px] bg-black/60 shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(249, 115, 22, 0.6)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-lg text-orange-400">Token Balance</div>
                <FaWallet className="text-2xl text-orange-400" />
              </div>
              <div className="text-3xl font-black text-white mb-3">0.00</div>
              <motion.button
                className="border border-orange-400 rounded-full px-5 py-2 text-sm font-semibold text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONNECT WALLET
              </motion.button>
            </motion.div>
            {/* Referral Earnings */}
            <motion.div
              className="border border-zinc-700 rounded-2xl p-6 flex flex-col justify-between min-h-[120px] bg-black/60 shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(249, 115, 22, 0.6)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-lg text-orange-400">Referral Earnings</div>
                <FaSearchDollar className="text-2xl text-orange-400" />
              </div>
              <div className="text-3xl font-black text-white mb-3">0.00</div>
              <motion.button
                className="border border-orange-400 rounded-full px-5 py-2 text-sm font-semibold text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONNECT WALLET
              </motion.button>
            </motion.div>
          </div>
          <motion.button
            type="submit"
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-3xl py-3 px-6 text-lg shadow-lg hover:shadow-[0_10px_20px_rgba(249,115,22,0.6)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Update Profile
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
