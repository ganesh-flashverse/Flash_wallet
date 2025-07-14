import React, { useState } from "react";

const fundTypes = ["All transactions", "Debit", "Credit"];
const customers = ["Select customer", "Mehedi Hasan", "Customer 2"];
const durations = ["All Time", "Today", "This Week", "This Month"];

export default function Demo() {
  const [fundType, setFundType] = useState(fundTypes[0]);
  const [customer, setCustomer] = useState(customers[0]);
  const [duration, setDuration] = useState(durations[0]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#14b8a6" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#14b8a6" strokeWidth="2"/></svg></span>
        Customer Wallet Report
      </div>
      {/* Filter Options */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="text-xs text-gray-500 font-semibold mb-2">Filter Options</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Add Fund Type</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={fundType} onChange={e => setFundType(e.target.value)}>
              {fundTypes.map((type, i) => <option key={i}>{type}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Customer</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={customer} onChange={e => setCustomer(e.target.value)}>
              {customers.map((c, i) => <option key={i}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Duration</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={duration} onChange={e => setDuration(e.target.value)}>
              {durations.map((d, i) => <option key={i}>{d}</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-2">
          <button className="bg-gray-100 text-gray-700 px-5 py-1.5 rounded text-xs font-semibold">Reset</button>
          <button className="bg-teal-600 text-white px-5 py-1.5 rounded text-xs font-semibold">Filter</button>
        </div>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Debit Card */}
        <div className="bg-blue-50 rounded-lg flex flex-col items-center justify-center py-8">
          <div className="bg-white rounded-full p-3 mb-2"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20z" fill="#e0f2fe"/><path d="M17 9v2a5 5 0 0 1-10 0V9" stroke="#38bdf8" strokeWidth="2"/><path d="M9 13h6" stroke="#38bdf8" strokeWidth="2"/></svg></div>
          <div className="text-xl font-bold text-blue-700">$ 10,105.91</div>
          <div className="text-xs text-gray-500 mt-1">Debit</div>
        </div>
        {/* Credit Card */}
        <div className="bg-orange-50 rounded-lg flex flex-col items-center justify-center py-8">
          <div className="bg-white rounded-full p-3 mb-2"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20z" fill="#fef3c7"/><path d="M7 15v-2a5 5 0 0 1 10 0v2" stroke="#f59e42" strokeWidth="2"/><path d="M15 11H9" stroke="#f59e42" strokeWidth="2"/></svg></div>
          <div className="text-xl font-bold text-orange-600">$ 35,276.94</div>
          <div className="text-xs text-gray-500 mt-1">Credit</div>
        </div>
        {/* Fund Statistics Card */}
        <div className="bg-white rounded-lg flex flex-col items-center justify-center py-8 shadow">
          <div className="font-semibold text-xs text-gray-600 mb-1">Fund Statistics</div>
          <div className="flex flex-col items-center">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#f3f4f6" />
              <path d="M50 10 a40 40 0 1 1 0 80" fill="none" stroke="#14b8a6" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="100" />
              <text x="50" y="56" textAnchor="middle" fontSize="16" fill="#222">$ 36.7K</text>
              <text x="50" y="72" textAnchor="middle" fontSize="10" fill="#888">Total</text>
            </svg>
            <div className="mt-2 flex flex-col gap-1 text-[11px] text-gray-500">
              <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-teal-500"></span> Fund added by Admin ($9,729.00)</div>
              <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span> Order refund ($13,412.00)</div>
              <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span> Loyalty Point ($2.4K)</div>
              <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-gray-400"></span> Order placed ($10,105.91)</div>
            </div>
          </div>
        </div>
      </div>
      {/* Transactions Table Section */}
      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="font-semibold text-sm flex items-center gap-2">
            <span className="inline-block"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#14b8a6" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#14b8a6" strokeWidth="2"/></svg></span>
            Transactions <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-1">43</span>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input className="border rounded px-3 py-1 text-xs w-56 focus:outline-none focus:ring-2 focus:ring-teal-100" placeholder="Ex : search by customer name" />
            <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m4-4H8"/></svg>
              Export <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-2 py-2 font-semibold">Sl</th>
                <th className="px-2 py-2 font-semibold">Transaction Id</th>
                <th className="px-2 py-2 font-semibold">Customer Info</th>
                <th className="px-2 py-2 font-semibold">Credit</th>
                <th className="px-2 py-2 font-semibold">Debit</th>
                <th className="px-2 py-2 font-semibold">Bonus</th>
                <th className="px-2 py-2 font-semibold">Balance</th>
                <th className="px-2 py-2 font-semibold">Transaction Type</th>
                <th className="px-2 py-2 font-semibold">Reference</th>
                <th className="px-2 py-2 font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sl: 1,
                  id: "bcf05d1f-2628-4b87-864f-b7344c339494",
                  customer: "Marjahan Sultana",
                  credit: "$ 121.80",
                  debit: "$ 0.00",
                  bonus: "$ 0.00",
                  balance: "$ 4,963.11",
                  type: "CashBack",
                  reference: "100106",
                  created: "20 Apr 2025 05:16pm"
                },
                {
                  sl: 2,
                  id: "c0574726-7fd4-4872-828c-fb5dc0c752dc",
                  customer: "Marjahan Sultana",
                  credit: "$ 96.25",
                  debit: "$ 0.00",
                  bonus: "$ 0.00",
                  balance: "$ 4,841.23",
                  type: "CashBack",
                  reference: "100105",
                  created: "20 Apr 2025 05:16pm"
                },
                {
                  sl: 3,
                  id: "360254a9-febf-4182-a2de-2ce378df3544",
                  customer: "Marjahan Sultana",
                  credit: "$ 87.63",
                  debit: "$ 0.00",
                  bonus: "$ 0.00",
                  balance: "$ 4,744.38",
                  type: "CashBack",
                  reference: "100104",
                  created: "20 Apr 2025 05:16pm"
                },
                {
                  sl: 4,
                  id: "77a1dfdf-2956-4348-9829-0e7b69eb9b67",
                  customer: "Marjahan Sultana",
                  credit: "$ 80.50",
                  debit: "$ 0.00",
                  bonus: "$ 0.00",
                  balance: "$ 4,677.15",
                  type: "CashBack",
                  reference: "100103",
                  created: "20 Apr 2025 05:16pm"
                },
                {
                  sl: 5,
                  id: "6fb739ef-b055-4b32-bb67-e7012c04347c",
                  customer: "Marjahan Sultana",
                  credit: "$ 55.05",
                  debit: "$ 0.00",
                  bonus: "$ 0.00",
                  balance: "$ 4,596.65",
                  type: "CashBack",
                  reference: "100102",
                  created: "20 Apr 2025 05:16pm"
                }
              ].map((row, idx) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center">{row.sl}</td>
                  <td className="border px-2 py-2 font-mono">{row.id}</td>
                  <td className="border px-2 py-2">{row.customer}</td>
                  <td className="border px-2 py-2 text-green-600">{row.credit}</td>
                  <td className="border px-2 py-2 text-red-600">{row.debit}</td>
                  <td className="border px-2 py-2">{row.bonus}</td>
                  <td className="border px-2 py-2">{row.balance}</td>
                  <td className="border px-2 py-2 text-center">
                    <span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded text-xs font-semibold border border-teal-200">{row.type}</span>
                  </td>
                  <td className="border px-2 py-2">{row.reference}</td>
                  <td className="border px-2 py-2">{row.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
