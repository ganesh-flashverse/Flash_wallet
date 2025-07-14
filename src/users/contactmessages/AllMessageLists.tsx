import React from "react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        All Message Lists
      </div>
      {/* Message Lists Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="flex items-center gap-2 font-semibold text-sm">
            Message Lists <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">0</span>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs"
              placeholder="Ex : search by name, email, ..."
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
                <th className="px-2 py-2 font-semibold">Name</th>
                <th className="px-2 py-2 font-semibold">Email</th>
                <th className="px-2 py-2 font-semibold">Subject</th>
                <th className="px-2 py-2 font-semibold">Seen/Unseen</th>
                <th className="px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="py-12 text-center text-gray-400">
                  <div className="flex flex-col items-center justify-center">
                    {/* SVG Illustration */}
                    <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                      <ellipse cx="50" cy="80" rx="28" ry="6" fill="#F3F4F6" />
                      <path d="M67 60c0 9.389-7.611 17-17 17s-17-7.611-17-17 7.611-17 17-17 17 7.611 17 17z" fill="#E5E7EB"/>
                      <path d="M50 43c9.389 0 17 7.611 17 17 0 2.21-.447 4.315-1.253 6.236-.59 1.428-1.38 2.74-2.34 3.89C60.64 73.55 55.64 77 50 77c-5.64 0-10.64-3.45-13.407-6.874-.96-1.15-1.75-2.462-2.34-3.89C33.447 64.315 33 62.21 33 60c0-9.389 7.611-17 17-17z" fill="#F9FAFB"/>
                      <circle cx="50" cy="60" r="7" fill="#D1D5DB"/>
                      <ellipse cx="50" cy="60" rx="3" ry="1.5" fill="#fff"/>
                    </svg>
                    <span className="mt-4 text-gray-400 font-semibold">No Data Found</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
