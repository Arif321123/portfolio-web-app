
import { useEffect, useState } from "react";
import { getExperience } from "../api";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperience()
      .then((data) => setExperiences(data))
      .catch((error) => {
        console.error("Experience API error:", error);
      });
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Education & <span>Experience.</span>
          </h2>

          <p>
            My academic background and professional experience have helped
            me build a strong foundation in computer science and IT.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-date">
                  {item.start_date || "Experience"}
                  {item.end_date ? ` – ${item.end_date}` : ""}
                </span>

                <h3>{item.title}</h3>

                {item.company && <h4>{item.company}</h4>}

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

