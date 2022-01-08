import myImg from "./myImg.png";
import "./styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <div id="about" className="container-fluid">
      <h2 className="topic-head">About Me</h2>
      <div className="row">
        <img data-aos="fade-right" data-aos-once="true" src={myImg} alt="I, in the flesh." className="col-lg-4 image" />
        <div className="col-lg-8 d-flex justify-content-center flex-column summary" data-aos-once="true" data-aos="fade-up">
          <div className="d-flex justify-content-center flex-column">
            <div className="mb-2">
              Hey there, I'm Sidharth. I’ve always had a natural curiosity for
              technology. As a child, I was fascinated with the hackers presented
              in popular media and films. Because of that influence, I became
              interested in exploring how computers work (and how to break them).
              From these naive inspirations, I began exploring every domain of
              technology I could find. This passion led me to the National
              Institute of Technology, Delhi, where I am currently pursuing my
              bachelor's degree in Computer Science and Engineering.
            </div>
            <div className="mb-2">
              I'm skilled at python, C, C++ and JavaScript and I am currently
              exploring Web Development using the MERN stack and Machine
              Learning using Python. When I’m not delving into technology, I’m
              either reading books or playing the piano.{" "}
            </div>
          </div>
          <a
            className="button-link cool-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sidharth-bhatla-811154202/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADOioI0BLGywzoi8EC7kfCVaFeZqayp6Tp4,1635478037593)/"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
