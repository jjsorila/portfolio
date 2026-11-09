import { useState } from "react";

const projects = [
  { title: "Online Patient Information System", type: "School activity", image: "/images/opis.png", alt: "Patient information system interface" },
  { title: "Transaction Sales Record Management System", type: "Semi capstone", image: "/images/piggery.png", alt: "Sales record management system interface" },
  { title: "School ID System", type: "Capstone", image: "/images/id.png", alt: "School identification system interface" },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Fastify", "PHP", "Laravel", "MySQL", "MongoDB", "Java", "C#", "Visual Basic"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("ui") === "false");
  const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];

  return (
    <div className={darkMode ? "site-shell theme-dark" : "site-shell"}>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="JJ Sorila, home">JJ<span>.</span></a>
        <button className="theme-toggle" onClick={() => setDarkMode(value => { localStorage.setItem("ui", JSON.stringify(!value)); return !value; })} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}><span aria-hidden="true">{darkMode ? "☼" : "◐"}</span><span className="theme-toggle-label">{darkMode ? "Light" : "Dark"}</span></button>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="about" data-enter>
          <div className="hero-copy">
            <p className="eyebrow">Web developer · Philippines</p>
            <h1>Web developer building useful digital experiences.</h1>
            <p className="hero-intro">I’m John Jhovir Sorila. I build websites and web applications with JavaScript, React, Node.js and PHP.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">See my projects <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="mailto:jjsorila@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/images/about_man.svg" alt="" />
            <span className="visual-index">01 / 04</span>
          </div>
          <div className="hero-meta"><span>Available for web projects</span><a href="#skills">Scroll to explore <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><p className="eyebrow">01 — Toolkit</p><h2>Tools I work with</h2><p>Front end, server side, and the data layer.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-item" key={skill}><span className="skill-number">{String(index + 1).padStart(2, "0")}</span><span>{skill}</span><span className="skill-mark" aria-hidden="true">↗</span></div>)}</div>
        </section>

        <section className="content-section projects-section section-wrap" id="projects">
          <div className="section-heading section-heading-row"><div><p className="eyebrow">02 — Selected work</p><h2>Projects</h2></div><p>Selected academic and personal builds.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}>
            <a className="project-image" href="#contact" aria-label={`Ask about ${project.title}`}><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-arrow" aria-hidden="true">↗</span></a>
            <div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-count">0{index + 1}</span></div>
          </article>)}</div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div><p className="eyebrow">03 — Contact</p><h2>Have a project in mind?</h2><p className="contact-copy">Tell me what you’re working on. I’d be glad to hear about it.</p><a className="button button-light" href="mailto:jjsorila@gmail.com">Email John <span aria-hidden="true">↗</span></a></div>
          <div className="contact-links"><a href="mailto:jjsorila@gmail.com">Email <span>↗</span></a><a href="https://github.com/jjsorila" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/john-jhovir-sorila-447545229/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://www.facebook.com/dklrjgrg" target="_blank" rel="noreferrer">Facebook <span>↗</span></a></div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><a className="wordmark" href="#about">JJ<span>.</span></a><p>© {new Date().getFullYear()} John Jhovir Sorila</p><a href="#about">Back to top ↑</a></footer>
    </div>
  );
}
