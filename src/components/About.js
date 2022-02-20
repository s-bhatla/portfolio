import myImg from "./myImg.png";
import "./styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="container-fluid">
      <h2 className="topic-head">About Me</h2>
      <div className="row">
        <img
          data-aos="fade-right"
          data-aos-once="true"
          src={myImg}
          alt="I, in the flesh."
          className="col-lg-4 image"
        />
        <div
          className="col-lg-8 d-flex justify-content-center flex-column summary"
          data-aos-once="true"
          data-aos="fade-up"
        >
          <div className="d-flex justify-content-center flex-column">
            <div className="mb-2">
              Hey there, I'm Sidharth. I’ve always had a natural curiosity for
              technology. As a child, I was fascinated with the hackers
              presented in popular media and films. Because of that influence, I
              became interested in exploring how computers work (and how to
              break them). This passion led me to the NIT Delhi, where I am
              currently pursuing my bachelor's degree in Computer Science and
              Engineering.
            </div>
            <div className="mb-2">
              I'm skilled at{" "}
              <span className="embolden">Python, C, C++ </span>and <span className="embolden">JavaScript</span>{" "}
              and I am currently exploring Web Development using the{" "}
              <span className="embolden">MERN stack</span> and{" "}
              <span className="embolden">Machine Learning with Python</span>.
              When I’m not delving into technology, I’m either reading books or
              playing the keys.{" "}
            </div>
          </div>
          <a
            className="button-link cool-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/drive/folders/19JnK8c2cq0SniX_DRKrVu_LJ35JI9Pwh?usp=sharing"
          >
            
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
