import "./styles/Skills.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])

  return (
    <div id="skills" className="container-fluid">
      <h2 className="skillka-title topic-head">Skills</h2>
      <div className="row">
        <div className=" col-md-4">
          <div className="skillcard" data-aos="flip-left" data-aos-once="true">
            <div><i class="fas fa-code"></i></div>
            <div className="skill-title">Web Development</div>
            <div className="skill-content">HTML | CSS | JavaScript | ReactJS | Bootstrap | Node.js | ExpressJS | EJS| MongoDB | MySQL | Django </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="skillcard" data-aos="flip-left" data-aos-once="true">
            <div><i class="fab fa-android"></i></div>
            <div className="skill-title">App Development</div>
            <div className="skill-content">Native Android Development (Java) | Flutter | Dart | XML </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="skillcard" data-aos="flip-left" data-aos-once="true">
            <div><i class="fas fa-robot"></i></div>
            <div className="skill-title">Machine Learning</div>
            <div className="skill-content">Python | Pandas | NumPy | Scikit-Learn | Matplotlib | Seaborn </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
