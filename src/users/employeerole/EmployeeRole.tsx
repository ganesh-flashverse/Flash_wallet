import React, { useState } from "react";

const tabs = [
  { label: "Default" },
  { label: "English(EN)" },
  { label: "Arabic - العربية(AR)" }
];
const permissions = [
  "Collect cash", "Addon", "Attribute", "Banner", "Campaign", "Category", "Coupon",
  "Cashback", "Customer management", "Deliveryman", "Provide dm earning", "Employee", "Item", "Notification",
  "Order", "Store", "Report", "Settings", "Withdraw list", "Zone", "Module",
  "Parcel", "Pos", "Unit", "Subscription"
];
const rentalPermissions = [
  "Trip", "Promotion", "Vehicle", "Provider", "Driver", "Download app", "Report"
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
        <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Role name example" />
      </div>
      {/* Set Permission */}
      <div className="mb-2">
        <div className="flex items-center gap-4 mb-2">
          <label className="text-xs text-gray-500 font-semibold">Set Permission :</label>
          <input type="checkbox" className="mr-1" disabled />
          <span className="text-xs text-gray-500">Select all</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-2 gap-x-2 mb-3">
          {permissions.map((perm, i) => (
            <label key={i} className="flex items-center text-xs text-gray-700 gap-2">
              <input type="checkbox" className="accent-teal-600" disabled /> {perm}
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
              <input type="checkbox" className="accent-teal-600" disabled /> {perm}
            </label>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2 justify-end mt-6">
        <button className="bg-gray-100 text-gray-700 px-6 py-1.5 rounded text-xs font-semibold">Reset</button>
        <button className="bg-teal-600 text-white px-6 py-1.5 rounded text-xs font-semibold">Submit</button>
      </div>

      {/* Roles Table Section */}
      <div className="bg-white rounded-lg shadow p-4 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="flex items-center gap-2 font-semibold text-sm">
            Roles Table <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">5</span>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input
              type="text"
              className="border rounded px-2 py-1 text-xs"
              placeholder="Ex : search role name"
              style={{ minWidth: 180 }}
            />
            <button className="bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/></svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-2 py-2 font-semibold">Sl</th>
                <th className="px-2 py-2 font-semibold">Role Name</th>
                <th className="px-2 py-2 font-semibold">Permissions</th>
                <th className="px-2 py-2 font-semibold">Created At</th>
                <th className="px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sl: 1,
                  name: "Receptionist & Front Desk...",
                  permissions: "Banner, Campaign, Category, Employee, Notification, Store, Report, Parcel, Pos ...",
                  created: "29 Sep 2022"
                },
                {
                  sl: 2,
                  name: "Accountant",
                  permissions: "Account, Provide Dm Earning, Withdraw List ...",
                  created: "29 Sep 2022"
                },
                {
                  sl: 3,
                  name: "Manager",
                  permissions: "Account, Account, Action, Attribute, Banner, Campaign, Category, Coupon, Custom Role, CustomerList, Deliveryman, Provide Dm Earning, Employee, Item, Notification, Order, Store, Report, Settings, Withdraw List, Zone, Module, Parcel, Pos, Unit ...",
                  created: "29 Sep 2022"
                },
                {
                  sl: 4,
                  name: "HR",
                  permissions: "Banner, Campaign, Coupon, Custom Role, Employee ...",
                  created: "29 Sep 2022"
                },
                {
                  sl: 5,
                  name: "Customer Relation Manager",
                  permissions: "CustomerList, Order, Parcel ...",
                  created: "29 Sep 2022"
                }
              ].map((row, idx) => (
                <tr key={row.sl} className="hover:bg-gray-50">
                  <td className="border px-2 py-2 text-center w-8">{row.sl}</td>
                  <td className="border px-2 py-2 max-w-[180px] truncate" title={row.name}>{row.name}</td>
                  <td className="border px-2 py-2 max-w-[400px] truncate" title={row.permissions}>{row.permissions}</td>
                  <td className="border px-2 py-2 whitespace-nowrap">{row.created}</td>
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
