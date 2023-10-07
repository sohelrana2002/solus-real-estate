import React from "react";
import Header from "../../shared/Header/Header";
import VideoGallery from "../../assets/smaple-slider-3.jpg";
import AllVideo from "../../component/AllVideo/AllVideo";

const VideoTour = () => {
  return (
    <>
      <Header
        imgPath={VideoGallery}
        firstContent="VIDEO TOUR"
        secondContent="GET A 3D TOUR OF THE ENTIRE HOUSE"
      />
      <AllVideo />
    </>
  );
};

export default VideoTour;
