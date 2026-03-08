import pic2 from "../images/2.jpg";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section scroll-effect">

      {/* LEFT SIDE - CONTACT INFO */}
      <div className="contact-left scroll-effect">
        <h1 className="contact-title scroll-effect">Let’s Build Something Amazing</h1>

        <p className="contact-description scroll-effect">
          Whether you need a full-stack MERN developer, web application architect,
          or project collaborator — I’m here to help you build scalable,
          responsive, and high-performance web solutions.
        </p>

        <div className="contact-items scroll-effect">
          <div className="contact-item scroll-effect">
            <FaEnvelope className="contact-icon" />
            <span>waqaryouns1428@gmail.com</span>
          </div>

          <div className="contact-item scroll-effect">
            <FaPhone className="contact-icon" />
            <span>+92-333-8201428</span>
          </div>

          <div className="contact-item scroll-effect">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/waqar-younas1428/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/waqar-younas1428
            </a>
          </div>

          <div className="contact-item scroll-effect">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/waqaryounas1428"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/waqaryounas1428
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="contact-right scroll-effect">
        <img src={pic2} alt="profile" className="contact-image" />
      </div>

    </section>
  );
};