import React from "react";
import Header from "../../shared/Header/Header";
import GalleryHeader from "../../assets/gallery5.jpg";
import AllGallery from "../../component/AllGallery/AllGallery";

const Gallery = () => {
  return (
    <>
      <Header
        imgPath={GalleryHeader}
        firstContent="PROPERTY GALLERY"
        secondContent="VIEW PHOTOS OF THE PROPERTY"
      />
      <AllGallery />
    </>
  );
};

export default Gallery;
