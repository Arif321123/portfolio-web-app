import { useEffect, useState } from "react";
import { getCertifications } from "../api";

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    getCertifications()
      .then((data) => setCertifications(data))
      .catch((error) => {
        console.error("Certifications API error:", error);
      });
  }, []);

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        <div className="certifications-heading">
          <p className="section-label">LEARNING</p>

          <h2>
            Certifications & <span>Knowledge.</span>
          </h2>

          <p>
            I'm continuously learning new technologies and strengthening
            my development and IT skills through practical projects.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((item) => (
            <div className="certification-card" key={item.id}>

              <div className="certification-icon">
                ✓
              </div>

              <div>
                <h3>{item.title}</h3>

                <span>{item.status}</span>

                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
