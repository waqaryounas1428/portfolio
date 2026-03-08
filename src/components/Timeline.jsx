import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section scroll-effect">
      <h2 className="timeline-title">My Journey</h2>
      <p className="timeline-subtitle">Education & Experience Timeline</p>

      <div className="timeline">
        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaCode />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2024 - Present</span>
            <h3>MERN Stack Training</h3>
            <p>
              Intensive backend development training at EVS Lahore, focusing on Node.js,
              Express.js, and MongoDB to build scalable full-stack applications.
            </p>
          </div>
        </div>

        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2023 - 2024</span>
            <h3>Frontend Development</h3>
            <p>
              Built modern, responsive web applications using React, HTML5, CSS3, and
              JavaScript ES6+, following industry best practices.
            </p>
          </div>
        </div>

        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2020 - 2024</span>
            <h3>Bachelor's Degree</h3>
            <p>
              Completed Bachelor of Science in Information Technology (BSIT) with strong
              foundation in software engineering, data structures, and OOP.
            </p>
          </div>
        </div>

        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaCode />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2019 - 2020</span>
            <h3>Programming Fundamentals</h3>
            <p>
              Started programming journey learning core concepts, algorithms, and
              problem-solving techniques that laid the foundation for development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
