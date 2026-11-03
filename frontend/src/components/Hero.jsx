
import { useEffect, useState } from "react";
import { getProfile } from "../api";

function Hero() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((data) => setProfile(data[0] || null))
      .catch((error) => console.error("Profile API error:", error));
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            {profile?.name || "Arif Balvar"}
          </h1>

          <h2>{profile?.title || "Python & Django Developer"}</h2>

          <p className="hero-description">
            {profile?.bio ||
              "I build clean, scalable and user-friendly web applications using Python, Django, React and modern web technologies."}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

            {profile?.resume && (
              <a
                href={profile.resume}
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
                download
              >
                Download CV
              </a>
            )}
          </div>

          <div className="hero-socials">
            {profile?.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {profile?.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
	     )}
          </div>
        </div>

        <div className="hero-image">
         <div className="profile-circle">
  {profile?.photo ? (
    <img src={profile.photo} alt="Arif Balvar" />
  ) : (
    <span>AB</span>
  )}
         
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
