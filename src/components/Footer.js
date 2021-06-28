import React, { Fragment } from "react";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import "./styles/Footer.css";

function Footer() {
  return (
    <Fragment>
      <div className='Footer container'>
        <nav>
          <ul className='Footer__Navbar'>
            <li>
              <a target='_blank' href='https://github.com/jeiffergarcia'>
                <img src={Github} alt='Github' />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/jeiffer-garcias-289032122/'>
                <img src={Linkedin} alt='Linkedin' />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.instagram.com/jeifferg/?hl=es-la'>
                <img src={Instagram} alt='Instagram' />
              </a>
            </li>
            <li>
              <a target='_blank' href='https://twitter.com/JheifferG'>
                <img src={Twitter} alt='Twitter' />
              </a>
            </li>
          </ul>
        </nav>
        <section className='Footer__copy'>
          <p>© JeifferGarcia 2021</p>
        </section>
      </div>
    </Fragment>
  );
}

export default Footer;
