import React from "react";

const MarqueeText = ({ items }) => {
  return (
    <div className="w-full overflow-hidden bg-[#ece7db] py-4 mt-7">
      <div className="flex whitespace-nowrap overflow-hidden relative group py-10">
        <div className="flex animate-marquee group-hover:paused space-x-10">
          {items.map((item, index) => (
            <span key={index} className="text-black text-lg font-bold flex items-center">
              {item}
            </span>
          ))}
        </div>
         {/* Duplicate content for smooth looping effect */}
         <div className="flex animate-marquee group-hover:paused space-x-10">
          {items.map((item, index) => (
            <span key={index + items.length} className="text-black text-lg font-semibold flex items-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
