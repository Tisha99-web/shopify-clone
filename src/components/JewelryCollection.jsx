import React from "react";

const JewelryCollection = () => {
  const collections = [
    {
      image: "src/assets/image1.webp",
      title: "THE ESSENTIALS COLLECTION",
      description:
        "Our signature pieces designed to be worn everyday with subtle details in contemporary shapes.",
      linkText: "SHOP CLASSICS",
    },
    {
      image: "src/assets/image2.webp",
      title: "MODERN STATEMENT",
      description:
        "Timeless and wearable earrings with a modern twist that add a touch of style to any outfit.",
      linkText: "SHOP EARRINGS",
    },
    {
      image: "src/assets/image3.webp",
      title: "MADE-TO-ORDER JEWELRY",
      description:
        "Handmade pieces that are carefully crafted to ensure that you'll love for a lifetime.",
      linkText: "SHOP NOW",
    },
  ];

  return (
    <div className="w-full px-6 md:px-5 py-10">
      {/* Grid container for different screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Responsive Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover "
            />
            <div className="mt-4 px-3 py-4 text-left ">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-5">{item.description}</p>
              <a
                href="#"
                className="text-black flex  sm:justify-start group"
              >
                {item.linkText}{" "}
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryCollection;
