
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="logo" href="#home">
          Arif<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
	  <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="talk-button" href="#contact">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
