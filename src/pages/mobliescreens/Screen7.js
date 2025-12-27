"use client";
import React from "react";

const Screen7 = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4 py-6 w-full max-w-md mx-auto">
      {/* Main content centered */}
      <div className="flex flex-col items-center justify-center flex-1 w-full mt-8">
        <h2 className="text-white text-base font-semibold mb-14 text-center">
          Touch your fingerprint sensor
        </h2>

        {/* Fingerprint icon */}
        <i
          className="material-icons mb-8"
          style={{ fontSize: "80px", color: "#a259f7" }}
        >
          fingerprint
        </i>
      </div>

      {/* Bottom button */}
      <div className="w-full mb-2 flex flex-col items-center">
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold text-base active:scale-95 transition-transform">
          Done
        </button>
      </div>
    </div>
  );
};

export default Screen7;
