import { FaDollarSign, FaSearchDollar, FaTrophy, FaWallet, FaLink, FaQuestionCircle, FaUserFriends, FaGift, FaHistory, FaListOl } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Referal() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black w-full text-white">
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Top Left: Earn with Referrals */}
        <motion.div
          className="border border-transparent bg-gradient-to-br from-zinc-900 to-black p-px rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
        >
          <div className="rounded-[2.4rem] p-8 flex flex-col justify-between min-h-[210px] bg-gradient-to-br from-zinc-900 to-black">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FaGift className="text-orange-400" />
                  <span className="font-black text-2xl text-white mb-1">Earn $UNSD<br/>– With Referrals</span>
                </div>
                <div className="font-semibold text-xl text-orange-300">Get rewards for your friend's purchases!</div>
                <div className="text-sm text-zinc-400 mt-2">Share your referral link and instantly get 10% amount of $UNSD from each of your referral's transaction</div>
              </div>
              <FaDollarSign className="text-3xl text-orange-400 ml-2" />
            </div>
          </div>
        </motion.div>

        {/* Top Right: Your Referral */}
        <motion.div
          className="border border-transparent bg-gradient-to-br from-zinc-900 to-black p-px rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
        >
          <div className="rounded-[2.4rem] p-8 flex flex-col justify-between min-h-[210px] bg-gradient-to-br from-zinc-900 to-black">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FaUserFriends className="text-orange-400" />
                <span className="font-bold text-xl text-white">Your Referral</span>
              </div>
              <FaSearchDollar className="text-2xl text-orange-400" />
            </div>
            <div className="text-4xl font-bold text-orange-400 mb-3">0</div>
            <div className="flex justify-center">
              <button className="border-2 border-orange-300 rounded-full px-5 py-2 text-lg font-semibold text-orange-400 hover:bg-orange-500 hover:text-white transition-all w-max">
                <FaWallet className="inline mr-2" /> CONNECT WALLET
              </button>
            </div>
          </div>
        </motion.div>

        {/* Middle Left: Recent Referral Activity */}
        <motion.div
          className="border border-transparent bg-gradient-to-br from-zinc-900 to-black p-px rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
        >
          <div className="rounded-[2.4rem] p-8 flex flex-col min-h-[290px] bg-gradient-to-br from-zinc-900 to-black">
            <div className="flex items-center gap-2">
              <FaHistory className="text-orange-400" />
              <span className="font-bold text-xl text-white">Recent Referral Activity</span>
            </div>
            <div className="text-sm text-zinc-400 mb-4">There are no finalized transactions yet.</div>
          </div>
        </motion.div>

        {/* Middle Right: Top Referrers */}
        <motion.div
          className="border border-transparent bg-gradient-to-br from-zinc-900 to-black p-px rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
        >
          <div className="rounded-[2.4rem] p-8 flex flex-col min-h-[290px] bg-gradient-to-br from-zinc-900 to-black">
            <div className="flex items-center gap-2">
              <FaListOl className="text-orange-400" />
              <span className="font-bold text-xl text-white">Top Referrers</span>
            </div>
            <div className="text-sm text-zinc-400 mb-4">Climb the leaderboard by referring friends and earn more rewards.</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-400">#1</span>
                  <span className="text-white">0xb6e4...596</span>
                </div>
                <div className="text-white">65 Referrals</div>
                <div className="text-orange-400">$243,965.48</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-400">#2</span>
                  <span className="text-white">0x0c13...bd6</span>
                </div>
                <div className="text-white">17 Referrals</div>
                <div className="text-orange-400">$121,408.92</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-400">#3</span>
                  <span className="text-white">0xeba5...873</span>
                </div>
                <div className="text-white">9 Referrals</div>
                <div className="text-orange-400">$110,053.92</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-400">#4</span>
                  <span className="text-white">0xa265...cc8</span>
                </div>
                <div className="text-white">13 Referrals</div>
                <div className="text-orange-400">$102,151.51</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-400">#5</span>
                  <span className="text-white">0x82b1...6a2</span>
                </div>
                <div className="text-white">7 Referrals</div>
                <div className="text-orange-400">$92,425.69</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left: Referral Link and How it works */}
        <motion.div
          className="border border-transparent bg-gradient-to-br from-zinc-900 to-black p-px rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
        >
          <div className="rounded-[2.4rem] p-8 flex flex-col min-h-[290px] bg-gradient-to-br from-zinc-900 to-black">
            <div className="flex items-center gap-2">
              <FaLink className="text-orange-400" />
              <span className="font-bold text-xl text-white">Referral Link</span>
            </div>
            <div className="text-sm text-zinc-400 mb-4">Copy and share your unique link with your friends & community to start collecting your rewards today.</div>
            <button className="border-2 border-orange-300 rounded-full px-5 py-2 text-lg font-semibold text-orange-400 hover:bg-orange-500 hover:text-white transition-all w-max mb-6">
              <FaWallet className="inline mr-2" /> CONNECT WALLET
            </button>
            <div className="font-bold text-xl text-white mb-2 mt-2">How it works?</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <div className="font-bold text-xl text-orange-400">1</div>
                <div className="font-semibold text-sm text-white mb-1">Connect Your Wallet</div>
                <div className="text-sm text-zinc-400 text-center"><FaWallet className="inline mr-1" /> Connect your wallet and get your unique referral link to share.</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-xl text-orange-400">2</div>
                <div className="font-semibold text-sm text-white mb-1">Refer Your Friends</div>
                <div className="text-sm text-zinc-400 text-center"><FaUserFriends className="inline mr-1" /> Share your link – every purchase links their wallet to you.</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-xl text-orange-400">3</div>
                <div className="font-semibold text-sm text-white mb-1">Earn Rewards</div>
                <div className="text-sm text-zinc-400 text-center"><FaGift className="inline mr-1" /> Share your referral link – earn instant rewards from your referrals.</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right: Referral Earnings */}
        <motion.div
          className="border border-transparent bg-gradient-to-br from-zinc-900 to-black p-px rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
        >
          <div className="rounded-[2.4rem] p-8 flex flex-col justify-between min-h-[290px] bg-gradient-to-br from-zinc-900 to-black">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FaDollarSign className="text-orange-400" />
                <span className="font-bold text-xl text-white">Referral Earnings</span>
              </div>
              <FaTrophy className="text-2xl text-orange-400" />
            </div>
            <div className="text-4xl font-bold text-orange-400 mb-1">0.00</div>
            <div className="text-xl font-bold text-white mb-3">$UNSD</div>
            <div className="flex justify-center">
              <button className="border-2 border-orange-300 rounded-full px-5 py-2 text-lg font-semibold text-orange-400 hover:bg-orange-500 hover:text-white transition-all w-max">
                <FaWallet className="inline mr-2" /> CONNECT WALLET
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
