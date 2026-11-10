import { useEffect, useState } from "react";

const projects = [
  { title: "Patient Information System", type: "School activity", image: "/images/opis.png", alt: "Patient information system interface" },
  { title: "Sales Record Management System", type: "Semi capstone", image: "/images/piggery.png", alt: "Sales record management system interface" },
  { title: "School ID System", type: "Capstone", image: "/images/id.png", alt: "School identification system interface" },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Fastify", "PHP", "Laravel", "MySQL", "MongoDB", "Java", "C#", "Visual Basic"];
const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className={`site-shell${darkMode ? " theme-dark" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="John Jhovir Sorila, home">JJ<span>.</span></a>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(value => !value)} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} title={`Switch to ${darkMode ? "light" : "dark"} mode`}>
            <span aria-hidden="true">{darkMode ? "☼" : "☾"}</span><span>{darkMode ? "Light" : "Dark"}</span>
          </button>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="about" data-enter>
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> Web developer · Philippines</p>
            <h1>Web developer for useful websites and applications.</h1>
            <p className="hero-intro">I’m John Jhovir Sorila. I build for the web with JavaScript, React, Node.js and PHP.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">See my projects <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="mailto:jjsorila@gmail.com">Email John <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/about_man.svg" alt="Illustration of a web developer at work" />
            <span className="visual-index" aria-hidden="true">DEVELOPER PORTFOLIO&nbsp; / &nbsp;01</span>
          </div>
          <div className="hero-meta"><span>Websites · Web applications</span><a href="#skills">View my toolkit <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><p className="eyebrow">01 / Toolkit</p><h2>Tools I work with</h2><p>Front end, server side and data tools used across my projects.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-item" key={skill}><span className="skill-number">{String(index + 1).padStart(2, "0")}</span><span>{skill}</span><span className="skill-mark" aria-hidden="true">↗</span></div>)}</div>
        </section>

        <section className="content-section projects-section section-wrap" id="projects">
          <div className="section-heading section-heading-row"><div><p className="eyebrow">02 / Selected work</p><h2>Projects</h2></div><p>Academic and personal builds across information systems and records management.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}>
            <a className="project-image" href="mailto:jjsorila@gmail.com?subject=Project%20enquiry" aria-label={`Email John to ask about ${project.title}`}><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-arrow" aria-hidden="true">↗</span></a>
            <div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-count">0{index + 1}</span></div>
          </article>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <div className="contact-copy-block"><p className="eyebrow">03 / Contact</p><h2>Have a web project?</h2><p className="contact-copy">Send me a note about what you’re making and how I can help.</p><a className="button button-light" href="mailto:jjsorila@gmail.com">Email John <span aria-hidden="true">↗</span></a></div>
            <div className="contact-links"><a href="https://github.com/jjsorila" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/john-jhovir-sorila-447545229/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://www.facebook.com/dklrjgrg" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><a className="wordmark" href="#about">JJ<span>.</span></a><p>© {new Date().getFullYear()} John Jhovir Sorila</p><a href="#about">Back to top ↑</a></footer>
    </div>
  );
}
