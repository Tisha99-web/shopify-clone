import React from "react";

const Ethical = () => {
  return (
    <div className="bg-white pt-20 w-full px-5">
      <div className="mx-auto ">
        <div className="flex flex-col ">
          <h1 className="text-3xl sm:text-4xl font-bold text-left lg:ml-8">
            ETHICAL IS BEAUTIFUL
          </h1>
          <h2 className="mt-3 sm:mt-5 text-left lg:ml-8 text-black">
            We ensure our products contribute to the well-being of people and
            planet, towards a brighter future.
          </h2>
        </div>

        {/* Grids Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7  lg:mb-20">
          {/* First Grid Item */}
          <div
            className="relative bg-cover bg-center h-[500px] sm:h-[500px] lg:h-[600px] shadow-md lg:ml-9"
            style={{ backgroundImage: `url('src/assets/ethical1.webp')` }}
          >
            <div className="absolute bottom-5 left-5 sm:left-10 text-white">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                ELSWORTH NECKLACE
              </h1>
              <p className="text-sm mb-3 sm:mb-4 font-semibold ">
                Explore rings for your big moment, and all the little memories
                after.
              </p>
              <button className="bg-white text-black px-4 py-2 mt-2 sm:mt-4">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Second Grid Item */}
          <div
            className="relative bg-cover bg-center h-[400px] sm:h-[500px] lg:h-[600px] shadow-md lg:mr-9"
            style={{ backgroundImage: `url('src/assets/ethical2.webp')` }}
          >
            <div className="absolute bottom-5 left-5 sm:left-10 text-white">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                MODERN AND TIMELESS
              </h1>
              <p className="text-sm mb-3 sm:mb-4 font-semibold">
                Accessorize with 14k recycled gold all day, everyday.
              </p>
              <button className="bg-white text-black px-4 py-2 mt-2 sm:mt-4">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethical;
