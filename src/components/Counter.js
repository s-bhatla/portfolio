import "./styles/Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  return (
    <div id="counter" className="d-flex justify-content-around">
      {/* Add counting effect and paralax */}
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="far fa-lightbulb my-icon"></i>
        <div className="number-counter">
          5
        </div>
        <div className="d-flex justify-content-center">Completed Projects</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-laptop-code my-icon"></i>
        <div className="number-counter">8</div>
        <div>Hackathons Participated</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-award my-icon"></i>
        <div className="number-counter">1</div>
        <div>Awards</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
      <i class="fas fa-users my-icon"></i>
        <div className="number-counter">318</div>
        <div>LinkedIn Connections</div>
      </div>
    </div>
  );
}

export default Counter;
