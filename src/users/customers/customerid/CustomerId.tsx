import React, { useState } from "react";

const rentalCustomer = {
  id: 5,
  name: "Mehedi Hasan (Rental)",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  phone: "0***********",
  email: "m*********@gmail.com",
  address1: "Rental Road, Dhaka, Bangladesh",
  address2: "R909+H8M, Dhaka, Bangladesh",
  address3: "Rental Point, Dhaka, Bangladesh",
  joined: "10 May 2024 09:00am",
  totalOrder: 2,
  totalOrderAmount: "$ 750.00",
  wallet: 50,
  loyalty: 10,
};

function RentalStatusBadge({ status }) {
  let color = "";
  let text = status;
  switch (status) {
    case "Returned":
      color = "bg-green-100 text-green-600 border-green-200";
      break;
    case "Active":
      color = "bg-blue-100 text-blue-600 border-blue-200";
      break;
    default:
      color = "bg-gray-100 text-gray-600 border-gray-200";
  }
  return (
    <span className={`px-3 py-0.5 rounded text-xs font-semibold border ${color}`}>
      {text}
    </span>
  );
}

function StatusBadge({ status }) {
  let color = "";
  let text = status;
  switch (status) {
    case "Delivered":
      color = "bg-green-100 text-green-600 border-green-200";
      break;
    case "Confirmed":
      color = "bg-blue-100 text-blue-600 border-blue-200";
      break;
    case "Processing":
      color = "bg-orange-100 text-orange-500 border-orange-200";
      break;
    default:
      color = "bg-gray-100 text-gray-600 border-gray-200";
  }
  return (
    <span className={`px-3 py-0.5 rounded text-xs font-semibold border ${color}`}>
      {text}
    </span>
  );
}

export default function Demo() {
  const [module, setModule] = useState("all");

  // All Module Data
  const orders = [
    {
      sl: 1,
      orderId: "100098",
      store: "Not found",
      status: "Delivered",
      totalItems: "N/A",
      amount: "$ 100.00",
      orderDate: "27 Nov 2023 01:42PM",
    },
    {
      sl: 2,
      orderId: "100071",
      store: "Café Monarch",
      status: "Confirmed",
      totalItems: 1,
      amount: "$ 5,999.50",
      orderDate: "17 Oct 2023 12:15PM",
    },
    {
      sl: 3,
      orderId: "100060",
      store: "Hungry Puppets",
      status: "Processing",
      totalItems: 2,
      amount: "$ 1,777.00",
      orderDate: "22 Aug 2023 10:22AM",
    },
  ];

  const customer = {
    id: 5,
    name: "Mehedi Hasan",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "0***********",
    email: "m*********@gmail.com",
    address1: "Staff Road Bus Station, Tongi Diversion Rd, ঢাকা, Bangladesh",
    address2: "R909+H8M, Dhaka, Bangladesh",
    address3: "Niketon Bazar, Dhaka, Bangladesh",
    joined: "23 Mar 2022 10:21am",
    totalOrder: 13,
    totalOrderAmount: "$ 34,332.00",
    wallet: 100,
    loyalty: 63,
  };

  // Rental Module Data
  const rentalOrders = [
    {
      sl: 1,
      orderId: "R2001",
      store: "Rental Hub",
      status: "Returned",
      totalItems: 1,
      amount: "$ 250.00",
      orderDate: "10 May 2024 03:30PM",
    },
    {
      sl: 2,
      orderId: "R2002",
      store: "Bike Rental",
      status: "Active",
      totalItems: 2,
      amount: "$ 500.00",
      orderDate: "12 May 2024 11:00AM",
    },
  ];

  // Switch data based on module
  const info = module === "all" ? customer : rentalCustomer;
  const orderList = module === "all" ? orders : rentalOrders;
  const StatusBadgeComp = module === "all" ? StatusBadge : RentalStatusBadge;

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* Header */}
      <div>
          <div className="text-sm font-semibold">Customer Id #{info.id}</div>
          <div className="text-xs text-gray-400">Joined at: {info.joined}</div>
        </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 mt-2">

        
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            className={`px-3 py-1 rounded text-xs font-semibold border ${
              module === "all" ? "bg-teal-100 text-teal-700 border-teal-200" : "bg-white text-gray-700 border-gray-200"
            }`}
            onClick={() => setModule("all")}
          >
            All Module
          </button>
          <button
            className={`px-3 py-1 rounded text-xs font-semibold border ${
              module === "rental" ? "bg-teal-100 text-teal-700 border-teal-200" : "bg-white text-gray-700 border-gray-200"
            }`}
            onClick={() => setModule("rental")}
          >
            Rental Module
          </button>
        </div>
        <button className="bg-amber-400 text-white px-4 py-1.5 rounded text-xs font-semibold ml-0 md:ml-4 flex items-center gap-1">
          <span className="text-lg">＋</span> Create coupon
        </button>
      </div>
      {/* Alert */}
      <div className="bg-orange-50 border border-orange-200 text-orange-700 text-xs rounded px-4 py-2 mb-4 flex items-center">
        <span className="mr-2">🔔</span>
        If you want to make a customized COUPON for this customer, click the Create Coupon button and influence them to buy more from your store.
      </div>
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-green-50 rounded-lg flex flex-col items-center justify-center py-6">
          <div className="bg-green-100 rounded-full p-3 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm2 4v2h8V8H8zm0 4v2h8v-2H8z" fill="#22c55e" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-green-700">{info.totalOrder}</div>
          <div className="text-xs text-gray-500 mt-1">Total order</div>
        </div>
        <div className="bg-purple-50 rounded-lg flex flex-col items-center justify-center py-6">
          <div className="bg-purple-100 rounded-full p-3 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M12 21c-4.97 0-9-3.58-9-8V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6c0 4.42-4.03 8-9 8z" fill="#a78bfa" />
              <path d="M12 17v-6m0 0h3m-3 0H9" stroke="#7c3aed" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-purple-700">{info.totalOrderAmount}</div>
          <div className="text-xs text-gray-500 mt-1">Total order amount</div>
        </div>
        <div className="bg-blue-50 rounded-lg flex flex-col items-center justify-center py-6">
          <div className="bg-blue-100 rounded-full p-3 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M12 3v18m9-9H3" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-blue-700">{info.wallet}</div>
          <div className="text-xs text-gray-500 mt-1">Wallet balance</div>
        </div>
        <div className="bg-orange-50 rounded-lg flex flex-col items-center justify-center py-6">
          <div className="bg-orange-100 rounded-full p-3 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#f59e42" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-orange-500">{info.loyalty}</div>
          <div className="text-xs text-gray-500 mt-1">Loyalty point</div>
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Order List */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-2">
            <span className="font-semibold text-sm">Order List</span>
            <span className="ml-2 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">{orderList.length}</span>
            <div className="flex ml-auto gap-2">
              <div className="relative">
                <input
                  className="border rounded px-3 py-1 text-xs w-48 focus:outline-none focus:ring-2 focus:ring-teal-100 pr-8"
                  placeholder="Ex: search by order id"
                />
                <span className="absolute right-2 top-1.5 text-gray-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
              </div>
              <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v8m4-4H8" />
                </svg>
                Export
                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs border">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="border px-2 py-2 font-semibold">SL</th>
                    <th className="border px-2 py-2 font-semibold">Order ID</th>
                    <th className="border px-2 py-2 font-semibold">Store</th>
                    <th className="border px-2 py-2 font-semibold">Status</th>
                    <th className="border px-2 py-2 font-semibold">Total Items</th>
                    <th className="border px-2 py-2 font-semibold">Amount</th>
                    <th className="border px-2 py-2 font-semibold">Order Date</th>
                    <th className="border px-2 py-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.map((row, idx) => (
                    <tr key={row.orderId} className="hover:bg-gray-50">
                      <td className="border px-2 py-2 text-center">{row.sl}</td>
                      <td className="border px-2 py-2 text-blue-600 underline cursor-pointer">{row.orderId}</td>
                      <td className="border px-2 py-2">{row.store}</td>
                      <td className="border px-2 py-2 text-center">
                        <StatusBadgeComp status={row.status} />
                      </td>
                      <td className="border px-2 py-2 text-center">{row.totalItems}</td>
                      <td className="border px-2 py-2 text-center">{row.amount}</td>
                      <td className="border px-2 py-2 text-center">{row.orderDate}</td>
                      <td className="border px-2 py-2 text-center flex gap-2 justify-center">
                        <button className="p-1 rounded hover:bg-gray-100 border border-orange-200 text-orange-500" aria-label="View Order">
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="p-1 rounded hover:bg-gray-100 border border-amber-200 text-amber-500" aria-label="Coupon">
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="3" y="7" width="18" height="10" rx="2" stroke="#f59e42" strokeWidth="2" />
                            <circle cx="7" cy="12" r="1.5" fill="#f59e42" />
                            <circle cx="17" cy="12" r="1.5" fill="#f59e42" />
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
        {/* Customer Info Card */}
        <div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3 mb-3">
              <img src={info.avatar} alt={info.name} className="w-14 h-14 rounded-full object-cover border" />
              <div>
                <div className="font-semibold text-gray-800">{info.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">Total Order: {info.totalOrder}</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Contact:</span> {info.phone}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Email:</span> {info.email}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Address:</span>
              <div className="ml-2 mt-1">
                <div>{info.address1}</div>
                <div>{info.address2}</div>
                <div>{info.address3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
