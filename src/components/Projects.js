import "./styles/Projects.css";

function Projects() {
  return (
    <div id="projects" className="container-fluid">
      <h2>Projects</h2>
      <div className="d-flex mb-3">
        <div className="p-2">All</div>
        <div className="p-2">Web</div>
        <div className="p-2">Android</div>
        <div className="p-2">Others</div>
      </div>
      <div className="row cards-list">
        <div className="col-md-4 col-sm-6 p-4 android">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/vaxiqueue.png`}
              alt="VaxiQueue"
              height="200vh"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 p-4 others">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/minichess.png`}
              alt="Chess Mini Game"
              height="200vh"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 p-4 android">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/chromavision.jpg`}
              alt="ChromaVision"
              height="200vh"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 p-4 web">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/swiftpharma.png`}
              alt="SwiftPharma"
              height="200vh"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-6 p-4 web">
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
