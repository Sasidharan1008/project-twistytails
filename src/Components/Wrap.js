import React from 'react';
import { MdPhoneIphone , MdEmail ,MdFacebook } from "react-icons/md";
import { BsTwitter , BsInstagram } from "react-icons/bs";
import Styles from "./NavBar.module.css";


function Wrap() {
  return (
    <div className={Styles.wrap}>
        <div className={Styles.contact}>
            <div className={Styles.ph}>
                <MdPhoneIphone />
                <span> +91 9876543210</span>
            </div>
            <div className={Styles.em}>
                < MdEmail />
                <span>dog@gmail.com</span>
            </div>
        </div>
        <div className={Styles.social}>
            <MdFacebook />
            <BsInstagram />
            <BsTwitter />
        </div>
    </div>
  )
}

export default Wrap