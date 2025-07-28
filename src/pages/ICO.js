import React, { useState, useEffect, useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Calculator,
  Shield,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";




const Card = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-zinc-900/70 border border-zinc-700/40 rounded-xl p-4 md:p-6 backdrop-blur-lg w-full">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
          <Clock className="text-orange-500" size={20} />
          <h3 className="text-lg md:text-xl font-bold text-white">ICO Ends In</h3>
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-orange-500/20 rounded-lg p-2 md:p-4 border border-orange-500/30"
            >
              <div className="text-lg md:text-2xl font-bold text-white">
                {timeLeft[unit]}
              </div>
              <div className="text-gray-300 capitalize text-xs md:text-sm">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const ICO = () => {
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("ETH");

  const calculateTokens = (amount) => {
    const baseRate = 1000;
    let bonus = 0;

    if (amount >= 1000) bonus = 25;
    else if (amount >= 500) bonus = 15;
    else if (amount >= 100) bonus = 5;

    const baseTokens = amount * baseRate;
    const bonusTokens = (baseTokens * bonus) / 100;
    return {
      baseTokens,
      bonusTokens,
      totalTokens: baseTokens + bonusTokens,
      bonus,
    };
  };

  const tokenData = purchaseAmount
    ? calculateTokens(parseFloat(purchaseAmount) || 0)
    : null;

  const tokenomicsData = [
    { name: "Public Sale", value: 30, color: "#FF6384" },
    { name: "Team & Founders", value: 20, color: "#36A2EB" },
    { name: "Marketing", value: 15, color: "#FFCE56" },
    { name: "Ecosystem Growth", value: 10, color: "#4BC0C0" },
    { name: "Liquidity", value: 8, color: "#9966FF" },
    { name: "Advisors", value: 5, color: "#FF9F40" },
    { name: "Reserve", value: 5, color: "#00C49F" },
    { name: "Staking Rewards", value: 5, color: "#FF8042" },
    { name: "Airdrops", value: 2, color: "#8B5CF6" },
  ];

  return (
    <div className="min-h-screen bg-black w-full">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Card>
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text mb-4 px-2">
              The Future is Flash
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4">
              Buy $FLASH — Own the future of decentralized ecosystems
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg text-base md:text-lg">
                Buy Tokens Now
              </button>
              <button className="w-full sm:w-auto border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-6 rounded-lg text-base md:text-lg">
                Whitepaper
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <div className="mb-8 md:mb-12">
            <CountdownTimer />
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-2 md:px-10">
            <Card>
              <div className="bg-white/5 border border-orange-500/30 rounded-xl p-4 md:p-6 backdrop-blur-lg">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <Calculator className="text-orange-500" size={20} />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Buy FLASH Tokens
                  </h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm md:text-base">
                      Purchase Amount (USD)
                    </label>
                    <input
                      type="number"
                      value={purchaseAmount}
                      onChange={(e) => setPurchaseAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full p-3 bg-white/5 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm md:text-base">
                      Payment Method
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full p-3 bg-zinc-900/70 border border-orange-500/30 rounded-lg text-white text-sm md:text-base"
                    >
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="BNB">BNB</option>
                      <option value="CARD">Credit Card</option>
                    </select>
                  </div>

                  {tokenData && (
                    <div className="bg-orange-500/10 p-3 md:p-4 rounded-lg border border-orange-500/30">
                      <h4 className="text-white font-bold mb-2 text-sm md:text-base">
                        Token Calculation
                      </h4>
                      <div className="space-y-1 text-xs md:text-sm">
                        <p className="text-gray-300">
                          Base Tokens: {tokenData.baseTokens.toLocaleString()}{" "}
                          FLASH
                        </p>
                        {tokenData.bonus > 0 && (
                          <>
                            <p className="text-green-400">
                              Bonus ({tokenData.bonus}%): +
                              {tokenData.bonusTokens.toLocaleString()} FLASH
                            </p>
                            <div className="bg-green-500/20 px-2 py-1 rounded text-green-400 text-xs inline-block">
                              🎉 Tier Bonus Unlocked!
                            </div>
                          </>
                        )}
                        <p className="text-orange-500 font-bold text-base md:text-lg">
                          Total: {tokenData.totalTokens.toLocaleString()} FLASH
                        </p>
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base md:text-lg py-3 rounded-lg font-semibold">
                    Buy Tokens
                  </button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="bg-white/5 border border-orange-500/30 rounded-xl p-4 md:p-6 backdrop-blur-lg w-full lg:w-[100%]">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <Users className="text-orange-500" size={20} />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Token Sale Progress
                  </h3>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="h-3 md:h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[65%]"></div>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-gray-300">
                    <span>65% Sold</span>
                    <span>35% Remaining</span>
                  </div>

                  <p className="text-center text-gray-300 text-sm md:text-base">
                    Join 10,000+ investors already in the Flashverse
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Target className="text-orange-500" size={20} />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Token Stage
                  </h3>
                </div>

                <div
                  className="flex items-center gap-2 md:gap-4 px-2 md:px-4 py-4 md:py-6 border"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <span
                    className="text-white text-sm md:text-lg font-medium whitespace-nowrap"
                    style={{ letterSpacing: 0.5 }}
                  >
                    Stage{" "}
                    <span className="text-orange-400 font-semibold">22</span>
                  </span>
                  <div className="flex-1 mx-2 md:mx-4 relative h-5 md:h-7 bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 relative"
                      style={{
                        width: "50%",
                        boxShadow: "0 0 18px 2px rgba(249, 115, 22, 0.7)",
                        borderRadius: 6,
                        transition: "width 0.6s cubic-bezier(.4,2,.6,1)",
                      }}
                    />
                  </div>
                  <span className="text-white text-sm md:text-lg font-medium whitespace-nowrap">
                    50.94%
                  </span>
                </div>
                <div
                  className="text-center pt-2 md:pt-3 text-sm md:text-[1.15rem] px-2"
                  style={{ color: "#b6b6b6" }}
                >
                  Current Stage:{" "}
                  <span className="text-orange-400 font-semibold">
                    17.34M
                  </span>{" "}
                  / 41.34M
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card>
          <div className="bg-white/5 border border-orange-500/30 rounded-xl p-4 md:p-6 backdrop-blur-lg mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <TrendingUp className="text-orange-500" size={20} />
              <h3 className="text-xl md:text-2xl font-bold text-white">Bonus Tiers</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-3 md:p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-yellow-400 font-bold text-sm md:text-base">Early Bird</h4>
                <p className="text-white text-sm md:text-base">$1000+ → 25% Bonus</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-3 md:p-4 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 font-bold text-sm md:text-base">Tier 1</h4>
                <p className="text-white text-sm md:text-base">$500+ → 15% Bonus</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-3 md:p-4 rounded-lg border border-green-500/30">
                <h4 className="text-green-400 font-bold text-sm md:text-base">Tier 2</h4>
                <p className="text-white text-sm md:text-base">$100+ → 5% Bonus</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 p-3 text-center text-white font-bold z-50 md:hidden">
        🚀 Flash Token Sale Live – <span className="underline">Buy Now</span>
      </div>
    </div>
  );
};

export default ICO;
