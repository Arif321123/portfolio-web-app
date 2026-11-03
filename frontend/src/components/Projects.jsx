
import { useEffect, useState } from "react";
import { getProjects } from "../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Projects API error:", error);
      });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="section-label">MY PROJECTS</p>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            A selection of projects that demonstrate my experience with
            backend development, APIs, databases and modern frontend
            technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const technologies = project.technologies
              .split(",")
              .map((technology) => technology.trim())
              .filter(Boolean);

            return (
              <article className="project-card" key={project.id}>
                <div className="project-top">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-type">
                    {project.project_type}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
