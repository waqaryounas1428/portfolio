import "./Toolkit.css";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiBootstrap, SiPostman, SiVercel, SiNetlify } from "react-icons/si";

export const Toolkit = () => {
  return (
    <section id="toolkit" className="toolkit scroll-effect">

      <h1 className="tool-title scroll-effect">Technical Toolkit</h1>

      <p className="tool-subtitle scroll-effect">
        Tools, frameworks and technologies I use to build scalable MERN stack applications.
      </p>

      <div className="tool-grid">

        <div className="tool-card scroll-effect">
          <h3>Frontend Development</h3>
          <div className="tools">
            <span><FaReact /> React.js</span>
            <span><SiJavascript /> JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span><SiTailwindcss /> Tailwind</span>
            <span><SiBootstrap /> Bootstrap</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Backend Development</h3>
          <div className="tools">
            <span><FaNodeJs /> Node.js</span>
            <span><SiExpress /> Express.js</span>
            <span>REST API</span>
            <span>JWT Auth</span>
            <span>MVC</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Database</h3>
          <div className="tools">
            <span><SiMongodb /> MongoDB</span>
            <span>Mongoose</span>
            <span>Schema Design</span>
            <span>CRUD</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Version Control</h3>
          <div className="tools">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span>Branching</span>
            <span>Pull Requests</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Tools & Deployment</h3>
          <div className="tools">
            <span>VS Code</span>
            <span><SiPostman /> Postman</span>
            <span><SiVercel /> Vercel</span>
            <span><SiNetlify /> Netlify</span>
            <span>NPM</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Full Stack Skills</h3>
          <div className="tools">
            <span>API Integration</span>
            <span>Responsive UI</span>
            <span>Debugging</span>
            <span>Optimization</span>
          </div>
        </div>

      </div>

    </section>
  );
};