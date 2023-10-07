import React from 'react'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { BsLinkedin } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer__bg'>
      <div className="container">
        <div className="copy__right">
          <p>© ALL RIGHTS RESERVED. SOLUS SOHEL'S CREATION.</p>
        </div>
        <div className="social__link">
          <span><AiFillFacebook /></span>
          <span><PiInstagramLogoFill /></span>
          <span><AiFillGithub /></span>
          <span><BsLinkedin /></span>
        </div>
      </div>
    </section>
  )
}

export default Footer