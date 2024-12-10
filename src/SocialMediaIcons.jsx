import React from 'react'
import  './socialMediaIcons.css'
import {  FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedin,TiSocialFacebook } from "react-icons/ti";
import SocialMediaICon from './SocialMediaICon';


function SocialMediaIcons() {
  return (
    <div className='text-3xl flex space-x-8  '>
        <SocialMediaICon to={'www.linkedin.com/in/anjali-p-a789ab227'} ><TiSocialLinkedin></TiSocialLinkedin></SocialMediaICon>
        <SocialMediaICon><FaWhatsapp ></FaWhatsapp></SocialMediaICon>
        <SocialMediaICon to={'https://www.instagram.com/anjalipanwar2093/'}><FaInstagram /></SocialMediaICon>
        <SocialMediaICon><TiSocialFacebook /></SocialMediaICon>
       

    </div>
  );
}

export default SocialMediaIcons