import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaLaptopCode } from "react-icons/fa";
import "./Expertise.css";

export const Expertise = () => {
  return (
    <section id="expertise" className="expertise scroll-effect">

      <h1 className="title scroll-effect">MERN Stack Expertise</h1>

      <p className="subtitle scroll-effect">
        Passionate MERN Stack Developer building modern, responsive, and scalable web applications.
      </p>

      <div className="cards">

        <div className="card scroll-effect">
          <FaReact className="icon"/>
          <h3>React Development</h3>
          <p>
            Building dynamic and reusable UI components using modern React features
            such as Hooks, component-based architecture and responsive design.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaNodeJs className="icon"/>
          <h3>Node.js Backend</h3>
          <p>
            Developing scalable backend systems using Node.js to handle server logic,
            authentication and efficient data processing for web applications.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaServer className="icon"/>
          <h3>Express APIs</h3>
          <p>
            Designing and building secure RESTful APIs with Express.js to enable
            smooth communication between frontend applications and backend services.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaDatabase className="icon"/>
          <h3>MongoDB Database</h3>
          <p>
            Structuring and managing NoSQL databases using MongoDB, including schema
            design, data modeling and efficient query optimization.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaLaptopCode className="icon"/>
          <h3>Full Stack Integration</h3>
          <p>
            Integrating frontend, backend and database layers to create complete,
            high-performance MERN stack applications.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaCode className="icon"/>
          <h3>Clean Code</h3>
          <p>
            Writing well-structured, maintainable and optimized code while following
            modern development standards and best practices.
          </p>
        </div>

      </div>

    </section>
  );
};