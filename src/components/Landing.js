import "./styles/Landing.css";
import video from "./Cyberpunkvid.mp4";
import Typist from "react-typist";
import { useState, useEffect } from "react";

function Landing() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <div id="landing">
      <video class="videoclass" autoplay="autoplay" muted loop width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <div class="mycontent">
        <div class="d-flex justify-content-center">
          <h2>Hi, I am Sidharth Bhatla</h2>
        </div>
        <div class="d-flex justify-content-center">
          <h2>
            <div className="d-flex">
              <div className="pe-2">I am a</div>
              <div className="my-roles">
                {count ? (
                  <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span>Programmer</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span>Web Developer</span>
                    <Typist.Backspace count={13} delay={800} />
                    <span>ML Enthusiast</span>
                    <Typist.Backspace count={13} delay={800} />
                    <span>App Developer</span>
                    <Typist.Backspace count={13} delay={800} />
                    <span>Blockchain Bug</span>
                    <Typist.Backspace count={14} delay={800} />
                  </Typist>
                ) : (
                  ""
                )}
              </div>
            </div>
          </h2>
        </div>
        <div class="d-flex justify-content-center landing-icons">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sidharth-bhatla-811154202/">
            <i class="fab fa-linkedin p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/s-bhatla">
            <i class="fab fa-github p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/14859624/sidharth-bhatla">
            <i class="fab fa-stack-overflow p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:sidroot02@gmail.com">
            <i class="fas fa-envelope p-3"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/sidroot02">
            <i class="fab fa-hackerrank p-3"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
