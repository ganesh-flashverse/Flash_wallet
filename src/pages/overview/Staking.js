import React, { useState } from "react";
import { FaWallet, FaArrowLeft } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";

function SingleStakeSection({
  isVisible,
  onUnstakeClick,
  onBackClick,
  walletBalance,
  setWalletBalance,
  totalStaked,
  setTotalStaked,
  totalRewards,
  setTotalRewards,
}) {
  const [inputAmount, setInputAmount] = useState("");
  const [rewards, setRewards] = useState(0);
  const [unclaimedRewards, setUnclaimedRewards] = useState(0);
  const [apy, setApy] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [rewardsPerDay, setRewardsPerDay] = useState(0);

  if (!isVisible) return null;

  const handleInputChange = (event) => {
    const amount = event.target.value;
    setInputAmount(amount);
    const amountNumber = parseFloat(amount) || 0;
    const calculatedRewards = calculateRewards(amountNumber);
    setRewards(calculatedRewards.rewards);
    setUnclaimedRewards(calculatedRewards.unclaimedRewards);
    setApy(calculatedRewards.apy);
    setTokens(calculatedRewards.tokens);
    setRewardsPerDay(calculatedRewards.rewardsPerDay);
  };

  const handleStake = () => {
    const amountNumber = parseFloat(inputAmount) || 0;
    if (amountNumber > 0 && amountNumber <= walletBalance) {
      setTotalStaked(totalStaked + amountNumber);
      setWalletBalance(walletBalance - amountNumber);
      setInputAmount("");
      console.log({
        rewards,
        apy,
        tokens,
        rewardsPerDay,
        inputAmount: amountNumber,
      });
    } else {
      alert("Please enter a valid amount to stake.");
    }
  };

  const handleClaim = () => {
    setTotalRewards(totalRewards + unclaimedRewards);
    setUnclaimedRewards(0);
  };

  const calculateRewards = (amount) => {
    const amountNumber = parseFloat(amount) || 0;
    const rewards = amountNumber * 0.2223;
    const unclaimedRewards = amountNumber * 0.12;
    const apy = amountNumber * 0.01;
    const tokens = amountNumber * 1;
    const rewardsPerDay = amountNumber * 0.002;

    return {
      rewards,
      unclaimedRewards,
      apy,
      tokens,
      rewardsPerDay,
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-0 md:gap-0 mb-12">
      <div className="flex-1 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-4 md:p-8 flex flex-col min-h-[480px] shadow-xl">
        <div className="flex items-center mb-4">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 bg-zinc-900 text-orange-400 px-4 py-2 rounded-lg shadow hover:bg-zinc-800 transition-all"
          >
            <FaArrowLeft /> Back
          </button>
        </div>
        <div className="text-2xl md:text-3xl font-bold text-white mb-2">
          Single Stake
        </div>
        <div className="flex items-center gap-2 mb-8">
          <span className="w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center text-orange-400 text-xs">
            <svg width="12" height="12">
              <circle cx="6" cy="6" r="5" fill="#b7e2c3" />
            </svg>
          </span>
          <span className="text-zinc-300 text-sm">Stake Your Sol Tokens</span>
        </div>
        <div className="flex items-center gap-6 md:gap-8 mb-4">
          <span className="text-xl md:text-2xl font-bold text-white border-b-2 border-white pb-1">
            Stake
          </span>
          <span
            className="text-xl md:text-2xl font-bold text-zinc-400 pb-1 cursor-pointer"
            onClick={onUnstakeClick}
          >
            UnStake
          </span>
        </div>
        <div className="flex items-center bg-zinc-800 rounded-lg px-4 py-3 mb-4">
          <input
            type="number"
            placeholder="Enter The Amount"
            className="bg-transparent outline-none text-white text-base md:text-lg font-semibold flex-1 placeholder-zinc-400"
            value={inputAmount}
            onChange={handleInputChange}
          />
          <span className="ml-2 text-zinc-400 text-xs font-bold cursor-pointer">
            MAX
          </span>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold text-base mt-2 shadow hover:bg-orange-600 transition-all"
          onClick={handleStake}
        >
          Stake Now!
        </button>
        <div className="grid grid-cols-2 gap-y-1 gap-x-4 md:gap-x-6 mt-8 text-sm text-zinc-400">
          <div>
            Your Token Balance{" "}
            <span className="float-right text-white">
              {walletBalance} SOL
            </span>
          </div>
          <div>
            Your Rewards{" "}
            <span className="float-right text-white">
              {rewards.toFixed(2)} SOL
            </span>
          </div>
          <div>
            Your Unclaimed Rewards{" "}
            <span className="float-right text-white">
              {unclaimedRewards.toFixed(2)} SOL
            </span>
          </div>
          <div>
            Your Total Deposits{" "}
            <span className="float-right text-white">{totalStaked} SOL</span>
          </div>
          <div>
            Your Airdrop Score{" "}
            <span className="float-right text-white">1 Pts</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-black to-zinc-900 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-4 md:p-8 flex flex-col min-h-[480px] shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl md:text-2xl font-bold text-white">
            Your Rewards:
          </div>
          <div className="text-xl md:text-2xl font-bold text-orange-400">
            {rewards.toFixed(2)} SOL
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 mb-8">
          <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
            <div className="text-2xl md:text-3xl font-extrabold text-white">
              {apy.toFixed(2)}%
            </div>
            <div className="text-orange-400 text-sm font-bold">APY</div>
          </div>
          <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
            <div className="text-2xl md:text-3xl font-extrabold text-white">
              ${tokens.toFixed(2)}
            </div>
            <div className="text-orange-400 text-sm font-bold">TOKENS</div>
          </div>
          <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
            <div className="text-2xl md:text-3xl font-extrabold text-white">
              {rewardsPerDay.toFixed(2)}$ / DAY
            </div>
            <div className="text-orange-400 text-sm font-bold">REWARDS</div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-orange-400 text-sm">Unclaimed Rewards</div>
          <div className="text-white font-bold text-base">
            {unclaimedRewards.toFixed(2)} SOL
          </div>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold text-base mt-2 shadow hover:bg-orange-600 transition-all"
          onClick={handleClaim}
        >
          Claim Now!
        </button>
      </div>
    </div>
  );
}

function UnstakeSection({
  isVisible,
  onStakeClick,
  onBackClick,
  walletBalance,
  setWalletBalance,
  totalStaked,
  setTotalStaked,
}) {
  const [unstakeAmount, setUnstakeAmount] = useState("");

  if (!isVisible) return null;

  const handleUnstakeInputChange = (event) => {
    setUnstakeAmount(event.target.value);
  };

  const handleUnstake = () => {
    const amountNumber = parseFloat(unstakeAmount) || 0;
    if (amountNumber > 0 && amountNumber <= totalStaked) {
      setTotalStaked(totalStaked - amountNumber);
      setWalletBalance(walletBalance + amountNumber);
      setUnstakeAmount("");
    } else {
      alert("Please enter a valid amount to unstake.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-0 md:gap-0 mb-12">
      <div className="flex-1 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-4 md:p-8 flex flex-col min-h-[480px] shadow-xl">
        <div className="flex items-center mb-4">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 bg-zinc-900 text-orange-400 px-4 py-2 rounded-lg shadow hover:bg-zinc-800 transition-all"
          >
            <FaArrowLeft /> Back
          </button>
        </div>
        <div className="text-2xl md:text-3xl font-bold text-white mb-2">
          Single Stake
        </div>
        <div className="flex items-center gap-2 mb-8">
          <span className="w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center text-orange-400 text-xs">
            <svg width="12" height="12">
              <circle cx="6" cy="6" r="5" fill="#b7e2c3" />
            </svg>
          </span>
          <span className="text-zinc-300 text-sm">Unstake Your Sol Tokens</span>
        </div>
        <div className="flex items-center gap-6 md:gap-8 mb-4">
          <span
            className="text-xl md:text-2xl font-bold text-zinc-400 pb-1 cursor-pointer"
            onClick={onStakeClick}
          >
            Stake
          </span>
          <span className="text-xl md:text-2xl font-bold text-white border-b-2 border-white pb-1">
            UnStake
          </span>
        </div>
        <div className="flex items-center bg-zinc-800 rounded-lg px-4 py-3 mb-4">
          <input
            type="number"
            placeholder="Enter The Amount"
            className="bg-transparent outline-none text-white text-base md:text-lg font-semibold flex-1 placeholder-zinc-400"
            value={unstakeAmount}
            onChange={handleUnstakeInputChange}
          />
          <span className="ml-2 text-zinc-400 text-xs font-bold cursor-pointer">
            MAX
          </span>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold text-base mt-2 shadow hover:bg-orange-600 transition-all"
          onClick={handleUnstake}
        >
          Unstake Now!
        </button>
        <div className="grid grid-cols-2 gap-y-1 gap-x-4 md:gap-x-6 mt-8 text-sm text-zinc-400">
          <div>
            Your Token Balance{" "}
            <span className="float-right text-white">
              {walletBalance} SOL
            </span>
          </div>
          <div>
            Your Rewards{" "}
            <span className="float-right text-white">0.2 SOL</span>
          </div>
          <div>
            Your Unclaimed Rewards{" "}
            <span className="float-right text-white">9 SOL</span>
          </div>
          <div>
            Your Total Deposits{" "}
            <span className="float-right text-white">{totalStaked} SOL</span>
          </div>
          <div>
            Your Airdrop Score{" "}
            <span className="float-right text-white">1 Pts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletAndRewardsOverview({ walletBalance, totalStaked, totalRewards }) {
  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 bg-zinc-800 rounded-2xl px-3 md:px-6 py-3 md:py-4 shadow-xl w-full md:w-auto">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-zinc-900 p-1.5 md:p-2 rounded-full">
            <FaWallet className="text-orange-400 text-lg md:text-xl" />
          </span>
          <span className="font-bold text-white text-sm md:text-lg">
            Your Wallet:
          </span>
        </div>
        <span className="bg-zinc-900 text-orange-400 font-mono px-2 md:px-3 py-1 rounded-lg text-xs md:text-base tracking-wider break-all sm:break-normal">
          BEX030...210023
        </span>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <StatBox label="Wallet Balance" value={`${walletBalance} SOL`} />
        <StatBox label="Total Staked" value={`${totalStaked} SOL`} />
        <StatBox label="Total Rewards" value={`${totalRewards} SOL`} />
      </div>
    </div>
  );
}

function StakedRewards() {
  return (
    <div className="w-full max-w-6xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-6">
      <div className="flex-1 bg-gradient-to-r from-zinc-800 to-black h-auto sm:h-12 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start px-3 md:px-6 py-3 sm:py-0 text-white font-semibold text-xs md:text-base shadow-inner">
        <div className="flex items-center gap-1 sm:gap-2">
          <span>STAKED:</span>
          <span className="text-orange-400">4 TIMES</span>
        </div>
        <span className="hidden sm:inline mx-2 md:mx-4">|</span>
        <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-0">
          <span>REWARDS:</span>
          <span className="text-orange-400">2 UNLOCKED</span>
        </div>
      </div>
      <button className="bg-zinc-800 text-orange-400 px-3 md:px-6 py-2 rounded-xl font-semibold text-xs md:text-base shadow hover:bg-zinc-900 transition-all whitespace-nowrap">
        WITHDRAWALS
      </button>
    </div>
  );
}

function InvestmentOptions({ onStakeNowClick }) {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      <div className="bg-gradient-to-br from-zinc-800 to-black rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col justify-between">
        <div className="text-white text-base md:text-lg font-bold mb-2">
          INVEST AND GET
        </div>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-2xl md:text-4xl font-extrabold text-orange-400">
            6%
          </span>
          <span className="text-white font-semibold mb-1 text-sm md:text-base">EVERY 7 DAYS</span>
        </div>
        <div className="flex items-center gap-2 mb-4 md:mb-5">
          <span className="bg-zinc-900 text-orange-400 p-1.5 md:p-2 rounded-full">
            <FaWallet className="text-base md:text-lg" />
          </span>
          <span className="text-white font-mono text-sm md:text-lg">
            300.23
          </span>
          <span className="text-orange-400 ml-2 font-bold text-xs md:text-sm">MAX</span>
        </div>
        <div className="flex gap-2 mb-3 md:mb-4">
          <button className="flex-1 px-2 py-1.5 md:py-1 rounded-lg bg-zinc-800 text-orange-400 font-semibold text-xs md:text-sm">
            28 DAYS
          </button>
          <button className="flex-1 px-2 py-1.5 md:py-1 rounded-lg bg-zinc-800 text-orange-400 font-semibold text-xs md:text-sm">
            90 DAYS
          </button>
        </div>
        <button
          onClick={onStakeNowClick}
          className="w-full py-2.5 md:py-3 rounded-xl bg-orange-500 text-white font-bold text-sm md:text-lg mt-2 shadow hover:bg-orange-600 transition-all"
        >
          STAKE NOW
        </button>
        <div className="mt-4 md:mt-6 text-xs text-zinc-400 font-semibold">
          <div>
            Min Investment:{" "}
            <span className="float-right text-white">15 USD</span>
          </div>
          <div>
            Max Investment:{" "}
            <span className="float-right text-white">10K USD</span>
          </div>
        </div>
      </div>
      <RewardCard
        locked
        availableRewards="4,323.49 $"
        unlockDate="26.06.2024"
        deposit="$300.23"
        rewards="$4323.23"
      />
      <RewardCard
        locked
        availableRewards="12,323.49 $"
        unlockDate="26.06.2024"
        deposit="$300.23"
        rewards="$4323.23"
      />
      <RewardCard
        locked
        availableRewards="23.49 $"
        unlockDate="26.06.2024"
        deposit="$300.23"
        rewards="$4323.23"
      />
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-zinc-800 rounded-2xl px-3 md:px-6 py-3 md:py-4 flex flex-col items-center shadow-xl">
      <span className="text-orange-400 text-xs font-semibold mb-1 uppercase tracking-widest text-center">
        {label}
      </span>
      <span className="text-white text-base md:text-2xl font-bold text-center">{value}</span>
    </div>
  );
}

function RewardCard({ locked, availableRewards, unlockDate, deposit, rewards }) {
  return (
    <div className="bg-gradient-to-br from-zinc-800 to-black rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col justify-between relative">
      {locked && (
        <div className="absolute top-3 md:top-4 right-3 md:right-4 flex items-center gap-1 text-orange-400 text-xs font-bold">
          <BsFillLockFill className="text-orange-400 text-sm md:text-lg mr-1" /> 
          <span className="hidden sm:inline">Locked</span>
        </div>
      )}
      <div className="flex flex-col items-center justify-center mb-3 md:mb-4">
        <div className="relative flex items-center justify-center w-10 md:w-16 h-10 md:h-16 mb-2 md:mb-3">
          <svg
            width="48"
            height="48"
            viewBox="0 0 64 64"
            className="absolute top-0 left-0 md:w-16 md:h-16"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="#1b0e2e"
              stroke="#5736b7"
              strokeWidth="4"
            />
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * 2 * Math.PI;
              const x1 = 32 + 26 * Math.cos(angle);
              const y1 = 32 + 26 * Math.sin(angle);
              const x2 = 32 + 30 * Math.cos(angle);
              const y2 = 32 + 30 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#a58fff"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
          <span className="relative z-10 flex items-center justify-center w-6 md:w-10 h-6 md:h-10 rounded-full bg-zinc-900 shadow-lg">
            <BsFillLockFill className="text-orange-400 text-sm md:text-2xl" />
          </span>
        </div>
        <span className="text-orange-400 text-xs font-semibold mb-1 text-center">
          AVAILABLE REWARDS:
        </span>
        <span className="text-white text-lg md:text-2xl font-bold mb-2 text-center">
          {availableRewards}
        </span>
        <button className="w-full py-2 rounded-lg bg-orange-500 text-white font-bold text-xs md:text-base mt-2 shadow hover:bg-orange-600 transition-all">
          Claim Rewards
        </button>
      </div>
      <div className="mt-3 md:mt-4 text-xs text-zinc-400 font-semibold space-y-1">
        <div className="flex justify-between">
          <span>Unlock Date:</span>
          <span className="text-white">{unlockDate}</span>
        </div>
        <div className="flex justify-between">
          <span>Staked Deposit:</span>
          <span className="text-white">{deposit}</span>
        </div>
        <div className="flex justify-between">
          <span>Rewards:</span>
          <span className="text-white">{rewards}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showSingleStake, setShowSingleStake] = useState(false);
  const [showUnstake, setShowUnstake] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1290);
  const [totalStaked, setTotalStaked] = useState(99);
  const [totalRewards, setTotalRewards] = useState(0);

  const handleStakeNowClick = () => {
    setShowSingleStake(true);
    setShowUnstake(false);
  };

  const handleUnstakeClick = () => {
    setShowUnstake(true);
    setShowSingleStake(false);
  };

  const handleStakeClick = () => {
    setShowSingleStake(true);
    setShowUnstake(false);
  };

  const handleBackClick = () => {
    setShowSingleStake(false);
    setShowUnstake(false);
  };

  return (
    <div className="container mx-auto px-3 md:px-4">
      <SingleStakeSection
        isVisible={showSingleStake}
        onUnstakeClick={handleUnstakeClick}
        onBackClick={handleBackClick}
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        totalStaked={totalStaked}
        setTotalStaked={setTotalStaked}
        totalRewards={totalRewards}
        setTotalRewards={setTotalRewards}
      />
      <UnstakeSection
        isVisible={showUnstake}
        onStakeClick={handleStakeClick}
        onBackClick={handleBackClick}
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        totalStaked={totalStaked}
        setTotalStaked={setTotalStaked}
      />
      {!showSingleStake && !showUnstake && (
        <>
          <WalletAndRewardsOverview
            walletBalance={walletBalance}
            totalStaked={totalStaked}
            totalRewards={totalRewards}
          />
          <StakedRewards />
          <InvestmentOptions onStakeNowClick={handleStakeNowClick} />
        </>
      )}
    </div>
  );
}
