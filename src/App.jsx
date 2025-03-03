import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ShopSection from "./components/ShopSection";
import JewelryCollection from "./components/JewelryCollection";
import MarqueeText from "./components/MarqueeText";
import JewelryShowcase from "./components/JewelryShowcase";
import Bottomscroller from "./components/Bottomscroller";
import ProductSection from "./components/Productsection";
import Ethical from "./components/Ethical";
import Pieces from "./components/Pieces";
import Categoory from  "./components/Category";
import Shopthelook from "./components/Shopthelook";
import Sale from "./components/Sale";
import JewelryGallery from "./components/JeweleryGallery";
import Footer from "./components/Footer";
import CommitmentSection from "./components/Commitments";
import Collection from "./components/Collection";



function App() {
  const reviews1 = [
    "EVERY PIECE.",
    <b>allure</b>,
    "SETTING A NEW STANDARD IN CHIC, MODERN JEWELRY.",
    <b>VOGUE</b>,
    "EXQUISITE CRAFTSMANSHIP MEETS SUSTAINABLE",
    "Impeccable design meets unmatched quality in",
    <b>allure</b>,
    "SETTING A NEW STANDARD IN CHIC, MODERN JEWELRY.",
    <b>VOGUE</b>,
    "EXQUISITE CRAFTSMANSHIP MEETS SUSTAINABLE LUXURY",
  ];
  const items = [
    "TIMELESS PIECES TO TREASURE FOREVER",
    "ETHICAL SOURCING AND MANUFACTURING",
    "SUSTAINABLE HEIRLOOMS","TIMELESS PIECES TO TREASURE FOREVER",
    "ETHICAL SOURCING AND MANUFACTURING",
    "SUSTAINABLE HEIRLOOMS",
  ];
  

  return (
    <div>
      <HomePage />
      <ShopSection />
      <JewelryCollection />
      <MarqueeText items={reviews1} />
      <JewelryShowcase />
      <Bottomscroller items={items} />
      <Pieces />
      <ProductSection />
      <Ethical />
      <Categoory />
      <Bottomscroller items={items} />
      <Shopthelook />
      <Collection/>
      <Sale />
      <CommitmentSection/>
      <JewelryGallery />
      <Footer/>
      
    </div>
  );
}

export default App;
