import React from "react";
import { PropertGalleryData } from "../../data/Data";
import GalleryCard from "../../helper/GalleryCard/GalleryCard";

import "./AllGallery.css";

const AllGallery = () => {
  return (
    <section>
      <div className="container allgallery__container">
        {PropertGalleryData &&
          PropertGalleryData?.map((curElem) => {
            const { id, type } = curElem;
            if (type === "Image") {
              return <GalleryCard key={id} {...curElem} />;
            }
          })}
      </div>
    </section>
  );
};

export default AllGallery;
