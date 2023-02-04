import "./styles/Projects.css";
import { useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

function Projects() {
  const [showproj, setShowproj] = useState("nothing");

  const display_web = () => {
    setShowproj("display-web");
  };
  const display_android = () => {
    setShowproj("display-android");
  };
  const display_others = () => {
    setShowproj("display-others");
  };
  const display_all = () => {
    setShowproj("");
  };

  // useEffect(() => {
  //   Aos.init({ duration: 500 });
  // }, []);

  return (
    <div id="projects" className="container-fluid">
      <h2 className="topic-head">Projects</h2>
      <div className="d-flex mb-3 ms-2">
        <div className="p-1 sorters  nav-effect" onClick={display_all}>
          All
        </div>
        <div className="p-1 sorters  nav-effect" onClick={display_web}>
          Web
        </div>
        <div className="p-1 sorters  nav-effect" onClick={display_android}>
          Android
        </div>
        <div className="p-1 sorters  nav-effect" onClick={display_others}>
          Others
        </div>
      </div>
      <div className="row cards-list wrapper">
      <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/ythero.webp`}
              alt="YT-Hero"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>YT-Hero</h3>
              <p>Web app that uses GPT-3 model to generate video titles.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://yt-hero-ten.vercel.app/" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
      <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/nft_warranty.webp`}
              alt="NFT Warranty Web App"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>NFT Warranty Website</h3>
              <p>A web app to issue warranties on the Ethereum blockchain as NFTs.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=afUeF9etF_Q&feature=youtu.be" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/FIS.webp`}
              alt="FIS Landing Page"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>FIS Landing Page</h3>
              <p>
                A landing page for an FIS Hackathon I worked on during my internship.
              </p>
              <a target="_blank" rel="noopener noreferrer" 
                href="https://fis-landing.netlify.app/"
                class="btn"
              >
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 android ${showproj}`}>
          <div className="mycard m-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/vaxiqueue.png`}
              alt="VaxiQueue"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Vaxiqueue</h3>
              <p>
                An android app to predict the waiting time for people waiting to
                get a vaccine.
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla/VaxiQueue" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 others ${showproj}`}>
          <div className="mycard m-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/arduinobot.jpg`}
              alt="Path Finder Bot"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Path Finder Bot</h3>
              <p>
              A path-finding bot created using Arduino to detect dangerous gases.
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla/Gasbot-arduino" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 others ${showproj}`}>
          <div className="mycard m-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/minichess.png`}
              alt="Chess Mini Game"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Chess Mini Game</h3>
              <p>A Chess Mini Game created using only the C language.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla/Chess-Mini-Game" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 android ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/chromavision.jpg`}
              alt="ChromaVision"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Chromavision</h3>
              <p>
                A cross platform application created to test for
                color-blindness.
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla/ChromaVision" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/swiftpharma.webp`}
              alt="SwiftPharma"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Swift Pharma</h3>
              <p>
                A functioning full-stack e-commerce website created using
                ExpressJS.
              </p>
              <a target="_blank" rel="noopener noreferrer" 
                href="https://github.com/s-bhatla/swiftPharma/tree/master"
                class="btn"
              >
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/foodel.webp`}
              alt="Food Delivery App"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Firebase Food Delivery</h3>
              <p>A model firebase app for a food delivery platform.</p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla/new-food-delivery" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/portfolio.webp`}
              alt="This Portfolio Website"
              height="200vh"
              loading="lazy"
            />
            <div className="card-info">
              <h3>Portfolio Website</h3>
              <p>The portfolio website you are staring at right now!</p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla/portfolio/tree/no-aos" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
