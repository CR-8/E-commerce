import React from 'react';

const Marquee = () => {
  const textItems = [
    "NEW ARRIVALS",
    "ACCESSORIES",
    "WINTER COLLECTION",
    "EXCLUSIVE DEALS",
    "LIMITED EDITION"
  ];

  // Join items with proper spacing and separators
  const text = textItems.join(" -- ") + " -- ";

  return (
    <div className="relative overflow-x-hidden bg-white border-y-2 border-black">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="flex whitespace-nowrap animate-scroll py-6">
        {/* First copy of the text */}
        <div className="flex shrink-0">
          <span className="text-black text-[4rem] font-bold px-8 tracking-tight">
            {text}
          </span>
        </div>
        {/* Second copy to ensure seamless loop */}
        <div className="flex shrink-0">
          <span className="text-black text-[4rem] font-bold px-8 tracking-tight">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;