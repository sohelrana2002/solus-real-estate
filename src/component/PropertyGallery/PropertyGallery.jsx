import { useState } from "react";
import { PropertGalleryData } from "../../data/Data";
import GalleryCard from "../../helper/GalleryCard/GalleryCard";
import "./PropertyGallery.css";
import { NavLink } from "react-router-dom";

const PropertyGallery = () => {

  return (
    <section>
      <div className="container propertyGallery__container">
        <div className="heading">TOP GALLERY</div>

        <div className="gallery__content">
          {
            PropertGalleryData && PropertGalleryData?.map((curElem) =>{
              const {id, feature} = curElem;
              if(feature === true){
                return(
                  <GalleryCard key={id} {...curElem} />
                )
              }
            })
          }
        </div>
        <div className="gallery__button">
        <NavLink to="/gallery" className="btn">
            see more
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
