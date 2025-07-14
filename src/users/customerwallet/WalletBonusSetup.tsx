import React, { useState } from "react";

const tabs = [
  { label: "Default" },
  { label: "English(EN)" },
  { label: "Arabic - العربية(AR)" }
];
const bonusTypes = ["Percentage (%)", "Flat ($)"];

const bonusList = [
  {
    sl: 1,
    title: "Add 100 get 10% Extra",
    info: [
      "Minimum add amount - $ 100.00",
      "Maximum bonus - $ 200.00"
    ],
    bonusAmount: "10 %",
    startedOn: "20 Aug 2023",
    expiresOn: "21 Jul 2027",
    status: true
  },
  {
    sl: 2,
    title: "Add 5000 Get 30% Extra",
    info: [
      "Minimum add amount - $ 500.00",
      "Maximum bonus - $ 300.00"
    ],
    bonusAmount: "30 %",
    startedOn: "20 Aug 2023",
    expiresOn: "20 Feb 2025",
    status: true
  }
];

export default function Demo() {
  const [tab, setTab] = useState(0);
  const [bonusType, setBonusType] = useState(bonusTypes[0]);
  const [status, setStatus] = useState([true, true]);

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" stroke="#222" strokeWidth="2"/><path d="M3 7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1" stroke="#222" strokeWidth="2"/></svg></span>
        Wallet Bonus Setup
      </div>
      {/* Tabs */}
      <div className="flex gap-3 mb-2 text-xs font-semibold">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-t ${tab === i ? "bg-white text-teal-600 border-b-2 border-teal-500" : "text-gray-500 bg-gray-50"}`}
            onClick={() => setTab(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Bonus Title (Default) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex: EID Dhamaka" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Short Description (Default) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex: EID Dhamaka" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-2">
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Bonus Type <span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={bonusType} onChange={e => setBonusType(e.target.value)}>
              {bonusTypes.map((type, i) => <option key={i}>{type}</option>)}
            </select>
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Bonus Amount (%) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex: 100" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Minimum Add Money Amount ($) <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex: 10" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Maximum Bonus ($)</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex: 1000" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Start date <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="mm/dd/yyyy" type="date" />
          </div>
          <div className="flex flex-col col-span-1">
            <label className="text-xs text-gray-500 mb-1">Expire date <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="mm/dd/yyyy" type="date" />
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button className="bg-gray-100 text-gray-700 px-5 py-1.5 rounded text-xs font-semibold">Reset</button>
          <button className="bg-teal-600 text-white px-5 py-1.5 rounded text-xs font-semibold">Submit</button>
        </div>
      </div>
      {/* Bonus List Table */}
      <div className="bg-white rounded-lg shadow p-4 mt-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="font-semibold text-sm flex items-center gap-2">Bonus List <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-1">2</span></div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input className="border rounded px-3 py-1 text-xs w-56 focus:outline-none focus:ring-2 focus:ring-teal-100" placeholder="Ex : Search by bonus title" />
          </div>
        </div>
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-2 py-2 font-semibold">Sl</th>
                <th className="px-2 py-2 font-semibold">Bonus Title</th>
                <th className="px-2 py-2 font-semibold">Bonus Info</th>
                <th className="px-2 py-2 font-semibold">Bonus Amount</th>
                <th className="px-2 py-2 font-semibold">Started On</th>
                <th className="px-2 py-2 font-semibold">Expires On</th>
                <th className="px-2 py-2 font-semibold">Status</th>
                <th className="px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {bonusList.map((row, idx) => (
                <tr key={row.sl} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center">{row.sl}</td>
                  <td className="border px-2 py-2">{row.title}</td>
                  <td className="border px-2 py-2">
                    <div className="flex flex-col gap-1">
                      {row.info.map((txt, i) => (
                        <span key={i}>{txt}</span>
                      ))}
                    </div>
                  </td>
                  <td className="border px-2 py-2">{row.bonusAmount}</td>
                  <td className="border px-2 py-2">{row.startedOn}</td>
                  <td className="border px-2 py-2">{row.expiresOn}</td>
                  <td className="border px-2 py-2 text-center">
                    {/* Toggle Switch */}
                    <button className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${row.status ? "bg-teal-400" : "bg-gray-300"}`}
                      tabIndex="-1"
                      aria-label="Toggle Status"
                      >
                      <span className={`absolute left-0 top-0 w-5 h-5 bg-white border rounded-full shadow transition-transform duration-200 ${row.status ? "translate-x-5" : ""}`}></span>
                    </button>
                  </td>
                  <td className="border px-2 py-2 text-center">
                    <div className="flex gap-2 items-center justify-center">
                      <button className="text-teal-600 hover:bg-teal-50 p-1 rounded" aria-label="Edit"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 21h4.586a1 1 0 0 0 .707-.293l10.414-10.414a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0L4.293 15.707A1 1 0 0 0 4 16.414V21z" stroke="#14b8a6" strokeWidth="2"/><path d="M15 6l3 3" stroke="#14b8a6" strokeWidth="2"/></svg></button>
                      <button className="text-red-500 hover:bg-red-50 p-1 rounded" aria-label="Delete"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 7h12M9 7V6a3 3 0 0 1 6 0v1m-9 0h12m-1 0v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z" stroke="#ef4444" strokeWidth="2"/></svg></button>
                    </div>
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
