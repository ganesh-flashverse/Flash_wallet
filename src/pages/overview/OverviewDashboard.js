import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { FaWallet, FaArrowLeft, FaUser, FaTachometerAlt, FaShoppingCart, FaUsers, FaQuestionCircle, FaListOl, FaBars, FaTimes } from 'react-icons/fa';
import BuyNow from './BuyNow';
import Staking from './Staking';
import Referal from './Referal';
import HowToBuy from './HowToBuy';
import Overview from './Overview';
import Profile from './Profile';
import LeaderBoard from './LeaderBoard';
import { motion } from 'framer-motion';
import SidebarItem from './SidebarItem';
import WalletConnect from './WalletConnect';

import React, { useState } from 'react';

export default function OverviewDashboard() {
  const location = useLocation();
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Diagonal Fade Overlay (background only) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(24,24,24,0) 60%, rgba(24,24,24,0.85) 100%)',
        }}
      />
      {/* Right Edge Fade */}
      <div
        className="pointer-events-none fixed top-0 right-0 h-full w-16 z-0"
        style={{
          background: 'linear-gradient(to left, rgba(24,24,24,0.5), transparent)',
        }}
      />
      {/* Bottom Edge Fade */}
      <div
        className="pointer-events-none fixed left-0 bottom-0 w-full h-16 z-0"
        style={{
          background: 'linear-gradient(to top, rgba(24,24,24,0.5), transparent)',
        }}
      />
      <motion.header
        className="w-full flex items-center justify-between px-4 md:px-8 py-4 border-b border-orange-400/10 bg-gradient-to-r from-zinc-900/80 to-black/90 backdrop-blur-xl z-50 shadow-xl fixed top-0 left-0 right-0"
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-orange-400 hover:text-white transition-all mr-3"
            onClick={() => setMobileDrawerOpen(true)}
          >
            <FaBars />
          </button>
          <span className="text-2xl md:text-3xl font-extrabold text-orange-400 tracking-widest drop-shadow-xl flex items-center gap-2">
            <span className="inline-block w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-orange-500 via-yellow-400 to-orange-700 shadow-lg flex items-center justify-center mr-2">
              <FaTachometerAlt className="text-white text-lg md:text-2xl" />
            </span>
            <span className="hidden sm:inline">Cryptolink</span>
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <NavLink to="/overviewdashboard/profile" className="text-xl md:text-2xl text-orange-400 hover:text-white transition-all">
            <FaUser />
          </NavLink>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-2xl font-semibold shadow hover:shadow-[0_10px_20px_rgba(249,115,22,0.2)] transition-all text-sm md:text-md flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setWalletModalOpen(true)}
          >
            <FaWallet className="text-sm md:text-lg" /> 
            <span className="hidden sm:inline">Connect Wallet</span>
            <span className="sm:hidden">Connect</span>
          </motion.button>
        </div>
      </motion.header>

      {/* Glassy Sidebar - Premium */}
      <motion.aside
        className="hidden md:flex flex-col items-center bg-zinc-950/80 border-r border-orange-400/10 w-65 min-h-screen pt-24 gap-2 shadow-2xl fixed top-0 left-0 z-40 backdrop-blur-xl"
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center gap-2 w-full px-2">
          <SidebarItem icon={<FaTachometerAlt />} label="Overview" to="/overviewdashboard/overview" activePaths={["/overviewdashboard/overview", "/overviewdashboard"]} />
          <SidebarItem icon={<FaShoppingCart />} label="Buy Now" to="/overviewdashboard/buynow" />
          <SidebarItem icon={<FaWallet />} label="Staking" to="/overviewdashboard/staking" />
          <SidebarItem icon={<FaUsers />} label="Referral" to="/overviewdashboard/referal" />
          <SidebarItem icon={<FaListOl />} label="Leaderboard" to="/overviewdashboard/leaderboard" />
          <SidebarItem icon={<FaQuestionCircle />} label="How to Buy" to="/overviewdashboard/howtobuy" badge="NEW" />
          <div className="w-full px-2">
            <SidebarItem icon={<FaUser />} label="Profile" to="/overviewdashboard/profile" />
          </div>
        </div>
        <div className="flex-1" />
        <div className="mb-8 w-full px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full px-4 py-3 rounded-xl font-semibold text-lg mb-1 border border-transparent transition-all flex items-center gap-3 ${
                isActive ? 'bg-orange-500/20 text-orange-400 shadow-orange-400/30 shadow' : 'hover:bg-zinc-800/60 text-zinc-200'
              }`
            }
          >
            <FaArrowLeft className="text-xl" /> <span className="ml-2">Back to Home</span>
          </NavLink>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Drawer */}
      {mobileDrawerOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setMobileDrawerOpen(false)}
          />
          
          {/* Drawer */}
          <motion.aside
            className="fixed top-0 left-0 h-full w-80 bg-zinc-950/95 border-r border-orange-400/20 z-[70] md:hidden backdrop-blur-xl shadow-2xl"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-orange-400/10">
              <span className="text-xl font-bold text-orange-400 flex items-center gap-2">
                <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 via-yellow-400 to-orange-700 shadow-lg flex items-center justify-center">
                  <FaTachometerAlt className="text-white text-lg" />
                </span>
                Cryptolink
              </span>
              <button
                className="text-2xl text-orange-400 hover:text-white transition-all"
                onClick={() => setMobileDrawerOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Drawer Navigation */}
            <div className="flex flex-col gap-2 p-4 pt-6">
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaTachometerAlt />} label="Overview" to="/overviewdashboard/overview" activePaths={["/overviewdashboard/overview", "/overviewdashboard"]} />
              </div>
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaShoppingCart />} label="Buy Now" to="/overviewdashboard/buynow" />
              </div>
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaWallet />} label="Staking" to="/overviewdashboard/staking" />
              </div>
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaUsers />} label="Referral" to="/overviewdashboard/referal" />
              </div>
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaListOl />} label="Leaderboard" to="/overviewdashboard/leaderboard" />
              </div>
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaQuestionCircle />} label="How to Buy" to="/overviewdashboard/howtobuy" badge="NEW" />
              </div>
              <div onClick={() => setMobileDrawerOpen(false)}>
                <SidebarItem icon={<FaUser />} label="Profile" to="/overviewdashboard/profile" />
              </div>
            </div>
            
            {/* Drawer Footer */}
            <div className="absolute bottom-8 left-4 right-4">
              <div onClick={() => setMobileDrawerOpen(false)}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-xl font-semibold text-lg mb-1 border border-transparent transition-all flex items-center gap-3 ${
                      isActive ? 'bg-orange-500/20 text-orange-400 shadow-orange-400/30 shadow' : 'hover:bg-zinc-800/60 text-zinc-200'
                    }`
                  }
                >
                  <FaArrowLeft className="text-xl" /> <span className="ml-2">Back to Home</span>
                </NavLink>
              </div>
            </div>
          </motion.aside>
        </>
      )}

      {/* WalletConnect Modal Overlay */}
      {walletModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-[2px]">
          <div className="absolute inset-0" onClick={() => setWalletModalOpen(false)} />
          <div className="relative z-10">
            <WalletConnect onClose={() => setWalletModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content - Adjusted for fixed header and sidebar */}
      <main className="flex-1 flex flex-col items-center justify-start bg-black w-full pt-20 pl-0 md:pl-64 px-4 md:px-0">
        <Routes>
          <Route path="/overviewdashboard/overview" element={<Overview />} />
          <Route path="/overviewdashboard/buynow" element={<BuyNow />} />
          <Route path="/overviewdashboard/staking" element={<Staking />} />
          <Route path="/overviewdashboard/referal" element={<Referal />} />
          <Route path="/overviewdashboard/leaderboard" element={<LeaderBoard />} />
          <Route path="/overviewdashboard/howtobuy" element={<HowToBuy />} />
          <Route path="/overviewdashboard/profile" element={<Profile />} />
          <Route path="/overviewdashboard/walletconnect" element={<WalletConnect />} />
          <Route path="/overviewdashboard" element={<Overview />} />
          <Route path="*" element={<div className="text-3xl text-red-600 font-bold mt-20">Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}
