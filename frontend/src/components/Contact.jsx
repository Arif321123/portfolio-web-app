
import { useEffect, useState } from "react";
import { sendContactMessage, getProfile } from "../api";

function Contact() {
  const [profile, setProfile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    getProfile()
      .then((data) => setProfile(data[0] || null))
      .catch((error) => console.error("Profile API error:", error));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Sending...");

    try {
      await sendContactMessage(formData);

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact API error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">CONTACT ME</p>

          <h2>
            Let's build something <span>together.</span>
          </h2>

          <p>
            I'm open to software development, Python/Django and IT
            opportunities. If you have a project, opportunity or simply
            want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            {profile?.email && (
              <div className="contact-item">
                <div className="contact-icon">@</div>
                <div>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
              </div>
            )}

            {profile?.linkedin && (
              <div className="contact-item">
                <div className="contact-icon">in</div>
                <div>
                  <span>LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            )}

            {profile?.github && (
              <div className="contact-item">
                <div className="contact-icon">GH</div>
                <div>
                  <span>GitHub</span>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub Profile
                  </a>
                </div>
              </div>
            )}

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Message
            </button>

            {status && <p>{status}</p>}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
