import React from "react";

const itemRows = [
  {
    sl: 1,
    img: "https://via.placeholder.com/32x32.png?text=🥬",
    name: "Fresh Watermelon",
    module: "Grocery",
    store: "Family supermarket",
    stock: "500",
    sellCount: "6",
    price: "$ 6.00",
    totalSold: "$ 540.00",
    totalDiscount: "$ 43.20",
    avgSale: "$ 82.80",
    avgRating: "★0 (0)",
  },
  {
    sl: 2,
    img: "https://via.placeholder.com/32x32.png?text=🍕",
    name: "Cheese Pizza",
    module: "Food",
    store: "Hungry Puppets",
    stock: "N/A",
    sellCount: "6",
    price: "$ 250.00",
    totalSold: "$ 1,100.00",
    totalDiscount: "$ 117.00",
    avgSale: "$ 3,287.67",
    avgRating: "★5 (1)",
  },
  {
    sl: 3,
    img: "https://via.placeholder.com/32x32.png?text=🥘",
    name: "Mutton Biriyani",
    module: "Food",
    store: "Café Monarch",
    stock: "N/A",
    sellCount: "2",
    price: "$ 250.00",
    totalSold: "$ 500.00",
    totalDiscount: "$ 50.00",
    avgSale: "$ 225.00",
    avgRating: "★5 (1)",
  },
  {
    sl: 4,
    img: "https://via.placeholder.com/32x32.png?text=👕",
    name: "Tommy Hilfiger Girls Solid Sho...",
    module: "Shop",
    store: "Orderly Fashion",
    stock: "5992",
    sellCount: "6",
    price: "$ 700.00",
    totalSold: "$ 4,200.00",
    totalDiscount: "$ 420.00",
    avgSale: "$ 630.00",
    avgRating: "★0 (0)",
  },
  {
    sl: 5,
    img: "https://via.placeholder.com/32x32.png?text=💊",
    name: "Spring Valley Vitamin",
    module: "Pharmacy",
    store: "Clove Pharmacy",
    stock: "889",
    sellCount: "11",
    price: "$ 50.00",
    totalSold: "$ 550.00",
    totalDiscount: "$ 0.00",
    avgSale: "$ 50.00",
    avgRating: "★0 (0)",
  },
];

const ItemReport: React.FC = () => (
  <div className="bg-gray-50 min-h-screen p-4">
    {/* Header and Filter Section */}
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex items-center mb-6">
        <span className="mr-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="14" rx="2" fill="#fbbf24" />
            <rect x="6" y="10" width="2" height="6" fill="#fff" />
            <rect x="10" y="8" width="2" height="8" fill="#fff" />
            <rect x="14" y="12" width="2" height="4" fill="#fff" />
          </svg>
        </span>
        <h1 className="text-xl font-semibold">Item Report</h1>
      </div>
      <div className="mb-2 font-semibold text-gray-700">Search Data</div>
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
          <option>All Categories</option>
        </select>
        <select className="border border-gray-200 rounded px-4 py-2 w-48 text-gray-700">
          <option>All Time</option>
        </select>
        <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 ml-auto">Filter</button>
      </div>
    </div>

    {/* Item Report Table */}
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold">Item Report Table
          <span className="ml-2 bg-gray-100 text-gray-500 text-xs rounded px-2 py-0.5">33</span>
        </h2>
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border border-gray-200 rounded px-3 py-1 text-sm"
            placeholder="Ex : search item name"
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
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Module</th>
              <th className="px-4 py-2">Store</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Sell Count</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Total Amount Sold</th>
              <th className="px-4 py-2">Total Discount Given</th>
              <th className="px-4 py-2">Average Sale Value</th>
              <th className="px-4 py-2">Average Ratings</th>
            </tr>
          </thead>
          <tbody>
            {itemRows.map((row, idx) => (
              <tr className="border-b" key={idx}>
                <td className="px-4 py-2">{row.sl}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={row.img} alt={row.name} className="w-8 h-8 rounded object-cover border" />
                  <span>{row.name}</span>
                </td>
                <td className="px-4 py-2">{row.module}</td>
                <td className="px-4 py-2">{row.store}</td>
                <td className="px-4 py-2">{row.stock}</td>
                <td className="px-4 py-2">{row.sellCount}</td>
                <td className="px-4 py-2">{row.price}</td>
                <td className="px-4 py-2">{row.totalSold}</td>
                <td className="px-4 py-2">{row.totalDiscount}</td>
                <td className="px-4 py-2">{row.avgSale}</td>
                <td className="px-4 py-2 text-blue-500 cursor-pointer underline">{row.avgRating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ItemReport;
