"use client";
import React from "react";

const Screen8 = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-6 w-full max-w-md mx-auto relative">
      {/* Top bar */}
      <div className="w-full flex items-center justify-between mb-10 relative">
        <button
          className="bg-white rounded-full p-2 shadow-md"
          style={{ position: "absolute", left: 0 }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="flex-1 text-center text-white font-semibold text-sm">
          Setup Face ID
        </span>
        <span style={{ width: 40 }}></span>
      </div>

      {/* Scan area */}
      <div
        className="flex flex-col items-center justify-center flex-1 w-full"
        style={{ minHeight: "340px" }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: 260, height: 260 }}
        >
          {/* Four blue corners */}
          <svg
            width="260"
            height="260"
            className="absolute top-0 left-0"
            style={{ zIndex: 1 }}
          >
            {/* Top left */}
            <path
              d="M0 48 Q0 0 48 0"
              stroke="#1765ff"
              strokeWidth="4"
              fill="none"
            />
            {/* Top right */}
            <path
              d="M212 0 Q260 0 260 48"
              stroke="#1765ff"
              strokeWidth="4"
              fill="none"
            />
            {/* Bottom left */}
            <path
              d="M0 212 Q0 260 48 260"
              stroke="#1765ff"
              strokeWidth="4"
              fill="none"
            />
            {/* Bottom right */}
            <path
              d="M212 260 Q260 260 260 212"
              stroke="#1765ff"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          {/* Circle with camera icon */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              width: 110,
              height: 110,
              background: "#1765ff",
              borderRadius: "50%",
              zIndex: 2,
            }}
          >
            {/* Camera icon (Material Icons) */}
            <span
              className="material-icons text-white"
              style={{ fontSize: "48px" }}
            >
              photo_camera
            </span>
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="w-full mb-2 flex flex-col items-center">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-base active:scale-95 transition-transform">
          Scan my Face
        </button>
      </div>
    </div>
  );
};

export default Screen8;
