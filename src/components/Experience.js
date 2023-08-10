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
      <VerticalTimeline lineColor="#b46fd9" animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002-2018"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          icon={<SchoolIcon />}
          position={"left"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">
            Ryan International School,
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Chandigarh</h4>
          <p>Class 10th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-present"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          icon={<SchoolIcon />}
          position={"right"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">
            National Institute of Technology,
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Delhi</h4>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002-2018"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          icon={<SchoolIcon />}
          position={"left"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">Volunteer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            NIT-Delhi Technical Club, Upvision
          </h4>
          <p>
            Worked to help organize various tournaments for the college
            community.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          icon={<SchoolIcon />}
          position={"right"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">Executive Member</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Google Developer Student Club
          </h4>
          <p>
            Organized various seminars and events which were attended by over
            150 students. Promoted to Lead in 2022.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(80, 40, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(80, 40, 128)" }}
          date="2022 July - 2022 August"
          iconStyle={{ background: "rgb(203, 158, 255)", color: "#fff" }}
          icon={<WorkIcon />}
          position={"left"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">
            Web Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ideas to Impacts
          </h4>
          <p>
            Worked on creating the landing page for a hackathon organized by
            FIS.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(40, 62, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(40, 62, 128)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(140, 190, 255)", color: "#fff" }}
          icon={<SchoolIcon />}
          position={"right"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">Club Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Google Developer Student Club
          </h4>
          <p>
            Acted as the Leader of the Google Developer Student Club of my
            college. Managed over 20 members and organized various technical
            events in the college.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(80, 40, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(80, 40, 128)" }}
          date="2022 July - 2022 August"
          iconStyle={{ background: "rgb(203, 158, 255)", color: "#fff" }}
          icon={<WorkIcon />}
          position={"left"}
          animate={false}>
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            K2Q Capital Ltd.
          </h4>
          <p>
            Enhanced K2Q Capital's brand impact by crafting a NextJS-Firebase
            website, complete with a functioning Contact Me page, Careers
            portal, and a landing page.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
