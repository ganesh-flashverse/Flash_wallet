import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { PiHexagonFill } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className="w-full mt-2 bg-gradient-to-b from-[#18120c] to-[#1a120c] text-zinc-300 pt-16 pb-6 px-4 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left: Logo and tagline */}
        <div className="flex flex-col min-w-[220px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-400 text-2xl"><PiHexagonFill /></span>
            <span className="font-semibold text-lg text-white">Cryptolink</span>
          </div>
          <div className="text-sm text-zinc-400 mb-4 max-w-[180px]">
            Reliable and trusted partner for maximizing crypto investments.
          </div>
          <div className="flex gap-4 text-lg text-zinc-400">
            <a href="#" className="hover:text-orange-400"><FaXTwitter /></a>
            <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400"><FaLinkedinIn /></a>
          </div>
        </div>
        {/* Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
          <FooterCol title="Core Features" items={[
            'Automated Trading',
            'Assets Management',
            'Security Protocols',
            'Market Analytics',
          ]} />
          <FooterCol title="Community" items={[
            'Lead Acquisition',
            'Marketing Intelligence',
            'Strategic Partnerships',
          ]} />
          <FooterCol title="Infrastructure" items={[
            'Startups and SMEs',
            'Large Enterprises',
          ]} />
          <FooterCol title="Resources" items={[
            'About Cryptolink',
            'Trade like a Pro',
            'Video Courses',
          ]} />
        </div>
      </div>
      {/* Divider */}
      <div className="w-full border-t border-zinc-700/60 my-8" />
      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-zinc-400">
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a href="#" className="hover:text-orange-400">Terms of Use</a>
          <a href="#" className="hover:text-orange-400">Accessibility Statement</a>
          <a href="#" className="hover:text-orange-400">Cookies Policy</a>
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
        </div>
        <div className="md:text-right w-full md:w-auto">
          © 2024 Cryptolink. All right reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="font-semibold text-zinc-100 text-sm mb-2">{title}</div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i}>
            <a href="#" className="hover:text-orange-400 text-zinc-300 text-sm transition">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
