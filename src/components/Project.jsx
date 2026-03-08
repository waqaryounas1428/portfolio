import React, { useState, useEffect } from "react";

// First project images
import e1 from "../project/p1/1.png";
import e2 from "../project/p1/2.png";
import e3 from "../project/p1/3.png";
import e4 from "../project/p1/4.png";

// Second project images
import w1 from "../project/p2/1.png";
import w2 from "../project/p2/2.png";
import w3 from "../project/p2/3.png";
import w4 from "../project/p2/4.png";

import "./Project.css";

export const Project = () => {

    // First project images
    const ecomImages = [e1, e2, e3, e4];
    const [ecomIndex, setEcomIndex] = useState(0);

    // Second project images
    const weatherImages = [w1, w2, w3, w4];
    const [weatherIndex, setWeatherIndex] = useState(0);

    // See More states
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);

    // Auto slider first card
    useEffect(() => {
        const interval = setInterval(() => {
            setEcomIndex(prev => prev === ecomImages.length - 1 ? 0 : prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Auto slider second card
    useEffect(() => {
        const interval = setInterval(() => {
            setWeatherIndex(prev => prev === weatherImages.length - 1 ? 0 : prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="projects scroll-effect">
            <h1 className="Featured-Project">Featured Projects</h1>
            <div className="project-container">
                {/* First Card */}
                <div className="project-card">
                    <img
                        src={ecomImages[ecomIndex]}
                        alt="E-Commerce project"
                        className="flip-image"
                    />
                    <p className="Research-Projec">Research Project</p>
                    <h2>MERN Stack Web Application</h2>
                    <h4 className="Shor- Description">Short Description</h4>
                    <p>
                        A full-stack web application built using MongoDB, Express.js, React.js, and
                        Node.js that demonstrates modern web development practices.
                    </p>
                    <h4>Detail</h4>
                    <p>
                        {showMore1
                            ? "This project is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes frontend UI built with React and backend APIs developed with Node.js and Express. The project demonstrates how to build a complete web application with database integration and dynamic user interactions."
                            : "This project is a full-stack web application developed using the MERN stack..."
                        }
                    </p>
                    <button
                        className="see-more"
                        onClick={() => setShowMore1(!showMore1)}
                    >
                        {showMore1 ? "See Less" : "See More"}
                    </button>
                </div>


                {/* Second Card */}

                <div className="project-card">

                    <img
                        src={weatherImages[weatherIndex]}
                        alt="Food Website"
                        className="flip-image"
                    />
                    <p className="Research-Projec">Research Project</p>
                    <h2>Responsive Food Website</h2>
                    <h4 className="Shor- Description">Short Description</h4>
                    <p>
                        A responsive food website built using HTML, CSS, and JavaScript where users
                        can explore different food items with a clean and modern UI design.
                    </p>
                    <h4>Detail</h4>
                    <p>
                        {showMore2
                            ? "This project is a responsive food website developed using HTML, CSS, and JavaScript. It includes different food sections, attractive layout, and smooth navigation. The goal of this project is to practice frontend development and create a visually appealing food browsing experience."
                            : "This project is a responsive food website developed using HTML, CSS..."
                        }
                    </p>
                    <button
                        className="see-more"
                        onClick={() => setShowMore2(!showMore2)}
                    >
                        {showMore2 ? "See Less" : "See More"}
                    </button>
                </div>
            </div>

        </section>
    );
};