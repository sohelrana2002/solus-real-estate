import React from "react";
import BannerCarousel from "../../component/BannerCarousel/BannerCarousel";
import SellHouse from "../../component/SellHouse/SellHouse";
import HomeDetails from "../../component/HomeDetails/HomeDetails";
import PropertyGallery from "../../component/PropertyGallery/PropertyGallery";
import Location from "../../component/Location/Location";

const Home = () => {
  return (
    <>
      <BannerCarousel />
      <SellHouse />
      <HomeDetails />
      <PropertyGallery />
      <Location />
    </>
  );
};

export default Home;
