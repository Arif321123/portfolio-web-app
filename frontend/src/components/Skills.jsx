
import { useEffect, useState } from "react";
import { getSkills } from "../api";



function Skills() {
const skillImages = {
  python: "/skill-icons/python.png",
  django: "/skill-icons/django.png",
  "django rest framework": "/skill-icons/django-rest-framework.png",
  react: "/skill-icons/react.png",
  "sql / sqlite": "/skill-icons/sql-sqlite.png",
  "git & github": "/skill-icons/git-github.png",
  linux: "/skill-icons/linux.png",
  networking: "/skill-icons/networking.png",
};
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => {
        console.error("Skills API error:", error);
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p>
            These are the technologies and tools I use while building
            applications and improving my development skills.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const imagePath =
              skillImages[skill.name.trim().toLowerCase()];

            return (
              <div className="skill-card" key={skill.id}>
                <div className="skill-icon">
                  {imagePath ? (
                    <img
                      src={imagePath}
                      alt={`${skill.name} logo`}
                    />
                  ) : (
                    <span>{skill.name.charAt(0)}</span>
                  )}
                </div>

                <h3>{skill.name}</h3>

                <span className="skill-level">
                  {skill.level}
                </span>

                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
