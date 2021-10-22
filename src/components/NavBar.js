import React, { useState } from "react";

const NavBar = () => {
  //    state variable to keep track of the active nav menu item clicked
  // here about is the starting initial value we start off as  ona default first render state
  const [active, setActive] = useState("About");

  // the setActive (reducer) takes on different values each time a nav menu item is clicked
  return (
    <div className="navbar">
      
      {/* keeping dynamic track of what's the actively highlighted section from the nav bar menu */}
      <div className="navbar_active"> {active} </div>
      <div className="navbar-menu">
        
        {/* to avoid duplication of an item in the menu checking if its clicked and dynamically updating the active placeholder state about to reflect the name of the page clicked on and removing it from the nav menu list  */}
        {/* 2 ways of writing the same conditional statement that checks for not highlighted (active) items in the nav menu */}
        {active !== "About" && (
          <div className="navbar-menu-item" onclick={() => setActive("About")}>
            About
          </div>
        )}
        {active !== "Skills" ? (
          <div className="navbar-menu-item" onclick={() => setActive("Skills")}>
            Skills
          </div>
        ) : null}
        {active !== "Projects" ? (
          <div
            className="navbar-menu-item"
            onclick={() => setActive("Projects")}
          >
            Projects
          </div>
        ) : null}
        {active !== "Resume" ? (
          <div className="navbar-menu-item" onclick={() => setActive("Resume")}>
            Resume
          </div>
        ) : null}
        
        {active !== "Contact" ? (
          <div
            className="navbar-menu-item"
            onclick={() => setActive("Contact")}
          >
            Contact
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
