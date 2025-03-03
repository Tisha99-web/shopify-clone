import React from "react";

const Sale = () => {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center lg:h-100  bg-white  md:mt-80"
      style={{ backgroundImage: "url('src/assets/bracelets.webp')" }}
    >
      {/* Left Bottom Content */}
      <div className="absolute bottom-8 left-6 md:left-16 text-white ">
        <h2 className="text-2xl md:text-4xl font-bold">
          YOUR FAVOURITE, NOW ON SALE!
        </h2>
        <p className="text-md md:text-lg  mt-7 font-semibold">
          Available in both 14k gold and sterling silver
        </p>
        <button className="mt-9 px-4 py-4 bg-white  text-black  ">
          SHOP NOW
        </button>
      </div>
      {/* Right Bottom Image */}
      <img
        src="src/assets/sale.png" // Replace with your image URL
        alt="Scenery"
        className=" hidden md:block  absolute bottom-6  md:right-10 md:w-130 md:h-40 object-cover "
      />
    </div>
  );
};

export default Sale;
