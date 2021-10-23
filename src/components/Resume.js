import React from "react";
import Google from "../assets/Google.gif";
import Rubrik from "../assets/icons/Rubrik.png";
import vmware from "../assets/icons/vmware.jpg";
import Airwatch from "../assets/icons/Airwatch.png";
import vmwareAirwatch from "../assets/icons/vmwareAirwatch.png";

export default function Resume() {
  return (
    <div>
      <div className="text-center download">
       <p><em> To download a copy of Dionne Noella Barretto's resume <a
          href="https://drive.google.com/file/d/17KEqXhudMuyKM6Xm4_3pMYCVjJFE-MiV/view?usp=sharing"
          title="Click to download"
          className="text-uppercase">click here</a> </em> </p> 
          
      </div>
      <h6>
        <em className="summary">
          A self-driven, motivated, aspiring Full Stack Web Developer who is not
          only a Team Player but also an Organizational Leader and an “Achiever”
          with 7+ years of experience in Cloud technologies, Desktop &
          Application Virtualization & Customer Engagement + Advocacy !
        </em>
      </h6>

      <div className="container">
        <div className="row resume_row">
          <br />
          <div className="col-lg-6 text-center experience text-center">
            <h5 className="text-center">Professional Experience</h5>

            <div className="col-lg-12 text-center">
              <h6>
                <img
                  className="resume_company"
                  src={Google}
                  alt="Google Logo"
                />- Senior Solutions Consultant
                <br />
                Feb ‘21 - Present | US Remote
              </h6>
              <h6>
                <img
                  className="resume_company"
                  src={Rubrik}
                  alt="Rubrik Logo"
                /> - Customer Experience Manager
                <br />
                Oct ‘19 - Feb ‘21 | Morrisville, NC
              </h6>
              <h6>
                <img
                  className="resume_company"
                  src={vmware}
                  alt="VMware Logo"
                />-
                 Escalation Manager
                <br />
                Aug ‘18 - Oct ‘19 | Atlanta, GA
              </h6>
              <h6>
                <img
                  className="resume_company"
                  src={vmware}
                  alt="VMware Logo"
                />
                - Technical Support Manager
                <br />
                Feb ‘17 - Aug ‘18 | Atlanta, GA
              </h6>
              <h6>
                <img
                  className="resume_company"
                  src={vmwareAirwatch}
                  alt="VMware AirWatch Logo"
                />
                - Technical Support Engineer
                <br />
                Apr ‘16 - Feb ‘17 | Atlanta, GA
              </h6>
              <h6>
                <img
                  className="resume_company"
                  src={Airwatch}
                  alt="AirWatch Logo"
                />
                - Application Support Engineer
                <br />
                May ‘15 - April ‘16 | Atlanta, GA
              </h6>
            </div>
            <br />
            <h5 className="text-center">Education</h5>
            <div className="col-lg-12 text-left">
              <h6>
                ★ <strong>Certificate: Coding Bootcamp</strong> <br /> May‘21 -
                Nov‘2021 | A+
                <br />
                <em>University of North Carolina(UNC)</em>
              </h6>

              <h6>
                <strong>
                  ★ Master of Science: Telecommunication and Network Management
                </strong>
                <br /> Aug ‘13 - May‘15 | 3.297/4
                <br />
                <em> Syracuse University(SU) </em>
              </h6>

              <h6>
                <strong>
                  ★ Bachelor of Engineering: Electronics and Telecommunication
                </strong>
                <br /> Jun ‘09 - May‘13 | 8/10
                <br />
                <em>Mumbai University(MU)</em>
              </h6>
            </div>
          </div>
          <div className="col-lg-6 text-center recognition ">
            <h5 className="text-center">
              Leadership & Recognition
              <br />
            </h5>
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
              <h6>
                ★ W@R <strong>(Women at Rubrik) North America Delegate</strong>{" "}
                |<em> Dec ‘19 </em>
              </h6>
              <h6>
                ★ <strong>VMworld Speaker</strong> for 2 sessions on “Horizon
                Cloud”| <em> Aug ‘19 </em>
              </h6>
              <h6>
                ★ VMware <strong>“Top Performer” recognition</strong>|
                <em> ‘16, ‘17 </em>
              </h6>
              <h6>
                ★ <strong>“Leading Support Case Deflector”</strong> award |
                <em> ‘16 </em>
              </h6>
              <h6>
                ★ Rendered <strong> editorial assistance</strong> for “Cloud to
                Edgeware” book published on | <em> 1st Nov ‘15 </em>
              </h6>
              <h6>
                ★{" "}
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
              <h6>
                ★
                <strong>
                  <a
                    href="https://www.xavier.ac.in/Alumni%20EXTC.php"
                    title="Click to go to an external university link"
                  >
                    Distinguished Alumni
                  </a>
                </strong>
                Xavier Institute of Engineering - MU | <em>Mar ‘14 </em>
              </h6>
              <h6>
                ★ <strong>First Female Sports Secretary</strong>Xavier Institute
                of Engineering - MU | <em>Jun ‘12 - May ‘13 </em>
              </h6>
              <h6>
                ★ Basketball Network Associate<strong>Summer Camp Coach</strong>
                St. Louis Convent High School |<em> ‘02 -‘07 </em>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
