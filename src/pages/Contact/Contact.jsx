import React from "react";
import Header from "../../shared/Header/Header";
import ContactHeader from "../../assets/smaple-slider-4.jpg";
import ListeningAgent from "../../component/ListeningAgent/ListeningAgent";

const Contact = () => {
  return (
    <>
      <Header
        imgPath={ContactHeader}
        firstContent="CONTACT AGENT"
        secondContent="SCHEDULE A SHOWING WITH SOLUS"
      />
      <ListeningAgent />
    </>
  );
};

export default Contact;
