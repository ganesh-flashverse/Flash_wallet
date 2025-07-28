 import React, { useState } from "react";

// Dummy data for summary and tables
const tripSummary = { total: 42, inProgress: 25, ongoing: 3, completed: 11, canceled: 2 };
const tripTableData = [
  { id: '100010', provider: 'RideMaster Taxis', customer: 'Black Smith', fare: 11350, fareStatus: 'Unpaid', discount: 50, coupon: 1000, referral: 0, discounted: 1050, tax: 2060, addCharge: 10, total: 12370, totalStatus: 'Unpaid', received: 'Not Received Yet', payment: '', status: 'Confirmed' },
  { id: '100041', provider: 'CityLink Taxis', customer: 'Jonathon Jack', fare: 8350, fareStatus: 'Paid', discount: 1040, coupon: 500, referral: 0, discounted: 1540, tax: 2040, addCharge: 10, total: 8870, totalStatus: 'Paid', received: 'Not Received Yet', payment: 'Partial Payment', status: 'Completed' },
  { id: '100040', provider: 'CityLink Taxis', customer: 'Jonathon Jack', fare: 1930, fareStatus: 'Unpaid', discount: 20, coupon: 0, referral: 0, discounted: 20, tax: 572.31, addCharge: 10, total: 2490, totalStatus: 'Unpaid', received: 'Not Received Yet', payment: '', status: 'Pending' },
  { id: '100039', provider: 'CityLink Taxis', customer: 'Black Smith', fare: 3230, fareStatus: 'Unpaid', discount: 408.15, coupon: 0, referral: 0, discounted: 408.15, tax: 847.7, addCharge: 10, total: 3688, totalStatus: 'Unpaid', received: 'Not Received Yet', payment: '', status: 'Pending' },
  { id: '100038', provider: 'CityLink Taxis', customer: 'Black Smith', fare: 1980, fareStatus: 'Unpaid', discount: 20, coupon: 248, referral: 0, discounted: 268, tax: 515.08, addCharge: 10, total: 2240, totalStatus: 'Unpaid', received: 'Not Received Yet', payment: '', status: 'Pending' },
  { id: '100037', provider: 'CityLink Taxis', customer: 'Marjahan Sultana', fare: 198.08, fareStatus: 'Paid', discount: 25, coupon: 0, referral: 0, discounted: 25, tax: 51.92, addCharge: 10, total: 235, totalStatus: 'Paid', received: 'Vendor', payment: '', status: 'Pending' },
];
const tripStatusTable = [
  { received: 'Not Received Yet', payment: '', status: 'Confirmed' },
  { received: 'Not Received Yet', payment: 'Partial Payment', status: 'Completed' },
  { received: 'Not Received Yet', payment: '', status: 'Pending' },
  { received: 'Not Received Yet', payment: '', status: 'Pending' },
  { received: 'Not Received Yet', payment: '', status: 'Pending' },
];

function formatK(val) {
  if (val >= 1000) return `$ ${(val / 1000).toFixed(2)}K`;
  return `$ ${val}`;
}

export default function Demo() {
  const [zone, setZone] = useState('All Zones');
  const [provider, setProvider] = useState('All providers');
  const [customer, setCustomer] = useState('All customers');
  const [time, setTime] = useState('All Time');
  const [searchTrip, setSearchTrip] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Trip Report Header */}
      <div className="flex items-center mb-2">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Trip Report" className="w-8 h-8 mr-2" />
        <div>
          <div className="text-lg font-semibold text-gray-800">Trip Report</div>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <select className="border rounded px-3 py-2 text-sm" value={zone} onChange={e => setZone(e.target.value)}>
            <option>All Zones</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm" value={provider} onChange={e => setProvider(e.target.value)}>
            <option>All providers</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm" value={customer} onChange={e => setCustomer(e.target.value)}>
            <option>All customers</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm" value={time} onChange={e => setTime(e.target.value)}>
            <option>All Time</option>
          </select>
          <button className="bg-teal-800 text-white px-8 py-2 rounded font-semibold ml-auto">Filter</button>
        </div>
      </div>
      {/* Trip Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">📝</span>
          <div className="text-3xl font-bold text-yellow-600">{tripSummary.total}</div>
          <div className="text-sm text-gray-600">Total trips</div>
        </div>
        <div className="bg-cyan-50 rounded-lg p-6 flex flex-col items-center">
          <div className="text-2xl font-bold text-cyan-700">{tripSummary.inProgress}</div>
          <div className="text-sm text-cyan-800">In progress trips</div>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center">
          <div className="text-2xl font-bold text-blue-700">{tripSummary.ongoing}</div>
          <div className="text-sm text-blue-800">Ongoing trips</div>
        </div>
        <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center">
          <div className="text-2xl font-bold text-green-700">{tripSummary.completed}</div>
          <div className="text-sm text-green-800">Completed trips</div>
        </div>
        <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center">
          <div className="text-2xl font-bold text-red-600">{tripSummary.canceled}</div>
          <div className="text-sm text-red-600">Canceled trips</div>
        </div>
      </div>
      {/* Total Trips Table */}
      <div className="bg-white rounded-lg shadow p-4 mb-10">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base text-gray-700">Total Trips</span>
            <span className="bg-gray-100 text-xs px-2 rounded text-gray-600">42</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by Trip ID"
              value={searchTrip}
              onChange={e => setSearchTrip(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none"
            />
            <button className="bg-green-50 border border-green-600 text-green-700 px-4 py-1 rounded flex items-center text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Export
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l3-3 3 3m0 6l-3 3-3-3" /></svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded">
          <table className="min-w-full text-xs md:text-sm text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-3 py-2 font-semibold">Sl</th>
                <th className="px-3 py-2 font-semibold">Trip Id</th>
                <th className="px-3 py-2 font-semibold">Provider Info</th>
                <th className="px-3 py-2 font-semibold">Customer Info</th>
                <th className="px-3 py-2 font-semibold">Total Fare Of Vehicle</th>
                <th className="px-3 py-2 font-semibold">Discount On Vehicle</th>
                <th className="px-3 py-2 font-semibold">Coupon Discount</th>
                <th className="px-3 py-2 font-semibold">Referral Discount</th>
                <th className="px-3 py-2 font-semibold">Total Discounted Amount</th>
                <th className="px-3 py-2 font-semibold">Tax</th>
                <th className="px-3 py-2 font-semibold">Additional Charge</th>
                <th className="px-3 py-2 font-semibold">Total Trip Amount</th>
                <th className="px-3 py-2 font-semibold">Total Amount Received By</th>
                <th className="px-3 py-2 font-semibold">Payment Method</th>
                <th className="px-3 py-2 font-semibold">Trip Status</th>
                <th className="px-3 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {tripTableData.filter(row => row.id.includes(searchTrip)).map((row, i) => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">{i + 1}</td>
                  <td className="px-3 py-2 text-blue-600 font-medium cursor-pointer hover:underline">{row.id}</td>
                  <td className="px-3 py-2">{row.provider}</td>
                  <td className="px-3 py-2">{row.customer}</td>
                  <td className="px-3 py-2">
                    {formatK(row.fare)}
                    <span className={row.fareStatus === "Paid" ? "ml-1 text-green-500" : "ml-1 text-red-500"}>{row.fareStatus}</span>
                  </td>
                  <td className="px-3 py-2">{formatK(row.discount)}</td>
                  <td className="px-3 py-2">{formatK(row.coupon)}</td>
                  <td className="px-3 py-2">{formatK(row.referral)}</td>
                  <td className="px-3 py-2">{formatK(row.discounted)}</td>
                  <td className="px-3 py-2">{formatK(row.tax)}</td>
                  <td className="px-3 py-2">{formatK(row.addCharge)}</td>
                  <td className="px-3 py-2">
                    {formatK(row.total)}
                    <span className={row.totalStatus === "Paid" ? "ml-1 text-green-500" : "ml-1 text-red-500"}>{row.totalStatus}</span>
                  </td>
                  <td className="px-3 py-2">{row.received}</td>
                  <td className="px-3 py-2">{row.payment}</td>
                  <td className="px-3 py-2">
                    <span className={
                      row.status === "Completed"
                        ? "bg-green-50 border border-green-400 text-green-600 px-3 py-1 rounded-full text-xs"
                        : row.status === "Confirmed"
                        ? "bg-cyan-50 border border-cyan-400 text-cyan-600 px-3 py-1 rounded-full text-xs"
                        : "bg-cyan-50 border border-cyan-400 text-cyan-600 px-3 py-1 rounded-full text-xs"
                    }>{row.status}</span>
                  </td>
                  <td className="px-3 py-2 flex gap-2">
                    <button className="bg-white border border-orange-400 text-orange-500 rounded p-1 hover:bg-orange-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="10" cy="10" r="3" fill="#fb923c"/></svg>
                    </button>
                    <button className="bg-white border border-cyan-600 text-cyan-600 rounded p-1 hover:bg-cyan-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor"><rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="#22d3ee"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Trip Status/Payment Table */}
     
    </div>
  );
}