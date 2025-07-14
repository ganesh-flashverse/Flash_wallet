import React, { useState } from "react";

const customers = [
  {
    id: 1,
    name: "Mehedi Hasan",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "m*********@gmail.com",
    phone: "0***********",
    totalOrder: 12,
    totalOrderAmount: "$ 28,332.50",
    joiningDate: "23 Mar 2022",
    active: true,
  },
  {
    id: 2,
    name: "Marjahan Sultana",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "m*********@gmail.com",
    phone: "0***********",
    totalOrder: 9,
    totalOrderAmount: "$ 11,106.41",
    joiningDate: "23 Mar 2022",
    active: true,
  },
  {
    id: 3,
    name: "Ellen Reyna",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "l*********@gmail.com",
    phone: "0***********",
    totalOrder: 8,
    totalOrderAmount: "$ 54,952.36",
    joiningDate: "29 Sep 2022",
    active: true,
  },
  {
    id: 4,
    name: "MS 123",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "m*********@gmail.com",
    phone: "0***********",
    totalOrder: 8,
    totalOrderAmount: "$ 14,383.04",
    joiningDate: "27 Nov 2023",
    active: true,
  },
  {
    id: 5,
    name: "Ali Bey",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "a*********@gmail.com",
    phone: "0***********",
    totalOrder: 7,
    totalOrderAmount: "$ 35,579.20",
    joiningDate: "29 Sep 2022",
    active: true,
  },
  {
    id: 6,
    name: "Ashek Elahe",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    email: "s*********@gmail.com",
    phone: "0***********",
    totalOrder: 7,
    totalOrderAmount: "$ 83,543.59",
    joiningDate: "22 Mar 2022",
    active: false,
  },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-10 h-6 flex items-center rounded-full border border-gray-200 px-1 transition-colors duration-200 ${checked ? "bg-teal-400" : "bg-gray-200"}`}
      aria-pressed={checked}
    >
      <span
        className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${checked ? "bg-white translate-x-4" : "bg-white"}`}
      />
    </button>
  );
}

export default function Demo() {
  const [customerList, setCustomerList] = useState(customers);

  const handleToggle = (id) => {
    setCustomerList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="mr-2 text-lg">🧑‍💼</span>
        <span className="font-semibold text-base">Customers</span>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Order Date</label>
            <input type="date" className="border rounded px-3 py-2 text-xs" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Customer Joining Date</label>
            <input type="date" className="border rounded px-3 py-2 text-xs" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Customer Status</label>
            <select className="border rounded px-3 py-2 text-xs">
              <option>Select Status</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Sort By</label>
            <select className="border rounded px-3 py-2 text-xs">
              <option>Select Customer Sorting Order</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Choose First</label>
            <input type="text" className="border rounded px-3 py-2 text-xs" placeholder="Ex : 100" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-teal-600 text-white px-6 py-2 rounded text-xs font-semibold shadow hover:bg-teal-700">Filter</button>
        </div>
      </div>
      {/* Customer List Header */}
      <div className="flex items-center mb-2">
        <span className="font-semibold text-sm">Customer list</span>
        <span className="ml-2 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">27</span>
        <div className="flex ml-auto gap-2">
          <div className="relative">
            <input
              className="border rounded px-3 py-1 text-xs w-56 focus:outline-none focus:ring-2 focus:ring-teal-100 pr-8"
              placeholder="Ex: name, email or phone"
            />
            <span className="absolute right-2 top-1.5 text-gray-400">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
          </div>
          <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m4-4H8"/></svg>
            Export <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="border px-2 py-2 font-semibold">Sl</th>
                <th className="border px-2 py-2 font-semibold">Name</th>
                <th className="border px-2 py-2 font-semibold">Contact Information</th>
                <th className="border px-2 py-2 font-semibold">Total Order</th>
                <th className="border px-2 py-2 font-semibold">Total Order Amount</th>
                <th className="border px-2 py-2 font-semibold">Joining Date</th>
                <th className="border px-2 py-2 font-semibold">Active/Inactive</th>
                <th className="border px-2 py-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customerList.map((row, idx) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center">{idx + 1}</td>
                  <td className="border px-2 py-2 flex items-center gap-2">
                    <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded object-cover border" />
                    <div>
                      <div className="font-semibold text-gray-800">{row.name}</div>
                      <div className="text-xs text-blue-600">{row.email}</div>
                      <div className="text-xs text-green-600">{row.phone}</div>
                    </div>
                  </td>
                  <td className="border px-2 py-2">
                    <div className="text-xs text-blue-600">{row.email}</div>
                    <div className="text-xs text-green-600">{row.phone}</div>
                  </td>
                  <td className="border px-2 py-2 text-center">{row.totalOrder}</td>
                  <td className="border px-2 py-2 text-center">{row.totalOrderAmount}</td>
                  <td className="border px-2 py-2 text-center">{row.joiningDate}</td>
                  <td className="border px-2 py-2 text-center">
                    <Toggle checked={row.active} onChange={() => handleToggle(row.id)} />
                  </td>
                  <td className="border px-2 py-2 text-center">
                    <button className="p-1 rounded hover:bg-gray-100 border border-orange-200 text-orange-500" aria-label="View">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
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
