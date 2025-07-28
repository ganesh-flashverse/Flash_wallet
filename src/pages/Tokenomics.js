import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, TrendingUp, Gift } from 'lucide-react';

// Sample data for the pie chart
const data = [
  { name: 'Public Sale', value: 30, color: "#FF6384" },
  { name: 'Team & Founders', value: 20, color: "#36A2EB" },
  { name: 'Marketing', value: 15, color: "#FFCE56" },
  { name: 'Ecosystem Growth', value: 10, color: "#4BC0C0" },
  { name: 'Liquidity', value: 8, color: "#9966FF" },
  { name: 'Advisors', value: 5, color: "#FF9F40" },
  { name: 'Reserve', value: 5, color: "#00C49F" },
  { name: 'Staking Rewards', value: 5, color: "#FF8042" },
  { name: 'Airdrops', value: 2, color: "#8B5CF6" },
];

const AnimatedCard = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const PieChartComponent = () => {
  const chartDiv = useRef(null);

  useEffect(() => {
    if (window.AmCharts) {
      const chart = window.AmCharts.makeChart(chartDiv.current, {
        type: "pie",
        theme: "light",
        dataProvider: data.map(item => ({ country: item.name, value: item.value, labelColor: "#FFFFFF" })),
        valueField: "value",
        titleField: "country",
        colors: data.map(item => item.color),
        outlineAlpha: 0.4,
        outlineThickness: 1,
        depth3D: 25,
        angle: 10,
        innerRadius: "60%",
        pullOutRadius: 30,
        pullOutOnlyOne: true,
        pullOutOnHover: true,
        shadowAlpha: 1,
        shadowColor: "#000000",
        shadowBlur: 10,
        balloonText: "[[title]]<br><span style='font-size:14px; color: black'><b>[[value]]</b> ([[percents]]%)</span>",
        labelsEnabled: true,
        labelText: "[[title]]",
        labelColorField: "labelColor",
        color: "#FFFFFF",

        legend: {
          enabled: false,
          color: "#FFFFFF",
          fontSize: 12
        },

        export: {
          enabled: true
        },
        hideCredits: true
      });

      return () => {
        chart.clear();
      };
    }
  }, []);

  return (
    <div className="mx-auto" style={{ width: '100%', maxWidth: '1000px' }}>
      <div className="chart-container" ref={chartDiv}></div>
      <style jsx>{`
        .chart-container {
          width: 105%;
          height: 500px;
        }

        @media (max-width: 768px) {
          .chart-container {
            width: 500px;
            height: 500px;
            margin: 0 auto;
            display: block;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16 relative overflow-hidden mt-2">
      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(2px);
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
          padding: 20px;
        }
        .glass-card div[style*="width: 100%"] {
          background: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedCard delay={0}>
            <h1 className="text-6xl font-black mb-6">
              Tokenomics – <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Transparent by Design</span>
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our token model is crafted for sustainability, utility, and community ownership.
            </p>
          </AnimatedCard>
          <AnimatedCard delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ico">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:opacity-90 transition-opacity">
                  <TrendingUp className="inline-block mr-2" />
                  View ICO
                </button>
              </Link>
              <Link to="/whitepaper">
                <button className="border border-orange-500 text-orange-500 px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-orange-500 hover:text-white transition-colors">
                  <Download className="inline-block mr-2" />
                  Read Whitepaper
                </button>
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Token Allocation Chart and Detailed Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* AmCharts Pie Chart */}
            <AnimatedCard delay={0.2}>
              <div className="backdrop-blur-lg border border-orange-500/30 rounded-lg p-6 glass-card h-full">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-white">Flash Token Distribution</h2>
                </div>
                <div className="flex justify-center">
                  <PieChartComponent />
                </div>
              </div>
            </AnimatedCard>

            {/* Detailed Breakdown Table */}
            <AnimatedCard delay={0.4}>
              <div className="bg-white/5 backdrop-blur-lg border border-orange-500/30 rounded-lg p-6 h-full">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Detailed Breakdown</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="px-4 py-2 text-left text-gray-300">Allocation</th>
                        <th className="px-4 py-2 text-left text-gray-300">Percentage</th>
                        <th className="px-4 py-2 text-left text-gray-300">Tokens</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.name} className="border-b border-white/10 hover:bg-white/5">
                          <td className="px-4 py-2 flex items-center gap-3">
                            <span className="w-4 h-4 rounded-full inline-block" style={{ backgroundColor: item.color }}></span>
                            <span className="text-white font-medium">{item.name}</span>
                          </td>
                          <td className="px-4 py-2 text-orange-400 font-semibold">{item.value}%</td>
                          <td className="px-4 py-2 text-gray-300">{item.value * 10}M FLASH</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Flash Incentives Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedCard delay={0.2}>
            <h2 className="text-4xl font-black text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Flash Incentives</span>
            </h2>
          </AnimatedCard>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.3}>
              <div className="bg-white/5 backdrop-blur-lg border border-orange-500/30 rounded-lg p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Gift className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Staking Rewards</h3>
                <p className="text-gray-300 mb-4">Stake your FLASH and earn up to 15% APY with compounding rewards</p>
                <div className="text-2xl font-bold text-orange-400">15% APY</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <div className="bg-white/5 backdrop-blur-lg border border-orange-500/30 rounded-lg p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Early Bird Bonus</h3>
                <p className="text-gray-300 mb-4">Early ICO buyers receive bonus tokens + exclusive rare NFT</p>
                <div className="text-2xl font-bold text-orange-400">+20% Bonus</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.5}>
              <div className="bg-white/5 backdrop-blur-lg border border-orange-500/30 rounded-lg p-8 text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Governance Rights</h3>
                <p className="text-gray-300 mb-4">Vote on ecosystem proposals and shape the future of Flashverse</p>
                <div className="text-2xl font-bold text-orange-400">Full Access</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedCard delay={0.2}>
            <h2 className="text-4xl font-black mb-8">
              Ready to Join the <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Flash Revolution?</span>
            </h2>
          </AnimatedCard>
          <AnimatedCard delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/ico">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-5 text-xl font-semibold rounded-2xl hover:opacity-90 transition-opacity">
                  Join ICO Now
                  <ArrowRight className="inline-block ml-2" />
                </button>
              </Link>
              <Link to="/whitepaper">
                <button className="border border-orange-500 text-orange-500 px-10 py-5 text-xl font-semibold rounded-2xl hover:bg-orange-500 hover:text-white transition-colors">
                  <Download className="inline-block mr-2" />
                  Download Whitepaper
                </button>
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
