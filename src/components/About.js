import React from "react";
import Google from "../assets/Google.gif";
import Rubrik from "../assets/icons/Rubrik.png";
import vmware from "../assets/icons/vmware.jpg";

export default function About() {
  return (
    <div className="about">
      <h6 className="about_dnb"> </h6>
      <div className="container about_container">
        <h6 className="skills text-uppercase tittle-w3"> About </h6>
        <p>
          I'm <em>D</em>ionne <em>N</em>oella <em>B</em>arretto a learning
          enthusiast and an aspiring <strong> Full Stack Web Developer </strong>
          , currently employed at
          <a href="https://g.co/kgs/t8KRK8">
            <img
              title="Click to learn more about Google"
              className="about_company"
              src={Google}
              alt="Google Logo"
            />
          </a>
          as a Senior Solutions Consultant (TAM) in the Google Cloud division.

          Previously I was at
          <a href="https://www.rubrik.com/">
            <img
              title="Click to learn more about Rubrik"
              className="about_company"
              src={Rubrik}
              alt="Rubrik Logo"
            />
          </a>
          , serving in the capacity of a Customer Experience Manager for some of
          the largest enterprise and strategic accounts in the data management
          domain & prior to that I was with
          <span title="For more information about VMware, click this link">
            <strong class="link">
              <a href="https://www.vmware.com/">
              <img
              title="Click to learn more about VMware"
              className="about_company"
              src={vmware}
              alt="VMware Logo"
            />
              </a>
            </strong>
          </span>
          , where I worked my way up the ranks from a Entry level Application Support Engineer to a
          Horizon Cloud Global Escalation Manager in the space of Desktop and
          Application as a Service during my ~5 year tenure with the organization.
          <br /><br /> My 7+ years of experience in the domain of customer experience
          and service management positions me to provide unique perspectives on
          how end users interact with websites, software and platforms!
          I'm passionate about cloud technology and responsive web development whereby I can create meaningful web applications for usage by the masses that sets the foundations for using <strong><em>“Technology for Good”</em></strong> (social causes)!
          <br /><br />
          I’m experienced in testing, troubleshooting,consulting and
          architecting solutions for cloud technologies which form the basis for
          web application deployments as a hosting platform for enterprises-an
          area I am keen to work in, to bridge the 2 worlds.
        </p>
      </div>
      <hr />
      <div className="container skills_container">
        <h6 className="skills text-uppercase tittle-w3"> Skills </h6>
        <div className="main_row"></div>
        <div className="col-lg-12 progress-info-content text-center">
          <div className="progress-one" data-aos="fade-up">
            <h3 className="progress-tittle-w3">Customer Experience</h3>
            <div className="progress">
              <div
                className="ce progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                title="100% Proficiency on a scale of 100"
              ></div>
            </div>
            <h3 className="progress-tittle-w3">Leadership</h3>
            <div className="progress">
              <div
                className="Leadership progress-bar progress-bar-striped bg-secondary"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                title="99% Proficiency on a scale of 100"
              ></div>
            </div>
            <h3 className="progress-tittle-w3">Project & Program Management</h3>
            <div className="progress">
              <div
                className="PM progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                title="97% Proficiency on a scale of 100"
              ></div>
            </div>
            <h3 className="progress-tittle-w3">VMware Technologies</h3>
            <div className="progress">
              <div
                className="VM progress-bar progress-bar-striped bg-success"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                title="90% Proficiency on a scale of 100"
              ></div>
            </div>
            <h3 className="progress-tittle-w3">Cloud Platforms</h3>
            <div className="progress">
              <div
                className="CP progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                title="80% Proficiency on a scale of 100"
              ></div>
            </div>
            <h3 className="progress-tittle-w3">Web Development</h3>
            <div className="progress">
              <div
                className="WD progress-bar progress-bar-striped"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                title="85% Proficiency on a scale of 100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
