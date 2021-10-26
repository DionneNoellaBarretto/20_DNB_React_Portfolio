/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Google from "assets/Google.gif";
import Rubrik from "assets/icons/Rubrik.png";
import vmware from "assets/icons/vmware.jpg";
import Airwatch from "assets/icons/Airwatch.png";
import vmwareAirwatch from "assets/icons/vmwareAirwatch.png";
import { motion } from "framer-motion";
export default function Resume() {
  const pe_variant = {
    hidden: {
      y: "150vh",
    },
    visible: {
      y: "0",

      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  const lr_variant = {
    hidden: {
      y: "-150vh",
    },
    visible: {
      y: "0",

      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
    exit:{
      opacity:0,
      transition: {
        ease: 'easeInOut'
      },
    }
  };
  return (
    <div>
      <div className="text-center download">
        <p>
          <em>
            To download a copy of Dionne Noella Barretto's resume:
            <a
              href="https://drive.google.com/file/d/1YmvFpFdlUxkXB3loRPPaRjkaRDbZ2qiz/view?usp=sharing"
              title="Click to download"
              rel="noopener noreferrer"
              target="_blank"
              className="text-uppercase"
            >
              click here
            </a>
          </em>
        </p>
      </div> <br/>
      <h6>
        <em className="summary">
          A self-driven, motivated, aspiring Full Stack Web Developer who is not
          only a Team Player but also an Organizational Leader and an “Achiever”
          with 7+ years of experience in Cloud technologies, Desktop &
          Application Virtualization & Customer Engagement + Advocacy !
        </em>
      </h6>
      <hr/>
      <div className="container">
        <div className="row resume_row">
          <br />
          <motion.div
            className="col-lg-6 text-center experience text-center" // accessing properties of motion
            variants={pe_variant}
            // holds current state
            initial="hidden"
            // holds future state
            animate="visible"
            exit="exit"
          >
            <h4 className="text-center">Professional Experience</h4>
            <br />
            <div className="col-lg-12 text-center">
              <h6>
                <img
                  className="resume_company"
                  src={Google}
                  alt="Google Logo"
                />
                - <strong>Senior Solutions Consultant </strong>
                <br />
                Feb ‘21 - Present | US Remote
              </h6>
              <hr />
              <h6>
                <img
                  className="resume_company"
                  src={Rubrik}
                  alt="Rubrik Logo"
                />
                - <strong> Customer Experience Manager </strong>
                <br />
                Oct ‘19 - Feb ‘21 | Morrisville, NC
              </h6>
              <hr />
              <h6>
                <img
                  className="resume_company"
                  src={vmware}
                  alt="VMware Logo"
                />
                -<strong> Escalation Manager </strong>
                <br />
                Aug ‘18 - Oct ‘19 | Atlanta, GA
              </h6>
              <h6>
                <img
                  className="resume_company"
                  src={vmware}
                  alt="VMware Logo"
                />
                - <strong> Technical Support Manager </strong>
                <br />
                Feb ‘17 - Aug ‘18 | Atlanta, GA
              </h6>
              <hr />
              <h6>
                <img
                  className="resume_company"
                  src={vmwareAirwatch}
                  alt="VMware AirWatch Logo"
                />
                - <strong> Technical Support Engineer </strong>
                <br />
                Apr ‘16 - Feb ‘17 | Atlanta, GA
              </h6>
              <hr />
              <h6>
                <img
                  className="resume_company"
                  src={Airwatch}
                  alt="AirWatch Logo"
                />
                - <strong> Application Support Engineer </strong>
                <br />
                May ‘15 - April ‘16 | Atlanta, GA
              </h6>
            </div>
            <br />
            <h4 className="text-center">Education</h4>
            <div className="col-lg-12 text-left">
              <h6>
                🥇 <strong>Certificate: Coding Bootcamp</strong> <br /> May‘21 -
                Nov‘2021 | A+
                <br />
                <em>University of North Carolina(UNC)</em>
              </h6>
              <hr />
              <h6>
                🎓
                <strong>
                  Master of Science: Telecommunication and Network Management
                </strong>
                <br /> Aug ‘13 - May‘15 | 3.297/4
                <br />
                <em> Syracuse University(SU) </em>
              </h6>
              <hr />
              <h6>
                🎓
                <strong>
                  Bachelor of Engineering: Electronics and Telecommunication
                </strong>
                <br /> Jun ‘09 - May‘13 | 8/10
                <br />
                <em>Mumbai University(MU)</em>
              </h6>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6 text-center recognition " // accessing properties of motion
            variants={lr_variant}
            // holds current state
            initial="hidden"
            // holds future state
            animate="visible"
          >
            <h4 className="text-center">
              Leadership & Recognition
              <br />
            </h4>
            <div className="col-lg-12 text-left">
              <h6>
                ★ Recognized in the
                <strong> League of Extraordinary TAM’s - Q1 & Q3 2021</strong> |
                <em> May ‘21 </em>
              </h6>
              <h6>
                ★ Google
                <strong>
                  Volunteer at Little Friends of Elderly to teach Seniors Tech
                </strong>
                | <em>Feb ‘21 </em>
              </h6>
              <h6>
                ★ Employee Health, Well being and Mindfulness BlueDot
                <strong> Ally at Google</strong> | <em>Feb ‘21 </em>
              </h6>
              <hr />
              <h6>
                ★ W@R <strong>(Women at Rubrik) North America Delegate</strong>|
                <em> Dec ‘19 </em>
              </h6>
              <hr />
              <h6>
                {/* symbols from https://fsymbols.com/signs/ & https://emojipedia.org/movie-camera/  */}
                ★ <strong>VMworld Speaker</strong> for 2 sessions on “Horizon
                Cloud”| <em> Aug ‘19 </em>
                <br />
                🎥
                <a
                  className="row-lg-4 text-center justify-content-center"
                  href="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvmwareeducation%2Fvideos%2Flive-from-vmworld-with-linus-bourque-principal-instructor-and-dionne-noella-barr%2F358103825126606%2F&width=200&show_text=false&height=125&appId"
                  title="Click to be redirected to a facebook video"
                  rel="noopener noreferrer"
                  target="_blank"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  HzC Troubleshooting Super Heroes
                </a>
                <br />
                🎥
                <a
                  className="row-lg-4 text-center justify-content-center"
                  href="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvmwareeducation%2Fvideos%2Fbecoming-troubleshooting-superheroes-for-horizon-cloud%2F720625145042964%2F&width=200&show_text=false&height=125&appId"
                  title="Click to be redirected to a facebook video"
                  rel="noopener noreferrer"
                  target="_blank"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Zero to Hero: HzCAz troubleshooting
                </a>
              </h6>
              <h6>
                ★ VMware <strong>“Top Performer” recognition</strong>|
                <em> ‘16, ‘17 </em>
              </h6>
              <h6>
                ★ <strong>“Leading Support Case Deflector”</strong> award |
                <em> ‘16 </em>
              </h6>
              <hr />
              <h6>
                ★ Rendered <strong> editorial assistance</strong> for “Cloud to
                Edgeware” book published on | <em> 1st Nov ‘15 </em>
              </h6>
              <h6>
                ★
                <strong>Presented at the White House & ITERA Conference</strong>
                on ‘Emergency Communications using Social Media Platforms’ |
                <em> 27th -29th May ‘15 </em>
              </h6>
              <h6>
                ★ <strong>Research Assistance</strong> @ Syracuse University
                (SU) for developing a Graduate-level course: IST 600 - Cloud
                Computing |<em> Jan ‘15 </em>
              </h6>
              <h6>
                ★ <strong>President</strong> of Worldwide Innovation Technology
                (WiTec) at SU | <em> Jan ‘15 </em>
              </h6>
              <hr />
              <h6>
                ★
                <strong>
                  <a
                    href="https://www.xavier.ac.in/Alumni%20EXTC.php"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Click to go to an external university link"
                  >
                    Distinguished Alumni
                  </a>
                </strong>
                : Xavier Institute of Engineering - MU | <em>Mar ‘14 </em>
              </h6>
              <h6>
                ★ <strong> First Female Sports Secretary </strong> Xavier
                Institute of Engineering - MU | <em>Jun ‘12 - May ‘13 </em>
              </h6>
              <hr />
              <h6>
                ★ Basketball Network Associate
                <strong> Summer Camp Coach </strong>
                St. Louis Convent High School |<em> ‘02 -‘07 </em>
              </h6>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
