import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "../../assets/profile.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMobileAlt } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";

import "./ListeningAgent.css";

const ListeningAgent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rff80pn",
        "template_5de82u9",
        form.current,
        "9p-U8biJ2oDXw8QQJ"
      ).then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully submitted!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="listenAgent"> 
      <div className="container listeningAgent__container">
        <div className="getTouch">
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="heading">LET'S GET IN TOUCH</h1>
            <p className="sub__heading">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <input type="text" name="user_name" placeholder="Your Name" />
            <input type="email" name="user_email" placeholder="Your Email" />
            <input type="tel" name="user_tel" placeholder="Your Phone" />
            <textarea name="message" placeholder="Your Message" />
            <input type="submit" value="Send" className="btn" />
            <ToastContainer />
          </form>
        </div>

        <div className="listening__card">
          <h1 className="heading">LISTING AGENT</h1>
          <div className="avater">
            <img src={Profile} alt="" />
            <div>
              <h3>Jane Doe</h3>
              <p>REAL ESTATE GROUP</p>
            </div>
          </div>

          <span>
            <MdEmail className="social__icon" />
            jane.doe@website.com
          </span>
          <span>
            <FaPhoneAlt className="social__icon" />
            (800) 123-4567
          </span>
          <span>
            <BiMobileAlt className="social__icon" />
            (800) 123-4568
          </span>
          <span>
            <AiOutlineGlobal className="social__icon" />
            http://real-estate.com
          </span>

          <div className="social__link">
            <span>
              <AiFillFacebook />
            </span>
            <span>
              <PiInstagramLogoFill />
            </span>
            <span>
              <AiFillGithub />
            </span>
            <span>
              <BsLinkedin />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListeningAgent;
