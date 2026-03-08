import { FaGraduationCap, FaCode, FaRocket, FaHeart } from "react-icons/fa";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about scroll-effect">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">Passionate Developer | Problem Solver | Lifelong Learner</p>

        <div className="about-content">
          <div className="about-card scroll-effect">
            <FaGraduationCap className="about-icon" />
            <h3>Education</h3>
            <p>
              Bachelor of Science in Information Technology (BSIT) with a strong foundation
              in software engineering, data structures, and algorithms.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaCode className="about-icon" />
            <h3>Development</h3>
            <p>
              Specialized in MERN stack development, creating responsive and scalable
              web applications with modern technologies and best practices.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaRocket className="about-icon" />
            <h3>Innovation</h3>
            <p>
              Always exploring new technologies and frameworks to deliver cutting-edge
              solutions that enhance user experiences.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaHeart className="about-icon" />
            <h3>Passion</h3>
            <p>
              Committed to continuous learning and growth, turning complex problems
              into elegant solutions through clean, maintainable code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
