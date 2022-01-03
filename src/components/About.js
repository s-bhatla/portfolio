import myImg from "./myImg.png";
import "./styles/About.css"

function About() {
  return (
    <div id="about" className="container-fluid">
      <h2>About Me</h2>
      <div className="row">
        <img src={myImg} alt="I, in the flesh." className="col-lg-3 image"/>
        <div className="col-lg-9 d-flex justify-content-center flex-column summary">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <a className="button-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sidharth-bhatla-811154202/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADOioI0BLGywzoi8EC7kfCVaFeZqayp6Tp4,1635478037593)/">
            <button className="mybtn">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
