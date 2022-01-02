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
          <a href="https://www.linkedin.com/in/sidharth-bhatla-811154202/"><i class="fab fa-linkedin p-3"></i></a>
          <a href="https://github.com/s-bhatla"><i class="fab fa-github p-3"></i></a>
          <a href="https://stackoverflow.com/users/14859624/sidharth-bhatla"><i class="fab fa-stack-overflow p-3"></i></a>
          <a href="mailto:sidroot02@gmail.com"><i class="fas fa-envelope p-3"></i></a>
          <a href="https://www.hackerrank.com/sidroot02"><i class="fab fa-hackerrank p-3"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
