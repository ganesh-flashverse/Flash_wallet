import React, { useState } from "react";

const sortOptions = [
  "Select Mail Sorting Order",
  "Newest First",
  "Oldest First"
];

export default function Demo() {
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [chooseFirst, setChooseFirst] = useState("");
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");

  const subscribers = [
    { email: "p*********@gmail.com", date: "24 Sep 2024 10:55am" },
    { email: "b*********@gdmx.com", date: "24 Sep 2024 10:55am" },
    { email: "j*********@gmail.com", date: "24 Sep 2024 10:55am" },
    { email: "u*********@Gdmtech.com", date: "24 Sep 2024 10:55am" }
  ];

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" stroke="#222" strokeWidth="2"/><path d="M22 6l-10 7L2 6" stroke="#222" strokeWidth="2"/></svg></span>
        Subscriber List
      </div>
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Subscription Date</label>
            <input type="date" className="w-full border rounded px-2 py-1 text-xs" value={date} onChange={e => setDate(e.target.value)} placeholder="Select date" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Sort By</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {sortOptions.map((opt, i) => <option key={i}>{opt}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Choose First</label>
            <input type="text" className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex : 100" value={chooseFirst} onChange={e => setChooseFirst(e.target.value)} />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-teal-600 text-white px-6 py-1.5 rounded text-xs font-semibold">Filter</button>
        </div>
      </div>
      {/* Mail List Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="flex items-center gap-2 font-semibold text-sm">
            Mail List <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">{subscribers.length}</span>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs"
              placeholder="Ex : search email"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ minWidth: 180 }}
            />
            <button className="bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/></svg>
            </button>
            <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m4-4H8"/></svg>
              Export <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-2 py-2 font-semibold">Sl</th>
                <th className="px-2 py-2 font-semibold">Email</th>
                <th className="px-2 py-2 font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((row, idx) => (
                <tr key={row.email} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center">{idx + 1}</td>
                  <td className="border px-2 py-2">{row.email}</td>
                  <td className="border px-2 py-2">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
