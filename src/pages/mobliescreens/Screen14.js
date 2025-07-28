"use client";
import React, { useState } from "react";
import { FiArrowLeft, FiGlobe } from "react-icons/fi";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  SiXrp,
  SiBinance,
  SiSolana,
  SiDogecoin,
  SiCardano,
  SiPolygon,
  SiLitecoin,
  SiTether,
  SiChainlink,
  SiZcash,
  SiStellar,
  SiMonero,
  SiDash,
} from "react-icons/si";
import { GiMountainRoad, GiTriangleTarget, GiMeshBall } from "react-icons/gi";
import { BsCheck } from "react-icons/bs";

const networksData = [
  {
    name: "All Networks",
    icon: <FiGlobe size={28} className="text-gray-300" />,
  },
  {
    name: "Bitcoin",
    icon: <FaBitcoin size={28} className="text-[#F7931A]" />,
  },
  {
    name: "Ethereum",
    icon: <FaEthereum size={28} className="text-white" />,
  },
  {
    name: "XRP",
    icon: <SiXrp size={28} className="text-white" />,
  },
  {
    name: "BNB Smart Chain",
    icon: <SiBinance size={28} className="text-[#F3BA2F]" />,
  },
  {
    name: "Solana",
    icon: <SiSolana size={28} className="text-[#00FFA3]" />,
  },
  {
    name: "Dogecoin",
    icon: <SiDogecoin size={28} className="text-[#C2A633]" />,
  },
  {
    name: "Cardano",
    icon: <SiCardano size={28} className="text-[#3CC8C8]" />,
  },
  {
    name: "Polygon",
    icon: <SiPolygon size={28} className="text-[#8247E5]" />,
  },
  {
    name: "Litecoin",
    icon: <SiLitecoin size={28} className="text-[#B4B4B4]" />,
  },
  {
    name: "Tether",
    icon: <SiTether size={28} className="text-[#50AF95]" />,
  },
  {
    name: "Chainlink",
    icon: <SiChainlink size={28} className="text-[#375BD2]" />,
  },
  {
    name: "Zcash",
    icon: <SiZcash size={28} className="text-[#ECB244]" />,
  },
  {
    name: "Stellar",
    icon: <SiStellar size={28} className="text-[#7D00FF]" />,
  },
  {
    name: "Monero",
    icon: <SiMonero size={28} className="text-[#FF6600]" />,
  },
  {
    name: "Dash",
    icon: <SiDash size={28} className="text-[#1C75BC]" />,
  },
  {
    name: "Tron",
    icon: <GiTriangleTarget size={28} className="text-[#F60000]" />,
  },
  {
    name: "Avalanche C-Chain",
    icon: <GiMountainRoad size={28} className="text-[#E84142]" />,
  },
  {
    name: "Arbitrum",
    icon: <GiMeshBall size={28} className="text-blue-400" />,
  },
  {
    name: "Fantom",
    icon: <GiMeshBall size={28} className="text-[#1969FF]" />,
  },
  {
    name: "Opensea",
    icon: <GiMeshBall size={28} className="text-[#2081E2]" />,
  },
];

const Screen14 = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (name) => {
    if (name === "All Networks") {
      if (selected.length === networksData.length - 1) {
        setSelected([]);
      } else {
        setSelected(networksData.filter((n) => n.name !== "All Networks").map((n) => n.name));
      }
    } else {
      if (selected.includes(name)) {
        setSelected(selected.filter((n) => n !== name));
      } else {
        setSelected([...selected, name]);
      }
    }
  };

  const isAllSelected = selected.length === networksData.length - 1;

  return (
    <div className="min-h-screen bg-black flex flex-col w-full max-w-md mx-auto px-4 pt-4">
      {/* Top Bar */}
      <div className="flex items-center mb-5">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow mr-2">
          <FiArrowLeft size={22} />
        </button>
        <span className="flex-1 text-center text-white font-semibold text-base -ml-10">Networks</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#7e7676] rounded-2xl px-3 py-2 mb-4">
        <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" className="mr-2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white placeholder-white text-sm flex-1 outline-none"
        />
      </div>

      {/* Network List */}
      <div className="flex flex-col gap-3 pb-24">
        {networksData.map((net, i) => {
          const isSelected =
            net.name === "All Networks" ? isAllSelected : selected.includes(net.name);
          return (
            <div
              key={i}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSelect(net.name)}
            >
              <div className="flex items-center gap-3">
                {net.icon}
                <span className="text-white text-base font-medium">{net.name}</span>
              </div>
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? "border-blue-500 bg-blue-500" : "border-gray-400"
                }`}
              >
                {isSelected && <BsCheck size={14} className="text-white" />}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Safe Area */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-black max-w-md mx-auto z-10" />
    </div>
  );
};

export default Screen14;
