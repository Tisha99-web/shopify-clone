import React from 'react'

const  JewelryShowcase = () => {
  
  return (
    <div className="flex flex-col-reverse  md:flex-row items-center justify-center px-4 md:px-16 py-10 bg-white gap-3 md:gap-1 ">
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/Jewelry31.webp" // Replace with actual image URL
          alt="Jewelry Model"
          className="w-full mt-8 max-h-[400px] sm:max-h-[250px] md:max-h-[400px] lg:max-h-[700px] object-cover"
        />
      </div>

      {/* Right Section - Text and Images */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
        <p className="text-xs uppercase text-gray-600 ">
          Trends & Tradition
        </p>
        <h1 className="text-4xl font-bold mt-2">FOR EVERYDAY WEAR</h1>
        <p className="text-gray-600 mt-3 max-w-md font-semibold">
          From dainty classics that are perfect for daily adornment to chic,
          trendsetting pieces designed to complement any occasion – our
          selection blends exquisite craftsmanship with modern sensibility.
        </p>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-2 mt-8  w-full max-w-md  ">
          <div className="flex flex-col items-center md:w-45 lg:w-50">
            <img
              src="src/assets/E32.webp"
              alt="Earrings"
              className="w-full h-40 md:h-40 lg:h-48 object-cover"
              onClick={() => window.location.href = ""} // Redirect on click
            />
            <span className="text-md text-black mt-4 mx-7  hover:underline decoration-gray-700 underline-offset-5 ">Bestsellers <sup>95</sup></span>
          </div>
          <div className="flex flex-col items-center md:w-45 lg:w-50 ">
            <img
              src="src/assets/e33.webp"
              alt="Necklace"
              className="w-full h-40 md:h-40 lg:h-48 object-cover"
            />
            {/* onClick={() => window.location.href = ""}   Redirect on click  */}
            <span className="text-md text-black mt-4 mx-11 hover:underline decoration-gray-700 underline-offset-5">New <sup>17</sup></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JewelryShowcase
