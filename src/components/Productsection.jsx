import { useState, useRef } from "react";

const ProductSection = ({ nextSectionRef }) => {
  const [selectedColor, setSelectedColor] = useState("gold");
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null);

  // Product Images Based on Color Selection
  const productImages = {
    gold: {
      default: "src/assets/ee1.webp",
      hover: "src/assets/ee2.webp",
    },
    silver: {
      default: "src/assets/e1.webp",
      hover: "src/assets/e1.webp",
    },
  };

  // Handle Scroll to Detect Completion

  const handleScroll = () => {
    const scrollableDiv = scrollRef.current;
    if (
      scrollableDiv.scrollTop + scrollableDiv.clientHeight >=
      scrollableDiv.scrollHeight - 5
    ) {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center   lg:flex-row items-center   bg-[#c3b095] ">
      {/* Left Side - Image, Content & Buttons */}

      <div className="w-full flex flex-col items-center text-center  mb-5 sm:mb-4 lg:pt-4 lg:mb-10">
        <div className="bg-white w-full  lg:w-[400px] md:h-[600px] shadow-lg flex flex-col justify-between">
          {/* Product Image with Hover Effect */}
          <div className="w-full h-[400px] lg:h-[82%]">
            <img
              src={
                hovered
                  ? productImages[selectedColor].hover
                  : productImages[selectedColor].default
              }
              alt="Product"
              className="w-full h-full object-cover transition-all duration-300 "
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>

          {/* Product Details */}
          <div className="h-auto flex flex-col justify-start items-center   pt-0.5 sm:pt-0 ">
            <h2 className="font-semibold text-sm text-center">
              Lotti Hoops in {selectedColor}
            </h2>
            <p className="text-gray-500 text-md m-0">Limited Release</p>
            <p className="text-sm m-0">$198.00</p>

            {/* Color Selection Buttons */}
            <div className="flex justify-center gap-2 mt-1 mb-1 p-0">
              <button
                className={`w-5 h-5 rounded-full ${
                  selectedColor === "gold" ? "border-2 border-yellow-400" : ""
                }`}
                style={{ backgroundColor: "#d4af37" }}
                onClick={() => setSelectedColor("gold")}
              ></button>
              <button
                className={`w-5 h-5 rounded-full ${
                  selectedColor === "silver" ? "border-2 border-gray-500" : ""
                }`}
                style={{ backgroundColor: "#c0c0c0" }}
                onClick={() => setSelectedColor("silver")}
              ></button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Background Blur + Scrollable Section */}
      <div className="w-full lg:h-[700px] flex justify-center items-center relative  ">
        {/* Background Image with Blur */}
        <div
          className="absolute   w-200 h-[100vh] bg-cover bg-center  hidden md:block "
          style={{ backgroundImage: `url('src/assets/bgimg.jpg')` }}
        ></div>

        {/* Centered Scrollable Content */}
        <div className="relative  w-full max-w-lg h-[600px] md:h-[400px] lg:h-[400px]   overflow-y-auto  bg-white  flex flex-col items-center   ">
          <div
            onScroll={handleScroll}
            className="w-full h-full overflow-y-scroll hide-scrollbar  items-center justify-center "
          >
            <img
              src="src/assets/scroll.webp"
              alt="Scroll 1"
              className="w-full"
            />
            <img
              src="src/assets/scroll2.webp"
              alt="Scroll 2"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
