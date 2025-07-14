import React from 'react';
import { FaTrophy, FaCrown, FaUser } from 'react-icons/fa';

const leaderboardData = [
  {
    address: '0x2222...5c1',
    rank: 'Whale',
    icon: '🐋',
    total: '$3,927,234.34',
    miners: 0,
    holdings: '142,291,099.60',
    isTop: true,
  },
  {
    address: '0x578e...ea4',
    rank: 'Whale',
    icon: '🐋',
    total: '$3,114,349.50',
  },
  {
    address: '0x4e5a...b57',
    rank: 'Whale',
    icon: '🐋',
    total: '$2,106,902.05',
  },
  {
    address: '0x8798...8ce',
    rank: 'Whale',
    icon: '🐋',
    total: '$1,686,905.65',
  },
  {
    address: '0x0c13...bd6',
    rank: 'Whale',
    icon: '🐋',
    total: '$1,580,118.23',
  },
];

const yourPlace = {
  address: '0x8a7E...911',
  rank: 'Crab',
  icon: '🦀',
  total: '0.00',
};

export default function LeaderBoard() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 rounded-3xl bg-gradient-to-b from-[#110E0E] to-[#1A1414] shadow-2xl border border-zinc-700 p-6">
      {/* Top Rank Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-8 border-b border-zinc-700/60">
        <div className="flex items-center gap-4 flex-1">
          <span className="text-5xl">{leaderboardData[0].icon}</span>
          <div>
            <div className="text-lg text-orange-400 font-bold">Rank: {leaderboardData[0].rank}</div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-widest">
              {leaderboardData[0].address}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaTrophy className="text-yellow-400 text-6xl drop-shadow-lg" />
        </div>
        <div className="flex flex-col gap-2 text-right flex-1 md:items-end">
          <div className="text-sm text-zinc-400">Total Transactions</div>
          <div className="text-xl font-bold text-orange-400">{leaderboardData[0].total}</div>
          <div className="text-sm text-zinc-400">
            Miners Owned <span className="text-white font-bold">{leaderboardData[0].miners}</span>
          </div>
          <div className="text-sm text-zinc-400">
            Coin Holdings <span className="text-white font-bold">{leaderboardData[0].holdings}</span>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="mt-6 divide-y divide-zinc-700/60">
        {leaderboardData.slice(1).map((entry, idx) => (
          <div key={entry.address} className="flex items-center justify-between py-3 px-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{entry.icon}</span>
              <span className="font-bold text-lg text-orange-400">{idx + 2}</span>
              <span className="font-mono text-white text-base tracking-wider">{entry.address}</span>
              <span className="ml-2 text-sm text-orange-400">{entry.rank}</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-zinc-400">Total Transactions</div>
              <div className="text-base font-bold text-orange-400">{entry.total}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Your Place */}
      <div className="mt-8 rounded-2xl bg-black/60 p-4 flex flex-col md:flex-row items-center justify-between shadow-inner border border-zinc-700/60">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{yourPlace.icon}</span>
          <span className="font-mono text-white text-base tracking-wider">{yourPlace.address}</span>
          <span className="ml-2 text-sm text-pink-400">{yourPlace.rank}</span>
        </div>
        <div className="flex flex-col md:items-end mt-2 md:mt-0">
          <div className="text-sm text-zinc-400">Total Transactions</div>
          <div className="text-base font-bold text-orange-400">{yourPlace.total}</div>
        </div>
      </div>
    </div>
  );
}
