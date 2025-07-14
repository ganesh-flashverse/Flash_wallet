import React, { useState } from "react";

const tabs = [
  { label: "Default" },
  { label: "English(EN)" },
  { label: "Arabic - العربية(AR)" }
];
const permissions = [
  { label: "Collect cash", checked: false },
  { label: "Addon", checked: false },
  { label: "Attribute", checked: false },
  { label: "Banner", checked: true },
  { label: "Campaign", checked: true },
  { label: "Category", checked: true },
  { label: "Coupon", checked: false },
  { label: "Cashback", checked: false },
  { label: "Customer management", checked: false },
  { label: "Deliveryman", checked: false },
  { label: "Provide dm earning", checked: false },
  { label: "Employee", checked: true },
  { label: "Item", checked: true },
  { label: "Push notification", checked: true },
  { label: "Order", checked: false },
  { label: "Store", checked: true },
  { label: "Report", checked: true },
  { label: "Settings", checked: false },
  { label: "Withdraw list", checked: false },
  { label: "Zone", checked: false },
  { label: "Module", checked: false },
  { label: "Parcel", checked: true },
  { label: "Pos", checked: true },
  { label: "Unit", checked: false },
  { label: "Subscription", checked: false }
];
const rentalPermissions = [
  { label: "Trip", checked: false },
  { label: "Promotion", checked: false },
  { label: "Vehicle", checked: false },
  { label: "Provider", checked: false },
  { label: "Driver", checked: false },
  { label: "Download app", checked: false },
  { label: "Report", checked: false }
];

export default function Demo() {
  const [tab, setTab] = useState(0);
  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#222" strokeWidth="2"/><circle cx="12" cy="7" r="4" stroke="#222" strokeWidth="2"/></svg></span>
        Employee Role
      </div>
      {/* Tabs */}
      <div className="flex gap-3 mb-4 text-xs font-semibold">
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
      {/* Role Name */}
      <div className="mb-4">
        <label className="text-xs text-gray-500 mb-1 block">
          Role name (Default) <span className="text-red-500">*</span>
        </label>
        <input className="w-full border rounded px-2 py-1 text-xs" defaultValue="Receptionist & Front Desk Manager" />
      </div>
      {/* Update Permission */}
      <div className="mb-2">
        <div className="flex items-center gap-4 mb-2">
          <label className="text-xs text-gray-500 font-semibold">Update Permission :</label>
          <input type="checkbox" className="mr-1" disabled />
          <span className="text-xs text-gray-500">Select all</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-2 gap-x-2 mb-3">
          {permissions.map((perm, i) => (
            <label key={i} className="flex items-center text-xs text-gray-700 gap-2">
              <input type="checkbox" className="accent-teal-600" checked={perm.checked} readOnly disabled /> {perm.label}
            </label>
          ))}
        </div>
      </div>
      {/* Rental Role Section */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-700 mb-2">Rental Role</div>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-y-2 gap-x-2">
          {rentalPermissions.map((perm, i) => (
            <label key={i} className="flex items-center text-xs text-gray-700 gap-2">
              <input type="checkbox" className="accent-teal-600" checked={perm.checked} readOnly disabled /> {perm.label}
            </label>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2 justify-end mt-6">
        <button className="bg-gray-100 text-gray-700 px-6 py-1.5 rounded text-xs font-semibold">Reset</button>
        <button className="bg-teal-600 text-white px-6 py-1.5 rounded text-xs font-semibold">Update</button>
      </div>
    </div>
  );
}
