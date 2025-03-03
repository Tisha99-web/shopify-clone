import { useState, useEffect } from "react";

const categories = [
  { title: "RINGS", count: 14, image: "src/assets/rings1.jpg" },
  { title: "BESTSELLERS", count: 95, image: "src/assets/hair.jpg" },
  { title: "NECKLACES", count: 27, image: "src/assets/necklaces.jpg" },
  { title: "EARRINGS", count: 47, image: "src/assets/earring.jpg" },
  { title: "BRACELETS", count: 6, image: "src/assets/bracelets.webp" }, // Last item centered
];

const CategoryShowcase = () => {
  const [selectedBg, setSelectedBg] = useState(categories[0].image);
  const [hoverBg, setHoverBg] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".category-section");
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          activeIndex = index;
        }
      });
      
      setActiveIndex(activeIndex);
    };

   
  }, []);

  return (
    <div
      className="w-full  h-100px lg:h-[700px] bg-cover bg-center flex flex-col items-center justify-center  text-white  transition-all duration-500 relative  mt-15"
      style={{ backgroundImage: `url("${hoverBg || selectedBg}")` }} >
      {/* Categories Wrapper */}
      <div className="relative  flex flex-col lg:space-y-15  text-5xl font-bold">
        {/* First 4 Items in One Row */}
        <div className="flex lg:space-x-5">
          {categories.slice(0, 4).map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer transition duration-500 px-4 py-2 hidden lg:block ${
                selectedBg === category.image ? "text-white" : "text-white"
              }`}
              style={{
                opacity: 0.8, // Slightly dim by default
              }}
              onMouseEnter={() => setHoverBg(category.image)}
              onMouseLeave={() => setHoverBg(null)}
              onClick={() => setSelectedBg(category.image)}
            >
              {category.title}
              <sup className="text-3xl">{category.count}</sup>
            </div>
          ))}
        </div>

        {/* Last Item (Centered Below) */}
        <div className="flex justify-center">
          <div
            className={`cursor-pointer transition duration-500 px-4 py-2  hidden lg:flex ${
              selectedBg === categories[4].image ? "text-white" : "text-white"
            }`}
            style={{
              opacity: 0.8, // Slightly dim by default
            }}
            onMouseEnter={() => setHoverBg(categories[4].image)}
            onMouseLeave={() => setHoverBg(null)}
            onClick={() => setSelectedBg(categories[4].image)}
          >
            {categories[4].title}
            <sup className="text-3xl">{categories[4].count}</sup>
          </div>
        </div>
      </div>

      {/*  mobile view */}

      <div className="lg:hidden w-full relative h-screen">
        {/* Scrollable Background Images */}
        <div className="absolute inset-0 w-full h-full overflow-y-scroll">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-full h-100 bg-cover bg-center"
              style={{ backgroundImage: `url("${category.image}")` }}
            ></div>
          ))}
        </div>

        {/* Fixed Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center w-full px-6 pointer-events-none">
          <div className="space-y-9">
            {categories.map((item, i) => (
              <h1
                key={i}
                className="text-5xl font-bold transition duration-300"
                style={{
                  opacity: 0.8, // Slightly dim by default
                }}
              >
                {item.title}{" "}
                <sup className="text-4xl  font-bold">{item.count}</sup>
              </h1>
            ))}
          </div>
        </div>
      </div>
      
           
    </div>
    
  );
};

export default CategoryShowcase;
