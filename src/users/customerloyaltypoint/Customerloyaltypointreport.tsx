import React, { useState } from "react";

const fundTypes = ["All type", "Earned", "Converted", "Current"];
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
        Customer Loyalty Point Report
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
        {/* Points Earned Card */}
        <div className="bg-blue-50 rounded-lg flex flex-col items-center justify-center py-8">
          <div className="bg-white rounded-full p-3 mb-2"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20z" fill="#e0f2fe"/><path d="M17 9v2a5 5 0 0 1-10 0V9" stroke="#38bdf8" strokeWidth="2"/><path d="M9 13h6" stroke="#38bdf8" strokeWidth="2"/></svg></div>
          <div className="text-xl font-bold text-blue-700">4742</div>
          <div className="text-xs text-gray-500 mt-1">Points Earned</div>
        </div>
        {/* Points Converted Card */}
        <div className="bg-green-50 rounded-lg flex flex-col items-center justify-center py-8">
          <div className="bg-white rounded-full p-3 mb-2"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20z" fill="#ecfdf5"/><path d="M12 8v4l3 3" stroke="#22c55e" strokeWidth="2"/><path d="M9 13h6" stroke="#22c55e" strokeWidth="2"/></svg></div>
          <div className="text-xl font-bold text-green-600">254</div>
          <div className="text-xs text-gray-500 mt-1">Points Converted</div>
        </div>
        {/* Current Points in Wallet Card */}
        <div className="bg-orange-50 rounded-lg flex flex-col items-center justify-center py-8">
          <div className="bg-white rounded-full p-3 mb-2"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20z" fill="#fef3c7"/><path d="M7 15v-2a5 5 0 0 1 10 0v2" stroke="#f59e42" strokeWidth="2"/><path d="M15 11H9" stroke="#f59e42" strokeWidth="2"/></svg></div>
          <div className="text-xl font-bold text-orange-600">4488</div>
          <div className="text-xs text-gray-500 mt-1">Current Points in Wallet</div>
        </div>
      </div>
      {/* Transactions Table Section */}
      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="font-semibold text-sm flex items-center gap-2">Transactions</div>
          <div className="flex gap-2 mt-2 md:mt-0">
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
                <th className="px-2 py-2 font-semibold">SL</th>
                <th className="px-2 py-2 font-semibold">Transaction ID</th>
                <th className="px-2 py-2 font-semibold">Customer Info</th>
                <th className="px-2 py-2 font-semibold">Points Earned</th>
                <th className="px-2 py-2 font-semibold">Points Converted</th>
                <th className="px-2 py-2 font-semibold">Current Points in Wallet</th>
                <th className="px-2 py-2 font-semibold">Transaction Type</th>
                <th className="px-2 py-2 font-semibold">Reference</th>
                <th className="px-2 py-2 font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sl: 1,
                  id: "7e0c88a4-0158-45a8-853a-c984cbccbb55",
                  customer: "Jerry Jose",
                  earned: 4,
                  converted: 0,
                  current: 908,
                  type: "Order Place",
                  reference: "100028",
                  created: "29 Sep 2022 03:49pm"
                },
                {
                  sl: 2,
                  id: "577b24dc-ddf1-447d-af5a-cb910205e5b5",
                  customer: "Jerry Jose",
                  earned: 294,
                  converted: 0,
                  current: 904,
                  type: "Order Place",
                  reference: "100046",
                  created: "29 Sep 2022 03:10pm"
                },
                {
                  sl: 3,
                  id: "9445f19c-b58c-4234-97f5-e8d8689f29d4",
                  customer: "Tomas Porter",
                  earned: 535,
                  converted: 0,
                  current: 882,
                  type: "Order Place",
                  reference: "100035",
                  created: "29 Sep 2022 03:16pm"
                },
                {
                  sl: 4,
                  id: "7c252f2e-505a-4e7a-b15c-d7b49d98d0ca",
                  customer: "Ashok Elahe",
                  earned: 115,
                  converted: 0,
                  current: 631,
                  type: "Order Place",
                  reference: "100001",
                  created: "29 Sep 2022 04:14pm"
                },
                {
                  sl: 5,
                  id: "6b6045a2-5b6c-454c-aeb7-365208e2be44",
                  customer: "Jerry Jose",
                  earned: 118,
                  converted: 0,
                  current: 610,
                  type: "Order Place",
                  reference: "100044",
                  created: "29 Sep 2022 02:54pm"
                },
                {
                  sl: 6,
                  id: "87a48108-b6bf-41fd-a6c2-b60953aea244",
                  customer: "Sakeef Ameer Prodhan",
                  earned: 518,
                  converted: 0,
                  current: 516,
                  type: "Order Place",
                  reference: "100013",
                  created: "29 Sep 2022 10:33am"
                }
              ].map((row, idx) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center">{row.sl}</td>
                  <td className="border px-2 py-2 font-mono">{row.id}</td>
                  <td className="border px-2 py-2">{row.customer}</td>
                  <td className="border px-2 py-2 text-blue-700">{row.earned}</td>
                  <td className="border px-2 py-2 text-green-700">{row.converted}</td>
                  <td className="border px-2 py-2 text-orange-600">{row.current}</td>
                  <td className="border px-2 py-2 text-center">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold border border-blue-200">{row.type}</span>
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
