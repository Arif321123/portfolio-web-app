function About({ profile }) {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <div className="about-card">
            <span>AB</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building solutions with <span>code & creativity.</span>
          </h2>

          <p>
           I'm {profile?.name || "Arif Balvar"}, a Computer Science graduate and aspiring
{profile?.title || "Python & Django Developer"}. I enjoy building practical,
scalable and user-friendly web applications.
          </p>

          <p>
            My current focus is on Python, Django, Django REST Framework,
            React, databases and modern web development. I'm continuously
            improving my problem-solving skills and learning how to build
            production-ready applications.
          </p>

          <div className="about-details">
            <div>
              <strong>Education</strong>
              <span>Bachelor's in Computer Science</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>Python & Django Development</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>{profile?.location || "India"}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
