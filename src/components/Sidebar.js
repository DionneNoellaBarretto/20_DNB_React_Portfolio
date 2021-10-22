import React from "react";
// importing each image component
// import dnb from "../assets/dnb.jpg";
import Google from "../assets/Google.gif";
import cert from "../assets/icons/cert.png";
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

export default function Sidebar() {
  // arrow function for emailing logic using local mailing client
  const EmailLogic = () => {
    window.open("mailto:dionnenoellabarretto.aw@gmail.com");
  };

  return (
    <div className="sidebar">
      {/* <img src={dnb} alt="DNB Profile Pic" className="" /> */}
      {/* replacing my profile image with a dev card that has my profile picture */}
      <a href="https://app.daily.dev/dnb">
        <img
          className="sidebar_Img"
          title="Click to view my DailyDev Profile"
          src="https://api.daily.dev/devcards/2b2ffde3884c4d9d8b089e028c6d6e2b.png?r=si5"
          alt="Dionne Noella Barretto's Dev Card"
        />
      </a>
      <div>
        <br />
        <strong className="sidebar_name">
          Dionne Noella <span> Barretto</span>
        </strong>
      </div>
      <div className="sidebar_title">
        <strong> Senior Solutions Consultant </strong>
        <a href="https://g.co/kgs/t8KRK8">
          <img src={Google} alt="Google Gif" className="sidebar_company" />
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
            rel="noopener noreferrer" target="_blank">
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
        <a href="https://drive.google.com/file/d/17KEqXhudMuyKM6Xm4_3pMYCVjJFE-MiV/view?usp=sharing">
          <div className="sidebar_resume">
            <img
              src={resume}
              alt="Resume"
              className="sidebar_icon"
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
          <a href="https://edabit.com/user/v5xC75HeJryHqRSZb" target="blank">
            <img
              alt="Edabit logo"
              src="https://s3.amazonaws.com/edabit-images/monster003.png"
              title="Click to view my Edabit Profile"
              className="sidebar_icon"
            />
          </a>

          <a
            href="https://stackoverflow.com/users/dionne-noella-barretto"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
              alt="dionne-noella-barretto"
              title="Click to view my Stackoverflow Profile"
              className="sidebar_icon"
            />
          </a>
          <a href="https://codepen.io/denverdionne" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg"
              alt="denverdionne"
              className="sidebar_icon"
            />
          </a>
          <a href="https://dev.to/dionnenoellabarretto" target="blank">
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
              alt="dionnenoellabarretto"
              title="Click to view my Dev.to Profile"
              className="sidebar_icon"
            />
          </a>
          <a href="https://medium.com/@denverdionne" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
              alt="@denverdionne"
              title="Click to view my Medium Profile"
              className="sidebar_icon"
            />
          </a>
          <a
            href="https://www.youtube.com/c/dionne noella barretto"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
              alt="dionne noella barretto"
              title="Click to view my Youtube Profile"
              className="sidebar_icon"
            />
          </a>
          <a href="https://www.codechef.com/users/dinoba" target="blank">
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
              alt="dinoba"
              title="Click to view my CodeChef Profile"
              className="sidebar_icon"
            />
          </a>
          <a href="https://www.hackerrank.com/denverdionne" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
              alt="denverdionne"
              title="Click to view my HackerRank Profile"
              className="sidebar_icon"
            />
          </a>
          <a href="https://replit.com/@DionneNoellaBar" target="blank">
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
      <div>
        <strong className="sidebar_ppt">VMWorld 2019 Speaker Sessions</strong>{" "}
        <br />
        <a
          href="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvmwareeducation%2Fvideos%2Flive-from-vmworld-with-linus-bourque-principal-instructor-and-dionne-noella-barr%2F358103825126606%2F&width=200&show_text=false&height=125&appId"
          title="Click to be redirected to a facebook video"
          rel="noopener"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          HzC Troubleshooting Super Heroes
        </a>
        <br />
        <a
          href="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvmwareeducation%2Fvideos%2Fbecoming-troubleshooting-superheroes-for-horizon-cloud%2F720625145042964%2F&width=200&show_text=false&height=125&appId"
          title="Click to be redirected to a facebook video"
          rel="noopener"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Zero to Hero: HzCAz troubleshooting
        </a>
      </div>
    </div>
  );
}
