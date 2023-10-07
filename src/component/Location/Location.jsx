import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./Location.css";

const Location = () => {
  return (
    <section className="location__bg">
      <div className="container location__container">
        <div className="location__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993065376!2d90.25487585211849!3d23.781067236602905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1695816225862!5m2!1sen!2sbd"
            max-width="600"
            width="100%"
            max-height="500"
            height="100%"
            style={{
              border: 0,
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "noReferrerWhenDowngrade",
              borderRadius: '1rem',
            }}
          ></iframe>
        </div>
        <div className="property__location">
          <h1 className="heading">PROPERTY LOCATION</h1>
          <p className="sub__heading">
            Lorem ipsum turpis enim, suscipit ut ultricies ut, egestas sit amet
            orci. Aliquam vitae felis elementum, tempor tortor sit amet,
            malesuada mi.
          </p>

          <span>
            <FaLocationArrow /> 435 Wandering Ct. Sonoma, CA 93632
          </span>
          <span>
            <FaPhone /> (800) 123-4567
          </span>
          <span>
            <MdEmail /> contact@your-site.com
          </span>

          <NavLink to="/contact" className="btn">
            <FaLocationArrow />
            GET DIRECTIONS
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Location;
