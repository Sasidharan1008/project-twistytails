import React from 'react';
import Styles from "./Footer.module.css";
import { FaPhone } from "react-icons/fa";
import  { BsPinMapFill , BsSendFill} from "react-icons/bs";
import {MdEmail }  from "react-icons/md"; 

function Footer() {
  return (
    <div className={Styles.footer}>
        <div>
            <h2>Quick Links</h2>
            <div>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
        </div>
        <div>
            <h2>Have a Questions?</h2>
            <div>
                <div className={Styles.container}>
                    <BsPinMapFill color='00bd56' />
                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>
                <div className={Styles.container}>
                    < FaPhone color='00bd56'/>
                    <p>+2 392 3929 210</p>
                </div>
                <div className={Styles.container}>
                    <MdEmail color='00bd56'/>
                    <p>dog@gmail.com</p>
                </div>
            </div>
        </div>
        <div>
            <h2>Subscribe newsletter</h2>
            <p>Subscribe our newsletter to get updates about our services and offers.</p>
            <div className={Styles.input}>
            <input className={Styles.subscribe} type='text' placeholder='Enter your Email' />
            <BsSendFill className={Styles.send}  color='#fff'/>
            </div>
        </div>
    </div>
  )
}

export default Footer