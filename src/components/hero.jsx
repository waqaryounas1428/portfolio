import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home">
      <div className="name-title">
        <p className="name scroll-effect">
          <span className="hello">Hello, I'm</span><br />
          <span className="user-name">WAQAR YOUNAS</span><br />
          <span className="titles">MERN Full Stack Developer</span>
        </p>
      </div>


      <div className="content-wrapper">
        <div className="intro-left">
          <div className="intro scroll-effect">
            <p>
              Highly motivated and <span className="highlight">detail-oriented</span> Junior
              <span className="highlight"> MERN Stack Developer</span> with a solid foundation in
              <span className="highlight"> software engineering principles</span>, data structures,
              algorithms, and <span className="highlight"> Object-Oriented Programming</span>.
              Proficient in <span className="highlight"> HTML5</span>,
              <span className="highlight"> CSS3</span>,
              <span className="highlight"> JavaScript (ES6+)</span>,
              <span className="highlight"> Bootstrap 5</span>, and experienced in building modern,
              responsive, and user-friendly frontend applications following best practices.
              Currently advancing backend development skills through intensive training in
              <span className="highlight"> Node.js</span>,
              <span className="highlight"> Express.js</span>, and
              <span className="highlight"> MongoDB</span> at EVS Lahore.

              I hold a <span className="highlight"> Bachelor of Science in Information Technology (BSIT)</span>
              and am passionate about developing scalable full-stack web applications using the
              <span className="highlight"> MERN stack</span>. I am committed to continuous learning,
              improving my problem-solving abilities, and delivering high-quality software that
              enhances user experiences and meets real-world needs.
            </p>
          </div>
        </div>

        <div className="img-right">
          <div className="hero-right scroll-effect">
            <img src={pic2} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
};
