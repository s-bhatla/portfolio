import "./styles/Skills.css"

function Skills() {
  return (
    <div id="skills" className="container-fluid">
      <h2 className="skillka-title">Skills</h2>
      <div className="row">
        <div className=" col-md-4">
          <div className="skillcard">
            <div><i class="fas fa-code"></i></div>
            <div className="skill-title">Web Development</div>
            <div>HTML | CSS | JavaScript | ReactJS | Bootstrap | Node.js | ExpressJS | EJS| MongoDB | MySQL | Django </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="skillcard">
            <div><i class="fab fa-android"></i></div>
            <div className="skill-title">App Development</div>
            <div>Native Android Development (Java) | Flutter | Dart | XML </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="skillcard">
            <div><i class="fas fa-robot"></i></div>
            <div className="skill-title">Machine Learning</div>
            <div>Python | Pandas | NumPy | Scikit-Learn | Matplotlib | Seaborn </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
