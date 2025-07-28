import React from "react";

const dummyDisbursements = [
  {
    sl: 1,
    id: "#1001",
    store: "Click & Collect",
    createdAt: "27 Nov 2023 12:43pm",
    amount: "$ 940.91",
    paymentMethod: "6cash",
    status: "Pending",
  },
];

export default function DisbursementReport() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header & Tabs */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl font-semibold flex items-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          Disbursement Report
        </span>
      </div>
      <div className="flex gap-8 mb-6 ml-2">
        <button className="text-teal-700 font-semibold border-b-2 border-teal-700 pb-1">Store Disbursements</button>
        <button className="text-gray-500 font-semibold pb-1">Delivery Man Disbursements</button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
          <span className="absolute top-2 right-2 text-green-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#d1fae5" /><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          <div className="flex flex-col items-center">
            <span className="text-green-600 text-4xl mb-1">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <div className="text-2xl font-bold">$ 940.91</div>
            <div className="text-gray-500 text-sm mt-1">Pending Disbursements</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
          <span className="absolute top-2 right-2 text-orange-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fef3c7" /><path d="M9 12l2 2 4-4" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          <div className="flex flex-col items-center">
            <span className="text-orange-400 text-4xl mb-1">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f59e42" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <div className="text-2xl font-bold">$ 0.00</div>
            <div className="text-gray-500 text-sm mt-1">Completed Disbursements</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
          <span className="absolute top-2 right-2 text-red-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fee2e2" /><path d="M9 12l2 2 4-4" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          <div className="flex flex-col items-center">
            <span className="text-red-400 text-4xl mb-1">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f87171" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <div className="text-2xl font-bold">$ 0.00</div>
            <div className="text-gray-500 text-sm mt-1">Canceled Transactions</div>
          </div>
        </div>
      </div>

      {/* Search Data */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Zones</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All modules</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All stores</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Payment Method</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All status</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Time</option></select>
          <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 ml-auto">Filter</button>
        </div>
      </div>

      {/* Total Disbursements */}
      <div className="mb-2 flex items-center gap-2">
        <span className="font-semibold">Total Disbursements</span>
        <span className="bg-gray-100 text-gray-500 text-xs rounded px-2 py-0.5">1</span>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-4">
          <input className="border border-gray-200 rounded px-3 py-1 text-sm w-64" placeholder="Search by Id" />
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
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Store info</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Disburse Amount</th>
                <th className="px-4 py-2">Payment Method</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyDisbursements.map((row) => (
                <tr className="border-b" key={row.sl}>
                  <td className="px-4 py-2">{row.sl}</td>
                  <td className="px-4 py-2">{row.id}</td>
                  <td className="px-4 py-2 font-semibold text-blue-700 cursor-pointer underline">{row.store}</td>
                  <td className="px-4 py-2">{row.createdAt}</td>
                  <td className="px-4 py-2">{row.amount}</td>
                  <td className="px-4 py-2">{row.paymentMethod}</td>
                  <td className="px-4 py-2">
                    <span className="bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs px-3 py-1 rounded-full">{row.status}</span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-gray-100 border border-gray-300 rounded p-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                        <path d="M15 12H9" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
