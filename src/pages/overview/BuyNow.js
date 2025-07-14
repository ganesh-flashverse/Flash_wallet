import React, { useState } from 'react';
import { FaEthereum, FaWallet, FaGlobe, FaRegCreditCard } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { SiBinance, SiUplabs } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function BuyNow() {
  const [purchaseAmount, setPurchaseAmount] = useState('0.00');
  const [amountYouGet, setAmountYouGet] = useState('0.00');
  const [usdtWorth, setUsdtWorth] = useState('0.00');
  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [showTooltip, setShowTooltip] = useState({ purchaseAmount: false, amountYouGet: false, usdtWorth: false });

  const handlePurchaseAmountChange = (event) => {
    let value = event.target.value;
    if (parseFloat(value) < 0) {
      value = '0';
    }
    setPurchaseAmount(value);
    const calculatedValue = parseFloat(value) * 100;
    setAmountYouGet(calculatedValue.toFixed(2).toString());
    setUsdtWorth(calculatedValue.toFixed(2).toString());
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const toggleTooltip = (field) => {
    setShowTooltip(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black w-full text-white">
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 p-8"
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Buy Card */}
        <motion.div
          className="flex-1 max-w-lg mx-auto rounded-2xl shadow-lg border border-zinc-700/60 bg-black/60 p-8 flex flex-col gap-4 min-w-[350px] transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.04, boxShadow: "0 10px 20px rgba(249, 115, 22, 0.6)" }}
          onMouseEnter={e => { e.currentTarget.style.animation = 'borderGlow 1.5s infinite'; }}
          onMouseLeave={e => { e.currentTarget.style.animation = 'none'; }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl text-orange-400"><MdOutlineAttachMoney /></span>
            <span className="font-black text-3xl text-white">BUY <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">$UNSD</span></span>
            <span className="text-3xl text-orange-400"><MdOutlineAttachMoney /></span>
          </div>
          <div className="flex justify-between text-lg mb-2">
            <div>
              <div className="text-zinc-400 font-semibold">Total Tokens Sold</div>
              <div className="text-white font-bold">1,082,690,709</div>
            </div>
            <div>
              <div className="text-zinc-400 font-semibold">Price</div>
              <div className="text-white font-bold">$0.010743</div>
            </div>
          </div>
          <div className="flex justify-between text-lg mb-2">
            <span className="text-zinc-400">Amount Raised</span>
            <span className="font-bold text-white">$8,924,644.61</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full border border-zinc-700 rounded-lg p-2 my-2 flex items-center gap-2 bg-zinc-900">
            <span className="text-lg font-bold text-orange-400">Stage</span>
            <span className="font-bold text-lg text-white">20</span>
            <div className="flex-1 mx-2 h-4 bg-zinc-800 border border-zinc-700 rounded-full overflow-hidden">
              <div className="h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{width:'84.93%'}}></div>
            </div>
            <span className="text-lg font-bold text-orange-400">84.93%</span>
          </div>
          <div className="text-center text-lg text-zinc-400 mb-2">Current Stage: <span className="font-semibold text-orange-400">39.52M / 46.53M</span></div>
          {/* Payment Buttons */}
          <div className="flex gap-2 mb-2 flex-wrap justify-center">
            <button
              onClick={() => handleCurrencySelect('ETH')}
              className={`flex items-center gap-1 rounded px-4 py-2 text-lg font-semibold transition-all ${selectedCurrency === 'ETH' ? 'bg-orange-500 text-white' : 'bg-gradient-to-r from-zinc-800 to-zinc-700 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'}`}
            >
              <FaEthereum />ETH
            </button>
            <button
              onClick={() => handleCurrencySelect('BSC')}
              className={`flex items-center gap-1 rounded px-4 py-2 text-lg font-semibold transition-all ${selectedCurrency === 'BSC' ? 'bg-yellow-500 text-white' : 'bg-gradient-to-r from-zinc-800 to-zinc-700 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white'}`}
            >
              <SiBinance />BSC
            </button>
            <button
              onClick={() => handleCurrencySelect('USDT')}
              className={`flex items-center gap-1 rounded px-4 py-2 text-lg font-semibold transition-all ${selectedCurrency === 'USDT' ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-zinc-800 to-zinc-700 border border-green-400 text-green-400 hover:bg-green-500 hover:text-white'}`}
            >
              <FaEthereum />USDT
            </button>
            <button
              onClick={() => handleCurrencySelect('OTHER')}
              className={`flex items-center gap-1 rounded px-4 py-2 text-lg font-semibold transition-all ${selectedCurrency === 'OTHER' ? 'bg-zinc-600 text-white' : 'bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 text-zinc-400 hover:bg-zinc-600 hover:text-white'}`}
            >
              OTHER
            </button>
          </div>
          {/* Purchase Amount Input */}
          <div className=" mt-8border border-zinc-700 rounded-lg p-4 flex items-center justify-between mb-2 bg-zinc-900">
            <span className="text-zinc-400 text-lg">Purchase Amount</span>
            <div className="flex items-center relative group">
              <input
                type="number"
                value={purchaseAmount}
                onChange={handlePurchaseAmountChange}
                min="0"
                className="text-3xl font-bold text-orange-400 bg-transparent outline-none text-right w-32"
                onMouseEnter={() => toggleTooltip('purchaseAmount')}
                onMouseLeave={() => toggleTooltip('purchaseAmount')}
              />
              <span className="text-zinc-400 text-lg ml-2">{selectedCurrency}</span>
              {showTooltip.purchaseAmount && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white text-lg rounded py-1 px-2 whitespace-nowrap">
                  {purchaseAmount}
                </div>
              )}
            </div>
          </div>
          {/* Amount You'll Get & USDT Worth */}
          <div className="flex gap-2 mb-2 mt-8">
            <div className="flex-1 border border-zinc-700 rounded-lg p-3 flex flex-col items-center bg-zinc-900 relative group">
              <span className="text-lg text-zinc-400">Amount You’ll Get</span>
              <div className="relative w-full">
                <span className="block font-bold text-lg text-orange-400 text-center truncate w-24">{amountYouGet}</span>
                {showTooltip.amountYouGet && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white text-lg rounded py-1 px-2 whitespace-nowrap">
                    {amountYouGet}
                  </div>
                )}
              </div>
              <div
                className="absolute inset-0"
                onMouseEnter={() => toggleTooltip('amountYouGet')}
                onMouseLeave={() => toggleTooltip('amountYouGet')}
              ></div>
            </div>
            <div className="flex-1 border border-zinc-700 rounded-lg p-3 flex flex-col items-center bg-zinc-900 relative group">
              <span className="text-lg text-zinc-400">USDT Worth</span>
              <div className="relative w-full">
                <span className="block font-bold text-lg text-orange-400 text-center truncate w-24">{usdtWorth}</span>
                {showTooltip.usdtWorth && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white text-lg rounded py-1 px-2 whitespace-nowrap">
                    {usdtWorth}
                  </div>
                )}
              </div>
              <div
                className="absolute inset-0"
                onMouseEnter={() => toggleTooltip('usdtWorth')}
                onMouseLeave={() => toggleTooltip('usdtWorth')}
              ></div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <motion.button
              className="w-max mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full py-3 px-8 text-xl shadow-lg hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BUY TOKENS
            </motion.button>
          </div>
        </motion.div>
        {/* 4 Steps Instruction */}
        <div className="flex-1 flex flex-col gap-6 justify-center max-w-lg mx-auto">
          <div className="text-3xl font-black text-white mb-2">BUY CRYPTO IN<br />4 STEPS<br /><span className="text-zinc-400 text-xl font-normal">THE Flashverse WAY!</span></div>
          {/* Step 1 */}
          <motion.div
            className="border border-zinc-700 rounded-2xl p-5 flex gap-4 items-start bg-black/60"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 16px rgba(249,115,22,0.15)" }}
          >
            <div className="text-3xl mt-1 text-orange-400"><FaGlobe /></div>
            <div>
              <div className="font-bold text-xl text-white">Step 1</div>
              <div className="font-semibold text-lg text-orange-300">Go to Official Flashverse Page</div>
              <div className="text-lg text-zinc-400 mt-1">Start smart. Always access Flashverse via the official, verified site.<br/>Bookmark the site to avoid phishing scams.</div>
            </div>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            className="border border-zinc-700 rounded-2xl p-5 flex gap-4 items-start bg-black/60"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 16px rgba(249,115,22,0.15)" }}
          >
            <div className="text-3xl mt-1 text-orange-400"><FaWallet /></div>
            <div>
              <div className="font-bold text-xl text-white">Step 2</div>
              <div className="font-semibold text-lg text-orange-300">Connect Your Wallet</div>
              <div className="text-lg text-zinc-400 mt-1">Click “Connect Wallet” to link MetaMask, WalletConnect, Coinbase Wallet, or another supported option.</div>
            </div>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            className="border border-zinc-700 rounded-2xl p-5 flex gap-4 items-start bg-black/60"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 16px rgba(249,115,22,0.15)" }}
          >
            <div className="text-3xl mt-1 text-orange-400"><SiUplabs /></div>
            <div>
              <div className="font-bold text-xl text-white">Step 3</div>
              <div className="font-semibold text-lg text-orange-300">Select Your Payment Method</div>
              <div className="text-lg text-zinc-400 mt-1">Choose your payment method — pay with your preferred crypto via any wallet.</div>
            </div>
          </motion.div>
          {/* Step 4 */}
          <motion.div
            className="border border-zinc-700 rounded-2xl p-5 flex gap-4 items-start bg-black/60"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 16px rgba(249,115,22,0.15)" }}
          >
            <div className="text-3xl mt-1 text-orange-400"><FaRegCreditCard /></div>
            <div>
              <div className="font-bold text-xl text-white">Step 4</div>
              <div className="font-semibold text-lg text-orange-300">Complete Your Purchase</div>
              <div className="text-lg text-zinc-400 mt-1">Review your order and confirm the transaction.<br/>Your purchased crypto will be credited to your wallet.</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
