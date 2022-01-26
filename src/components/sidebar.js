import React from "react";

import tie from "../images/tie.svg";

import max from "../images/profile.jpg";
import location from "../icons/location.png";
import github from "../icons/github.svg";
// import resume from "../resume/resume.pdf";
import gmail from "../icons/gmail.png";
import call from "../icons/call.png";
import linkedin from "../icons/linkedin.svg";
import { motion } from "framer-motion";
const SideBar = () => {
  var sidebarVariants = {
    initial: {
      x: "-10vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5, type: "spring" },
    },
  };
  const handleSentEmail = () => window.open("mailto:shashidharnaik8@gmail.com");

  return (
    <motion.div
      className="sideBar_custom"
      variants={sidebarVariants}
      initial="initial"
      animate="visible"
    >
      <img src={max} alt="avatar" className="rounded-circle image_custom" />
      <h3 className="name">
        <span>Shashidhar</span> Naik
      </h3>
      <div className="title bg-gray side_item">Web Developer</div>
      <a
        href="https://drive.google.com/file/d/1CUJiVb6ONtm0buwV-CHSnBao4XMCBirg/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <div className="cv side_item">
          <img src={tie} alt="resume" className="icon_small" /> Download resume
        </div>
      </a>
      <figure className="social_icons">
        <a
          href="https://www.linkedin.com/in/shashidhar-naik-aab5b512a/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
          <img src={linkedin} alt="linkedin" className=" social_icon" />
        </a>
      </figure>
      <div className="contact">
        <div className="location side_item">
          <img src={location} alt="pin" className="icon_small  mr-1" />
          Hukkeri,Karnataka
        </div>
        <a href="https://github.com/shashi089" target="_blank" rel="noreferrer">
          <div className="github side_item">
            <img
              src={github}
              alt="git"
              className="icon_small social_icon mr-1"
            />
            github
          </div>
        </a>
        <div className="email_id side_item">
          <img src={gmail} alt="" /> shashidharnaik8@gmail.com
        </div>
        <div className="phone side_item">
          <img src={call} alt="" /> 7406906078
        </div>
      </div>

      <div className="email side_item mt-6" onClick={handleSentEmail}>
        Email me
      </div>
      {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
    </motion.div>
  );
};

export default SideBar;
