import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function SidebarItem({ icon, label, to, badge, activePaths = [] }) {
  const location = useLocation();
  const isActive = activePaths.length
    ? activePaths.some((p) => location.pathname === p)
    : location.pathname === to;
  return (
    <NavLink
      to={to}
      className={({ isActive: navActive }) =>
        `w-full px-4 py-3 rounded-xl font-semibold text-lg mb-1 border border-transparent transition-all flex items-center gap-3 relative " +
        ${(navActive || isActive)
          ? 'bg-orange-500/20 text-orange-400 shadow-orange-400/30 shadow font-bold'
          : 'hover:bg-zinc-800/60 text-zinc-200'}
      `}
    >
      <span className="text-xl">{icon}</span>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-orange-500/80 text-white font-semibold animate-pulse shadow">
          {badge}
        </span>
      )}
    </NavLink>
  );
}
