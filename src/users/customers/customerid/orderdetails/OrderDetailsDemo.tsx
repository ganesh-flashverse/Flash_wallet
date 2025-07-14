import React from "react";

// Hardcoded data matching the image
const order = {
  id: "100096",
  date: "27 Nov 2023 01:42pm",
  status: "Delivered",
  paymentMethod: "Cash On Delivery",
  referenceCode: "-",
  orderType: "Parcel",
  paymentStatus: "Paid",
  deliveryCharge: 90,
  deliveryman: {
    name: "Arhan Dore",
    role: "orders.deliverymnd",
    email: "d*********@santosh.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  lastLocation: "RP9C+XCH, Dhaka District, BD",
  items: [
    {
      icon: "🎁",
      name: "Gifts",
      desc: "Send heartfelt presents, right on time",
      distance: "0 Km"
    }
  ],
  deliveryTips: 0,
  additionalCharge: 10,
  total: 100,
  customer: {
    name: "Mehedi Hasan",
    id: "12 orders",
    phone: "0***********",
    email: "m*********@gmail.com"
  },
  receiver: {
    name: "9399",
    contact: "8***********",
    location: "Unknown Location Found"
  },
  sender: {
    name: "-",
    contact: "8***********",
    location: "Unknown Location Found"
  }
};

export default function OrderDetailsDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-sm font-semibold mb-2">
        <span className="inline-block"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 7V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1" stroke="#222" strokeWidth="2"/><rect x="3" y="7" width="18" height="13" rx="2" stroke="#222" strokeWidth="2"/></svg></span>
        Order Details
        <span className="ml-2 bg-gray-200 text-gray-600 rounded-full px-1 text-xs">0</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Card */}
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <div className="flex flex-wrap items-center justify-between mb-2">
            <div>
              <div className="font-semibold text-gray-800 text-base">Order #{order.id}</div>
              <div className="text-xs text-gray-400">📅 {order.date}</div>
            </div>
            <button className="bg-white border border-gray-300 text-xs px-4 py-1.5 rounded font-semibold flex items-center gap-1"><svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M4 7V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1" stroke="#222" strokeWidth="2"/><rect x="3" y="7" width="18" height="13" rx="2" stroke="#222" strokeWidth="2"/></svg> Print Invoice</button>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-semibold">Status : {order.status}</span>
            <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Payment Method : {order.paymentMethod}</span>
            <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Reference Code : <span className="text-blue-600 underline cursor-pointer">Add</span></span>
            <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-semibold">Order Type : <span className="text-blue-600">{order.orderType}</span></span>
            <span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-semibold">Payment Status : {order.paymentStatus}</span>
          </div>
          <div className="mb-2">
            <button className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded flex items-center gap-1"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#3b82f6" strokeWidth="2"/></svg> Show Location On Map</button>
          </div>
          {/* Item Row */}
          <div className="flex items-center gap-2 border-t border-b py-3">
            <span className="text-2xl">{order.items[0].icon}</span>
            <div>
              <div className="font-semibold text-sm">{order.items[0].name}</div>
              <div className="text-xs text-gray-500">{order.items[0].desc}</div>
            </div>
            <div className="ml-auto text-xs text-gray-500">Distance</div>
            <div className="w-16 text-right text-xs">{order.items[0].distance}</div>
          </div>
          {/* Charges Table */}
          <div className="w-full text-xs mt-2">
            <div className="flex justify-end">
              <div className="w-1/2 max-w-xs">
                <div className="flex justify-between py-1">
                  <span>Delivery charge</span><span>${order.deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Delivery man tips</span><span>+ $0.00</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Additional Charge</span><span>+ $10.00</span>
                </div>
                <div className="border-t my-2"></div>
                <div className="flex justify-between font-semibold py-1">
                  <span>Total:</span><span>$100.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
          {/* Deliveryman */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3 mb-3">
              <img src={order.deliveryman.avatar} alt={order.deliveryman.name} className="w-10 h-10 rounded-full object-cover border" />
              <div>
                <div className="font-semibold text-gray-800">{order.deliveryman.name}</div>
                <div className="text-xs text-gray-500">{order.deliveryman.role}</div>
                <div className="text-xs text-gray-500">{order.deliveryman.email}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Last location :</span> {order.lastLocation}
            </div>
          </div>
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block p-2 bg-black text-white rounded-full"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" rx="5" fill="#000"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/></svg></span>
              <div>
                <div className="font-semibold text-gray-800">{order.customer.name}</div>
                <div className="text-xs text-gray-500">{order.customer.id}</div>
                <div className="text-xs text-gray-500">{order.customer.phone}</div>
                <div className="text-xs text-gray-500">{order.customer.email}</div>
              </div>
            </div>
          </div>
          {/* Receiver Info */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-semibold text-gray-800 mb-1">Receiver Info</div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Name :</span> {order.receiver.name}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Contact :</span> {order.receiver.contact}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Location :</span> {order.receiver.location}
            </div>
          </div>
          {/* Sender Info */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-semibold text-gray-800 mb-1">Sender</div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Name :</span> {order.sender.name}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Contact :</span> {order.sender.contact}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              <span className="font-semibold text-gray-700">Location :</span> {order.sender.location}
            </div>
          </div>
          {/* Delivery Proof */}
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div className="font-semibold text-gray-800">Delivery proof</div>
            <button className="bg-white border border-gray-300 text-xs px-3 py-1 rounded font-semibold">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
