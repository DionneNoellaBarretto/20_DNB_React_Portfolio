import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import cal from "../assets/icons/cal.png";
import Google_Voice_icon from "../assets/icons/Google_Voice_icon.png";
import mail from "../assets/icons/mail.png";
import { motion } from "framer-motion";
// as seen in https://getbootstrap.com/docs/4.1/components/forms/ &  https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
import "../index.css";

const SERVICE_ID = "service_xbpztyp";
const TEMPLATE_ID = "template_ozmrovn";
const USER_ID = "user_dH53Oc0eZ1CbTiMgf8cxJ";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title:
            "Message sent to Dionne Noella Barretto successfully!  Please expect a response back in the next 48 hours..",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title:
            "Ooops, something went wrong! Please try again in some time or using another browser.",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  const EmailLogic = () => {
    window.open("mailto:dionnenoellabarretto.aw@gmail.com");
  };

  const form_variant = {
    hidden: {
      y: "100vh",
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
  const contact_variant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: "0",
// https://www.framer.com/docs/transition/#tween
      transition: {
        duration: 0.9,
        type: "tween",
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
    <div className="row">
      <br />
      <motion.div className="col-lg-7 text-center Contact text-center"
      variants={form_variant}
    // holds current state
    initial="hidden"
    // holds future state
    animate="visible"
    exit="exit">
      {/* --- handleOnSubmit method --- */}
        <Form className="contactForm form-text " onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email validationTooltip01"
            control={Input}
            // for="validationTooltip01"
            label ="Your Email"
            title="Your email ID will never be shared with anyone else"
            name="user_email"
            placeholder="Your Email…"
            required
            className="col-lg-12 col-form-label-lg needs-validation"
          /><div className="valid-tooltip">
        Looks good!
      </div>
          <br />
          <Form.Field
            id="form-input-control-last-name validationTooltip01"
            control={Input}
            // for="validationTooltip01"
            label="Your Name"
            name="user_name"
            placeholder="Your Name…"
            title="Your name is being requested so I can address you correctly in my response back!"
            required
            className="col-lg-12 col-form-label-lg validationTooltip01 needs-validation"
          /><div className="valid-tooltip">
        Looks good!
      </div>
          <br />
          <Form.Field
            id="form-textarea-control-opinion validationTooltip01"
            control={TextArea}
            // for="validationTooltip01"
            label="Your Message"
            name="user_message"
            placeholder="Your Message…"
            title="Please provide enough context in your message, so I can respond back to you swiftly ! :) "
            required
            className="col-lg-12 col-form-label-lg needs-validation"
          /><div className="valid-tooltip">
        Looks good!
      </div>
          <Button type="submit">Submit</Button>
        </Form> 
      </motion.div> 
      <hr/>
        <motion.div className="col-lg-5 text-center contactMe "
        variants={contact_variant}
    // holds current state
    initial="hidden"
    // holds future state
    animate="visible"
    exit="exit">
         <br /><br /><br /><br />
          <div className="col-lg-11 sidebar_items">
            <h6> Schedule time with Dionne Noella Barretto </h6>
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
          </div><hr />
          <div className="col-lg-11 sidebar_items">
            <h6> Email Dionne Noella Barretto </h6>
            <a
              href="mailto:dionnenoellabarretto.aw@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              onClick={EmailLogic}
            >
              <br />
              <img
                title="Email Me (by clicking the email icon) using your local mailing client"
                src={mail}
                alt="emailID"
                className="sidebar_icon"
              />
            </a>
          </div><hr />
          <div className="col-lg-11 sidebar_items">
            <h6> Call Dionne Noella Barretto </h6>
            <a
              href="https://voice.google.com/u/0/calls?a=nc,%2B[650-810-1459]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <br />
              <img
                src={Google_Voice_icon}
                title="Click the phone icon to call me"
                alt="phone#"
                className="sidebar_icon"
              />
            </a>
          </div><hr/>
        </motion.div>
      </div>



  );
};
export default Contact;
