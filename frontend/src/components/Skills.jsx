import { useEffect, useState } from "react";
import { getSkills } from "../api";

function Skills() {
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
          {skills.map((skill) => (
            <div className="skill-card" key={skill.id}>

              <div className="skill-icon">
                {skill.name.charAt(0)}
              </div>

              <h3>{skill.name}</h3>

              <span className="skill-level">
                {skill.level}
              </span>

              <p>{skill.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
