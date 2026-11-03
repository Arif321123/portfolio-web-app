import { useEffect, useState } from "react";
import "./App.css";

import { getProfile } from "./api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile()
      .then((data) => {
        setProfile(data[0]);
      })
      .catch((error) => {
        console.error("Profile API error:", error);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
