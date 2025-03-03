import React from "react";

const HeroSection = () => {
  return (
    <div className=" w-screen  h-[500px] bg-cover bg-center  "
         style={{ backgroundImage: "url('src/assets/broadcast-hero.webp')" }}>
    
      {/* Content */}
      <div className="absolute bottom-20  text-white  px-10">
        <h1 className="text-4xl font-bold mb-5">EVERYDAY LUXURY</h1>
        <p className="mt-2 text-lg mb-8">Beautiful pieces to pass down for generations</p>
        
        <div className="mt-4 space-x-4 ">
          <button className="bg-black text-white px-5 py-3">SHOP ALL PRODUCTS</button>
          <button className="bg-white text-black px-3 py-3 ">SHOP SALE</button>
        </div>
      </div>
    </div>
    
  );
};

export default HeroSection;
