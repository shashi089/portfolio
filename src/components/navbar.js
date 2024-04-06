import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    // heading error on page referesh
    var header = sessionStorage.getItem("nav_header");
    header ? setHeading(header) : setHeading("About");
  }, [setHeading]);

  const handleSetHeading = (header) => {
    sessionStorage.setItem("nav_header", header);
    setHeading(header);
  };

  var navbarVariants = {
    initial: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3, type: "spring" },
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbarVariants}
      initial="initial"
      animate="visible"
    >
      <div className="nav_heading">{heading}</div>
      <div className="navItems">
        {heading !== "About" && (
          <Link to="/">
            <div
              className="about navItem"
              onClick={() => handleSetHeading("About")}
            >
              About
            </div>
          </Link>
        )}
        {/* {heading !== "Projects" && (
          <Link to="/projects">
            <div
              className="projects navItem"
              onClick={() => handleSetHeading("Projects")}
            >
              Projects
            </div>
          </Link>
        )} */}
        {heading !== "Resume" && (
          <Link to="/resume">
            {" "}
            <div
              className="resume navItem"
              onClick={() => handleSetHeading("Resume")}
            >
              Resume
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
