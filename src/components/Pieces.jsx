import { useState } from "react";

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("rings");
  const [mainImage, setMainImage] = useState("src/assets/lring.jpg");
  const [rightImages, setRightImages] = useState([]);

  const products = {
    rings: [
      { id: 1, img: "src/assets/imageg1.png", hoverImg: "src/assets/imageg11.webp" },
      { id: 2, img: "/ring2-main.jpg", hoverImg: "/ring2-alt.jpg" },
      { id: 3, img: "/ring3-main.jpg", hoverImg: "/ring3-alt.jpg" },
      { id: 4, img: "/ring4-main.jpg", hoverImg: "/ring4-alt.jpg" },
      { id: 5, img: "/ring5-main.jpg", hoverImg: "/ring5-alt.jpg" },
      { id: 6, img: "/ring6-main.jpg", hoverImg: "/ring6-alt.jpg" },
      { id: 7, img: "/ring7-main.jpg", hoverImg: "/ring7-alt.jpg" },
    ],
    earrings: [
      { id: 1, img: "/earring1-main.jpg", hoverImg: "/earring1-alt.jpg" },
      { id: 2, img: "/earring2-main.jpg", hoverImg: "/earring2-alt.jpg" },
      { id: 3, img: "/earring3-main.jpg", hoverImg: "/earring3-alt.jpg" },
      { id: 4, img: "/earring4-main.jpg", hoverImg: "/earring4-alt.jpg" },
      { id: 5, img: "/earring5-main.jpg", hoverImg: "/earring5-alt.jpg" },
      { id: 6, img: "/earring6-main.jpg", hoverImg: "/earring6-alt.jpg" },
      { id: 7, img: "/earring7-main.jpg", hoverImg: "/earring7-alt.jpg" },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setMainImage(products[category][0].img);
    setRightImages(products[category]);
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 lg:pb-10">
       {/* Top Buttons */}
       <div className="flex justify-between items-center mt-8">
      <div className="flex flex-col ">
        <h2 className="text-3xl font-bold text-left">EXCEPTIONAL PIECES</h2>
        <p className="text-left text-black text-sm mt-3 sm:mt-5">Soon-to-be staples in your rotation</p>
        </div>
        <div className="flex space-x-6">
          <button
            className={`pb-2 text-sm ${
              selectedCategory === "rings" ? "border-b-2 border-black " : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("rings")}
          >
            RINGS
          </button>
          <button
            className={`pb-2 text-sm ${
              selectedCategory === "earrings" ? "border-b-2  " : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("earrings")}
          >
            EARRINGS
          </button>
        </div>
      </div>

      {/* Main Image & Right Side Scrollable Images */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left Side: Big Image */}
        <div className="relative col-span-1">
          <img
            src={mainImage}
            alt="Main Product"
            
            className="w-100 h-auto object-cover"
            onMouseEnter={() =>
              setRightImages(products[selectedCategory].map((item) => ({ ...item, img: item.hoverImg })))
            }
            onMouseLeave={() => setRightImages(products[selectedCategory])}
          />
        </div>

        {/* Right Side: Scrollable Images */}
        <div className="col-span-2">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {rightImages.map((product) => (
              <img
                key={product.id}
                src={product.img}
                alt="Product"
                className="w-36 h-36 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition"
                onMouseEnter={() => setMainImage(product.hoverImg)} // Change main image on hover
                onMouseLeave={() => setMainImage(products[selectedCategory][0].img)} // Reset main image
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
