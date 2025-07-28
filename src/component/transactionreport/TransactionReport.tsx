import React from "react";

const summary = {
  completedTransaction: '$ 33.83K',
  adminEarning: '$ 209.26',
  providerEarning: '$ 33.62K',
};

const dummyTrips = [
  {
    sl: 1,
    tripId: '100037',
    provider: 'CityLink Taxis',
    customer: 'Marjahan Sultana',
    totalTripAmount: '$ 235.00',
    discountOnVehicle: '$ 25.00',
    couponDiscount: '$ 0.00',
    referralDiscount: '$ 0.00',
    totalDiscountedAmount: '$ 25.00',
    vatTax: '$ 5.92',
    adminCommission: '$ 10.00',
    additionalCharge: '$ 10.00',
    adminDiscount: '$ 0.00',
    adminNetIncome: '$ 10.00',
    providerDiscount: '$ 25.00',
    providerNetIncome: '$ 173.08',
    totalAmountReceived: 'Provider',
    paymentMethod: 'Cash',
    paymentStatus: 'Completed',
  },
  {
    sl: 2,
    tripId: '100034',
    provider: 'GoCar Hire',
    customer: 'MS 123',
    totalTripAmount: '$ 3,646.72',
    discountOnVehicle: '$ 3,636.73',
    couponDiscount: '$ 0.00',
    referralDiscount: '$ 0.00',
    totalDiscountedAmount: '$ 3,636.73',
    vatTax: '$ 474.35',
    adminCommission: '$ 679.91',
    additionalCharge: '$ 10.00',
    adminDiscount: '$ 363.67',
    adminNetIncome: '$ 326.24',
    providerDiscount: '$ 3,273.06',
    providerNetIncome: '$ 2,846.13',
    totalAmountReceived: 'Admin',
    paymentMethod: 'Digital',
    paymentStatus: 'Pending',
  },
  {
    sl: 3,
    tripId: '100032',
    provider: 'RideMaster Taxis',
    customer: 'MS 123',
    totalTripAmount: '$ 7,880.00',
    discountOnVehicle: '$ 0.00',
    couponDiscount: '$ 0.00',
    referralDiscount: '$ 0.00',
    totalDiscountedAmount: '$ 0.00',
    vatTax: '$ 1,381.57',
    adminCommission: '$ 0.00',
    additionalCharge: '$ 100.00',
    adminDiscount: '$ 0.00',
    adminNetIncome: '$ 0.00',
    providerDiscount: '$ 90.00',
    providerNetIncome: '$ 6,558.33',
    totalAmountReceived: 'Admin',
    paymentMethod: 'Cash',
    paymentStatus: 'Completed',
  },
];

export default function TransactionReport() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl font-semibold flex items-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          Transaction Report
        </span>
      </div>
      {/* Search Data */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-semibold text-gray-700">Search Data</label>
            <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All Zones</option></select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-semibold text-gray-700">&nbsp;</label>
            <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All providers</option></select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 font-semibold text-gray-700">&nbsp;</label>
            <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All Time</option></select>
          </div>
          <div className="flex flex-col justify-end flex-1">
            <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 w-full">Filter</button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Completed Transaction */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
          <span className="absolute top-2 right-2 text-green-500">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="#d1fae5" />
              <path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-green-100 rounded-full p-3 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#22c55e" />
                <path d="M16.5 9l-5 5-2-2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="text-3xl font-bold text-green-700">$ 33.83K</div>
            <div className="text-gray-500 text-sm mt-1">Completed Transaction</div>
          </div>
        </div>
        {/* Admin Earning */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
          <span className="absolute top-2 right-2 text-blue-500">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="#dbeafe" />
              <path d="M12 8v4l3 3" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-blue-100 rounded-full p-3 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#3b82f6" />
                <path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div className="text-3xl font-bold text-blue-700">$ 209.26</div>
            <div className="text-gray-500 text-sm mt-1">Admin Earning</div>
          </div>
        </div>
        {/* Provider Earning */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
          <span className="absolute top-2 right-2 text-green-500">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="#d1fae5" />
              <path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-green-100 rounded-full p-3 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#22c55e" />
                <path d="M16.5 9l-5 5-2-2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="text-3xl font-bold text-green-700">$ 33.62K</div>
            <div className="text-gray-500 text-sm mt-1">Provider Earning</div>
          </div>
        </div>
      </div>

      {/* Trip Transactions Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-4">
          <span className="font-semibold">Trip Transactions</span>
          <span className="bg-gray-100 text-gray-500 text-xs rounded px-2 py-0.5 ml-2">9</span>
          <input className="ml-auto border border-gray-200 rounded px-3 py-1 text-sm w-64" placeholder="Search by Trip ID" />
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
                <th className="px-4 py-2">Trip Id</th>
                <th className="px-4 py-2">Provider</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Total Trip Amount</th>
                <th className="px-4 py-2">Discount On Vehicle</th>
                <th className="px-4 py-2">Coupon Discount</th>
                <th className="px-4 py-2">Referral Discount</th>
                <th className="px-4 py-2">Total Discounted Amount</th>
                <th className="px-4 py-2">Vat/Tax</th>
                <th className="px-4 py-2">Admin Commission</th>
                <th className="px-4 py-2">Additional Charge</th>
                <th className="px-4 py-2">Admin Discount</th>
                <th className="px-4 py-2">Admin Net Income</th>
                <th className="px-4 py-2">Provider Discount</th>
                <th className="px-4 py-2">Provider Net Income</th>
                <th className="px-4 py-2">Total Amount Received By</th>
                <th className="px-4 py-2">Payment Method</th>
                <th className="px-4 py-2">Payment Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyTrips.map((row) => (
                <tr className="border-b" key={row.sl}>
                  <td className="px-4 py-2">{row.sl}</td>
                  <td className="px-4 py-2 text-blue-600 underline cursor-pointer">{row.tripId}</td>
                  <td className="px-4 py-2">{row.provider}</td>
                  <td className="px-4 py-2">{row.customer}</td>
                  <td className="px-4 py-2">{row.totalTripAmount}</td>
                  <td className="px-4 py-2">{row.discountOnVehicle}</td>
                  <td className="px-4 py-2">{row.couponDiscount}</td>
                  <td className="px-4 py-2">{row.referralDiscount}</td>
                  <td className="px-4 py-2">{row.totalDiscountedAmount}</td>
                  <td className="px-4 py-2">{row.vatTax}</td>
                  <td className="px-4 py-2">{row.adminCommission}</td>
                  <td className="px-4 py-2">{row.additionalCharge}</td>
                  <td className="px-4 py-2">{row.adminDiscount}</td>
                  <td className="px-4 py-2">{row.adminNetIncome}</td>
                  <td className="px-4 py-2">{row.providerDiscount}</td>
                  <td className="px-4 py-2">{row.providerNetIncome}</td>
                  <td className="px-4 py-2">{row.totalAmountReceived}</td>
                  <td className="px-4 py-2">{row.paymentMethod}</td>
                  <td className="px-4 py-2">{row.paymentStatus}</td>
                  <td className="px-4 py-2">
                    <button className="bg-gray-100 border border-gray-300 rounded p-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" />
                        <path d="M15 12H9" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
                      </svg>
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
