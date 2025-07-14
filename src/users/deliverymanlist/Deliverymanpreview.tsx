import React, { useState } from "react";

// Sample data
const reviewList = [];

const deliveryman = {
  name: "William Damian",
  email: "D*********@gmail.com",
  phone: "+8*********",
  jobType: "Freelancer",
  vehicleType: "-",
  zone: "Main Demo Zone",
  online: true,
  avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
  identityType: "Passport",
  identityNumber: "6*********",
  identityImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_States_passport_2010.svg/1200px-United_States_passport_2010.svg.png",
};

const previewStats = [
  { label: "Total delivered orders", value: 2, color: "bg-cyan-50", icon: "📦" },
  { label: "Cash in hand", value: "$ 4,354.85", color: "bg-green-50", icon: "💵" },
  { label: "Total earning", value: "$ 5,738.68", color: "bg-yellow-50", icon: "💰" },
  { label: "Payable Balance", value: "$ 4,354.85", color: "bg-orange-50", icon: "📝" },
  { label: "Total withdrawn", value: "$ 3,100.00", color: "bg-purple-50", icon: "🏆" },
  { label: "Pending withdraw", value: "$ 0.00", color: "bg-cyan-50", icon: "🌱" },
];

// Component to display when no data is found
function NoDataFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <svg width="120" height="120" fill="none" viewBox="0 0 120 120">
        <ellipse cx="60" cy="60" rx="50" ry="50" fill="#F8FAFC" />
        <path d="M60 40c-10 0-18 8-18 18s8 18 18 18 18-8 18-18-8-18-18-18zm0 32c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z" fill="#CBD5E1" />
        <circle cx="60" cy="58" r="6" fill="#94A3B8" />
        <rect x="54" y="72" width="12" height="4" rx="2" fill="#CBD5E1" />
      </svg>
      <div className="text-xs text-gray-400 mt-2">No Data Found</div>
    </div>
  );
}

// Component to display the review list
function ReviewList() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-semibold">Review list <span className="ml-1 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">0</span></div>
        <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m4-4H8"/></svg>
          Export
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="border px-2 py-2 font-semibold">SL</th>
              <th className="border px-2 py-2 font-semibold">Order ID</th>
              <th className="border px-2 py-2 font-semibold">Customer</th>
              <th className="border px-2 py-2 font-semibold">Rating</th>
              <th className="border px-2 py-2 font-semibold">Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}><NoDataFound /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Component to display the deliveryman profile
function DeliverymanProfile() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-base mr-2">{deliveryman.name} {deliveryman.zone}</span>
        {deliveryman.online && <span className="bg-cyan-100 text-cyan-700 text-xs rounded-full px-2 py-0.5 ml-1">Online</span>}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-row gap-4 items-center">
          <img src={deliveryman.avatar} alt="avatar" className="w-20 h-20 rounded-full border" />
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-gray-700">{deliveryman.name}</div>
            <div className="text-xs text-gray-500">{deliveryman.email}</div>
            <div className="text-xs text-gray-500">{deliveryman.phone}</div>
            <div className="flex gap-2 mt-1">
              <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#22C55E" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="#22C55E" strokeWidth="2"/>
                </svg>
                Job Type
              </span>
              <span className="text-green-600 text-xs font-semibold">{deliveryman.jobType}</span>
              <span className="flex items-center gap-1 bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="8" width="16" height="8" rx="2" stroke="#F59E42" strokeWidth="2"/>
                </svg>
                Vehicle Type
              </span>
              <span className="text-orange-600 text-xs font-semibold">{deliveryman.vehicleType}</span>
              <span className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2"/>
                  <path d="M12 8v4l3 3" stroke="#3B82F6" strokeWidth="2"/>
                </svg>
                Zone
              </span>
              <span className="text-blue-600 text-xs font-semibold">{deliveryman.zone}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex gap-2 mb-2">
            <button className="bg-teal-600 text-white px-4 py-1 rounded text-xs font-semibold shadow hover:bg-teal-700">Edit Information</button>
            <button className="bg-red-400 text-white px-4 py-1 rounded text-xs font-semibold shadow hover:bg-red-500">Suspend This Delivery Man</button>
            <button className="bg-cyan-700 text-white px-4 py-1 rounded text-xs font-semibold shadow hover:bg-cyan-800">Type (Freelancer)</button>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 rounded p-4 min-h-[120px]">
              <div className="flex gap-1 mb-2">
                <svg width="40" height="40" fill="#E5E7EB" viewBox="0 0 24 24"><polygon points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"/></svg>
                <svg width="40" height="40" fill="#E5E7EB" viewBox="0 0 24 24"><polygon points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"/></svg>
                <svg width="40" height="40" fill="#E5E7EB" viewBox="0 0 24 24"><polygon points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"/></svg>
              </div>
              <div className="text-xs text-gray-400">No review/rating given yet</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
          <span className="mr-1">📄</span> Identity Documents
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-gray-600">Identity Type : <span className="font-semibold text-gray-800">{deliveryman.identityType}</span></div>
            <div className="text-xs text-gray-600">Identification number : <span className="font-semibold text-gray-800">{deliveryman.identityNumber}</span></div>
          </div>
          <div className="flex flex-col items-center">
            <img src={deliveryman.identityImg} alt="identity" className="w-20 h-28 object-cover border rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Component to display the deliveryman preview
function DeliverymanPreview() {
  const [tab, setTab] = useState("Info");
  const tabs = ["Info", "Transaction", "Order List", "Conversations", "Disbursements"];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center mb-2">
        <span className="mr-2 text-base">🧑‍💼</span>
        <span className="font-semibold text-base">Deliveryman Preview</span>
        <span className="ml-2 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">0</span>
        <span className="ml-4 text-xs text-gray-400">Requested to join at 29 Sep 2022 7:12:2am</span>
      </div>
      <div className="flex gap-4 border-b border-gray-100 mb-4">
        {tabs.map((t) => (
          <button
            key={t}
            className={`px-3 py-1 text-xs font-semibold border-b-2 ${tab === t ? "border-cyan-500 text-cyan-700" : "border-transparent text-gray-400"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {previewStats.map((stat, idx) => (
          <div key={idx} className={`rounded-lg p-4 flex flex-col gap-2 ${stat.color}`}>
            <span className="text-2xl">{stat.icon}</span>
            <span className="text-xl font-bold text-gray-700">{stat.value}</span>
            <span className="text-xs text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main component
export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <DeliverymanPreview />
      <DeliverymanProfile />
      <ReviewList />
    </div>
  );
}
