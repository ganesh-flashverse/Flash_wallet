import React, { useState } from "react";

const reviewData = {
  sl: 1,
  orderId: "100039",
  deliveryman: {
    name: "Jhon Doe",
    avatar: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    phone: "+8801700000000",
  },
  customer: "Akram Khan",
  rating: 5,
  review: "Punctual man.",
  date: "29 Sep 2022 02:43:pm",
};

function DeliverymanReviewModal({ open, onClose, data }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-2 relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-lg font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex flex-col items-center px-6 pt-6 pb-2">
          <div className="font-semibold text-base mb-1">Deliveryman Review</div>
          <div className="text-xs text-gray-400 mb-1">
            Order# <span className="font-semibold text-gray-700">{data.orderId}</span>
          </div>
          <div className="text-xs text-gray-400 mb-4">{data.date}</div>

          {/* Deliveryman Card */}
          <div className="w-full bg-gray-50 rounded p-4 flex items-center gap-4 mb-4">
            <img src={data.deliveryman.avatar} alt={data.deliveryman.name} className="w-16 h-16 rounded-full object-cover border" />
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{data.deliveryman.name}</div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#6B7280" strokeWidth="2"/><path d="M7 10h.01M12 10h.01M17 10h.01" stroke="#6B7280" strokeWidth="2"/></svg>
                {data.deliveryman.phone}
              </div>
              <div className="mt-2">
                <span className="bg-orange-50 text-orange-500 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 w-max">
                  {data.rating} <span className="text-yellow-400">★</span>
                </span>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="w-full bg-white rounded p-4 border border-gray-100 mb-2">
            <div className="font-semibold text-sm text-orange-500 mb-1">Review</div>
            <div className="text-gray-700 text-xs">{data.review}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliverymanReviewsTable({ onEyeClick }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
        <div className="flex items-center text-base font-semibold text-gray-800">
          <span className="mr-2 text-xl text-orange-600">🧑‍💼</span>
          Deliveryman Reviews
          <span className="ml-2 bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">1</span>
        </div>
        <div className="flex flex-wrap gap-2 items-center ml-auto">
          <select className="border rounded px-2 py-1 text-xs bg-white">
            <option>All DeliveryMan</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs bg-white">
            <option>Latest ratings</option>
          </select>
          <div className="relative">
            <input
              className="border rounded px-3 py-1 text-xs w-56 focus:outline-none focus:ring-2 focus:ring-teal-100 pr-8"
              placeholder="Ex : search delivery man"
            />
            <span className="absolute right-2 top-1.5 text-gray-400">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
          </div>
          <button className="bg-white border border-gray-200 text-xs px-3 py-1 rounded flex items-center gap-1 text-gray-700 font-semibold">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m4-4H8"/></svg>
            Export <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="border px-2 py-2 font-semibold">SL</th>
              <th className="border px-2 py-2 font-semibold">Order ID</th>
              <th className="border px-2 py-2 font-semibold">Deliveryman</th>
              <th className="border px-2 py-2 font-semibold">Customer</th>
              <th className="border px-2 py-2 font-semibold">Rating</th>
              <th className="border px-2 py-2 font-semibold">Review</th>
              <th className="border px-2 py-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-2 py-2 text-center">{reviewData.sl}</td>
              <td className="border px-2 py-2 text-blue-600 underline cursor-pointer">{reviewData.orderId}</td>
              <td className="border px-2 py-2 flex items-center gap-2">
                <img src={reviewData.deliveryman.avatar} alt={reviewData.deliveryman.name} className="w-8 h-8 rounded-full object-cover border" />
                <div>
                  <div className="font-semibold text-gray-800">{reviewData.deliveryman.name}</div>
                  <div className="text-xs text-gray-500">{reviewData.deliveryman.phone.replace(/(\d{5})\d{5}/, "$1*****")}</div>
                </div>
              </td>
              <td className="border px-2 py-2">{reviewData.customer}</td>
              <td className="border px-2 py-2">
                <span className="bg-orange-50 text-orange-500 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 w-max">
                  {reviewData.rating} <span className="text-yellow-400">★</span>
                </span>
              </td>
              <td className="border px-2 py-2 text-xs text-gray-600">{reviewData.review}</td>
              <td className="border px-2 py-2 text-center">
                <button
                  className="p-1 rounded hover:bg-gray-100 border border-orange-200 text-orange-500"
                  onClick={onEyeClick}
                  aria-label="View Review"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Demo() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <DeliverymanReviewsTable onEyeClick={() => setModalOpen(true)} />
      <DeliverymanReviewModal open={modalOpen} onClose={() => setModalOpen(false)} data={reviewData} />
    </div>
  );
}
