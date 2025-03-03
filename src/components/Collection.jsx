import React, { useState } from "react";

const Collection = () => {
  // Product data with default & hover images
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "llona Earrings in Gold",
      price: 168,
      goldImg: "src/assets/collectiong.png",
      silverImg: "src/assets/colls.webp",
      hoverGold: "src/assets/collgh.webp",
      hoverSilver: "src/assets/coll2sh.webp",
      selectedColor: "gold", // Default selected color
    },
    {
      id: 2,
      name: "Adelaide Hoops in sterling Silver",
      price: 115,
      goldImg: "src/assets/coll2gd.webp",
      silverImg: "src/assets/coll2ds.png",
      hoverGold: "src/assets/collgh.webp",
      hoverSilver: "src/assets/coll2sh.webp",
      selectedColor: "silver",
    },
    {
      id: 3,
      name: "Bardot Earrings in Silver",
      price: 198,
      goldImg: "src/assets/coll3gd.webp",
      silverImg: "src/assets/coll3ds.png",
      hoverGold: "src/assets/coll3gh.webp",
      hoverSilver: "src/assets/collhs.webp",
      selectedColor: "silver",
    },
    {
      id: 4,
      name: "Elseworth Necklace in Gold",
      price: 135,
      goldImg: "src/assets/coll4gd.png",
      silverImg: "src/assets/coll4ds.webp",
      hoverGold: "src/assets/coll4gh.webp",
      hoverSilver: "src/assets/coll4hs.webp",
      selectedColor: "gold",
    },
  ]);

  // Handle color change
  const handleColorChange = (id, color) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, selectedColor: color } : product
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen mt-10">
      {/* Left Side - Product Grid */}
      <div className="w-full md:w-1/2 p-6 grid grid-cols-2 gap-2">
        {products.map((product) => (
          <div key={product.id} className="p-4 text-center">
            <div className="relative w-full md:h-[50vh]">
              {/* Default Image (Changes based on selected color) */}
              <img
                src={
                  product.selectedColor === "gold"
                    ? product.goldImg
                    : product.silverImg
                }
                className="w-full h-full object-cover transition-opacity duration-300"
                alt={product.name}
              />

              {/* Hover Image (Appears on hover) */}
              <img
                src={
                  product.selectedColor === "gold"
                    ? product.hoverGold
                    : product.hoverSilver
                }
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                alt="Hover Image"
              />
            </div>

            {/* Product Name & Price */}
            <h2 className="text-md mt-2">{product.name}</h2>
            <p className="text-gray-500">${product.price}.00</p>

            {/* Color Selection Buttons */}
            <div className="mt-2 flex justify-center space-x-2">
              <button
                className={`w-4 h-4 bg-gray-400 border border-gray-600 rounded-full ${
                  product.selectedColor === "silver"
                    ? "ring-2 ring-gray-600"
                    : ""
                }`}
                onClick={() => handleColorChange(product.id, "silver")}
              ></button>
              <button
                className={`w-4 h-4 bg-yellow-500 border border-amber-600 rounded-full ${
                  product.selectedColor === "gold"
                    ? "ring-2 ring-yellow-600"
                    : ""
                }`}
                onClick={() => handleColorChange(product.id, "gold")}
              ></button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Background Image with Text */}
      <div
        className="w-full md:w-[105vh] md:h-[125vh] flex items-center justify-center text-center bg-cover bg-center text-white p-6 md:mt-10"
        style={{ backgroundImage: "url('src/assets/collectionbg.webp')" }}
      >
        <div>
          <h2 className="text-3xl font-bold">THE ESSENTIALS COLLECTION</h2>
          <p className="mt-2 text-lg">
            Recycled gold, AAA-grade gemstones, and ethically sourced diamonds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
