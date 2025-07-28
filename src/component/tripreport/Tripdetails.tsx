import React from "react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center px-4 md:px-0 max-w-md mb-6">
        <button className="bg-green-700 text-white font-mono rounded px-6 py-2 text-base font-semibold tracking-wide shadow-md focus:outline-none">
          Proceed  If thermal printer is ready.
        </button>
        <button className="bg-red-500 text-white rounded px-6 py-2 font-semibold shadow-md focus:outline-none">
          Back
        </button>
      </div>
      {/* Receipt Card */}
      <div className="w-full max-w-md bg-white border border-dashed border-gray-300 rounded-lg shadow p-6 text-gray-900 font-mono">
        <div className="flex flex-col items-center mb-2">
          <span className="text-4xl mb-2">🚖</span>
          <div className="font-bold text-lg tracking-widest mb-1">CITYLINK TAXIS</div>
          <div className="text-xs text-gray-700 mb-1">Berlin, Germany</div>
          <div className="text-xs text-gray-700 flex items-center gap-1">
            <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 4v12m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            +8*********
          </div>
        </div>
        <hr className="my-3 border-dashed border-gray-300" />
        <div className="text-center mb-2">
          <span className="font-bold tracking-widest">Trip Id:108039</span>
          <div className="text-xs mt-1">08 Feb 2025 12:57pm</div>
        </div>
        <div className="mb-2">
          <span className="text-xs">Customer Name : </span>
          <span className="text-xs font-semibold">Black Smith</span>
        </div>
        <div className="mb-2 text-xs">
          Phone : <span className="font-semibold">+8*********</span>
        </div>
        <div className="mb-2 text-xs">
          Pickup Location : <span className="font-semibold">1358 Rd Number 9, Dhaka, Bangladesh</span>
        </div>
        <div className="mb-2 text-xs">
          Destination Location : <span className="font-semibold">Kakoli Foot-Overbridge, Dhaka, Bangladesh</span>
        </div>
        <hr className="my-3 border-dashed border-gray-300" />
        <div className="mb-1 text-xs font-bold flex justify-between">
          <span>Vehicle List</span>
          <span>Price</span>
        </div>
        <div className="flex justify-between text-xs mb-2">
          <span>1. Toyota Corolla</span>
          <span className="font-mono">$</span>
          <span className="font-semibold">4,881.50</span>
        </div>
        <div className="text-xs text-gray-700 ml-4 mb-1">
          $ 4,881.50/Distance_wise, 1 Vehicle,<br />8.163 Km
        </div>
        <hr className="my-3 border-dashed border-gray-300" />
        <div className="text-xs flex justify-between mb-1">
          <span>Subtotal (TAX Included) :</span>
          <span className="font-semibold">$ 4,881.50</span>
        </div>
        <div className="text-xs flex justify-between mb-1">
          <span>Discount:</span>
          <span className="font-semibold text-red-500">- $ 488.15</span>
        </div>
        <div className="text-xs flex justify-between mb-1">
          <span>Coupon Discount:</span>
          <span className="font-semibold">- $ 0.00</span>
        </div>
        <div className="text-xs flex justify-between mb-1">
          <span>Tax:</span>
          <span className="font-semibold text-green-700">+ $ 847.70</span>
        </div>
        <hr className="my-3 border-dashed border-gray-300" />
        <div className="text-lg flex justify-between font-bold mb-2">
          <span>Total:</span>
          <span className="tracking-widest">$ 3,683.35</span>
        </div>
        <div className="text-center text-xs mt-6 mb-2">Thank You</div>
        <hr className="my-3 border-dashed border-gray-300" />
        <div className="text-center text-xs mt-2 text-gray-600">
          © 6amMart. 2021-2023 6amMart.
        </div>
      </div>
    </div>
  );
}
