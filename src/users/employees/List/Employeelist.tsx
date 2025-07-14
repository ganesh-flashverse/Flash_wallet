import React from "react";

const employees = [
  {
    sl: 1,
    name: "Ronnie Dickson",
    email: "D*********@gmail.com",
    phone: "D*********",
    role: "Receptionist & Front Desk Manager"
  },
  {
    sl: 2,
    name: "Noel Flynn",
    email: "N*********@gmail.com",
    phone: "1*********",
    role: "Accountant"
  },
  {
    sl: 3,
    name: "Samson Armstrong",
    email: "S*********@gmail.com",
    phone: "1*********",
    role: "Manager"
  },
  {
    sl: 4,
    name: "Gregory Mcclure",
    email: "G*********@gmail.com",
    phone: "1*********",
    role: "HR"
  },
  {
    sl: 5,
    name: "Rowan Morton",
    email: "M*********@gmail.com",
    phone: "1*********",
    role: "Customer Relation Manager"
  }
];

export default function Demo() {
  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#222" strokeWidth="2"/><circle cx="12" cy="7" r="4" stroke="#222" strokeWidth="2"/></svg></span>
        Employee List
      </div>
      {/* Employee Table Card */}
      <div className="bg-white rounded-lg shadow p-4 border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="flex items-center gap-2 font-semibold text-sm">
            Employee Table <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">5</span>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs"
              placeholder="Ex : search name"
              style={{ minWidth: 160 }}
            />
            <button className="bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600 flex items-center gap-1">
              Export <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M12 16v-8M8 12l4 4 4-4" stroke="#666" strokeWidth="2"/></svg>
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded text-xs font-semibold flex items-center gap-1">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#fff" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2"/></svg>
              Add New
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-2 py-2 font-semibold">Sl</th>
                <th className="px-2 py-2 font-semibold">Name</th>
                <th className="px-2 py-2 font-semibold">Email</th>
                <th className="px-2 py-2 font-semibold">Phone</th>
                <th className="px-2 py-2 font-semibold">Role</th>
                <th className="px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((row, idx) => (
                <tr key={row.sl} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center w-8">{row.sl}</td>
                  <td className="border px-2 py-2 max-w-[180px] truncate" title={row.name}>{row.name}</td>
                  <td className="border px-2 py-2 max-w-[180px] truncate" title={row.email}>{row.email}</td>
                  <td className="border px-2 py-2 max-w-[120px] truncate" title={row.phone}>{row.phone}</td>
                  <td className="border px-2 py-2 max-w-[220px] truncate" title={row.role}>{row.role}</td>
                  <td className="border px-2 py-2 text-center">
                    <button className="inline-flex items-center justify-center bg-white border border-teal-500 text-teal-600 rounded p-1 mr-1 hover:bg-teal-50" title="Edit">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M4 20h4.586a2 2 0 0 0 1.414-.586l9.172-9.172a2 2 0 0 0 0-2.828l-3.586-3.586a2 2 0 0 0-2.828 0l-9.172 9.172A2 2 0 0 0 4 20z"/></svg>
                    </button>
                    <button className="inline-flex items-center justify-center bg-white border border-red-400 text-red-500 rounded p-1 hover:bg-red-50" title="Delete">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
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
