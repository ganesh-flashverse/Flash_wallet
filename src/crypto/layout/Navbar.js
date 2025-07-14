import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';



 function ShiningIcon() {
  return (
    <div className="bg-black relative" style={{ width: '100px', height: '100px' , }}>
      <span
        className="icon-border relative"
        style={{
          display: 'inline-block',
            
          padding: '5px',
          border: '2px solid white',
          borderRadius: '50%',
          animation: 'shine 2s infinite',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) '
        }}
      >
        <span className="" style={{fontSize:'100px'}}>⚡</span>
      </span>

      {/* Lines */}
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
      <div className="line line-4"></div>
      <div className="line line-5"></div>
      <div className="line line-6"></div>

      <style jsx>{`
        @keyframes shine {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
        }
        .line {
          position: absolute;
          background: white;
        }
        .line-1 {
          width: 82px;
          height: 2px;
          top: 56.8%;
          left: 43.3%;
          transform:  rotate(-59deg) translateY(-50%);
         
        }
        .line-2 {
          width: 24px;
          height: 2px;
          top: 49.5%;
          right: 43.5%;
          transform: rotate(0deg) translateY(-50%);
          transform-origin: right;
        }
        .line-3 {
          width: 23px;
          height: 2px;
          bottom: 46.5%;
          left: 45%;
          transform: translateX(-50%);
        }
        .line-4 {
          width: 84px;
          height: 2px;
          bottom: 46.6%;
          left: 42.4%;
          transform: rotate(-59deg) translateY(100%)   ;
          transform-origin: left;
        }
        .line-5 {
          height: 2px;
          width: 52px;
          left: 42.2%;
          top: 58.4%;
          transform: rotate(-90deg)  translateY(-50%);
        }
        .line-6 {
          height: 2px;
          width: 50px;
          right: 42.9%;
          top: 44.1%;
          transform:  rotate(-90deg)  translateY(-50%);
        }
      `}</style>
    </div>
  );
}


const navOptions = [
  { name: 'Home', path: '/' },
  { name: 'Ecosystem', path: '/ecosystem' },
  { name: 'Tokenomics', path: '/tokenomics' },
  { name: 'ICO', path: '/ico' },
  { name: 'NFTs', path: '/nfts' },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full flex justify-center px-4 pt-6 pb-2">
      <nav className="w-full max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-10 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">

        <div>
      <span
        className="icon-border"
        style={{
          display: 'inline-block',
          padding: '5px',
          border: '2px solid white',
          borderRadius: '50%',
          animation: 'shine 2s infinite'
        }}
      >
        <span className="text-white font-bold text-2xl">⚡</span>
      </span>

      <style jsx>{`
        @keyframes shine {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </div>


          <span className="font-extrabold text-xl tracking-widest text-orange-400 drop-shadow-md">Flash</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
          {navOptions.map(opt => (
            <NavLink
              key={opt.name}
              to={opt.path}
              className={({ isActive }) =>
                `hover:text-orange-400 transition duration-300 ${isActive ? 'text-orange-400 font-bold' : ''}`
              }
              end={opt.path === '/'}
            >
              {opt.name}
            </NavLink>
          ))}
          <NavLink
            to="/overviewdashboard"
            className="ml-6 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            Token Wallet
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
