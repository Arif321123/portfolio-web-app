import { useEffect, useState } from "react";
import { getProfile } from "../api";
const CURRENT_YEAR = new Date().getFullYear();
function Footer() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getProfile()
      .then((data) => setProfile(data[0] || null))
      .catch((error) => console.error("Profile API error:", error));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        <a href="#home" className="footer-logo">
          Arif<span>.</span>
        </a>

        <p>
          Python & Django Developer building practical web applications.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
	          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          {profile?.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {profile?.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>

        <div className="footer-bottom">
          <p>
           © {CURRENT_YEAR} Arif Balvar. All rights reserved.
          </p>

          <a href="#home">Back to top ↑</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
