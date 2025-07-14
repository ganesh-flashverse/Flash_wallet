import React, { useState } from "react";

const couponTypes = ["---Select coupon type---", "Flat", "Percentage", "Free Shipping"];
const stores = ["---Select store---", "Store A", "Store B", "Store C"];
const customers = ["Mehedi Hasan", "Customer 2", "Customer 3"];
const discountTypes = ["Amount ($)", "Percentage (%)", "Free Shipping"];

export default function Demo() {
  const [tab, setTab] = useState("Default");
  const [couponType, setCouponType] = useState(couponTypes[0]);
  const [store, setStore] = useState(stores[0]);
  const [customer, setCustomer] = useState(customers[0]);
  const [discountType, setDiscountType] = useState(discountTypes[0]);
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1" stroke="#222" strokeWidth="2"/><rect x="2" y="7" width="20" height="15" rx="2" stroke="#222" strokeWidth="2"/></svg></span>
        Add New Coupon
      </div>
      {/* Tabs */}
      <div className="flex gap-2 border-b mb-4">
        <button className={`px-4 py-2 text-xs font-semibold ${tab === "Default" ? "border-b-2 border-teal-500 text-teal-700 bg-white" : "text-gray-500 bg-gray-50"}`} onClick={() => setTab("Default")}>Default</button>
        <button className={`px-4 py-2 text-xs font-semibold ${tab === "English" ? "border-b-2 border-teal-500 text-teal-700 bg-white" : "text-gray-500 bg-gray-50"}`} onClick={() => setTab("English")}>English(EN)</button>
        <button className={`px-4 py-2 text-xs font-semibold ${tab === "Arabic" ? "border-b-2 border-teal-500 text-teal-700 bg-white" : "text-gray-500 bg-gray-50"}`} onClick={() => setTab("Arabic")}>Arabic - العربية(AR)</button>
      </div>
      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Title (Default)</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="New coupon" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Coupon type</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={couponType} onChange={e => setCouponType(e.target.value)}>
              {couponTypes.map((type, i) => <option key={i}>{type}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Store</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={store} onChange={e => setStore(e.target.value)}>
              {stores.map((s, i) => <option key={i}>{s}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Select customer</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={customer} onChange={e => setCustomer(e.target.value)}>
              {customers.map((c, i) => <option key={i}>{c}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Code</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="gJCdYy1" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Limit for same user</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="EX: 10" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Start date</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="mm/dd/yyyy" type="date" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Expire date</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="mm/dd/yyyy" type="date" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Discount type</label>
            <select className="w-full border rounded px-2 py-1 text-xs" value={discountType} onChange={e => setDiscountType(e.target.value)}>
              {discountTypes.map((d, i) => <option key={i}>{d}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Discount</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="0" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Max discount ($)</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="0" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Min purchase ($)</label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="0" />
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button className="bg-gray-100 text-gray-700 px-5 py-1.5 rounded text-xs font-semibold">Reset</button>
          <button className="bg-teal-600 text-white px-5 py-1.5 rounded text-xs font-semibold">Submit</button>
        </div>
      </div>
      {/* Coupon List Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="font-semibold text-sm flex items-center gap-2">Coupon List <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-2">0</span></div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <input className="border rounded px-3 py-1 text-xs w-48 focus:outline-none focus:ring-2 focus:ring-teal-100" placeholder="Ex: Coupon Title Or Code" />
            <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
              Export <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-2 py-2 font-semibold">Sl</th>
                <th className="px-2 py-2 font-semibold">Title</th>
                <th className="px-2 py-2 font-semibold">Code</th>
                <th className="px-2 py-2 font-semibold">Type</th>
                <th className="px-2 py-2 font-semibold">Total Uses</th>
                <th className="px-2 py-2 font-semibold">Min Purchase</th>
                <th className="px-2 py-2 font-semibold">Max Discount</th>
                <th className="px-2 py-2 font-semibold">Discount</th>
                <th className="px-2 py-2 font-semibold">Discount Type</th>
                <th className="px-2 py-2 font-semibold">Start Date</th>
                <th className="px-2 py-2 font-semibold">Expire Date</th>
                <th className="px-2 py-2 font-semibold">Status</th>
                <th className="px-2 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state row */}
              <tr>
                <td colSpan={13} className="py-12 text-center text-gray-400">
                  <div className="flex flex-col items-center justify-center">
                    <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                      <ellipse cx="50" cy="80" rx="40" ry="10" fill="#F3F4F6" />
                      <path d="M50 15a25 25 0 1 1 0 50a25 25 0 0 1 0-50z" fill="#E5E7EB" />
                      <path d="M50 25a15 15 0 1 1 0 30a15 15 0 0 1 0-30z" fill="#fff" />
                    </svg>
                    <div className="mt-4 text-sm">No coupons found</div>
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
