import "./styles/Contact.css";
import mailbox from "./mail-box.png";

function Contact() {
  return (
    <div id="contact" class="container-fluid">
      <h2 className="topic-head">Get in Touch</h2>
      <div className="d-flex justify-content-center">
        <img src={mailbox} alt="mailbox." className=" mail-img" />
        <div className="contact-text">
          Feel free to drop an email, or contact me on any of the social
          platforms provided. I'm always interested in new and exciting
          oppurtunities so don't hesitate to get in touch. I'll be waiting for
          you!
          <div className="d-flex justify-content-center">
            <a href="mailto:sidroot02@gmail.com" className="cool-btn contact-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="pe-2 ps-2">Contact Me</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
