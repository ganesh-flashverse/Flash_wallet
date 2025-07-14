import { FaTachometerAlt, FaWallet, FaExchangeAlt, FaChartLine, FaChartBar, FaCog, FaBell, FaUserShield, FaQuestionCircle } from 'react-icons/fa';

export default function SectionD() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col justify-center items-center px-2 py-16 relative overflow-hidden mt-2">
      {/* Diagonal Fade Overlay (background only) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(24,24,24,0) 60%, rgba(24,24,24,0.85) 100%)',
        }}
      />
      {/* Right Edge Fade */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-16 z-0"
        style={{
          background: 'linear-gradient(to left, rgba(24,24,24,0.5), transparent)',
        }}
      />
      {/* Bottom Edge Fade */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-full h-16 z-0"
        style={{
          background: 'linear-gradient(to top, rgba(24,24,24,0.5), transparent)',
        }}
      />
      {/* Main Content (above fades) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Top labels and heading */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <div>
            <div className="text-xs text-orange-400 tracking-widest font-semibold mb-3 uppercase">Dynamic Dashboard</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 text-white drop-shadow-xl">
              Unlock Revolutionary<br />Trading Technology
            </h1>
          </div>
          <div className="md:w-1/2 text-zinc-300 text-base md:text-lg md:pl-12 mt-6 md:mt-0 flex items-center">
            Experience seamless trading with our advanced dashboard, designed to provide real-time insights and intuitive control over your portfolio.
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="w-full max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 border border-zinc-700/40 shadow-2xl flex flex-col md:flex-row overflow-hidden backdrop-blur-xl relative z-10">
          {/* Sidebar */}
          <aside className="bg-zinc-950/90 border-r border-zinc-800/60 w-full md:w-56 py-8 px-4 flex flex-col gap-2 min-h-[28rem]">
            <div className="flex items-center gap-2 mb-8 pl-1">
              <span className="text-orange-400 text-2xl"><FaChartLine /></span>
              <span className="font-bold text-lg tracking-widest text-orange-100">Cryptolink</span>
            </div>
            <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" active />
            <SidebarItem icon={<FaWallet />} label="Wallet" />
            <SidebarItem icon={<FaExchangeAlt />} label="Transactions" />
            <SidebarItem icon={<FaChartLine />} label="Trading" />
            <SidebarItem icon={<FaChartBar />} label="Analytics" badge="NEW" />
            <SidebarItem icon={<FaChartBar />} label="Markets" badge="NEW" />
            <div className="border-t border-zinc-800/60 my-4" />
            <SidebarItem icon={<FaCog />} label="Settings" />
            <SidebarItem icon={<FaBell />} label="Rewards" />
            <SidebarItem icon={<FaUserShield />} label="Support" />
            <SidebarItem icon={<FaQuestionCircle />} label="Upgrade" />
          </aside>
          {/* Main Dashboard Content */}
          <section className="flex-1 p-8 bg-zinc-900/70 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              {/* Performance Insights Card */}
              <div className="flex-1 bg-black/60 rounded-2xl p-6 border border-zinc-800/60 shadow-lg min-w-[300px]">
                <div className="text-zinc-300 text-xs font-semibold mb-2">Crypto Analytics</div>
                <div className="text-lg font-bold mb-2 text-white">Performance Insights</div>
                <div className="flex gap-2 mb-3">
                  {['12 months', '6 months', '30 days', '7 days', '24 hours'].map((t, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs font-medium ${i === 0 ? 'bg-orange-500/80 text-white' : 'bg-zinc-800/80 text-zinc-300'}`}>{t}</span>
                  ))}
                </div>
                {/* SVG Chart */}
                <svg width="100%" height="60" viewBox="0 0 260 60" fill="none">
                  <polyline points="0,55 20,50 40,48 60,35 80,40 100,30 120,37 140,20 160,33 180,18 200,35 220,30 240,36 260,22" stroke="#FF8C43" strokeWidth="3" fill="none" />
                  <polyline points="0,59 20,56 40,55 60,45 80,48 100,40 120,46 140,30 160,40 180,28 200,45 220,40 240,44 260,34" stroke="#fff" strokeWidth="2" opacity="0.25" fill="none" />
                </svg>
                <div className="flex gap-4 mt-2 text-xs text-zinc-400">
                  <span className="text-orange-400 font-bold">Active</span>
                  <span>Disabled</span>
                </div>
              </div>
              {/* Market Dynamics Card */}
              <div className="flex-1 bg-black/60 rounded-2xl p-6 border border-zinc-800/60 shadow-lg min-w-[220px]">
                <div className="text-zinc-300 text-xs font-semibold mb-2">Wallet Breakdown</div>
                <div className="text-lg font-bold mb-2 text-white">Market Dynamics</div>
                <div className="flex gap-2 mb-3">
                  {['Monthly', 'Weekly', 'Daily'].map((t, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs font-medium ${i === 1 ? 'bg-orange-500/80 text-white' : 'bg-zinc-800/80 text-zinc-300'}`}>{t}</span>
                  ))}
                  <button className="ml-auto px-3 py-1 rounded bg-zinc-800/70 text-xs text-zinc-200 border border-zinc-700/60">Download Report</button>
                </div>
                {/* SVG Bar Chart */}
                <svg width="100%" height="60" viewBox="0 0 120 60" fill="none">
                  <rect x="5" y="35" width="10" height="20" rx="2" fill="#fff" opacity="0.15" />
                  <rect x="20" y="28" width="10" height="27" rx="2" fill="#fff" opacity="0.15" />
                  <rect x="35" y="20" width="10" height="35" rx="2" fill="#fff" opacity="0.15" />
                  <rect x="50" y="40" width="10" height="15" rx="2" fill="#fff" opacity="0.15" />
                  <rect x="65" y="30" width="10" height="25" rx="2" fill="#fff" opacity="0.15" />
                  <rect x="80" y="10" width="10" height="45" rx="2" fill="#FF8C43" />
                  <rect x="95" y="35" width="10" height="20" rx="2" fill="#fff" opacity="0.15" />
                </svg>
              </div>
            </div>
            {/* Latest Trading Activity */}
            <div className="bg-black/60 rounded-2xl p-6 border border-zinc-800/60 shadow-lg mt-2">
              <div className="text-zinc-300 text-xs font-semibold mb-2">Recent Trades</div>
              <div className="text-lg font-bold mb-4 text-white">Latest Trading Activity</div>
              <div className="overflow-x-auto">
                <table className="min-w-[420px] w-full text-sm text-left">
                  <thead>
                    <tr className="text-zinc-400">
                      <th className="py-1 pr-4 font-medium">Asset</th>
                      <th className="py-1 pr-4 font-medium">Market Cap</th>
                      <th className="py-1 pr-4 font-medium">24h Change</th>
                      <th className="py-1 pr-4 font-medium">Date</th>
                      <th className="py-1 pr-4 font-medium">Amount</th>
                      <th className="py-1 pr-4 font-medium">USD Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { asset: 'BTC', cap: '$1.2T', change: '+3.2%', date: '2023-10-15', amount: '0.24', price: '$61,493' },
                      { asset: 'ETH', cap: '$480B', change: '+2.1%', date: '2023-10-15', amount: '1.02', price: '$3,400' },
                      { asset: 'USDT', cap: '$83B', change: '+0.1%', date: '2023-10-15', amount: '500', price: '$0.998' },
                    ].map((row, i) => (
                      <tr key={i} className="text-zinc-100 border-b border-zinc-800/60 last:border-b-0">
                        <td className="py-1 pr-4 font-bold text-orange-400">{row.asset}</td>
                        <td className="py-1 pr-4">{row.cap}</td>
                        <td className="py-1 pr-4">{row.change}</td>
                        <td className="py-1 pr-4">{row.date}</td>
                        <td className="py-1 pr-4">{row.amount}</td>
                        <td className="py-1 pr-4">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow">Deposit</button>
                <button className="px-4 py-2 rounded bg-zinc-800 text-orange-400 border border-orange-400 font-semibold shadow">New transaction</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, badge }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer mb-1 transition-all ${active ? 'bg-orange-500/20 text-orange-400 font-bold' : 'hover:bg-zinc-800/60 text-zinc-200'}`}>
      <span className="text-xl">{icon}</span>
      <span className="flex-1">{label}</span>
      {badge && <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-orange-500/80 text-white font-semibold">{badge}</span>}
    </div>
  );
}
