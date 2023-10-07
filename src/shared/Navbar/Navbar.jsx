import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../../data/Data";
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const [fixedNav, setFixedNav] = useState(false);


  useEffect(() =>{
    const handleFixedNav = () =>{
      if(window.scrollY >=300){
        setFixedNav(true);
      }else{
        setFixedNav(false)
      }
    }

    window.addEventListener("scroll", handleFixedNav)
  }, []);

  useEffect(() =>{
    const handleOutSideNav = () =>{
      setIsNavShowing(false);
    }

    document.addEventListener("mousedown", handleOutSideNav);
    
  }, []);

  const handleNavMenu = () =>{
    setIsNavShowing((prev) => !prev);
  };



  return (
    <nav className={fixedNav ? "nav fixed" : "nav"}>
      <div className="container">
        <div className="nav__container">
          <div className="logo-section">
            <NavLink to="/" className="logo">
              Solus Real Estate
            </NavLink>
          </div>

          <ul className={`nav__menu ${isNavShowing && "show"}`}>
            {navData &&
              navData?.map((curElem) => {
                // console.log(curElem);
                return (
                  <li key={curElem.id}>
                    <NavLink
                      to={curElem.path}
                      className={({ isActive }) =>
                        isActive ? "active__nav" : ""
                      }
                    >
                      {curElem.title}
                    </NavLink>
                  </li>
                );
              })}
          </ul>

          <div className="menu__icon" onClick={handleNavMenu}>
              {
                isNavShowing ? <AiOutlineClose /> : <RiMenu4Line />
              }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
