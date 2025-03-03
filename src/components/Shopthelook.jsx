import { useState } from "react";

const Shopthelook = () => {
  const [selectedColor, setSelectedColor] = useState("gold");
  const [hoveredImage1, setHoveredImage1] = useState(false);
  const [hoveredImage2, setHoveredImage2] = useState(false);

  // Image logic for the first product (Ring) - Changes based on selection + hover
  // default gold and silver img
  const ringDefaultImage =
    selectedColor === "gold" ? "src/assets/golddef.png" : "src/assets/e1.webp";
  // hover gold and silver img
  const ringHoverImage =
    selectedColor === "gold" ? "src/assets/shoph1.webp" : "src/assets/e1.webp";
  const ringImage = hoveredImage1 ? ringHoverImage : ringDefaultImage;

  return (
    <div className="flex flex-col w-full bg-white md:flex-row">
      {/* Left Side - Large Image */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[100vh]">
        <img
          src="src/assets/shoplook.webp"
          alt="Model Wearing Jewelry"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="hidden md:flex flex-col  w-1/2 p-10 ">
        <h6 className="text-sm text-center mb-6 mt-20">SHOP THE LOOK</h6>

        {/* 🏆 Add a flex container to keep both divs in a row */}
        <div className="flex flex-row gap-8 lg:mt-5 ">
          {/* First Product */}
          <div
            className="relative w-80"
            onMouseEnter={() => setHoveredImage1(true)}
            onMouseLeave={() => setHoveredImage1(false)}
          >
            <img
              src={ringImage}
              alt="Ilona Signet Ring"
              className="w-full h-90 object-cover"
            />
            <p className="text-center mt-2">Ilona Signet Ring in Gold</p>
            <p className="text-center text-gray-600">$140.00</p>
            {/* Color selection buttons */}
            <div className="flex justify-center gap-2 mt-2">
              <button
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedColor === "gold"
                    ? "border-yellow-400"
                    : "border-gray-400"
                } bg-yellow-500`}
                onClick={() => setSelectedColor("gold")}
              ></button>
              <button
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedColor === "silver"
                    ? "border-black"
                    : "border-gray-400"
                } bg-gray-300`}
                onClick={() => setSelectedColor("silver")}
              ></button>
            </div>
          </div>

          {/* Second Product - Hoops */}
          <div
            className="relative w-80 h-40"
            onMouseEnter={() => setHoveredImage2(true)}
            onMouseLeave={() => setHoveredImage2(false)}
          >
            <img
              src={
                hoveredImage2
                  ? "src/assets/shp2hov.jpg"
                  : "src/assets/shp2def.png"
              }
              alt="Gia Baby Hoops"
              className="w-full h-90 object-cover"
            />
            <p className="text-center mt-2">Gia Baby Hoops in Gold</p>
            <p className="text-center text-gray-600">$89.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopthelook;
