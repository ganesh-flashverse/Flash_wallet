import React, { useState } from "react";

const customers = [
  "Select customer by name or phone",
  "Mehedi Hasan (017xxxxxxx)",
  "Customer 2 (018xxxxxxx)"
];

export default function AddFund() {
  const [customer, setCustomer] = useState(customers[0]);
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1" stroke="#222" strokeWidth="2"/><rect x="2" y="7" width="20" height="15" rx="2" stroke="#222" strokeWidth="2"/></svg></span>
        Add Fund
      </div>
      {/* Form Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Customer <span className="text-red-500">*</span></label>
            <select
              className="w-full border rounded px-2 py-1 text-xs"
              value={customer}
              onChange={e => setCustomer(e.target.value)}
            >
              {customers.map((c, i) => <option key={i}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Amount $ <span className="text-red-500">*</span></label>
            <input
              className="w-full border rounded px-2 py-1 text-xs"
              placeholder="Ex: 50"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs text-gray-500 mb-1">
            Reference <span className="text-[10px] text-gray-400">(Optional)</span>
          </label>
          <input
            className="w-full border rounded px-2 py-1 text-xs"
            placeholder="Ex: 123"
            value={reference}
            onChange={e => setReference(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="bg-gray-100 text-gray-700 px-5 py-1.5 rounded text-xs font-semibold">Reset</button>
          <button className="bg-teal-600 text-white px-5 py-1.5 rounded text-xs font-semibold">Submit</button>
        </div>
      </div>
    </div>
  );
}
