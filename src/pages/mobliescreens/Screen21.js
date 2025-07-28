"use client";
import React from "react";
import {
  FiInfo,
  FiSearch,
  FiFilter,
  FiArrowUpRight,
  FiArrowDownLeft,
  FiChevronDown
} from "react-icons/fi";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { SiSolana, SiPolygon } from "react-icons/si";

const transactions = [
  {
    type: "paid",
    coin: "Ethereum",
    label: "ERC20",
    amount: "$30,000",
    status: "Debited from",
    icon: <FaEthereum size={16} className="text-gray-300" />,
    time: "1 day ago",
    direction: "out",
    statusIcon: <FaEthereum size={14} className="text-white" />,
  },
  {
    type: "received",
    coin: "Solana",
    label: "SOL",
    amount: "$30,000",
    status: "credited from",
    icon: <SiSolana size={16} className="text-gray-300" />,
    time: "1 day ago",
    direction: "in",
    statusIcon: <SiSolana size={14} className="text-green-400" />,
  },
  {
    type: "paid",
    coin: "Bitcoin",
    label: "BTC",
    amount: "$30,000",
    status: "Debited from",
    icon: <FaBitcoin size={16} className="text-gray-300" />,
    time: "1 day ago",
    direction: "out",
    statusIcon: <FaBitcoin size={14} className="text-orange-400" />,
  },
  {
    type: "paid",
    coin: "Polygon",
    label: "MATIC",
    amount: "$30,000",
    status: "Credited from",
    icon: <SiPolygon size={16} className="text-gray-300" />,
    time: "1 day ago",
    direction: "in",
    statusIcon: <SiPolygon size={14} className="text-purple-400" />,
  },
  {
    type: "paid",
    coin: "Ethereum",
    label: "ERC20",
    amount: "$30,000",
    status: "Debited from",
    icon: <FaEthereum size={16} className="text-gray-300" />,
    time: "1 day ago",
    direction: "out",
    statusIcon: <FaEthereum size={14} className="text-white" />,
  },
  {
    type: "received",
    coin: "Solana",
    label: "SOL",
    amount: "$30,000",
    status: "credited from",
    icon: <SiSolana size={16} className="text-gray-300" />,
    time: "1 day ago",
    direction: "in",
    statusIcon: <SiSolana size={14} className="text-green-400" />,
  },
];

const Screen21 = () => {
  return (
    <div className="min-h-screen bg-black w-full max-w-md mx-auto pt-4 pb-4 px-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xl">History</span>
        <div className="flex items-center gap-2">
          <button className="text-white">
            <FiInfo size={20} />
          </button>
        </div>
      </div>

      {/* My statements pill */}
      <div className="flex items-center mb-3">
        <button className="ml-auto bg-[#232323] text-white rounded-full px-4 py-1 text-xs font-semibold flex items-center gap-2 border border-gray-600">
          <FiChevronDown size={14} />
          My statements
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#636363] rounded-xl px-3 py-2 mb-3">
        <FiSearch size={18} className="text-white mr-2" />
        <input
          placeholder="search transaction"
          className="bg-transparent text-white placeholder-white text-sm flex-1 outline-none"
        />
        <FiFilter size={18} className="text-white ml-2" />
      </div>

      {/* Transactions List */}
      <div className="flex-1 overflow-y-auto pb-8">
        {transactions.map((tx, i) => (
          <div
            key={i}
            className="flex items-start py-4 border-b border-[#232323]"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#232323] mt-1 mr-3">
              {tx.direction === "out" ? (
                <FiArrowUpRight size={20} className="text-white" />
              ) : (
                <FiArrowDownLeft size={20} className="text-white" />
              )}
            </span>
            <div className="flex-1">
              <div className="flex gap-1 items-center">
                <span className="text-white font-semibold text-base">
                  {tx.type === "paid" ? "paid to" : "Received from"}
                </span>
                <span className="text-white font-semibold text-base">
                  {tx.coin}
                </span>
                <span className="bg-[#444] text-gray-200 text-[10px] rounded px-1 ml-1 font-medium">
                  {tx.label}
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{tx.time}</div>
            </div>
            <div className="flex flex-col items-end min-w-[100px]">
              <span className="text-white font-semibold text-base">
                {tx.amount}
              </span>
              <div className="flex items-center gap-1 text-xs mt-1">
                <span className="text-gray-400">{tx.status}</span>
                {tx.statusIcon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen21;
