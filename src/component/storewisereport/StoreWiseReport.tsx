import React, { useState } from "react";

// Example data for all three main tabs and sub-tabs
const summaryData = {
  registeredStores: 67,
  totalOrders: 89,
  canceled: 6,
  incomplete: 48,
  completed: 34,
  newItems: 256,
  avgOrderValue: "$ 5.58K",
  paymentStats: {
    total: "$ 189.84K",
    cash: "$ 172.12K",
    digital: "$ 12.86K",
    wallet: "$ 4.87K",
  },
  totalOrdersChart: [
    { year: 2022, value: 159988.27 },
    { year: 2023, value: 8000 },
    { year: 2024, value: 3000 },
    { year: 2025, value: 1000 },
  ],
};

const storeTableRows = [
  {
    sl: 1,
    store: "Health Life",
    totalOrder: 10,
    delivered: 4,
    amount: "$ 56.16K",
    completion: "40.00%",
    ongoing: "60.00%",
    cancel: "0%",
    refund: "0 (0 pending)",
  },
  {
    sl: 2,
    store: "Hungry Puppets",
    totalOrder: 19,
    delivered: 7,
    amount: "$ 6.77K",
    completion: "36.84%",
    ongoing: "63.16%",
    cancel: "0%",
    refund: "0 (0 pending)",
  },
  {
    sl: 3,
    store: "Click & Collect",
    totalOrder: 3,
    delivered: 3,
    amount: "$ 2.72K",
    completion: "100.00%",
    ongoing: "0.00%",
    cancel: "0%",
    refund: "0 (0 pending)",
  },
  {
    sl: 4,
    store: "Café Monarch",
    totalOrder: 6,
    delivered: 3,
    amount: "$ 8.49K",
    completion: "50.00%",
    ongoing: "50.00%",
    cancel: "0%",
    refund: "1 (0 pending)",
  },
  {
    sl: 5,
    store: "Smart Shopping",
    totalOrder: 3,
    delivered: 3,
    amount: "$ 17.28K",
    completion: "100.00%",
    ongoing: "0.00%",
    cancel: "0%",
    refund: "0 (0 pending)",
  },
  {
    sl: 6,
    store: "Online market",
    totalOrder: 7,
    delivered: 3,
    amount: "$ 18.98K",
    completion: "42.86%",
    ongoing: "57.14%",
    cancel: "0%",
    refund: "0 (0 pending)",
  },
];

const dummyTabs = [
  { label: "All Time", key: "all" },
  { label: "This Year", key: "year" },
  { label: "Previous Year", key: "prevYear" },
  { label: "This Month", key: "month" },
  { label: "This Week", key: "week" },
];

// Dummy data for Sales Report
const salesData = {
  registeredStores: 12,
  totalOrders: 45,
  canceled: 2,
  incomplete: 10,
  completed: 33,
  newItems: 15,
  avgOrderValue: "$ 3.2K",
  paymentStats: {
    total: "$ 25.6K",
    cash: "$ 10.2K",
    digital: "$ 12.1K",
    wallet: "$ 3.3K",
  },
  totalOrdersChart: [
    { year: 2022, value: 12000 },
    { year: 2023, value: 6000 },
    { year: 2024, value: 5000 },
    { year: 2025, value: 2600 },
  ],
};

// Dummy data for Order Report
const orderData = {
  registeredStores: 5,
  totalOrders: 22,
  canceled: 1,
  incomplete: 3,
  completed: 18,
  newItems: 8,
  avgOrderValue: "$ 1.4K",
  paymentStats: {
    total: "$ 12.8K",
    cash: "$ 6.2K",
    digital: "$ 4.1K",
    wallet: "$ 2.5K",
  },
  totalOrdersChart: [
    { year: 2022, value: 7000 },
    { year: 2023, value: 3000 },
    { year: 2024, value: 1800 },
    { year: 2025, value: 1000 },
  ],
};

// Tab data for each main section
const dummyTabData = {
  summary: {
    all: summaryData,
    year: { ...summaryData, totalOrders: 20, avgOrderValue: "$ 2.2K" },
    prevYear: { ...summaryData, totalOrders: 18, avgOrderValue: "$ 2.1K" },
    month: { ...summaryData, totalOrders: 5, avgOrderValue: "$ 1.1K" },
    week: { ...summaryData, totalOrders: 2, avgOrderValue: "$ 800" },
  },
  sales: {
    all: salesData,
    year: { ...salesData, totalOrders: 10, avgOrderValue: "$ 1.8K" },
    prevYear: { ...salesData, totalOrders: 12, avgOrderValue: "$ 1.9K" },
    month: { ...salesData, totalOrders: 3, avgOrderValue: "$ 1.2K" },
    week: { ...salesData, totalOrders: 1, avgOrderValue: "$ 500" },
  },
  order: {
    all: orderData,
    year: { ...orderData, totalOrders: 8, avgOrderValue: "$ 1.1K" },
    prevYear: { ...orderData, totalOrders: 6, avgOrderValue: "$ 800" },
    month: { ...orderData, totalOrders: 2, avgOrderValue: "$ 400" },
    week: { ...orderData, totalOrders: 1, avgOrderValue: "$ 200" },
  },
};

// Example data cards for Sales and Order Reports
function ExampleComponent({ title, data }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]">
        <div className="text-2xl font-bold mb-2">{data.registeredStores}</div>
        <div className="text-gray-500">Registered Stores</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]">
        <div className="text-2xl font-bold mb-2">{data.totalOrders}</div>
        <div className="flex gap-4 text-xs mb-1">
          <span className="text-red-500 font-semibold">{data.canceled} Canceled</span>
          <span className="text-gray-400">{data.incomplete} Incomplete</span>
          <span className="text-green-600 font-semibold">{data.completed} Completed</span>
        </div>
        <div className="text-gray-500">Total Orders</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]">
        <div className="text-2xl font-bold mb-2">{data.newItems}</div>
        <div className="text-gray-500">New Items</div>
      </div>
    </div>
  );
}

const StoreWiseReport = () => {
  const [mainTab, setMainTab] = useState("summary");
  const [activeTab, setActiveTab] = useState("all");
  const data = dummyTabData[mainTab][activeTab];

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center mb-2">
        <span className="mr-2">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#fbbf24" />
            <rect x="8" y="8" width="8" height="8" fill="#fff" />
          </svg>
        </span>
        <div>
          <h1 className="text-xl font-semibold">Store Report</h1>
          <div className="text-xs text-gray-500 -mt-1">Monitor store's business analytics & Reports</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mt-4 mb-2 border-b border-gray-200">
        <button
          className={`py-2 px-2 border-b-2 font-semibold -mb-px ${mainTab === "summary" ? "border-teal-700 text-teal-700" : "border-transparent text-gray-500"}`}
          onClick={() => setMainTab("summary")}
        >
          Summary Report
        </button>
        <button
          className={`py-2 px-2 border-b-2 font-semibold -mb-px ${mainTab === "sales" ? "border-teal-700 text-teal-700" : "border-transparent text-gray-500"}`}
          onClick={() => setMainTab("sales")}
        >
          Sales Report
        </button>
        <button
          className={`py-2 px-2 border-b-2 font-semibold -mb-px ${mainTab === "order" ? "border-teal-700 text-teal-700" : "border-transparent text-gray-500"}`}
          onClick={() => setMainTab("order")}
        >
          Order Report
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 mb-4">
        {dummyTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-1 rounded ${activeTab === tab.key ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-600"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Summary Cards & Charts */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]">
          <div className="text-2xl font-bold mb-2">{data.registeredStores}</div>
          <div className="text-gray-500">Registered Stores</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]">
          <div className="text-2xl font-bold mb-2">{data.totalOrders}</div>
          <div className="flex gap-4 text-xs mb-1">
            <span className="text-red-500 font-semibold">{data.canceled} Canceled</span>
            <span className="text-gray-400">{data.incomplete} Incomplete</span>
            <span className="text-green-600 font-semibold">{data.completed} Completed</span>
          </div>
          <div className="text-gray-500">Total Orders</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]">
          <div className="text-2xl font-bold mb-2">{data.newItems}</div>
          <div className="text-gray-500">New Items</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Total Orders Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[320px]">
          <div className="font-semibold text-gray-600 mb-1">Total Orders</div>
          <div className="text-xs text-gray-400 mb-2">Average Order Value : {data.avgOrderValue}</div>
          <div className="h-40 flex items-end gap-6">
            {data.totalOrdersChart.map((bar) => (
              <div key={bar.year} className="flex flex-col items-center">
                <div className="bg-teal-400 w-8 rounded-t" style={{ height: `${bar.value / 2000}px` }}>
                  <span className="bg-black text-white text-xs rounded px-1 absolute mt-[-24px]">{bar.year === 2022 ? bar.value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : ""}</span>
                </div>
                <div className="text-xs mt-1">{bar.year}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Payment Stats Pie Chart (static) */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[320px] flex flex-col items-center">
          <div className="font-semibold text-gray-600 mb-1">Completed Payment Statistics</div>
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="#d1fae5" />
              <path d="M60 60 L60 10 A50 50 0 1 1 22.4 97.6 Z" fill="#14b8a6" />
              <path d="M60 60 L22.4 97.6 A50 50 0 0 1 60 110 Z" fill="#a7f3d0" />
              <circle cx="60" cy="60" r="38" fill="#fff" />
              <text x="60" y="68" textAnchor="middle" fontSize="20" fill="#0f766e">{data.paymentStats.total}</text>
            </svg>
            <ul className="mt-2 text-sm">
              <li className="text-teal-700">Cash Payments ({data.paymentStats.cash})</li>
              <li className="text-green-600">Digital Payments ({data.paymentStats.digital})</li>
              <li className="text-blue-600">Wallet ({data.paymentStats.wallet})</li>
            </ul>
          </div>
        </div>
      </div>

      {mainTab !== "summary" && <ExampleComponent title={mainTab === "sales" ? "Sales Report" : "Order Report"} data={data} />}

      {/* Store Table only for Summary tab */}
      {mainTab === "summary" && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold">Total Stores</h2>
            <div className="ml-auto flex items-center gap-2">
              <input
                className="border border-gray-200 rounded px-3 py-1 text-sm"
                placeholder="Ex : Search Store Name"
              />
              <button className="bg-gray-200 px-3 py-1 rounded">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="#6b7280" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className="bg-green-50 border border-green-200 text-green-700 px-4 py-1 rounded flex items-center gap-1">
                <span>Export</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="px-4 py-2">SL</th>
                  <th className="px-4 py-2">Store</th>
                  <th className="px-4 py-2">Total Order</th>
                  <th className="px-4 py-2">Total Delivered Order</th>
                  <th className="px-4 py-2">Total Amount</th>
                  <th className="px-4 py-2">Completion Rate</th>
                  <th className="px-4 py-2">Ongoing Rate</th>
                  <th className="px-4 py-2">Cancelation Rate</th>
                  <th className="px-4 py-2">Refund Request</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {storeTableRows.map((row) => (
                  <tr className="border-b" key={row.sl}>
                    <td className="px-4 py-2">{row.sl}</td>
                    <td className="px-4 py-2 text-blue-600 cursor-pointer underline">{row.store}</td>
                    <td className="px-4 py-2">{row.totalOrder}</td>
                    <td className="px-4 py-2">{row.delivered}</td>
                    <td className="px-4 py-2">{row.amount}</td>
                    <td className="px-4 py-2">{row.completion}</td>
                    <td className="px-4 py-2">{row.ongoing}</td>
                    <td className="px-4 py-2">{row.cancel}</td>
                    <td className="px-4 py-2">{row.refund}</td>
                    <td className="px-4 py-2">
                      <button className="bg-green-50 border border-green-200 rounded p-1">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24">
                          <path d="M12 5v14m7-7H5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreWiseReport;
