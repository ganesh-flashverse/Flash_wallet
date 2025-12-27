import React, { useEffect, useState, useRef } from 'react';
import {
  CheckCircle,
  Clock,
  Calendar,
  Rocket,
  Shield,
  Globe,
  Zap,
  Target,
} from 'lucide-react';

const useScrollActive = (length, options) => {
  const [activeSet, setActiveSet] = useState(Array(length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);
        if (index !== -1) {
          setActiveSet((prev) => {
            const newSet = [...prev];
            newSet[index] = entry.isIntersecting;
            return newSet;
          });
        }
      });
    }, options);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [length, options]);

  return [activeSet, cardRefs];
};

const Roadmap = () => {
  const phases = [
    {
      id: 'phase0',
      title: 'Phase 0 – Ideation & Foundation',
      period: 'Q2 2024',
      status: 'completed',
      icon: <Target className="text-premium-gold" size={32} />,
      progress: 100,
      gradient: 'from-orange-400 to-red-500',
      milestones: [
        { task: 'Conceptualization of Flashverse Ecosystem', completed: true },
        { task: 'Team Formation', completed: true },
        { task: 'Whitepaper Draft & Validation', completed: true },
        { task: 'Initial Community Formation', completed: true },
      ],
    },
    {
      id: 'phase1',
      title: 'Phase 1 – Development & Pre-ICO',
      period: 'Q3 2024',
      status: 'in-progress',
      icon: <Shield className="text-premium-blue" size={32} />,
      progress: 75,
      gradient: 'from-blue-400 to-cyan-500',
      milestones: [
        { task: 'MVP for Flash App (Food + Rides + Groceries)', completed: true },
        { task: 'Flashverse Website Launch', completed: true },
        { task: 'Smart Contract Audit', completed: false },
        { task: 'Launch of ICO Campaign', completed: false },
        { task: 'KYC/AML Integrations', completed: false },
      ],
    },
    {
      id: 'phase2',
      title: 'Phase 2 – ICO & Token Sale',
      period: 'Q4 2024',
      status: 'in-progress',
      icon: <Rocket className="text-premium-teal" size={32} />,
      progress: 40,
      gradient: 'from-green-400 to-emerald-500',
      milestones: [
        { task: 'Public Token Sale (ICO)', completed: false },
        { task: 'Listings on DEX (Uniswap, PancakeSwap)', completed: false },
        { task: 'Staking Pool Release', completed: false },
        { task: 'Community Incentives Program', completed: false },
        { task: 'Mobile App Beta Test', completed: false },
      ],
    },
    {
      id: 'phase3',
      title: 'Phase 3 – Ecosystem Expansion',
      period: 'Q1 2025',
      status: 'planned',
      icon: <Globe className="text-premium-orange" size={32} />,
      progress: 0,
      gradient: 'from-purple-400 to-pink-500',
      milestones: [
        { task: 'Launch Flash Wallet (Custodial & Non-custodial)', completed: false },
        { task: 'Flash NFT Marketplace', completed: false },
        { task: 'Flash Pay (Crypto Payment Gateway)', completed: false },
        { task: 'Flash Chain SDK for 3rd Party Developers', completed: false },
        { task: 'DAO Setup Begins', completed: false },
      ],
    },
    {
      id: 'phase4',
      title: 'Phase 4 – Global Scale',
      period: 'Q2–Q4 2025',
      status: 'planned',
      icon: <Zap className="text-premium-light" size={32} />,
      progress: 0,
      gradient: 'from-yellow-400 to-orange-500',
      milestones: [
        { task: 'CEX Listing (Binance, Coinbase Target)', completed: false },
        { task: 'Full App Release (iOS + Android + Web)', completed: false },
        { task: 'Integrate FlashTube (Web3 Video Platform)', completed: false },
        { task: 'Partnerships with Local Governments & Enterprises', completed: false },
        { task: 'Governance DAO Voting Activated', completed: false },
      ],
    },
  ];

  const [showLightningBolt, setShowLightningBolt] = useState(false);
  const verticalLineRef = useRef(null);
  const [activeSet, cardRefs] = useScrollActive(phases.length, { threshold: 0.5 });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/50 bg-green-500/10';
      case 'in-progress':
        return 'border-orange-500/50 bg-orange-500/10';
      case 'planned':
        return 'border-blue-500/50 bg-blue-500/10';
      default:
        return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'in-progress':
        return <Clock className="text-orange-500" size={20} />;
      case 'planned':
        return <Calendar className="text-blue-500" size={20} />;
      default:
        return <Calendar className="text-gray-400" size={20} />;
    }
  };

  const overallProgress = phases.reduce((acc, phase) => acc + phase.progress, 0) / phases.length;

  useEffect(() => {
    if (verticalLineRef.current && cardRefs.current.length > 0) {
      let lastIdx = -1;
      for (let i = activeSet.length - 1; i >= 0; i--) {
        if (activeSet[i] && cardRefs.current[i]) {
          lastIdx = i;
          break;
        }
      }
      if (lastIdx !== -1) {
        const lastActiveCard = cardRefs.current[lastIdx];
        const firstActiveCard = cardRefs.current[0];
        const height = lastActiveCard.offsetTop - firstActiveCard.offsetTop + firstActiveCard.offsetHeight / 1;
        verticalLineRef.current.style.transition = 'height 1.5s ease-in-out';
        verticalLineRef.current.style.height = `${height}px`;
        if (height >= verticalLineRef.current.parentElement.offsetHeight - 100) {
          setShowLightningBolt(true);
        }
      }
    }
  }, [activeSet, cardRefs]);

  return (
    <div className="min-h-screen w-full text-white bg-black mt-2">
      <div className="pt-12 md:pt-20 pb-8 px-4 md:px-0 w-full max-w-full mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4">
            Flashverse Roadmap
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-8 px-2">
            Our journey to revolutionize the decentralized ecosystem
          </p>
          <div className="premium-glass-card border border-orange-500/30 max-w-4xl mx-auto premium-glow p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-base md:text-lg">Overall Progress</h3>
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold text-lg md:text-xl">
                {Math.round(overallProgress)}%
              </span>
            </div>
            <div className="h-2 md:h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-zinc-400 text-xs md:text-sm mt-2">
              Building the future, one milestone at a time ✨
            </p>
          </div>
        </div>
        <div className="relative w-full">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px bg-white transform -translate-x-1/2 line-glow" ref={verticalLineRef}></div>
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-6 top-0 w-px bg-white line-glow" style={{height: '100%'}}></div>
          <div className="space-y-6 md:space-y-8 w-full">
            {phases.map((phase, index) => {
              const isActive = activeSet[index];
              const isLeftAligned = index % 2 === 0;
              return (
                <div
                  key={phase.id}
                  id={phase.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`px-4 md:px-20 relative w-full md:w-1/2 transform transition-all duration-700 ease-in-out
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                    ${isLeftAligned ? 'md:left-0' : 'md:left-1/2'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Desktop connecting line */}
                  <div
                    className={`hidden md:block absolute h-px bg-white transform line-glow ${
                      isLeftAligned ? 'left-1/2' : 'right-1/2'
                    }`}
                    style={{
                      top: '50%',
                      width: isActive ? '372.5px' : '0px',
                      transition: 'width 1.5s ease-in-out',
                    }}
                  ></div>
                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute left-6 top-8 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 z-10"></div>
                  <div
                    className={`premium-glass-card border border-zinc-300 rounded-2xl ${getStatusColor(
                      phase.status
                    )} transition-all duration-1000 hover:scale-[1.02] premium-glow w-full max-w-[250px] md:max-w-none ${
                      isLeftAligned ? 'md:ml-auto' : 'md:mr-auto'
                    } ml-12 md:ml-0`}
                    style={{
                      backdropFilter: 'blur(3px) saturate(39%)',
                      WebkitBackdropFilter: 'blur(3px) saturate(39%)',
                      backgroundColor: 'rgba(1, 1, 1, 0.1)',
                      borderRadius: '12px',
                    }}
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex flex-col gap-3 md:gap-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                          <div
                            className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${phase.gradient} premium-glow flex-shrink-0`}
                          >
                            {React.cloneElement(phase.icon, { size: window.innerWidth < 768 ? 24 : 32 })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold leading-tight">
                              {phase.title}
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base">
                              {phase.period}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {getStatusIcon(phase.status)}
                            <span className="text-xs md:text-sm text-zinc-400 capitalize">
                              {phase.status.replace('-', ' ')}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs md:text-sm text-zinc-400">
                              Phase Progress
                            </span>
                            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold text-xs md:text-sm">
                              {phase.progress}%
                            </span>
                          </div>
                          <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${phase.gradient} transition-all`}
                              style={{ width: `${phase.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="space-y-2 md:space-y-3">
                        {phase.milestones.map((milestone, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-gray-800 border border-zinc-700 hover:border-orange-500/30 transition-colors"
                          >
                            {milestone.completed ? (
                              <CheckCircle
                                className="text-green-400 flex-shrink-0 mt-0.5"
                                size={16}
                              />
                            ) : (
                              <div className="w-4 h-4 border-2 border-zinc-700 rounded-full flex-shrink-0 mt-0.5" />
                            )}
                            <span
                              className={`text-xs md:text-sm leading-relaxed ${
                                milestone.completed
                                  ? 'text-green-400'
                                  : 'text-zinc-400'
                              }`}
                            >
                              {milestone.task}
                            </span>
                          </div>
                        ))}
                      </div>
                      {phase.status === 'in-progress' && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-lg border border-orange-500/30 premium-glow">
                          <p className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent text-xs md:text-sm font-medium flex items-center gap-2">
                            🚀 Currently in development – Stay tuned for updates!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showLightningBolt && (
            <div className="flex justify-center relative bottom-5 hidden md:block">
              <div className="icon-border">
                <span
                  className="icon-border"
                  style={{
                    display: 'inline-block',
                    padding: '5px',
                    border: '2px solid white',
                    borderTop: '25%',
                    borderTopWidth: '5px',
                    borderBottomWidth: '5px',
                    borderTopRightRadius: '25%',
                    borderBottomLeftRadius: '25%',
                    animation: 'shine 2s infinite'
                  }}
                >
                  <span className="text-white font-bold text-2xl">⚡</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
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
        .line-glow {
          animation: lineShine 2s infinite;
        }
        @keyframes lineShine {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Roadmap;
