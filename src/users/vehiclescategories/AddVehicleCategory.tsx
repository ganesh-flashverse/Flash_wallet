import React from "react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="mr-2 text-lg">🚗</span>
        <span className="font-semibold text-base">Add Vehicle Category</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vehicle Type */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 flex items-center">
                Vehicle Type (Default)
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                placeholder="Ex : bike"
                disabled
              />
            </div>
            {/* Extra Charges */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 flex items-center">
                Extra Charges ($)
                <InfoIcon />
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                disabled
              />
            </div>
            {/* Starting Coverage Area */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 flex items-center">
                Starting Coverage Area (Km)
                <InfoIcon />
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
                disabled
              />
            </div>
            {/* Maximum Coverage Area */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 flex items-center">
                Maximum Coverage Area (Km)
                <InfoIcon />
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-100"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg className="ml-1 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{display:'inline'}}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}
