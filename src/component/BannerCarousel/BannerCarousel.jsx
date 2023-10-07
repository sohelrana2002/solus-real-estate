import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BannerCarouselData } from "../../data/Data";
import { NavLink } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

import "./BannerCarousel.css";
const BannerCarousel = () => {
  return (
    <div className="banner__carousel">
      <Navbar />

      <Carousel
        showArrows={false}
        infiniteLoop={true}
        interval={4000}
        transitionTime={1000}
        autoPlay={true}
        stopOnHover={true}
        emulateTouch={true}
        swipeable={false}
        showStatus={false}
        showThumbs={false}
      >
        {BannerCarouselData &&
          BannerCarouselData?.map(({ id, imgPath }) => {
            const bacgroundImage = {
              width: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${imgPath})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100vh",
              backgroundRepeat: "noRepeat",
            };

            return (
              <div
                key={id}
                className="heroSection__container"
                style={bacgroundImage}
              ></div>
            );
          })}
      </Carousel>

      <div className="container">
        <div className="banner__content">
          <div className="banner__subContent">
            <h2 className="heading">
              6948 VISTA DEL MAR LANE PLAYA DEL REY CA 90293
            </h2>
            <h2 className="heading">$1,799,000</h2>
            <p className="subHeading">4 BEDROOMS 3 BATHROOMS</p>
            <p className="subHeading">3 CAR PARKING 2500 SQ FT</p>
          </div>

            <NavLink to='/solus-real-estate/contact' className="btn">SCHEDULE A SHOWING</NavLink>
        </div>
      </div>


    </div>
  );
};

export default BannerCarousel;
