import React from "react";

import { useState } from "react";

export default function Demo() {
  // Cashback list data with toggle state
  const [cashbacks, setCashbacks] = useState([
    {
      id: 1,
      name: "First Order Cash Splash!",
      type: "Percentage",
      amount: "10 %",
      duration: "20 Apr 2024 - 24 Dec 2031",
      used: 2,
      enabled: true,
    },
    {
      id: 2,
      name: "Exclusive Cashback Offer...",
      type: "Amount",
      amount: "$ 100.00",
      duration: "05 Feb 2025 - 20 Dec 2029",
      used: 1,
      enabled: false,
    },
    {
      id: 3,
      name: "Get Up to $20 Cashback on...",
      type: "Amount",
      amount: "$ 20.00",
      duration: "05 Feb 2025 - 30 Jul 2029",
      used: 2,
      enabled: true,
    },
  ]);

  // Toggle handler
  const handleToggle = (idx) => {
    setCashbacks((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-lg font-semibold flex items-center">
          <span className="mr-2">🎁</span> Create Cashback Offer
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        <button className="px-4 py-2 border-b-2 border-teal-500 text-teal-700 font-semibold bg-white">Default</button>
        <button className="px-4 py-2 text-gray-500 bg-white">English(EN)</button>
        <button className="px-4 py-2 text-gray-500 bg-white">Arabic - العربية(AR)</button>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-semibold mb-1">Title (Default)</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="Eid Dhamaka" defaultValue="Eid Dhamaka" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Select customer</label>
            <select className="w-full border rounded px-3 py-2 text-xs">
              <option>Select customer</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Cashback Type <span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-3 py-2 text-xs">
              <option>Percentage (%)</option>
              <option>Amount ($)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Cashback Amount (%) <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="Ex: 100" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Minimum Purchase ($)</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="Ex: 100" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Maximum Discount ($)</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="Ex: 100" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Start Date</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="mm/dd/yyyy" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">End Date</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="mm/dd/yyyy" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Limit for Same User</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-xs" placeholder="Ex: 5" />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded">Reset</button>
          <button className="bg-teal-600 text-white px-6 py-2 rounded">Submit</button>
        </div>
      </div>

      {/* Cashback List Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold">Cashback List <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs ml-1">7</span></div>
          <input className="border rounded px-3 py-1 text-xs w-48" placeholder="Ex : Search by title" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-2 py-2 font-semibold">Sl</th>
                <th className="border px-2 py-2 font-semibold">Name</th>
                <th className="border px-2 py-2 font-semibold">CashBack Type</th>
                <th className="border px-2 py-2 font-semibold">Amount</th>
                <th className="border px-2 py-2 font-semibold">Duration</th>
                <th className="border px-2 py-2 font-semibold">Total Used</th>
                <th className="border px-2 py-2 font-semibold">Status</th>
                <th className="border px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {cashbacks.map((row, idx) => (
                <tr key={row.id}>
                  <td className="border px-2 py-2">{row.id}</td>
                  <td className="border px-2 py-2">{row.name}</td>
                  <td className="border px-2 py-2">{row.type}</td>
                  <td className="border px-2 py-2">{row.amount}</td>
                  <td className="border px-2 py-2">{row.duration}</td>
                  <td className="border px-2 py-2">{row.used}</td>
                  <td className="border px-2 py-2">
                    <Toggle checked={row.enabled} onClick={() => handleToggle(idx)} />
                  </td>
                  <td className="border px-2 py-2 flex gap-2 justify-center">
                    <ActionBtn type="edit" />
                    <ActionBtn type="delete" />
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

// Toggle Switch Component
function Toggle({ checked, onClick }) {
  return (
    <span
      className={`inline-block w-10 h-5 rounded-full transition-colors duration-200 cursor-pointer ${checked ? 'bg-teal-500' : 'bg-gray-300'}`}
      style={{ verticalAlign: 'middle', position: 'relative' }}
      onClick={onClick}
      tabIndex={0}
      role="checkbox"
      aria-checked={checked}
    >
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${checked ? 'translate-x-5' : ''}`}
        style={{ position: 'absolute', top: 0, left: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }}
      />
    </span>
  );
}

// Action Button Component
function ActionBtn({ type }) {
  return (
    <button className={`p-1 rounded hover:bg-gray-100 border ${type === 'edit' ? 'text-teal-600 border-teal-200' : 'text-red-600 border-red-200'}`}>
      {type === 'edit' ? (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-2.828 1.172H7v-2a4 4 0 011.172-2.828z" /></svg>
      ) : (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
      )}
    </button>
  );
}
