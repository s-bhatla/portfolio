import "./styles/Landing.css";
import video from "./Cyberpunkvid.mp4";

function Landing() {
  return (
    <div id="landing">
      <video class="videoclass" autoplay="autoplay" muted loop width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <div class="mycontent">
        <div class="d-flex justify-content-center"><h2>Hi, I am Sidharth Bhatla</h2></div>
        <div class="d-flex justify-content-center"><h3>I am a Developer</h3></div>
        <div class="d-flex justify-content-center">
          <i class="fab fa-linkedin p-3"></i>
          <i class="fab fa-github p-3"></i>
          <i class="fab fa-stack-overflow p-3"></i>
          <i class="fas fa-envelope p-3"></i>
          <i class="fab fa-hackerrank p-3"></i>
        </div>
      </div>
    </div>
  );
}

export default Landing;
