import Aurora from '../animation/Aurora';
import Navbar from './Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/Home';
import Ecosystem from '../../pages/Ecosystem';
import Tokenomics from '../../pages/Tokenomics';
import ICO from '../../pages/ICO';
import NFTs from '../../pages/NFTs';
import TokenWallet from '../../pages/TokenWallet';
import Footer from './Footer';
import OverviewDashboard from '../../pages/overview/OverviewDashboard';

export function Main() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/overviewdashboard');

  if (isDashboard) {
    // Clean dashboard layout, no Navbar or Footer
    return <OverviewDashboard />;
  }

  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col bg-black">
      {/* Aurora Animated Background */}
      <div className="absolute inset-0 z-0">
        <Aurora />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col flex-1 items-center justify-center text-center px-4 relative z-10 pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/ico" element={<ICO />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/wallet" element={<TokenWallet />} />
          
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
