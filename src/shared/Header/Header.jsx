import React from "react";
import './Header.css'
import Navbar from "../Navbar/Navbar";

const Header = ({ imgPath, firstContent, secondContent }) => {
  return (
    <div
      className="header__container"
      style={{
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${imgPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
      }}
    >
      {/* <Navbar /> */}
      <div className="container">
        <div className="header__content" >
          <h1 className="heading">{firstContent}</h1>
          <h3 className="sub__heading">{secondContent}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
