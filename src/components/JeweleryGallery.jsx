import React from "react";

const JewelryGallery = () => {
  return (
    <div className="ml-4 mr-4 px-2 mt-20">
      {/* Instagram Follow Section */}
      <h5 className="text-left text-sm">FOLLOW US</h5>
      <span className="font-bold text-lg block">@BROADCASTJEWELRY</span>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-5">
        <img src="src/assets/Jewelry1.webp" alt="Jewelry 1" className="w-full  h-[150px] sm:h-[250px] md:h-[400px] object-cover" />
        <img src="src/assets/jewelery2.webp" alt="Jewelry 2" className="w-full  h-[150px] sm:h-[250px] md:h-[400px] object-cover" />
        <img src="src/assets/Jewelry3.webp" alt="Jewelry 3" className="w-full  h-[150px] sm:h-[250px] md:h-[400px] object-cover" />
        <img src="src/assets/jewelery4.webp" alt="Jewelry 4" className="w-full  h-[150px] sm:h-[250px] md:h-[400px] object-cover" />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-20 md:mt-25 justify-items-center ">
        <div className="flex flex-col items-center">
          <span className="text-lg">✨</span>
          <h4 className="font-semibold text-sm mt-2">ETHICAL SOURCING</h4>
          <p className="text-gray-500 text-xs mt-2 mb-2">Fully traceable supply chain</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg mt-2">🤲</span>
          <h3 className="font-semibold text-sm mt-2">GIVING BACK</h3>
          <p className="text-gray-500 text-xs mt-2 mb-2">1% to orgs and communities</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg mt-2">💬</span>
          <h3 className="font-semibold text-sm mt-2">ON DEMAND STYLISTS</h3>
          <p className="text-gray-500 text-xs mt-2">Available everyday</p>
        </div>
      </div>
    </div>
  );
};

export default JewelryGallery;
