import "./styles/Contact.css";

function Contact() {
  return (
    <div id="contact" class="container-fluid">
      <h3>Get in Touch</h3>
      <div className="contact-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="d-flex justify-content-center">
        <a href="mailto:sidroot02@gmail.com">
          <button className="contact-btn">Contact Me</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
