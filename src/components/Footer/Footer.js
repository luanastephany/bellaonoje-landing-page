import React from 'react'
import './Footer.scss'
import { FaTwitter, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      <div className="footer-mobile">

        <div className="icons-mobile">
          <FaTwitter size={30} />
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
        </div>
        <div className="slogan">Just type what's on your mind and we'll do it </div>
      </div>


      <div className="footer-desktop">

        <img className="logo-desktop" src="/img/logo.png" alt="" />

        <div className="icons-desktop">
          <FaTwitter size={30} />
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
        </div>

        <p className="copy-desktop">Copywright 2020 Bella Olonje.com</p>

      </div>



    </>
  )
}

export default Footer
