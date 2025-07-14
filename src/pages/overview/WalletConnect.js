import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";

export default function WalletConnect({ onClose }) {
  return (
    <div className="min-h-screen w-full bg-black/80 flex items-center justify-center px-2 py-8" onClick={onClose} >
      <div className="w-full max-w-lg min-w-[400px] bg-zinc-900/95 rounded-3xl shadow-2xl border border-zinc-700/60 backdrop-blur-xl p-4 pb-2 flex flex-col relative" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 pt-3 pb-2">
          <div className="flex items-center gap-2 text-zinc-300 text-xl font-semibold">
            <span className="inline-block w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-1">
              <span className="text-base text-zinc-400">?</span>
            </span>
            Connect Wallet
          </div>
          <button className="text-zinc-400 hover:text-white text-lg p-2 rounded-full hover:bg-zinc-800 transition" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        {/* Thirdweb ConnectButton */}
        <div className="flex flex-col gap-2 mt-2 mb-4">
          <ConnectButton client={client} />
        </div>
        {/* Footer */}
        <div className="text-center text-zinc-400 text-xs py-3">
          Haven't got a wallet?{' '}
          <a href="https://thirdweb.com/wallets" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">Get started</a>
        </div>
      </div>
    </div>
  );
}
