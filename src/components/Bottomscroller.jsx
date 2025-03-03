import React from "react";

const Bottomscroller = ({ items }) => {
  return (
    <div className="w-full overflow-hidden  bg-black py-4 group">
      <div className="flex whitespace-nowrap overflow-hidden relative ">
        {/* Marquee Content */}
        <div className="flex animate-marquee ">
          {items.map((item, index) => (
            <span key={index} className="text-white text-lg font-bold flex items-center">
              {item} <span className="mx-2">•</span>
            </span>
          ))}
        </div>
        {/* Duplicate for smooth looping */}
        <div className="flex animate-marquee space-x-10 ">
          {items.map((item, index) => (
            <span key={index + items.length} className="text-white text-lg font-bold flex items-center">
              {item} <span className="mx-2">•</span>
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Bottomscroller;
