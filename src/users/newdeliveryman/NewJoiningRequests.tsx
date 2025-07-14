import React, { useState } from "react";

const zoneOptions = [
  { value: '', label: 'All Zones' },
  { value: 'zone1', label: 'Zone 1' },
  { value: 'zone2', label: 'Zone 2' },
  { value: 'zone3', label: 'Zone 3' },
];

export default function Demo() {
  const [activeTab, setActiveTab] = useState('pending');
  const [zone, setZone] = useState('');
  const [search, setSearch] = useState('');
  // No data for now, so always empty
  const deliverymen = [];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-2">
        
        <span className="font-semibold text-base">New Joining Requests</span>
      </div>

      {/* Tabs and Filter */}
      <div className="flex flex-wrap items-center justify-between mb-2">
        <div className="flex gap-4 items-center">
          <button
            className={`text-xs px-2 py-1 border-b-2 ${activeTab === 'pending' ? 'border-teal-500 text-teal-600 font-semibold' : 'border-transparent text-gray-500'} bg-transparent`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Delivery Man
          </button>
          <button
            className={`text-xs px-2 py-1 border-b-2 ${activeTab === 'denied' ? 'border-teal-500 text-teal-600 font-semibold' : 'border-transparent text-gray-500'} bg-transparent`}
            onClick={() => setActiveTab('denied')}
          >
            Denied Deliveryman
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <select
            className="border rounded px-2 py-1 text-xs bg-white"
            value={zone}
            onChange={e => setZone(e.target.value)}
          >
            {zoneOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold">Deliveryman List <span className="ml-1 text-xs bg-gray-200 text-gray-700 rounded-full px-1.5">0</span></div>
          <div className="flex gap-2 items-center">
            <input
              className="border rounded px-3 py-1 text-xs w-64 focus:outline-none focus:ring-2 focus:ring-teal-100"
              placeholder="Ex: DM name,email or phone"
              value={search}
              onChange={e => setSearch(e.target.value)}
              disabled
            />
            <button className="ml-1 px-2 py-1 text-gray-500 bg-gray-100 rounded" disabled>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="border px-2 py-2 font-semibold">Sl</th>
                <th className="border px-2 py-2 font-semibold">Name</th>
                <th className="border px-2 py-2 font-semibold">Contact Info</th>
                <th className="border px-2 py-2 font-semibold">Zone</th>
                <th className="border px-2 py-2 font-semibold">Job Type</th>
                <th className="border px-2 py-2 font-semibold">Join Request Date</th>
                <th className="border px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {deliverymen.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-400">
                    <div className="flex flex-col items-center justify-center">
                      {/* Illustration */}
                      <svg width="100" height="100" viewBox="0 0 200 200" fill="none" className="mb-2">
                        <ellipse cx="100" cy="170" rx="55" ry="10" fill="#F3F4F6" />
                        <circle cx="100" cy="90" r="40" fill="#E5E7EB" />
                        <rect x="80" y="120" width="40" height="30" rx="10" fill="#F3F4F6" />
                        <path d="M100 70c7 0 14 5 14 14s-7 14-14 14-14-5-14-14 7-14 14-14z" fill="#fff" />
                        <path d="M90 110c0-7 20-7 20 0" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <div className="text-xs text-gray-400 font-semibold">No Data Found</div>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
