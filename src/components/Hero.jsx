import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="w-screen h-[650px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('src/assets/broadcast-hero.webp')" }} // Update path if needed
    >
      {/* Feature Section */}
      <nav className="justify-between items-center px-10 py-3.5 border-b text-white hidden sm:flex">
        <ul className="flex space-x-6 text-sm">
          <li>Theme Features</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>
        <div className="flex space-x-6">
        <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>

          <span className="[&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </span>
          <span>Gift Card</span>
          <span>English</span>
          <span>CAD $</span>
        </div>
      </nav>

      {/* Navbar Section */}
     <Navbar />

      {/* Hero Section */}
      <div className="absolute bottom-20 left-10 text-white md:left-10">
        <h1 className="text-4xl lg:text-[45px] font-bold mb-5">
          EVERYDAY LUXURY
        </h1>
        <p className="mt-2 text-lg mb-8">
          Beautiful pieces to pass down for generations
        </p>
        <div className="mt-4 space-x-4">
          <button className="bg-black text-white px-5 py-3">
            SHOP ALL PRODUCTS
          </button>
          <button className="bg-white text-black px-3 py-3">SHOP SALE</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
