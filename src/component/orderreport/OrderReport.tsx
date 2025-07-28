import React from "react";

const summary = {
  totalOrders: 88,
  inProgress: 17,
  onTheWay: 4,
  delivered: 33,
  failed: 4,
  refunded: 1,
  canceled: 2,
};

const dummyOrders = [
  {
    sl: 1,
    orderId: "100106",
    store: "Hungry Puppets",
    customer: "Marjahan Sultana",
    totalAmount: "$ 743.63",
    paid: true,
    itemDiscount: "$ 116.25",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 116.25",
    tax: "$ 31.37",
    deliveryCharge: "$ 550.00",
    additionalCharge: "$ 10.00",
    packaging: "$ 0.00",
  },
  {
    sl: 2,
    orderId: "100105",
    store: "KK Fashion",
    customer: "Marjahan Sultana",
    totalAmount: "$ 424.02",
    paid: true,
    itemDiscount: "$ 117.50",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 117.50",
    tax: "$ 45.98",
    deliveryCharge: "$ 600.00",
    additionalCharge: "$ 10.00",
    packaging: "$ 0.00",
  },
];

export default function OrderReport() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl font-semibold flex items-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          Order Report
        </span>
      </div>
      {/* Search Data */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All modules</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Zones</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All stores</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All customers</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700"><option>All Time</option></select>
          <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 ml-auto">Filter</button>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-1 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
          <span className="text-4xl mb-2">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fbbf24" /><text x="12" y="17" textAnchor="middle" fontSize="24" fill="#fff">📝</text></svg>
          </span>
          <div className="text-3xl font-bold">{summary.totalOrders}</div>
          <div className="text-gray-500">Total orders</div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg shadow p-4 flex flex-col justify-center">
            <div className="text-xl font-bold text-blue-600 mb-1">{summary.inProgress}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">In progress orders <span>🔄</span></div>
          </div>
          <div className="bg-blue-100 rounded-lg shadow p-4 flex flex-col justify-center">
            <div className="text-xl font-bold text-blue-400 mb-1">{summary.onTheWay}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">On the way <span>🚚</span></div>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-4 flex flex-col justify-center">
            <div className="text-xl font-bold text-green-600 mb-1">{summary.delivered}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">Delivered orders <span>✅</span></div>
          </div>
          <div className="bg-yellow-50 rounded-lg shadow p-4 flex flex-col justify-center">
            <div className="text-xl font-bold text-yellow-600 mb-1">{summary.failed}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">Failed orders <span>⚠️</span></div>
          </div>
          <div className="bg-orange-50 rounded-lg shadow p-4 flex flex-col justify-center">
            <div className="text-xl font-bold text-orange-600 mb-1">{summary.refunded}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">Refunded orders <span>💸</span></div>
          </div>
          <div className="bg-red-50 rounded-lg shadow p-4 flex flex-col justify-center">
            <div className="text-xl font-bold text-red-600 mb-1">{summary.canceled}</div>
            <div className="text-gray-500 text-sm flex items-center gap-1">Canceled orders <span>❌</span></div>
          </div>
        </div>
      </div>
      {/* Order Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-4">
          <span className="font-semibold">Total Orders</span>
          <span className="bg-gray-100 text-gray-500 text-xs rounded px-2 py-0.5 ml-2">88</span>
          <input className="ml-auto border border-gray-200 rounded px-3 py-1 text-sm w-64" placeholder="Search by Order ID" />
          <button className="ml-2 bg-gray-200 px-3 py-1 rounded">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="#6b7280" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="ml-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1 rounded flex items-center gap-1">
            <span>Export</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-4 py-2">Sl</th>
                <th className="px-4 py-2">Order Id</th>
                <th className="px-4 py-2">Store</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Total Item Amount</th>
                <th className="px-4 py-2">Paid</th>
                <th className="px-4 py-2">Item Discount</th>
                <th className="px-4 py-2">Coupon Discount</th>
                <th className="px-4 py-2">Referral Discount</th>
                <th className="px-4 py-2">Discounted Amount</th>
                <th className="px-4 py-2">Tax</th>
                <th className="px-4 py-2">Delivery Charge</th>
                <th className="px-4 py-2">Additional Charge</th>
                <th className="px-4 py-2">Extra Packaging Amount</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.map((row) => (
                <tr className="border-b" key={row.sl}>
                  <td className="px-4 py-2">{row.sl}</td>
                  <td className="px-4 py-2 text-blue-600 underline cursor-pointer">{row.orderId}</td>
                  <td className="px-4 py-2">{row.store}</td>
                  <td className="px-4 py-2">{row.customer}</td>
                  <td className="px-4 py-2">{row.totalAmount}</td>
                  <td className="px-4 py-2">
                    {row.paid ? <span className="text-green-600 underline cursor-pointer">Paid</span> : <span className="text-red-500">Unpaid</span>}
                  </td>
                  <td className="px-4 py-2">{row.itemDiscount}</td>
                  <td className="px-4 py-2">{row.couponDiscount}</td>
                  <td className="px-4 py-2">{row.referralDiscount}</td>
                  <td className="px-4 py-2">{row.discountedAmount}</td>
                  <td className="px-4 py-2">{row.tax}</td>
                  <td className="px-4 py-2">{row.deliveryCharge}</td>
                  <td className="px-4 py-2">{row.additionalCharge}</td>
                  <td className="px-4 py-2">{row.packaging}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
