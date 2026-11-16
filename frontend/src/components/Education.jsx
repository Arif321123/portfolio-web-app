
import { useEffect, useState } from "react";
import { getEducation } from "../api";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getEducation()
      .then((data) => setEducation(data))
      .catch((error) => console.error("Education API error:", error));
  }, []);

  return (
    <section className="education" id="education">
      <div className="section-container">

        <div className="education-heading">
          <p className="section-label">MY EDUCATION</p>
          <h2>My Academic <span>Journey.</span></h2>
          <p className="section-description">
            Building my knowledge and technical foundation through
            academic learning and continuous growth.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.id}>

              <div className="education-card-top">
                <div className="education-icon" aria-hidden="true">
                  🎓
                </div>

                {item.year && (
                  <span className="education-year">
                    {item.year}
                  </span>
                )}
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              {item.description && (
                <p>{item.description}</p>
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
