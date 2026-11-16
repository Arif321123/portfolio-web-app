import { FiBookOpen, FiMapPin, FiCode } from "react-icons/fi";

function About({ profile }) {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <div className="about-card">
            {profile?.photo ? (
              <img
                src={profile.photo}
                alt={`${profile?.name || "Arif Balvar"} - Profile`}
              />
            ) : (
              <span>AB</span>
            )}
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building solutions with{" "}
            <span>code & creativity.</span>
          </h2>

          <p>
            I'm {profile?.name || "Arif Balvar"}, a Computer Science
            graduate and aspiring{" "}
            {profile?.title || "Python & Django Developer"}.
            I enjoy building practical, scalable, and user-friendly
            web applications.
          </p>

          <p>
            My current focus is on Python, Django,
            Django REST Framework, React, databases,
            and modern web development. I'm continuously
            improving my problem-solving skills and learning
            how to build production-ready applications.
          </p>

          <div className="about-details">

            <div className="about-detail-item">
              <FiBookOpen className="about-detail-icon" />
              <div>
                <strong>Education</strong>
                <span>Bachelor's in Computer Science</span>
              </div>
            </div>

            <div className="about-detail-item">
              <FiCode className="about-detail-icon" />
              <div>
                <strong>Development Focus</strong>
                <span>Python & Django Development</span>
              </div>
            </div>

            <div className="about-detail-item">
              <FiMapPin className="about-detail-icon" />
              <div>
                <strong>Location</strong>
                <span>{profile?.location || "India"}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
