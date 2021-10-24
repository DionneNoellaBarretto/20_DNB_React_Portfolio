import React from "react";
// importing each image component
// import dnb from "../assets/dnb.jpg";
import Gcloud from "../assets/icons/Gcloud.gif";
import cert from "../assets/icons/cert.png";
import pin from "../assets/icons/pin.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import qwiklabs from "../assets/icons/qwiklabs.png";
import fcc from "../assets/icons/fcc.png";
import codecademy from "../assets/icons/codecademy.svg";
import leetcode from "../assets/icons/leetcode.png";
import resume from "../assets/icons/resume.png";
import cal from "../assets/icons/cal.png";
import Google_Voice_icon from "../assets/icons/Google_Voice_icon.png";
import mail from "../assets/icons/mail.png";
import { motion } from "framer-motion";

export default function Sidebar() {
  // arrow function for emailing logic using local mailing client
  const EmailLogic = () => {
    window.open("mailto:dionnenoellabarretto.aw@gmail.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
     
    },
    visible: {
      x: "0",
      
      transition: {
        delay:0.1,
        duration:0.5,
        type:'spring'
      }
    },
  };


  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      {/* <img src={dnb} alt="DNB Profile Pic" className="" /> */}
      {/* replacing my profile image with a dev card that has my profile picture */}
      <a
        href="https://app.daily.dev/dnb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="sidebar_Img"
          title="Click to view my DailyDev Profile"
          src="https://api.daily.dev/devcards/2b2ffde3884c4d9d8b089e028c6d6e2b.png?r=si5"
          alt="Dionne Noella Barretto's Dev Card"
        />
      </a>
      <div>
        <strong className="sidebar_name">
          <span>D</span>ionne <span>N</span>oella <span> B</span>arretto
        </strong>
        <br />
        <a
          href="https://goo.gl/maps/giK32Dc7DojxcPs18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pin} alt="Map Location" className="sidebar_location" />
          Cary, NC
        </a>
      </div>
      <br />
      <div className="sidebar_title">
        <strong> Senior Solutions Consultant </strong>
        <a
          href="https://g.co/kgs/t8KRK8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Gcloud}
            alt="Google Cloud Gif"
            className="sidebar_company"
          />
        </a>
      </div>

      <hr />

      <div className="sidebar_contact">
        <div className="sidebar_items">
          <a
            href="https://www.linkedin.com/in/dionnenoellabarretto/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={linkedin}
              title="Click to connect via LinkedIn"
              alt="linkedin"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://github.com/DionneNoellaBarretto"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={github}
              alt="github"
              title="Click to view my Github Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.credly.com/users/dionne-noella-barretto/badges"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={cert}
              alt="Certificate"
              title="Click to view my Certifications"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://getcloud.withgoogle.com/schedule/dionnenoella?ln=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              title="Click 'Availability' to schedule time on my Calendar"
              src={cal}
              alt="calendar"
              className="sidebar_icon"
            />
          </a>
          <a
            href="mailto:dionnenoellabarretto.aw@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            onClick={EmailLogic}
          >
            <img
              title="Email Me (by clicking the email icon) using your local mailing client"
              src={mail}
              alt="emailID"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://voice.google.com/u/0/calls?a=nc,%2B[650-810-1459]"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={Google_Voice_icon}
              title="Click the phone icon to call me"
              alt="phone#"
              className="sidebar_icon"
            />
          </a>
        </div>

        <hr />
        {/* <a href={resume imported file link} download="pdf name"> */}
        {/* https://drive.google.com/file/d/17KEqXhudMuyKM6Xm4_3pMYCVjJFE-MiV/view?usp=sharinghttps://drive.google.com/file/d/17KEqXhudMuyKM6Xm4_3pMYCVjJFE-MiV/view?usp=sharing */}
        {/* redirecting to the resume tab */}
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          <div className="sidebar_resume">
            <img
              src={resume}
              alt="Resume"
              className=" sidebar_resume_icon"
              title="Click to view my Resume"
            />
            View my Resume
          </div>
        </a>
        <hr />
        <figure className="sidebar_social-icons">
          <a
            href="https://run.qwiklabs.com/public_profiles/30ee19d4-fd4a-4cf2-aea7-131d35e4b45d"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={qwiklabs}
              alt="qwiklabs"
              title="Click to view my Qwiklabs Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.codecademy.com/profiles/DenverDionne"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={codecademy}
              title="Click to view my Codecademy Profile"
              alt="codecademy"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.freecodecamp.org/dionnenoellabarretto"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={fcc}
              alt="freecodecamp"
              title="Click to view my FreeCodeCamp Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://leetcode.com/DionneNoellaBarretto/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={leetcode}
              alt="leetcode"
              title="Click to view my Leetcode Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://edabit.com/user/v5xC75HeJryHqRSZb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Edabit logo"
              src="https://s3.amazonaws.com/edabit-images/monster003.png"
              title="Click to view my Edabit Profile"
              className="sidebar_icon"
            />
          </a>

          <a
            href="https://stackoverflow.com/users/5882961/dionne-noella-barretto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
              alt="dionne-noella-barretto"
              title="Click to view my Stackoverflow Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://codepen.io/denverdionne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg"
              alt="denverdionne"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://dev.to/dionnenoellabarretto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
              alt="dionnenoellabarretto"
              title="Click to view my Dev.to Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://medium.com/@denverdionne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
              alt="@denverdionne"
              title="Click to view my Medium Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3nwF9HcxNjvgrArnGewJ1w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
              alt="dionne noella barretto"
              title="Click to view my Youtube Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.codechef.com/users/dinoba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
              alt="dinoba"
              title="Click to view my CodeChef Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.hackerrank.com/denverdionne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
              alt="denverdionne"
              title="Click to view my HackerRank Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://replit.com/@DionneNoellaBar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sidebar_icon"
              alt="Repl.it logo"
              title="Click to view my Replit Profile"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/512px-Repl.it_logo.svg.png"
            />
          </a>
        </figure>
      </div>
      <hr />
      <div className="footer container text-center py-lg-5 py-md-5 py-4 py-sm-5">
      <p> <a href="https://www.youtube.com/playlist?list=PLQKg8mIgoxKop9l92Zjd-Pmxkf-HQmclQ">Credits </a></p>
      &copy; Copyright 2021 <br />
        <a
          href="https://dnb-reactportfolio.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dionne Noella Barretto
        </a>
        
      </div>
    </motion.div>
  );
}
