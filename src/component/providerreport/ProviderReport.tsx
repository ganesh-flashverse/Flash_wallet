import React, { useState } from "react";

const FILTERS = [
  { key: "all", label: "All Time" },
  { key: "year", label: "This Year" },
  { key: "prevYear", label: "Previous Year" },
  { key: "month", label: "This Month" },
  { key: "week", label: "This Week" },
];

const TABS = [
  { key: "summary", label: "Summary Report" },
  { key: "vehicle", label: "Vehicle Report" },
  { key: "trip", label: "Trip Report" },
];

// Dummy data for each tab and filter
const DUMMY_DATA = {
  summary: {
    all: {
      providers: 8,
      vehicles: 18,
      trips: 42,
      canceled: 2,
      incomplete: 28,
      completed: 11,
      avgTrip: 10600,
      chart: [0, 0, 0, 0, 120025],
      payments: { total: 116580, cash: 27150, digital: 88870, wallet: 565.6 },
    },
    year: {
      providers: 6,
      vehicles: 14,
      trips: 21,
      canceled: 1,
      incomplete: 12,
      completed: 8,
      avgTrip: 9800,
      chart: [0, 0, 0, 0, 60000],
      payments: { total: 58500, cash: 12000, digital: 45000, wallet: 500 },
    },
    prevYear: {
      providers: 7,
      vehicles: 17,
      trips: 30,
      canceled: 3,
      incomplete: 20,
      completed: 7,
      avgTrip: 10200,
      chart: [0, 0, 0, 0, 85000],
      payments: { total: 90000, cash: 20000, digital: 68000, wallet: 2000 },
    },
    month: {
      providers: 2,
      vehicles: 4,
      trips: 6,
      canceled: 0,
      incomplete: 2,
      completed: 4,
      avgTrip: 12000,
      chart: [0, 0, 0, 0, 18000],
      payments: { total: 16000, cash: 4000, digital: 11000, wallet: 1000 },
    },
    week: {
      providers: 1,
      vehicles: 2,
      trips: 2,
      canceled: 0,
      incomplete: 1,
      completed: 1,
      avgTrip: 8000,
      chart: [0, 0, 0, 0, 8000],
      payments: { total: 8000, cash: 2000, digital: 5500, wallet: 500 },
    },
  },
  vehicle: {
    all: {
      providers: 8,
      vehicles: 18,
      trips: 32,
      canceled: 1,
      incomplete: 20,
      completed: 11,
      avgTrip: 9000,
      chart: [0, 0, 0, 0, 90000],
      payments: { total: 90000, cash: 30000, digital: 58000, wallet: 2000 },
    },
    year: {
      providers: 5,
      vehicles: 10,
      trips: 12,
      canceled: 0,
      incomplete: 6,
      completed: 6,
      avgTrip: 9500,
      chart: [0, 0, 0, 0, 30000],
      payments: { total: 29500, cash: 9000, digital: 20000, wallet: 500 },
    },
    prevYear: {
      providers: 6,
      vehicles: 13,
      trips: 18,
      canceled: 1,
      incomplete: 12,
      completed: 5,
      avgTrip: 8500,
      chart: [0, 0, 0, 0, 50000],
      payments: { total: 50000, cash: 12000, digital: 37000, wallet: 1000 },
    },
    month: {
      providers: 2,
      vehicles: 3,
      trips: 4,
      canceled: 0,
      incomplete: 1,
      completed: 3,
      avgTrip: 10000,
      chart: [0, 0, 0, 0, 12000],
      payments: { total: 11000, cash: 3000, digital: 7000, wallet: 1000 },
    },
    week: {
      providers: 1,
      vehicles: 2,
      trips: 2,
      canceled: 0,
      incomplete: 1,
      completed: 1,
      avgTrip: 7000,
      chart: [0, 0, 0, 0, 7000],
      payments: { total: 7000, cash: 2000, digital: 4500, wallet: 500 },
    },
  },
  trip: {
    all: {
      providers: 7,
      vehicles: 16,
      trips: 27,
      canceled: 2,
      incomplete: 15,
      completed: 10,
      avgTrip: 11000,
      chart: [0, 0, 0, 0, 60000],
      payments: { total: 60000, cash: 20000, digital: 38000, wallet: 2000 },
    },
    year: {
      providers: 4,
      vehicles: 8,
      trips: 10,
      canceled: 1,
      incomplete: 5,
      completed: 4,
      avgTrip: 11500,
      chart: [0, 0, 0, 0, 15000],
      payments: { total: 14500, cash: 4000, digital: 10000, wallet: 500 },
    },
    prevYear: {
      providers: 5,
      vehicles: 10,
      trips: 12,
      canceled: 1,
      incomplete: 8,
      completed: 3,
      avgTrip: 10500,
      chart: [0, 0, 0, 0, 30000],
      payments: { total: 30000, cash: 9000, digital: 20000, wallet: 1000 },
    },
    month: {
      providers: 2,
      vehicles: 3,
      trips: 3,
      canceled: 0,
      incomplete: 1,
      completed: 2,
      avgTrip: 12000,
      chart: [0, 0, 0, 0, 9000],
      payments: { total: 9000, cash: 2000, digital: 6500, wallet: 500 },
    },
    week: {
      providers: 1,
      vehicles: 2,
      trips: 1,
      canceled: 0,
      incomplete: 0,
      completed: 1,
      avgTrip: 6000,
      chart: [0, 0, 0, 0, 6000],
      payments: { total: 6000, cash: 1000, digital: 4500, wallet: 500 },
    },
  },
};

function formatK(val) {
  if (val >= 1000) return `$ ${(val / 1000).toFixed(2)}K`;
  return `$ ${val}`;
}

export default function Demo() {
  const [tab, setTab] = useState("summary");
  const [filter, setFilter] = useState("all");
  const data = DUMMY_DATA[tab][filter];

  return <>
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center mb-2">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Provider" className="w-8 h-8 mr-2" />
        <div>
          <div className="text-lg font-semibold text-gray-800">Provider Report</div>
          <div className="text-xs text-gray-500">Monitor provider's business analytics & Reports</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center mt-4 mb-2 border-b border-gray-200">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 focus:outline-none ${tab === t.key ? "border-teal-600 text-teal-700" : "border-transparent text-gray-600 hover:text-teal-600"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1 rounded text-xs font-medium border ${filter === f.key ? "bg-teal-600 text-white border-teal-600" : "bg-white text-gray-700 border-gray-200 hover:bg-teal-50"}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Cards */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
            <span className="bg-red-100 p-2 rounded">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="10" width="3" height="7" fill="#f87171"/><rect x="14" y="10" width="3" height="7" fill="#f87171"/></svg>
            </span>
            <div>
              <div className="text-2xl font-bold text-gray-800">{data.providers}</div>
              <div className="text-xs text-gray-500">Registered Providers</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 p-2 rounded">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" fill="#60a5fa"/></svg>
              </span>
              <div>
                <div className="text-2xl font-bold text-gray-800">{data.trips}</div>
                <div className="text-xs text-gray-500">Total Trips</div>
                <div className="flex gap-2 mt-1 text-xs">
                  <span className="text-red-500">{data.canceled} Canceled</span>
                  <span className="text-blue-500">{data.incomplete} Incomplete</span>
                  <span className="text-green-500">{data.completed} Completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
            <span className="bg-yellow-100 p-2 rounded">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="10" width="10" height="7" fill="#fbbf24"/></svg>
            </span>
            <div>
              <div className="text-2xl font-bold text-gray-800">{data.vehicles}</div>
              <div className="text-xs text-gray-500">Total Vehicles</div>
            </div>
          </div>
        </div>

        {/* Center Chart */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-gray-700">Total Trips</div>
            <div className="text-xs text-gray-500">Average Trip Value : <span className="font-semibold text-teal-700">{formatK(data.avgTrip)}</span></div>
          </div>
          {/* Dummy Bar Chart */}
          <div className="flex-1 flex items-end h-48 gap-4 mt-6">
            {data.chart.map((val, i) => (
              <div key={i} className="flex flex-col items-center w-1/5">
                <div
                  className="w-8 rounded-t bg-teal-400"
                  style={{ height: `${val / 1200}px`, minHeight: "8px" }}
                ></div>
                <span className="text-xs text-gray-400 mt-1">{2021 + i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut Chart */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center h-full">
          <div className="font-semibold text-gray-700 mb-2">Completed Payment Statistics</div>
          {/* Dummy Donut Chart SVG */}
          <svg width="120" height="120" viewBox="0 0 42 42" className="mb-2">
            <circle r="15.9155" cx="21" cy="21" fill="#f3f4f6" />
            <circle
              r="15.9155"
              cx="21"
              cy="21"
              fill="transparent"
              stroke="#34d399"
              strokeWidth="4"
              strokeDasharray={`${(data.payments.cash / data.payments.total) * 100} ${(100 - (data.payments.cash / data.payments.total) * 100)}`}
              strokeDashoffset="0"
            />
            <circle
              r="15.9155"
              cx="21"
              cy="21"
              fill="transparent"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeDasharray={`${(data.payments.digital / data.payments.total) * 100} ${(100 - (data.payments.digital / data.payments.total) * 100)}`}
              strokeDashoffset={`-${(data.payments.cash / data.payments.total) * 100}`}
            />
            <circle
              r="15.9155"
              cx="21"
              cy="21"
              fill="transparent"
              stroke="#fbbf24"
              strokeWidth="4"
              strokeDasharray={`${(data.payments.wallet / data.payments.total) * 100} ${(100 - (data.payments.wallet / data.payments.total) * 100)}`}
              strokeDashoffset={`-${((data.payments.cash + data.payments.digital) / data.payments.total) * 100}`}
            />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="8" fontWeight="bold" fill="#222">{formatK(data.payments.total)}</text>
          </svg>
          <div className="text-xs text-gray-500 text-center">
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-green-300 mr-1"></span>Cash Payments ({formatK(data.payments.cash)})</div>
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-blue-300 mr-1"></span>Digital Payments ({formatK(data.payments.digital)})</div>
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full bg-yellow-300 mr-1"></span>Wallet ({formatK(data.payments.wallet)})</div>
          </div>
        </div>
      </div>

   {/* End Dashboard */}
   <div className="bg-white rounded-lg shadow p-4 mt-5">
      <div className="flex flex-wrap items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base text-gray-700">Total Providers</span>
          <span className="bg-gray-100 text-xs px-2 rounded text-gray-600">8</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Ex : Search Provider Name" className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none" />
          <button className="bg-green-50 border border-green-600 text-green-700 px-4 py-1 rounded flex items-center text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Export
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l3-3 3 3m0 6l-3 3-3-3" /></svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="px-3 py-2 font-semibold">SL</th>
              <th className="px-3 py-2 font-semibold">Provider</th>
              <th className="px-3 py-2 font-semibold">Total Amount</th>
              <th className="px-3 py-2 font-semibold">Total Trips</th>
              <th className="px-3 py-2 font-semibold">Total Completed Trips</th>
              <th className="px-3 py-2 font-semibold">Trip Completion Rate</th>
              <th className="px-3 py-2 font-semibold">Ongoing Trip Rate</th>
              <th className="px-3 py-2 font-semibold">Trip Cancellation Rate</th>
              <th className="px-3 py-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "RideMaster Taxis", amount: 95270, trips: 27, completed: 4, completion: 14.81, ongoing: 81.48, cancel: 3.70 },
              { name: "GoCar Hire", amount: 12040, trips: 6, completed: 4, completion: 66.67, ongoing: 16.67, cancel: 16.67 },
              { name: "CityLink Taxis", amount: 9100, trips: 5, completed: 2, completion: 40.00, ongoing: 60.00, cancel: 0 },
              { name: "CityRide Rentals", amount: 180.6, trips: 4, completed: 1, completion: 25.00, ongoing: 75.00, cancel: 0 },
              { name: "SwiftMove Taxis", amount: 0, trips: 0, completed: 0, completion: 0, ongoing: 0, cancel: 0 },
              { name: "LuxDrive Rentals", amount: 0, trips: 0, completed: 0, completion: 0, ongoing: 0, cancel: 0 },
              { name: "MetroCab", amount: 0, trips: 0, completed: 0, completion: 0, ongoing: 0, cancel: 0 },
              { name: "UrbanDrive", amount: 0, trips: 0, completed: 0, completion: 0, ongoing: 0, cancel: 0 },
            ].map((p, i) => (
              <tr key={p.name} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2">{i + 1}</td>
                <td className="px-3 py-2 text-blue-600 font-medium cursor-pointer hover:underline">{p.name}</td>
                <td className="px-3 py-2">$ {p.amount ? (p.amount / 1000).toFixed(2) + 'K' : '0.00'}</td>
                <td className="px-3 py-2">{p.trips}</td>
                <td className="px-3 py-2">{p.completed}</td>
                <td className="px-3 py-2">{p.completion}%</td>
                <td className="px-3 py-2">{p.ongoing}%</td>
                <td className="px-3 py-2">{p.cancel}%</td>
                <td className="px-3 py-2">
                  <button className="bg-white border border-teal-600 text-teal-600 rounded p-1 hover:bg-teal-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M10 6v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


    </div>
 


  </>;
}

