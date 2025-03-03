import React from "react";

const ShopSection = () => {
  return (
    <div className="w-full p-5 sm:p-10 mt-5">
      <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-[47px] font-bold 
                  sm:ml-0 md:ml-10 lg:ml-20 text-left space-y-5">
        SHOP OUR MODERN{" "}
        <img
          src="src/assets/Broadcast_Jewelry1.webp"
          alt="heirloom"
          className=" block sm:inline-block mt-3 w-30 h-15 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-30 lg:h-20 mx-2 align-middle "
        />
        HEIRLOOMS, BESTSELLING FINE{" "}
        <span className="block sm:inline sm:ml-5 ml-0 md:ml-10 lg:ml-20">
          JEWELRY{" "}
          <img
            src="src/assets/Jewelry2-15.webp"
            alt="jewelry"
            className="block sm:inline-block mt-3 mb-2 w-30 h-15 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-30 lg:h-20 mx-2 align-middle"
          />
          AND ELEGANT{" "}
          <img
            src="src/assets/Broadcast_Jewelry3.webp"
            alt="jewelrys"
            className="block sm:inline-block mt-3 mb-2 w-30 h-15 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-30 lg:h-20 mx-2 align-middle"
          />
          TREASURES.
        </span>
      </h1>
    </div>
  );
};

export default ShopSection;
