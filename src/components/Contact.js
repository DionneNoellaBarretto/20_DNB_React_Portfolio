import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import cal from "../assets/icons/cal.png";
import Google_Voice_icon from "../assets/icons/Google_Voice_icon.png";
import mail from "../assets/icons/mail.png";

// as seen https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
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

  /* --- handleOnSubmit method --- */

  return (
    <div className="row">
      <br />
      <div className="col-lg-5 text-center Contact text-center">
        <Form className="contactForm form-text " onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Your Email"
            title="Your email ID will never be shared with anyone else"
            name="user_email"
            placeholder="Your Email…"
            required
            className="col-lg-12 col-form-label-lg"
          />
          <br />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Your Name"
            name="user_name"
            placeholder="Your Name…"
            title="Your name is being requested so I can address you correctly in my response back!"
            required
            className="col-lg-12 col-form-label-lg"
          />
          <br />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Your Message"
            name="user_message"
            placeholder="Your Message…"
            required
            className="col-lg-12 col-form-label-lg"
          />
          <Button type="submit">Submit</Button>
        </Form> 
      </div> 
      
        <div className="col-lg-6 text-center contactMe "> <br /><br /><br /><br />
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
          </div>
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
          </div>
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
          </div>
        </div>
      </div>

  );
};
export default Contact;
