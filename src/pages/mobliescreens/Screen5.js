"use client";
import React, { useState } from "react";

const keypad = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["back", "0", "ok"],
];

const Screen5 = () => {
  const [passcode, setPasscode] = useState("");

  const handleKey = (key) => {
    if (key === "back") {
      setPasscode(passcode.slice(0, -1));
    } else if (key === "ok") {
      // Handle passcode submit here
      if (passcode.length === 6) {
        alert("Passcode submitted: " + passcode);
      }
    } else if (passcode.length < 6 && /\d/.test(key)) {
      setPasscode(passcode + key);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-6 w-full max-w-md mx-auto">
      <div className="mt-10 mb-8 w-full flex flex-col items-center">
        <h2 className="text-white text-base font-semibold mb-8">Confirm Passcode</h2>
        {/* Passcode boxes */}
        <div className="flex justify-center gap-3 mb-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-9 h-9 border-2 rounded-md flex items-center justify-center text-xl font-semibold ${passcode[i] ? "border-white bg-white text-black" : "border-gray-400 bg-transparent text-white"}`}
            >
              {passcode[i] ? "•" : ""}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-xs text-center mb-8 max-w-xs">
          Enter your Passcode. Be sure to remember it so you can unlock your wallet.
        </p>
      </div>
      {/* Keypad */}
      <div className="w-full flex flex-col items-center justify-center flex-1">
        <div className="grid grid-cols-3 gap-6 mb-4">
          {keypad.flat().map((key, i) => (
            <button
              key={i}
              className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl font-semibold focus:outline-none transition-all ${key === "ok" ? "bg-gray-700" : key === "back" ? "" : "bg-transparent"} ${key === "ok" ? "text-white" : "text-white"}`}
              onClick={() => handleKey(key)}
              disabled={key === "ok" && passcode.length !== 6}
            >
              {key === "back" ? (
                <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
              ) : key === "ok" ? (
                <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#2e3a4b" strokeWidth="2.5" fill="#2e3a4b"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5"/></svg>
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen5;
