import "./styles/Contact.css";
import mailbox from "./mail-box.png";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


function Contact() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <div id="contact" class="container-fluid">
      <h2 className="topic-head">Get in Touch</h2>
      <div className="d-flex justify-content-center mt-3">
        <img src={mailbox} alt="mailbox." className=" mail-img" data-aos="fade-right" data-aos-once="true" />
        <div className="contact-text"  data-aos="fade-up" data-aos-once="true">
          Feel free to drop an email, or contact me on any of the social
          platforms provided. I'm always interested in new and exciting
          oppurtunities so don't hesitate to get in touch. I'll be waiting for
          you!
          <div className="d-flex justify-content-center mt-4">
            <a href="mailto:sidroot02@gmail.com" className="cool-btn contact-button">
              <div className="pe-2 ps-2">Contact Me</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
