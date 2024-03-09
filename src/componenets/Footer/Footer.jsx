import React from 'react';
import './Footer.css'; // Import your CSS file
import { Link } from "react-router-dom"
import { AiOutlineInstagram } from "react-icons/ai"
import { CiFacebook } from "react-icons/ci"
import { CiLinkedin } from 'react-icons/ci';
const Footer = () => {
  return (
    <div >
      <div className="footer">
        <div className="footer-v">
          <h3>Sign Up for Newsletter & Promotions!</h3>
          <h2>Get 25% Discount</h2>
          <h2>On Your Next Purchase</h2>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"

            />
            <button className="subscribe-button">GET Started</button>

          </div>
        </div>
      </div>
      <ul className='footer-ui'>
        <Link to="/">
          <li className='logo'><span>Shop <br /> <b>Digital</b></span></li>
        </Link>
        <ul className='ul-1'>
          <h1>Visit Link</h1>
          <li>Shop</li>
          <li>Privacy</li>
          <li>Terms and codition</li>
        </ul>
        <ul className='ul-1'>
          <h1>Company</h1>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul className='ul-1'>
          <h1>Contact</h1>
          <li>+99 (0) 101 0000 888</li>
          <li>Info@yourdomain.com</li>

        </ul>
        <ul className='ul-1'>
          <h1>Adrress</h1>
          <li>Patricia Amedee 4401 Waldeck</li>
          <li>Street Grapevine Nashville, Tx<br /> 76051</li>

        </ul>
      </ul>
      <div className="horizontal-line"></div>
      <div className="line">
        <h3>© 2023 By Averta. All rights reserved.</h3>
        <ul className='footer-icon'>
          <li><AiOutlineInstagram /></li>
          <li><CiFacebook /></li>
          <li><CiLinkedin /></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
