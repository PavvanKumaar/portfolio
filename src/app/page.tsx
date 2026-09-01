import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

/**
 * Root page — single scrollable portfolio.
 */
export default function Home() {
  return (
    <SmoothScrollProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--purple-dark)] focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────── */}
        <HeroSection />

        <hr className="divider" />

        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <p className="section-label">About me</p>
            <h2>The person behind the code</h2>
            <ul
              style={{
                marginTop: "1.5rem",
                maxWidth: "560px",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {[
                "3rd-year Integrated M.Sc. Software Systems student at PSG College of Technology, Coimbatore.",
                "Build full-stack web apps and APIs using React, Node.js, FastAPI, and more.",
                "Cross-platform mobile development with Flutter and Dart.",
                "Deputy Coordinator of the college's Graphic Design Team — video editing and visual content creation.",
              ].map((point) => (
                <li
                  key={point}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    color: "var(--muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--orange)",
                      flexShrink: 0,
                      marginTop: "0.52em",
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Skills ────────────────────────────────────────── */}
        <SkillsSection />

        <hr className="divider" />

        {/* ── Projects ──────────────────────────────────────── */}
        <ProjectsSection />

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
                download="Pavvan_Kumaar_Resume.pdf"
                id="footer-resume-cta"
                className="btn btn-primary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
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
            fontSize: "0.72rem",
            color: "var(--subtle)",
          }}
        >
          © {new Date().getFullYear()} B Pavvan Kumaar
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
