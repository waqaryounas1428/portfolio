import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Stats } from "./components/Stats";
import { Timeline } from "./components/Timeline";
import { Toolkit } from "./components/Toolkit";
import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".scroll-effect");

    hiddenElements.forEach((el) => observer.observe(el));

  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Expertise />
      <Timeline />
      <Project />
      <Toolkit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;