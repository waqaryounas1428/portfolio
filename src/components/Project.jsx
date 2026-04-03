import { useState, useEffect } from "react";
import e1 from "../project/p1/1.png";
import e2 from "../project/p1/2.png";
import e3 from "../project/p1/3.png";
import e4 from "../project/p1/4.png";
import w1 from "../project/p2/1.png";
import w2 from "../project/p2/2.png";
import w3 from "../project/p2/3.png";
import w4 from "../project/p2/4.png";
import "./Project.css";

const projects = [
  {
    images: [e1, e2, e3, e4],
    tag: "Research Project",
    title: " Business Landing Website",
    tech: [""],  //HTML", "CSS", "JavaScript
    short: "A fully responsive business website showcasing products, services, gallery, testimonials, FAQ, and contact features with smooth animations.",
    detail: "Built for Noor Marble & Granite Factory using HTML, CSS, and Vanilla JavaScript. Features a clean component-based structure, scroll animations via the Intersection Observer API, and optimized performance across all devices.",
  },
  {
    images: [w1, w2, w3, w4],
    tag: "Research Project",
    title: "Food Ordering Website",
    tech: [""], //HTML", "CSS", "JavaScript
    short: "A responsive food browsing website with categorized menus, hover animations, and a modern clean UI design.",
    detail: "Built using HTML5, CSS3, and Vanilla JavaScript. Features categorized food sections, smooth hover effects, a fully responsive layout, and an intuitive browsing experience focused on clean frontend design.",
  },
];

const ProjectCard = ({ project }) => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="project-card">
      <div className="card-img-wrapper">
        <img src={project.images[index]} alt={project.title} />
        <div className="img-overlay" />
        <div className="img-dots">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="card-body">
        <span className="card-tag">{project.tag}</span>
        <h2 className="card-title">{project.title}</h2>
        <div className="card-tech">
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>
        <p className="card-short">{project.short}</p>

        <div className={`card-detail ${showMore ? "expanded" : ""}`}>
          <p>{project.detail}</p>
        </div>

        <button className="see-more" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less ↑" : "Read More ↓"}
        </button>
      </div>
    </div>
  );
};

export const Project = () => (
  <section id="projects" className="projects scroll-effect">
    <span className="section-label">Portfolio</span>
    <h1 className="Featured-Project">Featured Projects</h1>
    <p className="section-sub">Things I've designed and built</p>
    <div className="project-container">
      {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
    </div>
  </section>
);
