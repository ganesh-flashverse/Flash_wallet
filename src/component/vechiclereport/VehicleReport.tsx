import React from "react";
import car1 from './assets/logo.svg';
import car2 from './assets/logo.svg';
import car3 from './assets/logo.svg';
import car4 from './assets/logo.svg';
import car5 from './assets/logo.svg';



 
const vehicles = [
  {
    img: car1,
    name: 'Tesla Model 3',
    count: 1,
    provider: 'GoCar Hire',
    hourly: '$ 500.00',
    distance: '$ 650.00',
    tripCount: 4,
    tripVehicles: 4,
    tripAmount: '$ 26,068.95',
    discount: '$ 13,034.49',
    avgTrip: '$ 3,258.62',
    rating: { value: 5, count: 4 },
  },
  {
    img: car2,
    name: 'Toyota Corolla',
    count: 3,
    provider: 'CityLink Taxis',
    hourly: '$ 250.00',
    distance: '$ 500.00',
    tripCount: 2,
    tripVehicles: 2,
    tripAmount: '$ 10,844.50',
    discount: '$ 1,064.45',
    avgTrip: '$ 4,790.03',
    rating: { value: 4, count: 1 },
  },
  {
    img: car3,
    name: 'Hyundai Elantra',
    count: 8,
    provider: 'RideMaster Taxis',
    hourly: '$ 0.00',
    distance: '$ 380.00',
    tripCount: 1,
    tripVehicles: 1,
    tripAmount: '$ 7,428.96',
    discount: '$ 60.00',
    avgTrip: '$ 7,368.96',
    rating: { value: 0, count: 0 },
  },
  {
    img: car4,
    name: 'Mercedes-Benz E-Class',
    count: 2,
    provider: 'CityRide Rentals',
    hourly: '$ 50.00',
    distance: '$ 200.00',
    tripCount: 1,
    tripVehicles: 1,
    tripAmount: '$ 189.56',
    discount: '$ 18.96',
    avgTrip: '$ 170.60',
    rating: { value: 5, count: 1 },
  },
  {
    img: car5,
    name: 'Nissan Leaf',
    count: 2,
    provider: 'RideMaster Taxis',
    hourly: '$ 1,990.00',
    distance: '$ 0.00',
    tripCount: 1,
    tripVehicles: 1,
    tripAmount: '$ 7,960.00',
    discount: '$ 90.00',
    avgTrip: '$ 7,870.00',
    rating: { value: 5, count: 1 },
  },
];

export default function Demo() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center mb-2">
        <span className="mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></span>
        <h2 className="text-lg font-semibold text-gray-800">Vehicle Report</h2>
      </div>
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-wrap gap-4 mb-3">
          <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All Zones</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All providers</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All Categories</option></select>
          <select className="border border-gray-200 rounded px-4 py-2 w-56 text-gray-700"><option>All Time</option></select>
          <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800">Filter</button>
        </div>
      </div>
      {/* Table Section */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-base font-semibold mr-2">Vehicle Report Table</span>
          <span className="bg-gray-100 text-xs px-1.5 rounded text-gray-600">7</span>
        </div>
        <div className="flex items-center gap-2">
          <input className="border border-gray-200 rounded px-3 py-1 text-sm" placeholder="Ex : search vehicle name" />
          <button className="bg-green-50 border border-green-600 text-green-700 px-4 py-1 rounded flex items-center text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Export
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l3-3 3 3m0 6l-3 3-3-3" /></svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded shadow border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="px-4 py-2 font-semibold">Sl</th>
              <th className="px-4 py-2 font-semibold">Vehicle Info</th>
              <th className="px-4 py-2 font-semibold">Number Of Vehicles</th>
              <th className="px-4 py-2 font-semibold">Provider</th>
              <th className="px-4 py-2 font-semibold">Hourly Rate</th>
              <th className="px-4 py-2 font-semibold">Distance Wise Rate</th>
              <th className="px-4 py-2 font-semibold">Total Trip Count</th>
              <th className="px-4 py-2 font-semibold">Total Trip Vehicles</th>
              <th className="px-4 py-2 font-semibold">Total Trip Amount</th>
              <th className="px-4 py-2 font-semibold">Total Discount Given</th>
              <th className="px-4 py-2 font-semibold">Average Trip Value</th>
              <th className="px-4 py-2 font-semibold">Average Ratings</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v, idx) => (
              <tr key={v.name} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{idx + 1}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={v.img} alt={v.name} className="h-8 w-8 rounded object-cover border" />
                  <span>{v.name}</span>
                </td>
                <td className="px-4 py-2">{v.count}</td>
                <td className="px-4 py-2">{v.provider}</td>
                <td className="px-4 py-2">{v.hourly}</td>
                <td className="px-4 py-2">{v.distance}</td>
                <td className="px-4 py-2">{v.tripCount}</td>
                <td className="px-4 py-2">{v.tripVehicles}</td>
                <td className="px-4 py-2">{v.tripAmount}</td>
                <td className="px-4 py-2">{v.discount}</td>
                <td className="px-4 py-2">{v.avgTrip}</td>
                <td className="px-4 py-2 flex items-center gap-1">
                  <span className={
                    v.rating.value === 5 ? 'text-green-600' : v.rating.value === 4 ? 'text-blue-600' : 'text-gray-400'
                  }>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <text x="2" y="15" fontSize="14" fill="currentColor">+{v.rating.value}</text>
                    </svg>
                  </span>
                  <span className="text-xs text-gray-500">({v.rating.count})</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
