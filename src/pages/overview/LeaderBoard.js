import React from 'react';
import { FaTrophy, FaCrown, FaUser } from 'react-icons/fa';

const leaderboardData = [
  {
    address: '0x2222...5c1',
    rank: 'Top Performer',
    icon: <FaCrown />,
    total: '$3,927,234.34',
    miners: 0,
    holdings: '142,291,099.60',
    isTop: true,
  },
  {
    address: '0x578e...ea4',
    rank: 'Top Performer',
    icon: <FaUser />,
    total: '$3,114,349.50',
  },
  {
    address: '0x4e5a...b57',
    rank: 'Top Performer',
    icon: <FaUser />,
    total: '$2,106,902.05',
  },
  {
    address: '0x8798...8ce',
    rank: 'Top Performer',
    icon: <FaUser />,
    total: '$1,686,905.65',
  },
  {
    address: '0x0c13...bd6',
    rank: 'Top Performer',
    icon: <FaUser />,
    total: '$1,580,118.23',
  },
];

const yourPlace = {
  address: '0x8a7E...911',
  rank: 'Member',
  icon: <FaUser />,
  total: '0.00',
};

export default function LeaderBoard() {
  return (
    <div className="w-full mx-auto mt-6 md:mt-10 rounded-3xl bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E] shadow-2xl border border-zinc-700 p-3 md:p-6">
      {/* Top Rank Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 pb-6 md:pb-8 border-b border-zinc-700/60">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 flex-1 w-full">
          <span className="text-4xl md:text-5xl">{leaderboardData[0].icon}</span>
          <div className="text-center sm:text-left">
            <div className="text-sm md:text-lg text-orange-400 font-bold">Rank: {leaderboardData[0].rank}</div>
            <div className="text-lg md:text-3xl font-bold text-white tracking-wider md:tracking-widest break-all sm:break-normal">
              {leaderboardData[0].address}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 order-first md:order-none">
          <FaTrophy className="text-yellow-400 text-4xl md:text-6xl drop-shadow-lg" />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 text-center md:text-right flex-1 w-full md:items-end">
          <div className="text-xs md:text-sm text-zinc-300">Total Transactions</div>
          <div className="text-lg md:text-xl font-bold text-orange-400">{leaderboardData[0].total}</div>
          <div className="text-xs md:text-sm text-zinc-300">
            Miners Owned <span className="text-white font-bold">{leaderboardData[0].miners}</span>
          </div>
          <div className="text-xs md:text-sm text-zinc-300">
            Coin Holdings <span className="text-white font-bold">{leaderboardData[0].holdings}</span>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="mt-4 md:mt-6 divide-y divide-zinc-700/60">
        {leaderboardData.slice(1).map((entry, idx) => (
          <div key={entry.address} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 md:py-4 px-1 md:px-2 gap-2 sm:gap-0">
            <div className="flex items-center gap-2 md:gap-3 flex-1">
              <span className="text-lg md:text-2xl">{entry.icon}</span>
              <span className="font-bold text-base md:text-lg text-orange-400">{idx + 2}</span>
              <span className="font-mono text-white text-sm md:text-base tracking-wider break-all sm:break-normal">{entry.address}</span>
              <span className="ml-1 md:ml-2 text-xs md:text-sm text-orange-400 hidden sm:inline">{entry.rank}</span>
            </div>
            <div className="text-left sm:text-right ml-6 sm:ml-0">
              <div className="text-xs md:text-sm text-zinc-300">Total Transactions</div>
              <div className="text-sm md:text-base font-bold text-orange-400">{entry.total}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Your Place */}
      <div className="mt-6 md:mt-8 rounded-2xl bg-black/60 p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-inner border border-zinc-700/60 gap-2 md:gap-0">
        <div className="flex items-center gap-2 md:gap-3 flex-1">
          <span className="text-lg md:text-2xl">{yourPlace.icon}</span>
          <span className="font-mono text-white text-sm md:text-base tracking-wider break-all sm:break-normal">{yourPlace.address}</span>
          <span className="ml-1 md:ml-2 text-xs md:text-sm text-pink-400">{yourPlace.rank}</span>
        </div>
        <div className="flex flex-col md:items-end ml-6 md:ml-0">
          <div className="text-xs md:text-sm text-zinc-300">Total Transactions</div>
          <div className="text-sm md:text-base font-bold text-orange-400">{yourPlace.total}</div>
        </div>
      </div>
    </div>
  );
}
