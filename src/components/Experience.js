import "./styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

function Experience() {
  return (
    <div id="experience" className="container-fluid">
      <h2 className="topic-head">Experience</h2>
      {/* Create a timeline here */}
      <VerticalTimeline lineColor="#b46fd9">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002-2018"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          icon={<SchoolIcon />}
          position={"left"}
        >
          <h3 className="vertical-timeline-element-title">
            Ryan International School,
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chandigarh
          </h4>
          <p>Class 10th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-present"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          icon={<SchoolIcon />}
          position={"left"}
        >
          <h3 className="vertical-timeline-element-title">
            National Institute of Technology,
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Delhi
          </h4>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(80, 40, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(80, 40, 128)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(203, 158, 255)", color: "#fff" }}
          icon={<WorkIcon />}
          position={"right"}
        >
          <h3 className="vertical-timeline-element-title">Volunteer</h3>
          <h4 className="vertical-timeline-element-subtitle">NIT-Delhi Technical Club, Upvision</h4>
          <p>
            Worked to help organize various multiple tournaments for the college community.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(80, 40, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(80, 40, 128)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(203, 158, 255)", color: "#fff" }}
          icon={<WorkIcon />}
          position={"right"}
        >
          <h3 className="vertical-timeline-element-title">Executive Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Google Developer Student Club</h4>
          <p>
            Worked to organize various seminars and events which were attended by over 150 students.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
