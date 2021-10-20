import React from "react";
// importing each image component
import dnb from '../assets/dnb.jpg';
import Google from '../assets/Google.gif';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.png';
import qwiklabs from '../assets/icons/qwiklabs.png';
import fcc from '../assets/icons/fcc.png';
import codecademy from '../assets/icons/codecademy.svg';
import leetcode from '../assets/icons/leetcode.png';
import tie from '../assets/icons/tie.svg';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src={dnb}
        alt="DNB Profile Pic"
        className="sidebar_Img"
      />
      <div className="sidebar_name">

        Dionne Noella <span> Barretto</span>
      </div>
      <div className="sidebar_title"> Senior Solutions Consultant @ <img
        src={Google}
        alt="Google Gif"
        className="sidebar_Img"
      /> </div>
      <a href="http://">
        <div className="sidebar_resume">
          <img src={tie} alt="Resume" className="sidebar_icon" />{" "}
          Download Resume
        </div>
      </a>
      <figure className="sidebar_social-icons">
        <a href="http://" rel="noopener noreferrer" target="_blank">
          <img src={qwiklabs} alt="qwiklabs" className="sidebar_icon" />
        </a>
        <a href="http://" rel="noopener noreferrer" target="_blank">
          <img src={codecademy} alt="codecademy" className="sidebar_icon" />
        </a>
        <a href="http://" rel="noopener noreferrer" target="_blank">
        <img src={fcc} alt="freecodecamp" className="sidebar_icon" />
        </a>
        <a href="http://" rel="noopener noreferrer" target="_blank">
          <img src={leetcode} alt="leetcode" className="sidebar_icon" />
        </a>
        {/* <a href="http://" rel="noopener noreferrer" target="_blank">
          <img src="" alt="" className="sidebar_icon" />
        </a> */}
      </figure>
      <div classname="contact">
        <div className="sidebar_items">
          <a href="http://" rel="noopener noreferrer" target="_blank">
            <img src={linkedin} alt="linkedin" className="sidebar_icon" /> LinkedIn
          </a>
          <a href="http://" rel="noopener noreferrer" target="_blank">
            <img src={github} alt="github" className="sidebar_icon" /> Github
          </a>
          <a href="http://" rel="noopener noreferrer" target="_blank">
            <img src="" alt="calendar" className="sidebar_icon" /> Calendar
          </a>
          <a href="http://" rel="noopener noreferrer" target="_blank">
            <img src="" alt="phone#" className="sidebar_icon" /> Phone #
          </a>
          <a href="http://" rel="noopener noreferrer" target="_blank">
            <img src="" alt="emailID" className="sidebar_icon" /> Email
          </a>
        </div>
      </div>
    </div>
  );
}
