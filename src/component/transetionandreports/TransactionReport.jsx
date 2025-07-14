import React from "react";

// Combined data for the single table
const combinedRows = [
  {
    sl: 1,
    orderId: "100106",
    store: "Hungry Puppets",
    customer: "Marjahan Sultana",
    totalItem: "$ 743.63",
    itemDiscount: "$ 116.25",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 116.25",
    vatTax: "$ 31.37",
    deliveryCharge: "$ 550.00",
    orderAmount: "$ 1,218.75",
    adminDiscount: "$ 116.25",
    storeDiscount: "$ 0.00",
    adminCommission: "$ 74.36",
    additionalCharge: "$ 10.00",
    extraPackaging: "$ 0.00",
    commissionOnDelivery: "$ 27.50",
    adminNetIncome: "$ -4.39",
    storeNetIncome: "$ 669.27",
    receivedBy: "Admin",
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Completed",
  },
  {
    sl: 2,
    orderId: "100105",
    store: "KK Fashion",
    customer: "Marjahan Sultana",
    totalItem: "$ 424.02",
    itemDiscount: "$ 117.50",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 117.50",
    vatTax: "$ 45.98",
    deliveryCharge: "$ 600.00",
    orderAmount: "$ 962.50",
    adminDiscount: "$ 117.50",
    storeDiscount: "$ 0.00",
    adminCommission: "$ 42.40",
    additionalCharge: "$ 10.00",
    extraPackaging: "$ 0.00",
    commissionOnDelivery: "$ 30.00",
    adminNetIncome: "$ -35.10",
    storeNetIncome: "$ 381.62",
    receivedBy: "Admin",
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Completed",
  },
  {
    sl: 3,
    orderId: "100104",
    store: "Organic Shop",
    customer: "Marjahan Sultana",
    totalItem: "$ 62.79",
    itemDiscount: "$ 0.69",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 0.69",
    vatTax: "$ 6.21",
    deliveryCharge: "$ 600.00",
    orderAmount: "$ 678.31",
    adminDiscount: "$ 0.69",
    storeDiscount: "$ 0.62",
    adminCommission: "$ 6.28",
    additionalCharge: "$ 10.00",
    extraPackaging: "$ 0.00",
    commissionOnDelivery: "$ 30.00",
    adminNetIncome: "$ 46.21",
    storeNetIncome: "$ 55.89",
    receivedBy: "Admin",
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Completed",
  },
  {
    sl: 4,
    orderId: "100103",
    store: "Daily Care",
    customer: "Marjahan Sultana",
    totalItem: "$ 177.27",
    itemDiscount: "$ 0.00",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 0.00",
    vatTax: "$ 17.73",
    deliveryCharge: "$ 600.00",
    orderAmount: "$ 805.00",
    adminDiscount: "$ 0.00",
    storeDiscount: "$ 0.00",
    adminCommission: "$ 17.73",
    additionalCharge: "$ 10.00",
    extraPackaging: "$ 0.00",
    commissionOnDelivery: "$ 30.00",
    adminNetIncome: "$ 57.73",
    storeNetIncome: "$ 159.54",
    receivedBy: "Admin",
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Completed",
  },
  {
    sl: 5,
    orderId: "100102",
    store: "Smart Shopping",
    customer: "Marjahan Sultana",
    totalItem: "$ 41.32",
    itemDiscount: "$ 4.50",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 4.50",
    vatTax: "$ 3.68",
    deliveryCharge: "$ 600.00",
    orderAmount: "$ 550.50",
    adminDiscount: "$ 4.50",
    storeDiscount: "$ 0.00",
    adminCommission: "$ 4.13",
    additionalCharge: "$ 10.00",
    extraPackaging: "$ 0.00",
    commissionOnDelivery: "$ 25.00",
    adminNetIncome: "$ 34.63",
    storeNetIncome: "$ 37.19",
    receivedBy: "Admin",
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Completed",
  },
  {
    sl: 6,
    orderId: "100100",
    store: "Health Life",
    customer: "Marjahan Sultana",
    totalItem: "$ 4,141.32",
    itemDiscount: "$ 0.00",
    couponDiscount: "$ 0.00",
    referralDiscount: "$ 0.00",
    discountedAmount: "$ 100.00",
    vatTax: "$ 404.13",
    deliveryCharge: "$ 0.00",
    orderAmount: "$ 4,455.45",
    adminDiscount: "$ 0.00",
    storeDiscount: "$ 0.00",
    adminCommission: "$ 4.13",
    additionalCharge: "$ 10.00",
    extraPackaging: "$ 0.00",
    commissionOnDelivery: "$ 25.00",
    adminNetIncome: "$ 34.63",
    storeNetIncome: "$ 37.19",
    receivedBy: "Admin",
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Completed",
  },
];

const iconCompleted = (
  <svg className="w-14 h-14 bg-green-100 rounded-full p-2" fill="none" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" stroke="#22c55e" strokeWidth="4" fill="#dcfce7" />
    <path d="M16 24l6 6 10-12" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const iconRefunded = (
  <svg className="w-14 h-14 bg-red-100 rounded-full p-2" fill="none" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" stroke="#ef4444" strokeWidth="4" fill="#fee2e2" />
    <path d="M32 24H16m0 0l6-6m-6 6l6 6" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const iconAdmin = (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="#fbbf24" />
    <rect x="7" y="9" width="2" height="6" fill="#fff" />
    <rect x="11" y="7" width="2" height="8" fill="#fff" />
    <rect x="15" y="11" width="2" height="4" fill="#fff" />
  </svg>
);

const iconStore = (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="#60a5fa" />
    <rect x="7" y="9" width="2" height="6" fill="#fff" />
    <rect x="11" y="7" width="2" height="8" fill="#fff" />
    <rect x="15" y="11" width="2" height="4" fill="#fff" />
  </svg>
);

const iconDelivery = (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="#34d399" />
    <rect x="7" y="9" width="2" height="6" fill="#fff" />
    <rect x="11" y="7" width="2" height="8" fill="#fff" />
    <rect x="15" y="11" width="2" height="4" fill="#fff" />
  </svg>
);

const TransactionReport = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="mr-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="14" rx="2" fill="#fbbf24" />
            <rect x="6" y="10" width="2" height="6" fill="#fff" />
            <rect x="10" y="8" width="2" height="8" fill="#fff" />
            <rect x="14" y="12" width="2" height="4" fill="#fff" />
          </svg>
        </span>
        <h1 className="text-xl font-semibold">Transaction Report</h1>
      </div>

      {/* Filter/Search Bar */}
      <div className="bg-white rounded-lg shadow px-6 py-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700">
            <option>All modules</option>
          </select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700">
            <option>All Zones</option>
          </select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700">
            <option>All stores</option>
          </select>
          <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700">
            <option>All Time</option>
          </select>
          <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 ml-auto">Filter</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Completed Transaction */}
        <div className="bg-white rounded-lg shadow flex flex-col items-center justify-center p-6 relative">
          <div className="absolute top-4 right-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="2" fill="none" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#6b7280">i</text></svg>
          </div>
          {iconCompleted}
          <div className="text-3xl font-bold text-green-600 mt-4">$ 205.46K</div>
          <div className="text-gray-500 mt-2 text-center">Completed<br />Transaction</div>
        </div>
        {/* Refunded Transaction */}
        <div className="bg-white rounded-lg shadow flex flex-col items-center justify-center p-6 relative">
          <div className="absolute top-4 right-4">
            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fecaca" strokeWidth="2" fill="none" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#ef4444">i</text></svg>
          </div>
          {iconRefunded}
          <div className="text-3xl font-bold text-red-500 mt-4">$ 187.00</div>
          <div className="text-gray-500 mt-2 text-center">Refunded<br />Transaction</div>
        </div>
      </div>

      {/* Earnings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Admin Earning */}
        <div className="bg-white rounded-lg shadow flex items-center p-4">
          <div className="mr-4">{iconAdmin}</div>
          <div className="flex-1">
            <div className="flex items-center text-gray-600 font-medium mb-1">Admin Earning
              <span className="ml-1">
                <svg className="w-4 h-4 text-green-400 inline" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#bbf7d0" strokeWidth="2" fill="none" /><circle cx="8" cy="8" r="3" fill="#22c55e" /></svg>
              </span>
            </div>
            <div className="text-blue-500 text-lg font-semibold">$ 7.27K</div>
          </div>
        </div>
        {/* Store Earning */}
        <div className="bg-white rounded-lg shadow flex items-center p-4">
          <div className="mr-4">{iconStore}</div>
          <div className="flex-1">
            <div className="flex items-center text-gray-600 font-medium mb-1">Store Earning
              <span className="ml-1">
                <svg className="w-4 h-4 text-green-400 inline" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#bbf7d0" strokeWidth="2" fill="none" /><circle cx="8" cy="8" r="3" fill="#22c55e" /></svg>
              </span>
            </div>
            <div className="text-green-500 text-lg font-semibold">$ 35.86K</div>
          </div>
        </div>
        {/* Deliveryman Earning */}
        <div className="bg-white rounded-lg shadow flex items-center p-4">
          <div className="mr-4">{iconDelivery}</div>
          <div className="flex-1">
            <div className="flex items-center text-gray-600 font-medium mb-1">Deliveryman Earning
              <span className="ml-1">
                <svg className="w-4 h-4 text-red-400 inline" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#fecaca" strokeWidth="2" fill="none" /><circle cx="8" cy="8" r="3" fill="#fb7185" /></svg>
              </span>
            </div>
            <div className="text-orange-500 text-lg font-semibold">$ 198.01K</div>
          </div>
        </div>
      </div>

      {/* Combined Table */}
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold">Order Transactions
            <span className="ml-2 bg-gray-100 text-gray-500 text-xs rounded px-2 py-0.5">38</span>
          </h2>
          <div className="ml-auto flex items-center gap-2">
            <input
              className="border border-gray-200 rounded px-3 py-1 text-sm"
              placeholder="Search by Order ID"
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
                <th className="px-4 py-2">Sl</th>
                <th className="px-4 py-2">Order Id</th>
                <th className="px-4 py-2">Store</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Total Item Amount</th>
                <th className="px-4 py-2">Item Discount</th>
                <th className="px-4 py-2">Coupon Discount</th>
                <th className="px-4 py-2">Referral Discount</th>
                <th className="px-4 py-2">Discounted Amount</th>
                <th className="px-4 py-2">Vat/Tax</th>
                <th className="px-4 py-2">Delivery Charge</th>
                <th className="px-4 py-2">Order Amount</th>
                <th className="px-4 py-2">Admin Discount</th>
                <th className="px-4 py-2">Store Discount</th>
                <th className="px-4 py-2">Admin Commission</th>
                <th className="px-4 py-2">Additional Charge</th>
                <th className="px-4 py-2">Extra Packaging Amount</th>
                <th className="px-4 py-2">Commission On Delivery Charge</th>
                <th className="px-4 py-2">Admin Net Income</th>
                <th className="px-4 py-2">Store Net Income</th>
                <th className="px-4 py-2">Amount Received By</th>
                <th className="px-4 py-2">Payment Method</th>
                <th className="px-4 py-2">Payment Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {combinedRows.map((row, idx) => (
                <tr className="border-b" key={idx}>
                  <td className="px-4 py-2">{row.sl}</td>
                  <td className="px-4 py-2 text-blue-500 cursor-pointer underline">{row.orderId}</td>
                  <td className="px-4 py-2">{row.store}</td>
                  <td className="px-4 py-2 font-semibold">{row.customer}</td>
                  <td className="px-4 py-2">{row.totalItem}</td>
                  <td className="px-4 py-2">{row.itemDiscount}</td>
                  <td className="px-4 py-2">{row.couponDiscount}</td>
                  <td className="px-4 py-2">{row.referralDiscount}</td>
                  <td className="px-4 py-2">{row.discountedAmount}</td>
                  <td className="px-4 py-2">{row.vatTax}</td>
                  <td className="px-4 py-2">{row.deliveryCharge}</td>
                  <td className="px-4 py-2">{row.orderAmount}</td>
                  <td className="px-4 py-2">{row.adminDiscount}</td>
                  <td className="px-4 py-2">{row.storeDiscount}</td>
                  <td className="px-4 py-2 text-blue-500">{row.adminCommission}</td>
                  <td className="px-4 py-2">{row.additionalCharge}</td>
                  <td className="px-4 py-2">{row.extraPackaging}</td>
                  <td className="px-4 py-2">{row.commissionOnDelivery}</td>
                  <td className="px-4 py-2">{row.adminNetIncome}</td>
                  <td className="px-4 py-2">{row.storeNetIncome}</td>
                  <td className="px-4 py-2">{row.receivedBy}</td>
                  <td className="px-4 py-2">{row.paymentMethod}</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded text-xs border border-green-200">Completed</span>
                  </td>
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
    </div>
  );
};

export default TransactionReport;
