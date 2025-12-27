"use client";
import React from "react";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import {
  FaCcVisa,
  FaCcMastercard,
  FaBitcoin,
  FaRegCreditCard,
} from "react-icons/fa";
import {
  SiBinance,
  SiSimpleicons,
  SiTransifex,
  SiMonero,
  SiMinutemailer,
} from "react-icons/si";

const providers = [
  {
    name: "MoonPay",
    btc: "0.00143 BTC",
    icon: <FaBitcoin size={16} className="text-white" />,
    recommended: true,
  },
  {
    name: "Banxa",
    btc: "0.001391 BTC",
    icon: <SiSimpleicons size={16} className="text-white" />,
  },
  {
    name: "Binance Connect",
    btc: "0.001324 BTC",
    icon: <SiBinance size={16} className="text-yellow-400" />,
  },
  {
    name: "Transak",
    btc: "0.001317 BTC",
    icon: <SiTransifex size={16} className="text-blue-400" />,
  },
  {
    name: "Mercuryo",
    btc: "0.001295 BTC",
    icon: <SiMonero size={16} className="text-orange-500" />,
  },
  {
    name: "Simplex",
    btc: "0.001292 BTC",
    icon: <SiMinutemailer size={16} className="text-green-400" />,
  },
];

const Screen23 = () => {
  return (
    <div className="min-h-screen bg-black w-full max-w-md mx-auto flex flex-col pt-4 pb-6 px-4">
      {/* Top Bar */}
      <div className="flex items-center mb-6">
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow mr-2">
          <FiArrowLeft size={22} />
        </button>
        <span className="flex-1 text-center text-white font-semibold text-base -ml-10">
          Payment method
        </span>
      </div>

      {/* Pay with Card */}
      <div className="mb-2">
        <span className="text-gray-300 text-sm font-medium">Pay with</span>
        <div className="flex items-center bg-[#18181b] rounded-xl px-4 py-3 mt-2 border border-gray-600">
          <span className="w-8 h-8 rounded-full bg-[#232323] flex items-center justify-center mr-3">
            <FaRegCreditCard size={16} className="text-white" />
          </span>
          <span className="text-white font-medium flex-1">Card</span>
          <FiChevronDown size={20} className="text-gray-400 ml-2" />
        </div>
      </div>

      {/* Recommended */}
      <div className="mt-5 mb-1">
        <span className="text-gray-400 text-sm font-medium">Recommended</span>
        <div className="flex items-center bg-[#18181b] rounded-xl px-4 py-3 mt-2 border border-gray-600">
          <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gray-500">
            {providers[0].icon}
          </span>
          <span className="text-white font-semibold ml-3 flex-1">
            {providers[0].name}
          </span>
          <span className="text-white font-semibold">{providers[0].btc}</span>
        </div>
      </div>

      {/* Other Providers */}
      <div className="mt-4 mb-2">
        <span className="text-gray-400 text-sm font-medium">
          Other providers
        </span>
        <div className="flex flex-col gap-3 mt-2">
          {providers.slice(1).map((p) => (
            <div
              key={p.name}
              className="flex items-center bg-[#18181b] rounded-xl px-4 py-3 border border-gray-600"
            >
              <span className="w-8 h-8 rounded-full bg-[#232323] flex items-center justify-center">
                {p.icon}
              </span>
              <span className="text-white font-semibold ml-3 flex-1">
                {p.name}
              </span>
              <span className="text-white font-semibold">{p.btc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen23;
