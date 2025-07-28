"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiInfo, FiDelete, FiCheck, FiMinus } from "react-icons/fi";

const keypad = [
  ["1", "2", "3", "-"],
  ["4", "5", "6", "]"],
  ["7", "8", "9", "del"],
  [",", "0", ".", "ok"],
];

const Screen17 = () => {
  const [amount, setAmount] = useState("0");

  const handleKeypad = (val) => {
    if (val === "del") {
      setAmount(amount.length > 1 ? amount.slice(0, -1) : "0");
    } else if (val === "ok") {
      // Confirm action here
    } else if (val && val !== "") {
      setAmount(amount === "0" ? val : amount + val);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto px-4 pt-4">
      {/* Top Bar */}
      <div className="flex items-center mb-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow mr-2">
          <FiArrowLeft size={22} />
        </button>
        <div className="flex-1 flex flex-col items-center -ml-10">
          <span className="text-white font-semibold text-base leading-tight">Sell XRP</span>
          <span className="text-gray-300 text-xs font-semibold">COIN <span className="mx-1">|</span> XRP</span>
        </div>
        <button className="flex items-center bg-[#222] rounded px-2 py-1 mr-2">
          <span className="fi fi-us w-5 h-5 mr-1"><img src="https://flagcdn.com/us.svg" alt="US" className="w-5 h-5 rounded" /></span>
        </button>
        <FiInfo size={20} className="text-white" />
      </div>
      {/* Balance and Amount */}
      <div className="flex flex-col items-center mt-10 mb-8">
        <span className="text-gray-300 text-sm mb-2">Balance: 0 XRP</span>
        <span className="text-white font-semibold text-4xl sm:text-5xl">{amount} XRP</span>
      </div>
      {/* Sell Button */}
      <button className="w-full bg-[#a259f7] rounded-xl text-white font-semibold text-lg py-3 mb-8 active:bg-purple-700 transition">Sell</button>
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
            disabled={key === ""}
          >
            {key === "del" ? (
              <FiDelete size={24} />
            ) : key === "ok" ? (
              <FiCheck size={24} />
            ) : key === "-" ? (
              <FiMinus size={24} />
            ) : (
              key
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Screen17;
