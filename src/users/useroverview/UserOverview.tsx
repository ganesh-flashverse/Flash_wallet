import React from "react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" className="w-8 h-8 mr-2" />
        <span className="text-lg font-semibold mr-2">User Overview</span>
        <span className="text-xs text-gray-500">Hello here you can manage your users by zone.</span>
        <div className="ml-auto">
          <select className="border rounded px-2 py-1 text-xs">
            <option>All Zones</option>
          </select>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center mb-2">
            <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs mr-2">+25</span>
            <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs mr-2">in 1</span>
          </div>
          <div className="text-3xl font-bold mb-1">27</div>
          <div className="text-xs text-gray-500">Total Customer</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center mb-2">
            <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs mr-2">+4</span>
            <span className="text-2xl mr-1">🛵</span>
          </div>
          <div className="text-3xl font-bold mb-1">6</div>
          <div className="text-xs text-gray-500">Total Delivery Man</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center mb-2">
            <span className="bg-orange-100 text-orange-700 rounded-full px-2 py-1 text-xs mr-2">+3</span>
            <span className="flex -space-x-2">
              <span className="inline-block w-6 h-6 rounded-full bg-yellow-300 border-2 border-white"></span>
              <span className="inline-block w-6 h-6 rounded-full bg-red-300 border-2 border-white"></span>
              <span className="inline-block w-6 h-6 rounded-full bg-purple-300 border-2 border-white"></span>
            </span>
          </div>
          <div className="text-3xl font-bold mb-1">5</div>
          <div className="text-xs text-gray-500">Total Employee</div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Customer Statistics */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 md:col-span-1">
          <div className="font-semibold mb-2 text-sm">Customer Statistics</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-600 text-xl font-bold">
              <span className="">👤</span>
              <span>27</span>
            </div>
            <div className="text-xs text-gray-700">Active Customer</div>
            <div className="flex items-center gap-2 text-blue-600 text-xl font-bold">
              <span className="">🆕</span>
              <span>0</span>
            </div>
            <div className="text-xs text-gray-700">Newly Joined</div>
            <div className="flex items-center gap-2 text-red-600 text-xl font-bold">
              <span className="">🚫</span>
              <span>0</span>
            </div>
            <div className="text-xs text-gray-700">Blocked Customer</div>
          </div>
        </div>
        {/* Customer Growth Chart */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 md:col-span-1">
          <div className="font-semibold mb-2 text-sm">Customer Growth</div>
          <svg height="100" width="100%" viewBox="0 0 300 100" className="w-full h-24">
            <polyline fill="none" stroke="#4F46E5" strokeWidth="2" points="0,90 30,90 60,90 90,90 120,90 150,90 180,90 210,90 240,90 270,90 300,90" />
          </svg>
          <div className="text-xs text-gray-400 text-right">This year (2025)</div>
        </div>
        {/* Customer Satisfaction */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 md:col-span-1">
          <div className="font-semibold mb-2 text-sm">Customer Satisfaction</div>
          <div className="text-xs mb-1">15 Review Received</div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-green-600">●</span>Positive
              <div className="flex-1 bg-gray-200 rounded h-2 mx-2"><div className="bg-green-500 h-2 rounded" style={{ width: '93%' }}></div></div>
              <span className="text-xs">93%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">●</span>Good
              <div className="flex-1 bg-gray-200 rounded h-2 mx-2"><div className="bg-blue-400 h-2 rounded" style={{ width: '0%' }}></div></div>
              <span className="text-xs">0%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">●</span>Neutral
              <div className="flex-1 bg-gray-200 rounded h-2 mx-2"><div className="bg-gray-400 h-2 rounded" style={{ width: '7%' }}></div></div>
              <span className="text-xs">7%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">●</span>Negative
              <div className="flex-1 bg-gray-200 rounded h-2 mx-2"><div className="bg-red-400 h-2 rounded" style={{ width: '0%' }}></div></div>
              <span className="text-xs">0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deliveryman Section */}
      <div className="mt-8">
        <div className="font-semibold mb-2 text-sm">Deliveryman Statistics</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Deliveryman Stats Cards */}
          <div className="col-span-2 flex gap-4">
            <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-2xl">🧑‍💼</span>
              <span className="text-lg font-bold text-green-600">5</span>
              <span className="text-xs text-gray-700 mt-1">Active Delivery Man</span>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-2xl">🆕</span>
              <span className="text-lg font-bold text-blue-600">0</span>
              <span className="text-xs text-gray-700 mt-1">Newly Joined Delivery Man</span>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-2xl">🟠</span>
              <span className="text-lg font-bold text-yellow-600">1</span>
              <span className="text-xs text-gray-700 mt-1">Inactive Deliveryman</span>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-2xl">🚫</span>
              <span className="text-lg font-bold text-red-600">0</span>
              <span className="text-xs text-gray-700 mt-1">Blocked Deliveryman</span>
            </div>
          </div>

          {/* Top Deliveryman List */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-sm">Top Deliveryman</div>
              <button className="text-blue-500 text-xs underline">View All</button>
            </div>
            <div className="flex flex-col gap-2">
              {[{"name":"Jhon","orders":15,"avatar":"https://randomuser.me/api/portraits/men/1.jpg"},
                {"name":"Thomas","orders":5,"avatar":"https://randomuser.me/api/portraits/men/2.jpg"},
                {"name":"Lily","orders":3,"avatar":"https://randomuser.me/api/portraits/women/1.jpg"},
                {"name":"William","orders":2,"avatar":"https://randomuser.me/api/portraits/men/3.jpg"},
                {"name":"Amelia","orders":1,"avatar":"https://randomuser.me/api/portraits/women/2.jpg"}].map((d, i) => (
                <div key={d.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={d.avatar} alt={d.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-semibold">{d.name}</span>
                  </div>
                  <span className="text-xs text-blue-600">Orders : {d.orders}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow p-4 mt-4">
          <div className="flex items-center mb-2">
            <div className="font-semibold text-sm flex-1">Currently Active Delivery Men</div>
            <input className="border rounded px-2 py-1 text-xs ml-2" placeholder="Search Delivery Man..." />
            <button className="ml-2 text-blue-500 text-xs underline">View All Delivery Men</button>
          </div>
          <div className="w-full h-56 bg-gray-200 rounded flex items-center justify-center relative overflow-hidden">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=23.7805733,90.2792399&zoom=16&size=600x200&key=YOUR_API_KEY" alt="Map" className="w-full h-full object-cover opacity-80" />
            <span className="absolute top-2 left-2 bg-blue-600 text-white rounded-full px-2 py-1 text-xs">6</span>
            <span className="absolute bottom-2 right-2 text-xs text-gray-700">Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
