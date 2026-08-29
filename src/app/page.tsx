import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

/**
 * Root page — single scrollable portfolio.
 * Each section will be filled in progressively.
 * Section IDs match the navbar anchor links.
 */
export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section
          id="hero"
          className="hero-bg section noise-overlay"
          style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
        >
          <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "6rem" }}>
            {/* Placeholder — Hero section coming next */}
            <p className="section-label">Hello, world</p>
            <h1>
              B Pavvan{" "}
              <span className="gradient-text">Kumaar</span>
            </h1>
            <p style={{ marginTop: "1.5rem", maxWidth: "520px", fontSize: "1.125rem" }}>
              Full-Stack Developer · Flutter · React · FastAPI
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              <a
                href="/resume/Pavvan_Kumaar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-resume-cta"
                className="btn btn-primary"
              >
                ↓ Download Resume
              </a>
              <a href="#projects" className="btn btn-outline" id="hero-projects-cta">
                View Projects →
              </a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <p className="section-label">About me</p>
            <h2>The person behind the code</h2>
            <p style={{ marginTop: "1.5rem", maxWidth: "640px" }}>
              3rd-year Integrated M.Sc. Software Systems student at PSG College of Technology,
              Coimbatore. I build full-stack web apps, cross-platform mobile apps, and love
              creating polished design work on the side.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Skills ────────────────────────────────────────── */}
        <section id="skills" className="section">
          <div className="container">
            <p className="section-label">Skill set</p>
            <h2>What I work with</h2>
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Python", "Java", "C++", "C", "JavaScript", "Dart", "Flutter", "React.js",
                "Express.js", "FastAPI", "Spring MVC", "Docker", "Git",
                "MySQL", "MongoDB", "PostgreSQL", "Redis"].map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Projects ──────────────────────────────────────── */}
        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">Featured work</p>
            <h2>Projects</h2>
            <p style={{ marginTop: "0.75rem" }}>
              Full project cards with Framer Motion animations — coming next.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Design ────────────────────────────────────────── */}
        <section id="design" className="section">
          <div className="container">
            <p className="section-label">Creative side</p>
            <h2>Design Work</h2>
            <p style={{ marginTop: "0.75rem" }}>
              Masonry gallery with lightbox — coming next.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Contact / Footer ──────────────────────────────── */}
        <section id="contact" className="section">
          <div className="container">
            <p className="section-label">Get in touch</p>
            <h2>Let&apos;s connect</h2>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a
                href="mailto:inboxofpbk@gmail.com"
                id="contact-email"
                className="btn btn-outline"
              >
                ✉ inboxofpbk@gmail.com
              </a>
              <a
                href="/resume/Pavvan_Kumaar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-resume-cta"
                className="btn btn-primary"
              >
                ↓ Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer bar */}
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--subtle)",
          }}
        >
          © {new Date().getFullYear()} B Pavvan Kumaar · Built with Next.js + Tailwind
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
