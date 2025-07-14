import React, { useState } from "react";

export default function Demo() {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      type: "Bike",
      totalDeliveryman: 0,
      minCoverage: 1001,
      maxCoverage: 5000,
      extraCharges: 100,
      enabled: true,
    },
    {
      id: 2,
      type: "Bicycle",
      totalDeliveryman: 0,
      minCoverage: 0,
      maxCoverage: 1000,
      extraCharges: 50,
      enabled: true,
    },
  ]);

  const handleToggle = (idx) => {
    setVehicles((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="mr-2 text-lg">🚗</span>
        <span className="font-semibold text-sm">Vehicles Category List</span>
        <span className="ml-2 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">2</span>
        <div className="ml-auto flex gap-2">
          <button className="bg-teal-600 hover:bg-teal-700 text-white text-xs px-4 py-2 rounded flex items-center font-semibold shadow">
            + Add Vehicle Category
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between mb-2">
          <div></div>
          <div className="flex gap-2 items-center">
            <input
              className="border rounded px-3 py-1 text-xs w-56 focus:outline-none focus:ring-2 focus:ring-teal-100"
              placeholder="Ex : Search by type..."
              disabled
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="border px-2 py-2 font-semibold">Sl</th>
                <th className="border px-2 py-2 font-semibold">Type</th>
                <th className="border px-2 py-2 font-semibold">Total Deliveryman</th>
                <th className="border px-2 py-2 font-semibold">Minimum Coverage Area (Km)</th>
                <th className="border px-2 py-2 font-semibold">Maximum Coverage Area (Km)</th>
                <th className="border px-2 py-2 font-semibold">Extra Charges ($)</th>
                <th className="border px-2 py-2 font-semibold">Status</th>
                <th className="border px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((row, idx) => (
                <tr key={row.id}>
                  <td className="border px-2 py-2">{row.id}</td>
                  <td className="border px-2 py-2 text-teal-600 cursor-pointer hover:underline">{row.type}</td>
                  <td className="border px-2 py-2">{row.totalDeliveryman}</td>
                  <td className="border px-2 py-2">{row.minCoverage}</td>
                  <td className="border px-2 py-2">{row.maxCoverage}</td>
                  <td className="border px-2 py-2">$ {row.extraCharges.toFixed(2)}</td>
                  <td className="border px-2 py-2">
                    <Toggle checked={row.enabled} onClick={() => handleToggle(idx)} />
                  </td>
                  <td className="border px-2 py-2 flex gap-2 justify-center">
                    <ActionBtn type="edit" />
                    <ActionBtn type="settings" />
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
  let icon, color;
  if (type === 'edit') {
    icon = (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-2.828 1.172H7v-2a4 4 0 011.172-2.828z" /></svg>
    );
    color = "text-teal-600 border-teal-200";
  } else if (type === 'settings') {
    icon = (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
    );
    color = "text-orange-500 border-orange-200";
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
