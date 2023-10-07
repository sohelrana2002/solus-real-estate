import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCalendarDayFill } from "react-icons/bs";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="getintouch__bg">
      <div className="getintouch__container">
        <div className="container touch__sub__container">
          <h1 className="heading">INTERESTED IN A SHOWING?</h1>
          <p className="sub__heading">
            Get in touch with us if you would like to schedule a showing.
          </p>
          <NavLink to='/contact' className="btn"><BsFillCalendarDayFill />SCHEDULE A SHOWING</NavLink>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
