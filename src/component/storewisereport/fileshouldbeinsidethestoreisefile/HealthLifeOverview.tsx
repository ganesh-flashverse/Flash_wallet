import React from "react";

const dummyStore = {
  name: "Health Life",
  address: "House: 00, Road: 00, City-0000, Country",
  email: "p*********@demo.com",
  phone: "0*********",
  zone: "Main Demo Zone",
  logo: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
};

const dummyOwner = {
  name: "Jon Doe P",
  email: "p*********@demo.com",
  phone: "0*********",
  avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
};

const dummyBusinessPlan = {
  type: "Commission",
  commission: "10 %",
};

const dummyStats = {
  collectedCash: "$ 0.00",
  pendingWithdraw: "$ 0.00",
  withdrawAble: "$ 4,248.82",
  totalWithdraw: "$ 0.00",
  totalEarning: "$ 4,248.82",
};

export default function HealthLifeOverview() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Top Row: Cards */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {/* Collected Cash By Store */}
        <div className="col-span-1 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-between">
          <div className="text-xs text-gray-500 mb-2 w-full text-left">Collected Cash By Store</div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-green-600 text-3xl mb-1">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 3v18M8 7h8M8 17h8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <div className="text-3xl font-bold">{dummyStats.collectedCash}</div>
          </div>
          <button className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded py-2 font-semibold">Collect Cash From Store</button>
        </div>
        {/* Pending Withdraw */}
        <div className="col-span-1 bg-yellow-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-xs text-gray-500 mb-2">Pending Withdraw</div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-500">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fbbf24" /><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff">$</text></svg>
            </span>
            <span className="text-xl font-bold">{dummyStats.pendingWithdraw}</span>
          </div>
        </div>
        {/* Withdraw Able Balance */}
        <div className="col-span-1 bg-red-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-xs text-gray-500 mb-2">Withdraw Able balance</div>
          <div className="flex items-center gap-3">
            <span className="text-red-500">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f87171" /><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff">$</text></svg>
            </span>
            <span className="text-xl font-bold">{dummyStats.withdrawAble}</span>
          </div>
        </div>
        {/* Total Withdrawal Amount */}
        <div className="col-span-1 bg-green-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-xs text-gray-500 mb-2">Total Withdrawal Amount</div>
          <div className="flex items-center gap-3">
            <span className="text-green-500">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#34d399" /><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff">$</text></svg>
            </span>
            <span className="text-xl font-bold">{dummyStats.totalWithdraw}</span>
          </div>
        </div>
      </div>

      {/* Earnings Card */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-1 bg-cyan-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-xs text-gray-500 mb-2">Total Earning</div>
          <div className="flex items-center gap-3">
            <span className="text-cyan-500">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22d3ee" /><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff">$</text></svg>
            </span>
            <span className="text-xl font-bold">{dummyStats.totalEarning}</span>
          </div>
        </div>
      </div>

      {/* Store Info Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <div className="flex items-center mb-4">
          <span className="text-gray-500 text-sm font-semibold mr-2">
            <svg className="inline mr-1" width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" fill="#e5e7eb" rx="4"/></svg>
            Store Info
          </span>
        </div>
        <div className="flex gap-6">
          {/* Store Logo */}
          <div className="flex-shrink-0">
            <img src={dummyStore.logo} alt="logo" className="w-16 h-16 rounded" />
          </div>
          {/* Store Details */}
          <div className="flex-1">
            <div className="font-semibold text-lg mb-1">{dummyStore.name}</div>
            <div className="text-sm text-gray-500 mb-1">Address: <span className="text-blue-600 underline cursor-pointer">{dummyStore.address}</span></div>
            <div className="text-sm text-gray-500 mb-1">Email: <span className="text-blue-600 underline cursor-pointer">{dummyStore.email}</span></div>
            <div className="text-sm text-gray-500 mb-1">Phone: <span className="text-blue-600 underline cursor-pointer">{dummyStore.phone}</span></div>
            <div className="text-sm text-gray-500 mb-1">Zone: <span className="text-blue-600 underline cursor-pointer">{dummyStore.zone}</span></div>
          </div>
          {/* Map */}
          <div className="flex-shrink-0 w-[400px] h-[120px] rounded overflow-hidden border">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=0,0&z=15&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Owner Info & Business Plan */}
      <div className="grid grid-cols-2 gap-4">
        {/* Owner Info */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
          <img src={dummyOwner.avatar} alt="avatar" className="w-16 h-16 rounded-full border" />
          <div>
            <div className="font-semibold">{dummyOwner.name}</div>
            <div className="text-sm text-gray-500">{dummyOwner.email}</div>
            <div className="text-sm text-gray-500">{dummyOwner.phone}</div>
          </div>
        </div>
        {/* Business Plan */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="font-semibold mb-2">Business Plan</div>
          <div className="text-sm text-gray-500">Business Plan: <span className="text-gray-700 font-semibold">{dummyBusinessPlan.type}</span></div>
          <div className="text-sm text-gray-500">Commission percentage: <span className="text-gray-700 font-semibold">{dummyBusinessPlan.commission}</span></div>
        </div>
      </div>
    </div>
  );
}
