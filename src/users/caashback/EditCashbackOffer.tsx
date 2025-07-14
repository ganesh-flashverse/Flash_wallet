import React from "react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="mr-2 text-xl">🪙</span>
        <span className="text-base font-semibold">Edit Cashback Offer</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button className="text-xs px-2 py-1 border-b-2 border-teal-500 text-teal-600 font-semibold bg-transparent">Default</button>
        <button className="text-xs px-2 py-1 text-gray-500 bg-transparent">English(EN)</button>
        <button className="text-xs px-2 py-1 text-gray-500 bg-transparent">Arabic - العربية(AR)</button>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow p-6 md:p-8">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Title */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">Title (Default)</label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                value="First Order Cash Splash!"
                disabled
              />
            </div>
            {/* Select Customer */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">Select customer</label>
              <div className="flex items-center">
                <select
                  className="border rounded px-3 py-2 text-xs w-full focus:outline-none focus:ring-2 focus:ring-teal-100 appearance-none"
                  disabled
                >
                  <option>All</option>
                </select>
                <span className="ml-2 bg-teal-50 text-teal-600 px-2 py-0.5 rounded text-xs font-semibold">All ×</span>
              </div>
            </div>
            {/* Cashback Type */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">
                Cashback Type <span className="text-red-500">*</span>
              </label>
              <select
                className="border rounded px-3 py-2 text-xs w-full focus:outline-none focus:ring-2 focus:ring-teal-100 appearance-none"
                disabled
              >
                <option>Percentage (%)</option>
              </select>
            </div>
            {/* Cashback Amount */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1 flex items-center">
                Cashback Amount (%) <span className="text-red-500 ml-1">*</span>
                <span className="ml-1 text-red-400 text-base leading-none">•</span>
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                value="10"
                disabled
              />
            </div>
            {/* Minimum Purchase */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">Minimum Purchase ($)</label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                value="500"
                disabled
              />
            </div>
            {/* Maximum Discount */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">Maximum Discount ($)</label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                value="100"
                disabled
              />
            </div>
            {/* Start Date */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">Start Date</label>
              <div className="relative">
                <input
                  type="text"
                  className="border rounded px-3 py-2 text-xs w-full focus:outline-none focus:ring-2 focus:ring-teal-100 pr-8"
                  value="04/20/2024"
                  disabled
                />
                <span className="absolute right-2 top-2.5 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </span>
              </div>
            </div>
            {/* End Date */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">End Date</label>
              <div className="relative">
                <input
                  type="text"
                  className="border rounded px-3 py-2 text-xs w-full focus:outline-none focus:ring-2 focus:ring-teal-100 pr-8"
                  value="12/24/2031"
                  disabled
                />
                <span className="absolute right-2 top-2.5 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </span>
              </div>
            </div>
            {/* Limit for Same User */}
            <div className="col-span-1 flex flex-col">
              <label className="text-xs font-semibold mb-1">Limit for Same User</label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                value="2"
                disabled
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              className="bg-gray-100 text-gray-700 px-6 py-2 rounded text-xs font-semibold border border-gray-200 hover:bg-gray-200"
              disabled
            >
              Reset
            </button>
            <button
              type="button"
              className="bg-teal-600 text-white px-6 py-2 rounded text-xs font-semibold shadow hover:bg-teal-700"
              disabled
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
