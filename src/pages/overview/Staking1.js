import React from "react";

const Staking1 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-[#1a1133] via-[#1b1436] to-[#21143d] relative">
      {/* Header */}
      <div className="text-white font-extrabold text-6xl mt-8 mb-8 tracking-widest" style={{letterSpacing: '0.18em'}}>STAKING</div>
      {/* Wallet Info Bar */}
      <div className="flex flex-row w-[90vw] max-w-5xl rounded-2xl bg-[#2a1e4c]/80 shadow-lg p-6 mb-6 items-center justify-between gap-4">
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-[#b7bddc] text-xs">Your Wallet:</div>
          <div className="flex items-center gap-2 text-white font-mono font-bold text-lg">
            <span className="bg-[#ff881a] rounded-lg px-2 py-1 flex items-center gap-1"><span className="text-lg">🦊</span> BEX030...210023</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-[#b7bddc] text-xs">Wallet Balance:</div>
          <div className="flex items-center gap-2 text-white font-mono font-bold text-lg">
            <span className="bg-[#2e2cfa]/40 rounded-lg px-2 py-1 flex items-center gap-1"><span className="text-[#00cfff] text-xl">🪙</span> 235.432 $</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-[#b7bddc] text-xs">Total Staked:</div>
          <div className="flex items-center gap-2 text-white font-mono font-bold text-lg">
            <span className="bg-[#2e2cfa]/40 rounded-lg px-2 py-1 flex items-center gap-1"><span className="text-[#00cfff] text-xl">🪙</span> 30,000.23 $</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-[#b7bddc] text-xs">Total Rewards:</div>
          <div className="flex items-center gap-2 text-white font-mono font-bold text-lg">
            <span className="bg-[#2e2cfa]/40 rounded-lg px-2 py-1 flex items-center gap-1"><span className="text-[#00cfff] text-xl">🪙</span> 4,323.49 $</span>
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-[90vw] max-w-5xl rounded-xl bg-[#2a1e4c]/80 shadow p-3 mb-8 flex items-center gap-4 relative">
        <span className="text-[#b7bddc] text-xs ml-2">STAKED: <span className="text-white font-bold">4 TIMES</span></span>
        <span className="text-[#b7bddc] text-xs ml-6">REWARDS: <span className="text-white font-bold">2 UNLOCKED</span></span>
        <div className="flex-1 h-1 bg-[#3d2d6d] mx-4 rounded-full relative overflow-hidden">
          <div className="absolute left-0 top-0 h-1 bg-gradient-to-r from-[#00cfff] to-[#a776fa] rounded-full" style={{width:'60%'}}></div>
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4b2fa1] text-[#b7bddc] text-xs px-4 py-1 rounded-lg border border-[#6b4fd6]">WITHDRAWALS</button>
      </div>
      {/* Staking Cards Row */}
      <div className="w-[90vw] max-w-5xl flex flex-row gap-6">
        {/* Invest Card */}
        <div className="flex flex-col bg-[#2a1e4c]/80 rounded-2xl p-6 min-w-[260px] max-w-[260px] shadow-lg">
          <div className="text-[#b7bddc] text-xs mb-2">INVEST AND GET</div>
          <div className="text-[#a776fa] text-4xl font-extrabold mb-1">6%</div>
          <div className="text-[#b7bddc] text-xs mb-4">EVERY 7 DAYS</div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#ff881a] rounded-lg px-2 py-1 flex items-center gap-1"><span className="text-lg">🦊</span></span>
            <span className="text-white font-mono text-lg font-bold">300.23 <span className="text-[#b7bddc] text-xs">MAX</span></span>
          </div>
          <div className="flex gap-2 mb-4">
            <span className="bg-[#342a5c] text-[#b7bddc] text-xs px-3 py-1 rounded-full">28 DAYS</span>
            <span className="bg-[#342a5c] text-[#b7bddc] text-xs px-3 py-1 rounded-full">90 DAYS</span>
          </div>
          <button className="bg-[#a776fa] hover:bg-[#8e5be1] text-white font-bold rounded-lg py-3 mt-2 mb-3 transition-all">STAKE NOW →</button>
          <div className="flex flex-col gap-1 text-xs text-[#b7bddc] mt-2">
            <span>Min Investment: <span className="text-white">15 USD</span></span>
            <span>Max Investment: <span className="text-white">10K USD</span></span>
          </div>
        </div>
        {/* Locked Reward Cards */}
        {[{
          rewards:'4,323.49',
          unlock:'26.06.2024',
          deposit:'$300.23',
          rewardval:'$4323.23',
        },{
          rewards:'12,323.49',
          unlock:'26.06.2024',
          deposit:'$300.23',
          rewardval:'$4323.23',
        },{
          rewards:'23.49',
          unlock:'26.06.2024',
          deposit:'$300.23',
          rewardval:'$4323.23',
        }].map((card, idx) => (
          <div key={idx} className="flex flex-col bg-[#2a1e4c]/80 rounded-2xl p-6 min-w-[260px] max-w-[260px] shadow-lg ml-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#a776fa] text-white text-xs px-3 py-1 rounded-full">Locked <span className="ml-1">🔒</span></span>
            </div>
            <div className="flex flex-col items-center mb-4">
              <span className="text-[#00cfff] text-4xl font-bold mb-2">🪙</span>
              <span className="text-[#b7bddc] text-xs mb-1">AVAILABLE REWARDS:</span>
              <span className="text-white text-2xl font-extrabold">{card.rewards} $</span>
            </div>
            <button className="bg-[#a776fa] hover:bg-[#8e5be1] text-white font-bold rounded-lg py-3 mb-4 transition-all">Claim Rewards →</button>
            <div className="flex flex-col gap-1 text-xs text-[#b7bddc] mt-2">
              <span>Unlock Date: <span className="text-white">{card.unlock}</span></span>
              <span>Staked Deposit: <span className="text-white">{card.deposit}</span></span>
              <span>Rewards: <span className="text-white">{card.rewardval}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staking1;
