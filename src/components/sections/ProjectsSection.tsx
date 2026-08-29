"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, type Project } from "@/lib/site-data";

/* ── Icons ────────────────────────────────────────────────── */

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

/* ── Project numbers ─────────────────────────────────────── */

const PROJECT_NUMBERS = ["01", "02", "03", "04"];

/* ── ProjectCard ─────────────────────────────────────────── */

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const previewTags = project.tags.slice(0, 4);
  const remainingCount = project.tags.length - previewTags.length;

  return (
    <motion.article
      layout
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      style={{
        background: isExpanded
          ? "rgba(65, 43, 107, 0.45)"
          : "rgba(45, 32, 64, 0.55)",
        border: `1px solid ${isExpanded ? "rgba(242, 89, 18, 0.4)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "0",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: isExpanded ? "0 0 40px rgba(242, 89, 18, 0.12)" : "var(--shadow-card)",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onClick={onToggle}
      role="button"
      aria-expanded={isExpanded}
      aria-controls={`project-detail-${project.id}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    >
      {/* ── Card header (always visible) ── */}
      <div style={{ padding: "1.5rem" }}>
        {/* Number + expand indicator */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--orange)",
              opacity: 0.7,
            }}
          >
            {PROJECT_NUMBERS[index]}
          </span>

          <span style={{ color: isExpanded ? "var(--orange)" : "var(--subtle)" }}>
            <ChevronIcon open={isExpanded} />
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        {/* Short description */}
        <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1.1rem" }}>
          {project.description}
        </p>

        {/* Preview tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center" }}>
          {previewTags.map((tag) => (
            <span key={tag} className="tag" onClick={(e) => e.stopPropagation()}>
              {tag}
            </span>
          ))}
          {remainingCount > 0 && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "var(--subtle)",
                letterSpacing: "0.05em",
              }}
            >
              +{remainingCount} more
            </span>
          )}
        </div>
      </div>

      {/* ── Expanded detail ── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`project-detail-${project.id}`}
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(242, 89, 18, 0.2)",
                padding: "1.25rem 1.5rem 1.5rem",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full description */}
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {project.longDescription}
              </p>

              {/* All tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-orange"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "99px",
                      background: "rgba(242, 89, 18, 0.12)",
                      border: "1px solid rgba(242, 89, 18, 0.3)",
                      color: "var(--orange-light)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-github-${project.id}`}
                    className="btn btn-outline"
                    style={{ padding: "0.45rem 1.1rem", fontSize: "0.82rem", gap: "0.4rem" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-demo-${project.id}`}
                    className="btn btn-primary"
                    style={{ padding: "0.45rem 1.1rem", fontSize: "0.82rem", gap: "0.4rem" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ── ProjectsSection ──────────────────────────────────────── */

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="section-label">Featured work</p>
          <h2>Projects</h2>
          <p style={{ marginTop: "0.6rem", maxWidth: "440px", fontSize: "0.95rem" }}>
            A selection of things I&apos;ve built — click any card to see the full story.
          </p>
        </motion.div>

        {/* Grid */}
        <LayoutGroup>
          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
              gap: "1.25rem",
              alignItems: "start",
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isExpanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            ))}
          </div>
        </LayoutGroup>

      </div>
    </section>
  );
}
