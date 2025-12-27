"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiChevronRight, FiChevronDown, FiDelete, FiCheck, FiMinus } from "react-icons/fi";
import { FaBitcoin, FaCcVisa, FaCcMastercard } from "react-icons/fa";

const keypad = [
  ["1", "2", "3", "-"],
  ["4", "5", "6", "]"],
  ["7", "8", "9", "del"],
  [",", "0", ".", "ok"],
];

const Screen15 = () => {
  const [amount, setAmount] = useState("150");

  const handleKeypad = (val) => {
    if (val === "del") {
      setAmount(amount.length > 1 ? amount.slice(0, -1) : "0");
    } else if (val === "ok") {
      // Confirm action here
      alert("Confirmed amount: " + amount);
    } else {
      setAmount(amount === "0" ? val : amount + val);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto px-4 pt-4">
      {/* Top Bar */}
      <div className="flex items-center mb-6">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow mr-2">
          <FiArrowLeft size={22} />
        </button>
        <span className="flex-1 text-center text-white font-semibold text-base -ml-10">Buy Crypto</span>
      </div>

      {/* Amount Section */}
      <div className="flex flex-col items-center mb-2">
        <div className="flex items-end">
          <span className="text-white font-bold text-6xl leading-none">{amount}</span>
          <span className="text-white text-lg font-semibold ml-2 mb-2 flex items-center">
            USD <FiChevronDown size={18} className="ml-1" />
          </span>
        </div>
        <span className="text-gray-400 text-sm mt-2">0.00143 BTC</span>
      </div>

      {/* Payment Options */}
      <div className="bg-black rounded-xl overflow-hidden mt-6 mb-4 divide-y divide-gray-800">
        <div className="flex items-center px-3 py-3">
          <FaBitcoin size={22} className="text-[#F7931A] mr-2" />
          <span className="text-white text-base font-medium">BTC</span>
          <span className="ml-auto">
            <FiChevronRight size={22} className="text-gray-400" />
          </span>
        </div>
        <div className="flex items-center px-3 py-3">
          <div className="flex items-center">
            <FaCcVisa size={28} className="text-[#1A1F71] ml-1" />
            <FaCcMastercard size={28} className="text-[#EB001B] ml-2 mr-3" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-white text-base font-medium">Card</span>
            <span className="text-gray-400 text-xs">With MoonPay</span>
          </div>
          <FiChevronRight size={22} className="text-gray-400" />
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="w-full bg-[#a259f7] rounded-xl text-white font-semibold text-lg py-3 mb-6 active:bg-purple-700 transition">
        Buy Now
      </button>

      {/* Keypad */}
      <div className="grid grid-cols-4 gap-5 max-w-xs mx-4 mb-2">
        {keypad.flat().map((key, i) => (
          <button
            key={i}
            className={`h-12 flex items-center justify-center text-white text-2xl font-bold rounded-full
              ${key === "ok" ? "bg-[#4f3cc9]" : ""}
              ${key === "del" ? "" : ""}
              ${key === "-" ? "" : ""}
            `}
            onClick={() => handleKeypad(key)}
          >
            {key === "del" ? (
              <FiDelete size={26} />
            ) : key === "ok" ? (
              <FiCheck size={26} />
            ) : key === "-" ? (
              <FiMinus size={26} />
            ) : (
              key
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Screen15;
