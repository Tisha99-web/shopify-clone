import React from "react";
import Announcement from "../components/Announcement";
import Hero from "../components/Hero";
import ShopSection from "../components/ShopSection";

const HomePage = () => {
  return (
    <div>
      <Announcement />  {/* New Customer Offer */}
      {/* <Feature />  */}     {/* Theme Features, Blog, FAQ */}
      {/* <Navbar />  */}        
      {/* <HeroSection /> */}    {/* Main Banner with Image & Buttons */}
      <Hero />                 {/* combine all three in one -feature,navbar,herosection */}
      
    </div>
  );
};

export default HomePage;
