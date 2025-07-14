import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaSearchDollar,
  FaChartArea,
  FaCalculator,
  FaEthereum,
  FaCoins,
  FaUsers,
  FaDollarSign,
  FaPercentage,
  FaChartLine,
} from "react-icons/fa";
import { MdOutlineAttachMoney, MdTrendingUp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Referal() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-black w-full text-white rounded-2xl">
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-y-10 py-10 px-2"
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Token Balance */}
        <motion.div
          className="rounded-2xl shadow-lg border border-zinc-700 bg-black/60 flex flex-col justify-between p-6 transition-all duration-300 cursor-pointer"
          style={{ width: "450px", height: "250px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 10px 20px rgba(249, 116, 22, 0.42)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaCoins className="text-orange-400" />
            <span className="text-orange-400 font-semibold cursor-pointer text-lg">
              Token Balance
            </span>
            <FaWallet className="text-zinc-400 ml-auto text-xl" />
          </div>
          <div className="text-4xl font-black mb-2 text-white">0.00</div>
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <span>Token Worth</span>
            <span className="font-semibold">$0.00</span>
            <span className="mx-2">|</span>
            <span>Worth at Launch</span>
            <span className="font-semibold">$0.00</span>
          </div>
        </motion.div>
        {/* Referral Earnings */}
        <motion.div
          className="rounded-2xl shadow-lg border border-zinc-700 bg-black/60 flex flex-col justify-between p-6 transition-all duration-300 cursor-pointer"
          style={{ width: "450px", height: "250px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 10px 20px rgba(249, 116, 22, 0.42)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaUsers className="text-orange-400" />
            <span className="text-orange-400 font-semibold cursor-pointer text-lg">
              Referral Earnings
            </span>
            <FaSearchDollar className="text-zinc-400 ml-auto text-xl" />
          </div>
          <div className="text-4xl font-black mb-2 text-orange-400">0.00</div>
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <span>Referrals</span>
            <span className="font-semibold">$0.00</span>
          </div>
        </motion.div>
        {/* Buy $UNSD */}
        <motion.div
          className="rounded-2xl shadow-lg border border-zinc-700 bg-black/60 flex flex-col gap-2 p-6 transition-all duration-300 cursor-pointer"
          style={{ width: "450px", height: "250px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 10px 20px rgba(249, 116, 22, 0.42)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaDollarSign className="text-orange-400" />
            <span className="text-orange-400 font-semibold cursor-pointer text-lg">
              BUY $UNSD
            </span>
            <MdOutlineAttachMoney className="text-zinc-400 ml-auto text-xl" />
          </div>
          <div className="flex flex-col gap-1 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm">Total Tokens Sold</span>
              <span className="font-semibold ml-auto">1,082,690,709</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Price</span>
              <span className="font-semibold ml-auto">$0.010743</span>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <span className="text-sm text-zinc-400">Amount Raised</span>
            <div className="font-semibold text-orange-400 text-lg">$8,924,644.61</div>
          </div>
          <div className="flex justify-center">
            <motion.button
              className="w-24 mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full py-1 text-sm shadow-lg hover:shadow-[0_10px_20px_rgba(249,115,22,0.6)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("buynow")}
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
        {/* Stage Progress */}
        <motion.div
          className="rounded-2xl shadow-lg border border-zinc-700 bg-black/60 flex flex-col p-6 transition-all duration-300 cursor-pointer"
          style={{ width: "450px", height: "250px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 10px 20px rgba(249, 116, 22, 0.42)",
          }}
        >
          <div className="flex items-center gap-2">
            <FaChartLine className="text-orange-400" />
            <span className="text-orange-400 font-semibold cursor-pointer text-lg">
              STAGE PROGRESS
            </span>
            <FaChartArea
              className="text-zinc-400 ml-auto text-xl"
              style={{ background: "transparent" }}
            />
          </div>
          <div className="w-full flex items-center justify-center flex-grow">
            <svg width="100%" height="60" viewBox="0 0 260 60" fill="none">
              <polyline
                points="0,55 20,50 40,48 60,35 80,40 100,30 120,37 140,20 160,33 180,18 200,35 220,30 240,36 260,22"
                stroke="#FF8C43"
                strokeWidth="3"
                fill="none"
              />
              <polyline
                points="0,59 20,56 40,55 60,45 80,48 100,40 120,46 140,30 160,40 180,28 200,45 220,40 240,44 260,34"
                stroke="#fff"
                strokeWidth="2"
                opacity="0.25"
                fill="none"
              />
            </svg>
          </div>
          {/* Progress Bar at the bottom */}
          <div className="w-full rounded-lg p-2 flex items-center gap-2">
            <span className="text-sm font-bold text-orange-400">Stage</span>
            <span className="font-bold text-lg text-white">20</span>
            <div className="flex-1 mx-2 h-4 bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden">
              <div
                className="h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl"
                style={{ width: "84.93%" }}
              ></div>
            </div>
            <span className="text-sm font-bold text-orange-400">84.93%</span>
          </div>
        </motion.div>
        {/* Calculate This Profit */}
        <motion.div
          className="rounded-2xl shadow-lg border border-zinc-700 bg-black/60 flex flex-col gap-2 p-6 transition-all duration-300 cursor-pointer"
          style={{ width: "450px", height: "250px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 10px 20px rgba(249, 116, 22, 0.42)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <MdTrendingUp className="text-orange-400" />
            <span className="text-orange-400 font-semibold cursor-pointer text-lg">
              CALCULATE THIS PROFIT
            </span>
            <FaCalculator className="text-zinc-400 ml-auto text-xl" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-2xl text-zinc-400 mb-2">Coming Soon</div>
            <div className="text-sm text-zinc-400">
              Estimate your profit based on your token holdings.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
