import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen px-5">
      <nav className="flex justify-between items-center py-3">
        {/* Left Side - Hamburger + Search (Mobile Only) */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars text-white text-xl"></i>
          </button>
          {/* ✅ Mobile Search Icon (ONLY visible on small screens) */}
          <i className="fa-solid   fa-magnifying-glass text-white text-xl"></i>
        </div>

        {/* Left Side - Links (Large Screens Only) */}
        <div className="hidden md:flex gap-6 text-sm ml-5 underline-offset-4">
          <a href="#" className="text-white hover:underline decoration-black">Shop</a>
          <a href="#" className="hover:underline decoration-red-500 text-red-500">Sale</a>
          <a href="#" className="text-white hover:underline decoration-white">About</a>
        </div>

        {/* Center - Logo */}
        <h1 className="text-3xl  font-serif text-white">Broadcast</h1>

        {/* Right Side - Icons */}
        <div className="flex gap-8 text-white pr-6">
          {/* ❌ FIX: Hide search icon on mobile (right side)
          <i className="hidden md:inline fa-solid fa-magnifying-glass"></i>  */}

          {/* User & Bag Icons (Always Visible) */}
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-black py-4">
          <a href="#" className="py-2">Shop</a>
          <a href="#" className="py-2">Featured</a>
          <a href="#" className="py-2">About</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
