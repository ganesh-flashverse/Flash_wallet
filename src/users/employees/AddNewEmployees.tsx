import React from "react";

const zones = ["All", "Zone 1", "Zone 2"];
const roles = ["Select Role", "Manager", "Accountant", "Staff"];

export default function Demo() {
  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-800 text-base font-semibold mb-2">
        <span className="inline-block"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#222" strokeWidth="2"/><circle cx="12" cy="7" r="4" stroke="#222" strokeWidth="2"/></svg></span>
        Add New Employee
      </div>
      {/* General Information */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 border">
        <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="#222" strokeWidth="2"/><path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1" stroke="#222" strokeWidth="2"/></svg>
          General Information
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">First name <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="First name" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Last name <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Last name" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Zone <span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-2 py-1 text-xs">
              {zones.map((z, i) => <option key={i}>{z}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Role <span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-2 py-1 text-xs">
              {roles.map((r, i) => <option key={i}>{r}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Phone <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex : +8801*********" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 flex items-center gap-1">Employee image <span className="text-xs text-red-500">( ratio 1:1 )</span></label>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-gray-100 rounded cursor-pointer border border-dashed border-gray-300">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#e0f2fe"/><path d="M12 8v8M8 12h8" stroke="#38bdf8" strokeWidth="2"/></svg>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500">Choose file</label>
                <input type="file" className="text-xs" style={{width:'120px'}} disabled />
                <span className="text-xs text-gray-400">No file chosen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Account Information */}
      <div className="bg-white rounded-lg shadow p-4 mb-4 border">
        <div className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#222" strokeWidth="2"/><path d="M8 12h8" stroke="#222" strokeWidth="2"/></svg>
          Account Information
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Email <span className="text-red-500">*</span></label>
            <input className="w-full border rounded px-2 py-1 text-xs" placeholder="Ex: xx@gmail.com" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1 flex items-center gap-1">Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input className="w-full border rounded px-2 py-1 text-xs pr-8" placeholder="8+ characters required" type="password" />
              <span className="absolute right-2 top-1.5 text-gray-400 cursor-pointer">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#888" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Confirm password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input className="w-full border rounded px-2 py-1 text-xs pr-8" placeholder="8+ characters required" type="password" />
              <span className="absolute right-2 top-1.5 text-gray-400 cursor-pointer">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#888" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2 justify-end mt-6">
        <button className="bg-gray-100 text-gray-700 px-6 py-1.5 rounded text-xs font-semibold">Reset</button>
        <button className="bg-teal-600 text-white px-6 py-1.5 rounded text-xs font-semibold">Submit</button>
      </div>
    </div>
  );
}
