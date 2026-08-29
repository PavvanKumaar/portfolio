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
      <Navbar />

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <HeroSection />

        <hr className="divider" />

        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <p className="section-label">About me</p>
            <h2>The person behind the code</h2>
            <p style={{ marginTop: "1.25rem", maxWidth: "580px" }}>
              3rd-year Integrated M.Sc. Software Systems student at PSG College of Technology,
              Coimbatore. I build full-stack web apps, cross-platform mobile apps,
              and create design work on the side as Deputy Coordinator of the college&apos;s
              Graphic Design Team.
            </p>
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
            fontSize: "0.72rem",
            color: "var(--subtle)",
          }}
        >
          © {new Date().getFullYear()} B Pavvan Kumaar · Built with Next.js &amp; Tailwind
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
