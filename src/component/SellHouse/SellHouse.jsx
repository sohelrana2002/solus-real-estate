import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import "./SellHouse.css";

const SellHouse = () => {
  return (
    <section>
      <div className="container sellhouse__container">
        <h1 className="heading">SELL YOUR HOUSE FAST WITH SOLUS!</h1>
        <p className="sub__heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="sellhouse__button">
          <NavLink to="/solus-real-estate/contact" className="btn">
            <BsFillHouseFill />
            GET DIRECTIONS
          </NavLink>

          <NavLink to="/solus-real-estate/contact" className="btn">
            <BiSolidUser />
            CONTACT AGENT
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SellHouse;
