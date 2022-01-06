import "./styles/Projects.css";
import { useState } from "react";

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

  return (
    <div id="projects" className="container-fluid">
      <h2>Projects</h2>
      <div className="d-flex mb-3">
        <div className="p-2 sorters" onClick={display_all}>
          All
        </div>
        <div className="p-2 sorters" onClick={display_web}>
          Web
        </div>
        <div className="p-2 sorters" onClick={display_android}>
          Android
        </div>
        <div className="p-2 sorters" onClick={display_others}>
          Others
        </div>
      </div>
      <div className="row cards-list wrapper">
        <div className={`col-md-4 col-sm-6 android ${showproj}`}>
          <div className="mycard m-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/vaxiqueue.png`}
              alt="VaxiQueue"
              height="200vh"
            />
            <div className="card-info">
              <h3>Vaxiqueue</h3>
              <p>
                An android app to predict the waiting time for people waiting to
                get a vaccine.
              </p>
              <a href="https://github.com/s-bhatla/VaxiQueue" class="btn">
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
            />
            <div className="card-info">
              <h3>Chess Mini Game</h3>
              <p>
                A Chess Mini Game entirely created in the C language.
              </p>
              <a href="https://github.com/s-bhatla/Chess-Mini-Game" class="btn">
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
            />
            <div className="card-info">
              <h3>Chromavision</h3>
              <p>
                A cross platform application created to test for color-blindness
              </p>
              <a href="https://github.com/s-bhatla/ChromaVision" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/swiftpharma.png`}
              alt="SwiftPharma"
              height="200vh"
            />
            <div className="card-info">
              <h3>SwiftPharma</h3>
              <p>
                A functioning full-stack e-commerce website created using ExpressJS framework as the backend.
              </p>
              <a href="https://github.com/s-bhatla/swiftPharma/tree/master" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/portfolio.jpg`}
              alt="This Portfolio Website"
              height="200vh"
            />
            <div className="card-info">
              <h3>Potrflio Website</h3>
              <p>
                The portfolio website you are looking at right now!
              </p>
              <a href="/" class="btn">
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
