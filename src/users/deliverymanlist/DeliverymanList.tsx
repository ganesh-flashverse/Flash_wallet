import React, { useState } from "react";

const typeOptions = ["All Types", "Type 1", "Type 2"];
const jobTypeOptions = ["All Job Types", "Full-Time", "Part-Time"];
const zoneOptions = ["All Zones", "Main Demo Zone", "Zone 2"];

const deliverymen = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "William Damian",
    rating: 0,
    contact: "+8*********",
    zone: "Main Demo Zone",
    orders: 2,
    assignedOrders: 0,
    online: true,
    status: "Active",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Lily Michelle",
    rating: 0,
    contact: "+1*********",
    zone: "Main Demo Zone",
    orders: 1,
    assignedOrders: 2,
    online: true,
    status: "Active",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Amelia Margaret",
    rating: 0,
    contact: "+1*********",
    zone: "منطقة عرض",
    orders: 1,
    assignedOrders: 0,
    online: true,
    status: "Active",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Thomas Joe",
    rating: 0,
    contact: "+8*********",
    zone: "Main Demo Zone",
    orders: 2,
    assignedOrders: 2,
    online: true,
    status: "Active",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Robert Patricia",
    rating: 0,
    contact: "+8*********",
    zone: "Main Demo Zone",
    orders: 0,
    assignedOrders: 0,
    online: false,
    status: "Active",
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jhon Doe",
    rating: 5.0,
    contact: "+8*********",
    zone: "Main Demo Zone",
    orders: 12,
    assignedOrders: 3,
    online: true,
    status: "Active",
  },
];

function ActionBtn({ type }) {
  let icon, color;
  if (type === "view") {
    icon = (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
    );
    color = "text-blue-500 border-blue-200";
  } else if (type === "edit") {
    icon = (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-2.828 1.172H7v-2a4 4 0 011.172-2.828z" /></svg>
    );
    color = "text-teal-600 border-teal-200";
  } else {
    icon = (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
    );
    color = "text-red-600 border-red-200";
  }
  return (
    <button className={`p-1 rounded hover:bg-gray-100 border ${color}`}>
      {icon}
    </button>
  );
}

export default function Demo() {
  const [type, setType] = useState(typeOptions[0]);
  const [jobType, setJobType] = useState(jobTypeOptions[0]);
  const [zone, setZone] = useState(zoneOptions[0]);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-2">
        <span className="mr-2 text-lg">🧑‍💼</span>
        <span className="font-semibold text-base">Deliveryman</span>
      </div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
        <div className="flex items-center text-xs font-semibold">
          Deliveryman List
          <span className="ml-1 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">6</span>
        </div>
        <div className="flex flex-wrap gap-2 items-center ml-auto">
          <select className="border rounded px-2 py-1 text-xs bg-white" value={type} onChange={e => setType(e.target.value)}>
            {typeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select className="border rounded px-2 py-1 text-xs bg-white" value={jobType} onChange={e => setJobType(e.target.value)}>
            {jobTypeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select className="border rounded px-2 py-1 text-xs bg-white" value={zone} onChange={e => setZone(e.target.value)}>
            {zoneOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <div className="relative">
            <input
              className="border rounded px-3 py-1 text-xs w-56 focus:outline-none focus:ring-2 focus:ring-teal-100 pr-8"
              placeholder="Ex: DM name,email or phone"
              value={search}
              onChange={e => setSearch(e.target.value)}
              disabled
            />
            <span className="absolute right-2 top-1.5 text-gray-400">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
          </div>
          <button className="bg-gray-100 border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m4-4H8"/></svg>
            Export
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
                <th className="border px-2 py-2 font-semibold">Contact Info</th>
                <th className="border px-2 py-2 font-semibold">Zone</th>
                <th className="border px-2 py-2 font-semibold">Total Completed Orders</th>
                <th className="border px-2 py-2 font-semibold">Availability Status</th>
                <th className="border px-2 py-2 font-semibold">Status</th>
                <th className="border px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {deliverymen.map((row, idx) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center">{idx + 1}</td>
                  <td className="border px-2 py-2 flex items-center gap-2">
                    <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full object-cover border" />
                    <div>
                      <div className="font-semibold text-gray-800">{row.name}</div>
                      <div className="flex items-center gap-1 text-xs text-green-500 font-bold">
                        {row.rating > 0 ? <span>{row.rating} <span className="text-yellow-400">★</span></span> : <span>0 <span className="text-gray-300">★</span></span>}
                      </div>
                    </div>
                  </td>
                  <td className="border px-2 py-2">{row.contact}</td>
                  <td className="border px-2 py-2">{row.zone}</td>
                  <td className="border px-2 py-2 text-center">{row.orders}</td>
                  <td className="border px-2 py-2">
                    <div className="text-xs text-gray-700">Currently assigned orders : {row.assignedOrders}</div>
                    <div className={`text-xs ${row.online ? 'text-green-600' : 'text-red-500'}`}>Active status: {row.online ? 'Online' : 'Offline'}</div>
                  </td>
                  <td className="border px-2 py-2 text-center">
                    <span className="text-green-600 font-semibold">{row.status}</span>
                  </td>
                  <td className="border px-2 py-2 flex gap-2 justify-center">
                    <ActionBtn type="view" />
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
