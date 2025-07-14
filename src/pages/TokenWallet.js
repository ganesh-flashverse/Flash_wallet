export default function TokenWallet() {
  return (
    <div className="pt-24 text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-4">Token Wallet (Demo)</h2>
      <p className="text-lg text-zinc-200 mb-8">This is a reference wallet page showing some dummy balances and actions.</p>
      <div className="mx-auto max-w-md bg-black/60 rounded-xl border border-white/10 p-8 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-zinc-100">BTC</span>
          <span className="font-mono text-orange-400 text-xl">0.2912</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-zinc-100">ETH</span>
          <span className="font-mono text-orange-400 text-xl">1.024</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-zinc-100">FLASH</span>
          <span className="font-mono text-orange-400 text-xl">5,000</span>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="flex-1 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">Send</button>
          <button className="flex-1 py-2 rounded-lg border border-orange-400 text-orange-400 bg-transparent font-semibold transition hover:bg-orange-500/20">Receive</button>
        </div>
      </div>
    </div>
  );
}
