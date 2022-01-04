import "./styles/Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  return (
    <div id="counter" className="d-flex justify-content-around">
      {/* Add counting effect and paralax */}
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="far fa-lightbulb"></i>
        <div>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp end={5} duration={2} /> : 0}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="d-flex justify-content-center">Completed Projects</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-laptop-code"></i>
        <div><VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp end={8} duration={2} /> : 0}
              </div>
            )}
          </VisibilitySensor></div>
        <div>Hackathons Participated</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-award"></i>
        <div><VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp end={1} duration={2} /> : 0}
              </div>
            )}
          </VisibilitySensor></div>
        <div>Awards</div>
      </div>
      <div className="d-flex flex-column justify-content-center counter-ele">
        <i class="fas fa-user-plus"></i>
        <div><VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp end={166} duration={2} /> : 169}
              </div>
            )}
          </VisibilitySensor></div>
        <div>LinkedIn Connections</div>
      </div>
    </div>
  );
}

export default Counter;
