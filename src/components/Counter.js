import "./styles/Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  return (
    <div id="counter" className="d-flex justify-content-around">
      {/* Add counting effect and paralax */}
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="far fa-lightbulb my-icon"></i>
        <div>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="number-counter">
                {isVisible ? <CountUp end={5} duration={2} /> : 5}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="d-flex justify-content-center">Completed Projects</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-laptop-code my-icon"></i>
        <div><VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="number-counter">
                {isVisible ? <CountUp end={8} duration={2} /> : 8}
              </div>
            )}
          </VisibilitySensor></div>
        <div>Hackathons Participated</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-award my-icon"></i>
        <div><VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="number-counter">
                {isVisible ? <CountUp end={1} duration={2} /> : 1}
              </div>
            )}
          </VisibilitySensor></div>
        <div>Awards</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
      <i class="fas fa-users my-icon"></i>
        <div><VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp end={166} duration={2} /> : 166}
              </div>
            )}
          </VisibilitySensor></div>
        <div>LinkedIn Connections</div>
      </div>
    </div>
  );
}

export default Counter;
