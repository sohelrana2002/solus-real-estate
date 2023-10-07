import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./GalleryCard.css";

const GalleryCard = ({ path, title, type }) => {
  const [popupGallery, setPopupGarrlery] = useState(null);
  const [titleHover, setTitleHover] = useState(false)
  return (
    <div className="gallery__card">
      <div className="card" onClick={() => type === "Image" && setPopupGarrlery(path)}>
        {
            type === "Image" ? <img src={path} alt="" /> : <iframe src={path} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" />
        }
        <span>{title}</span>
      </div>

      <div className={`gallery__popup ${popupGallery && "show__popup"}`}>
        <AiOutlineClose
          className="popup__icon"
          onClick={() => setPopupGarrlery(null)}
        />
        {
            type === "Image" && <img src={popupGallery} alt="" /> 
        }
      </div>
    </div>
  );
};

export default GalleryCard;
