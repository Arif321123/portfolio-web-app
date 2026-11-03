
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
        <p className="section-label">MY EDUCATION</p>
        <h2>Academic Background</h2>
        <p className="section-description">
          My academic journey and educational qualifications.
        </p>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.id}>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              {item.year && <span>{item.year}</span>}
              {item.description && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
