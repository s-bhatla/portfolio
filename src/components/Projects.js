import "./styles/Projects.css";
import { useState } from "react";


function Projects() {

  const [showproj, setShowproj] = useState("nothing");

  const display_web = () => {
    setShowproj("display-web")
  }
  const display_android = () => {
    setShowproj("display-android")
  }
  const display_others = () => {
    setShowproj("display-others")
  }
  const display_all = () => {
    setShowproj("")
  }


  return (
    <div id="projects" className="container-fluid">
      <h2>Projects</h2>
      <div className="d-flex mb-3">
        <div className="p-2 sorters" onClick={display_all}>All</div>
        <div className="p-2 sorters" onClick={display_web}>Web</div>
        <div className="p-2 sorters" onClick={display_android}>Android</div>
        <div className="p-2 sorters" onClick={display_others}>Others</div>
      </div>
      <div className="row cards-list">
        <div className={`col-md-4 col-sm-6 p-4 android ${showproj}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/vaxiqueue.png`}
              alt="VaxiQueue"
              height="200vh"
            />
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 p-4 others ${showproj}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/minichess.png`}
              alt="Chess Mini Game"
              height="200vh"
            />
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 p-4 android ${showproj}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/chromavision.jpg`}
              alt="ChromaVision"
              height="200vh"
            />
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 p-4 web ${showproj}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/swiftpharma.png`}
              alt="SwiftPharma"
              height="200vh"
            />
          </div>
        </div>
        <div className={`col-md-4 col-sm-6 p-4 web ${showproj}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/portfolio.jpg`}
              alt="This Portfolio Website"
              height="200vh"
            />
          </div>
        </div>
      </div>
      {/* Render Project Cards list here */}
      {/* Also Get Images for those projects in the folder */}
    </div>
  );
}

export default Projects;
