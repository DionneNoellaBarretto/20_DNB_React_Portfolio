import React, { useState, useEffect } from "react";
// importing link from react router dom to define routes when nav menu items are clicked
import { Link } from "react-router-dom";
// for animation aesthetics
import { motion } from "framer-motion";

const NavBar = () => {
  //    state variable to keep track of the active nav menu item clicked
  // here about is the starting initial value we start off as  ona default first render state
  const [active, setActive] = useState("");
  useEffect(() => {
    let currentURL = window.location.href;
    // console.log(currentURL);
    if (currentURL.endsWith("/about")) {
      setActive("About");
    } else if (currentURL.endsWith("/resume")) {
      setActive("Resume");
    } else if (currentURL.endsWith("/projects")) {
      setActive("Projects");
    } else if (currentURL.endsWith("/contact")) {
      setActive("Contact");
    }
  }, [active]);

  const navbar_variant = {
    hidden: {
      y: "-20vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        delay:0.2,
        duration:0.7,
        type:'spring'
      }
    },
  };

  // the setActive (reducer) takes on different values each time a nav menu item is clicked
  return (
    // converts the div to a motion enabled div https://www.framer.com/docs/animation/
    <motion.div
      className="navbar"
      // accessing properties of motion
      variants={navbar_variant}
      // holds current state
      initial="hidden"
      // holds future state
      animate="visible"
    >
      {/* keeping dynamic track of what's the actively highlighted section from the nav bar menu */}
      <div className="navbar_active"> {active} </div>
      <div className="navbar-menu">
        {/* to avoid duplication of an item in the menu checking if its clicked and dynamically updating the active placeholder state about to reflect the name of the page clicked on and removing it from the nav menu list  */}
        {/* 2 ways of writing the same conditional statement that checks for not highlighted (active) items in the nav menu */}
        {active !== "About" && (
          /* using the link property from react-router-dom imported lib to route each of this nav menu items to their corresponding url */
          <Link to="/about">
            <div
              className="navbar-menu-item"
              onClick={() => setActive("About")}
            >
              About
            </div>
          </Link>
        )}

        {active !== "Projects" && (
          <Link to="/projects">
            <div
              className="navbar-menu-item"
              onClick={() => setActive("Projects")}
            >
              Projects
            </div>
          </Link>
        )}

        {active !== "Landing" && (
          <Link to="/">
            <div
              className="navbar-menu-item"
              onClick={() => setActive("Landing Page")}
            >
              Landing Page
            </div>
          </Link>
        )}

        {active !== "Resume" && (
          <Link to="/resume">
            <div
              className="navbar-menu-item"
              onClick={() => setActive("Resume")}
            >
              Resume
            </div>
          </Link>
        )}

        {active !== "Contact" && (
          <Link to="/contact">
            <div
              className="navbar-menu-item"
              onClick={() => setActive("Contact")}
            >
              Contact
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;
