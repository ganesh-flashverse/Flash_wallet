import React from "react";

const dummyExpenses = [
  { sl: 1, orderId: "100106", tripId: "Other Expenses", date: "2025-04-20 06:19pm", type: "Discount On Product", customer: "Marjahan Sultana", amount: "$ 116.25" },
  { sl: 2, orderId: "100106", tripId: "Other Expenses", date: "2025-04-20 06:19pm", type: "CashBack", customer: "Marjahan Sultana", amount: "$ 121.88" },
  { sl: 3, orderId: "100105", tripId: "Other Expenses", date: "2025-04-20 06:18pm", type: "Discount On Product", customer: "Marjahan Sultana", amount: "$ 117.50" },
  { sl: 4, orderId: "100105", tripId: "Other Expenses", date: "2025-04-20 06:18pm", type: "CashBack", customer: "Marjahan Sultana", amount: "$ 96.25" },
  { sl: 5, orderId: "100104", tripId: "Other Expenses", date: "2025-04-20 06:16pm", type: "Discount On Product", customer: "Marjahan Sultana", amount: "$ 0.07" },
  { sl: 6, orderId: "100104", tripId: "Other Expenses", date: "2025-04-20 06:16pm", type: "CashBack", customer: "Marjahan Sultana", amount: "$ 67.83" },
];

export default function ExpenseReport() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl font-semibold flex items-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          Expense Report
        </span>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded px-4 py-2 text-xs text-blue-700 mb-4">
        This report will show all the orders in which the admin discount has been used. The admin discount are: Free delivery over store discount & item discounts (partial according to order commission).
      </div>
      {/* Filter Data */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All modules</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Zones</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All vendors</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All customers</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Type</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Time</option></select>
          <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 ml-auto">Filter</button>
        </div>
      </div>
      {/* Expense List Section */}
      <div className="mb-2 flex items-center gap-2">
        <span className="font-semibold">Expense Lists</span>
        <span className="bg-gray-100 text-gray-500 text-xs rounded px-2 py-0.5">12</span>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-4">
          <input className="border border-gray-200 rounded px-3 py-1 text-sm w-64" placeholder="Search by Order ID" />
          <button className="ml-2 bg-gray-200 px-3 py-1 rounded">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="#6b7280" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="ml-auto bg-green-50 border border-green-200 text-green-700 px-4 py-1 rounded flex items-center gap-1">
            <span>Export</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-4 py-2">Sl</th>
                <th className="px-4 py-2">Order Id</th>
                <th className="px-4 py-2">Trip Id</th>
                <th className="px-4 py-2">Date & Time</th>
                <th className="px-4 py-2">Expense Type</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Expense Amount</th>
              </tr>
            </thead>
            <tbody>
              {dummyExpenses.map((row) => (
                <tr className="border-b" key={row.sl}>
                  <td className="px-4 py-2">{row.sl}</td>
                  <td className="px-4 py-2">{row.orderId}</td>
                  <td className="px-4 py-2">
                    <span className="bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs px-2 py-1 rounded-full">{row.tripId}</span>
                  </td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.type}</td>
                  <td className="px-4 py-2">{row.customer}</td>
                  <td className="px-4 py-2">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
