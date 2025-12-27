import React from "react";

const Screen1 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black w-full h-screen p-0 sm:p-4">
      <svg
        className="w-32 h-32 sm:w-40 sm:h-56 max-w-full max-h-[60vh]"
        viewBox="0 0 120 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flag-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF9933" />
            <stop offset="45%" stopColor="#fff" />
            <stop offset="100%" stopColor="#138808" />
          </linearGradient>
        </defs>
        {/* Main lightning bolt */}
        <path
          d="M35 40 Q38 30 55 30 Q70 30 65 40 L50 80 L70 80 Q75 80 70 90 L30 140 Q25 150 28 130 L38 90 L20 90 Q15 90 18 80 Z"
          fill="url(#flag-gradient)"
          filter="drop-shadow(0 2px 8px rgba(0,0,0,0.15))"
        />
        {/* Top right accent */}
        <path
          d="M75 40 Q78 30 98 30 Q110 30 100 45 Q90 60 75 55 Z"
          fill="url(#flag-gradient)"
        />
      </svg>
    </div>
  );
};

export default Screen1;
