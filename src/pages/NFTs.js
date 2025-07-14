export default function NFTs() {
  return (
    <div className="pt-24 text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-4">NFTs</h2>
      <p className="text-lg text-zinc-200">Explore our NFT collection (dummy data)</p>
      <div className="mt-8 p-6 bg-black/60 rounded-xl border border-white/10 max-w-2xl mx-auto grid grid-cols-2 gap-6">
        <div className="rounded-xl bg-zinc-900/80 p-4 border border-white/10">
          <div className="h-28 w-full bg-gradient-to-br from-orange-400/30 to-black rounded-lg mb-2"></div>
          <div className="font-bold text-orange-300">CryptoCat #001</div>
          <div className="text-xs text-zinc-400">by Satoshi</div>
        </div>
        <div className="rounded-xl bg-zinc-900/80 p-4 border border-white/10">
          <div className="h-28 w-full bg-gradient-to-br from-orange-400/30 to-black rounded-lg mb-2"></div>
          <div className="font-bold text-orange-300">PixelApe #042</div>
          <div className="text-xs text-zinc-400">by Nakamoto</div>
        </div>
      </div>
    </div>
  );
}
