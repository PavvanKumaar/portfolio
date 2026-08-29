"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site-data";

/* ── Blob sizes ──────────────────────────────────────────── */
const BLOB1 = 700; // px — large, heavy, purple
const BLOB2 = 420; // px — smaller, faster, orange accent

/* ── CursorBlobs (isolated client sub-component) ────────── */
function CursorBlobs() {
  // Raw cursor position
  const rawX = useMotionValue(-BLOB1);
  const rawY = useMotionValue(-BLOB1);

  // Blob 1 — heavy, dreamy lag (purple)
  const b1X = useSpring(rawX, { stiffness: 45, damping: 18, mass: 3 });
  const b1Y = useSpring(rawY, { stiffness: 45, damping: 18, mass: 3 });

  // Blob 2 — lighter, slightly faster (orange accent)
  const b2X = useSpring(rawX, { stiffness: 75, damping: 24, mass: 1.4 });
  const b2Y = useSpring(rawY, { stiffness: 75, damping: 24, mass: 1.4 });

  // Shift so blob center tracks the cursor
  const blob1X = useTransform(b1X, (v) => v - BLOB1 / 2);
  const blob1Y = useTransform(b1Y, (v) => v - BLOB1 / 2);
  const blob2X = useTransform(b2X, (v) => v - BLOB2 / 2);
  const blob2Y = useTransform(b2Y, (v) => v - BLOB2 / 2);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const section = document.getElementById("hero");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      rawX.set(e.clientX - rect.left);
      rawY.set(e.clientY - rect.top);
    },
    [rawX, rawY]
  );

  useEffect(() => {
    const section = document.getElementById("hero");
    if (!section) return;
    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <>
      {/* Blob 1 — large, heavy, purple */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: BLOB1,
          height: BLOB1,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(92,62,148,0.55) 0%, rgba(65,43,107,0.25) 45%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.85,
          pointerEvents: "none",
          zIndex: 1,
          willChange: "transform",
          x: blob1X,
          y: blob1Y,
        }}
      />

      {/* Blob 2 — accent, faster, orange */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: BLOB2,
          height: BLOB2,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(242,89,18,0.28) 0%, rgba(242,89,18,0.08) 50%, transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.9,
          pointerEvents: "none",
          zIndex: 1,
          willChange: "transform",
          x: blob2X,
          y: blob2Y,
        }}
      />
    </>
  );
}

/* ── Typing roles ────────────────────────────────────────── */
const ROLES = [
  "Full-Stack Developer",
  "Flutter Developer",
  "React Developer",
  "FastAPI Developer",
  "UI/UX Designer",
];

const TYPE_SPEED   = 65;  // ms per char (typing)
const DELETE_SPEED = 35;  // ms per char (deleting)
const PAUSE_AFTER  = 1800; // ms pause after fully typed
const PAUSE_BEFORE = 350;  // ms pause before next word starts

/* ── Social icon SVGs ────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452H17.01v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.581V9h3.31v1.561h.046c.461-.873 1.588-1.794 3.268-1.794 3.495 0 4.141 2.3 4.141 5.293v6.392zM5.337 7.433a1.92 1.92 0 1 1 0-3.841 1.92 1.92 0 0 1 0 3.841zM6.96 20.452H3.71V9h3.25v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

/* ── useTypingEffect hook ────────────────────────────────── */
function useTypingEffect(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      timerRef.current = setTimeout(() => setIsPaused(false), PAUSE_AFTER);
      return;
    }

    if (!isDeleting && displayed === currentWord) {
      // Fully typed → pause then delete
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPaused(true);
      timerRef.current = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
      return;
    }

    if (isDeleting && displayed === "") {
      // Fully deleted → move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      // We don't really need a timeout here that does nothing, but keeping it as it was
      timerRef.current = setTimeout(() => {}, PAUSE_BEFORE);
      return;
    }

    const delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    timerRef.current = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayed, isDeleting, isPaused, wordIndex, words]);

  return displayed;
}

/* ── Framer Motion variants ──────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

/* ── TypingRole component ────────────────────────────────── */
// ⚡ Bolt: Isolated the typing effect into its own component.
// This prevents the entire HeroSection (and all its motion children)
// from re-rendering every ~65ms during the typing animation.
function TypingRole() {
  const typedRole = useTypingEffect(ROLES);

  return (
    <>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          color: "var(--muted)",
          letterSpacing: "-0.01em",
        }}
      >
        {typedRole}
      </span>
      <span className="typing-cursor" aria-hidden="true" />
    </>
  );
}

/* ── Component ───────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",   // clip blobs that drift outside
      }}
    >
      {/* Cursor-reactive blobs — rendered before content so they sit below */}
      <CursorBlobs />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2, paddingTop: "7rem", paddingBottom: "5rem" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "720px" }}
        >
          {/* Eyebrow */}
          <motion.p variants={itemVariants} className="section-label">
            Portfolio
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{ lineHeight: 1.05, marginBottom: "1rem" }}
          >
            B Pavvan{" "}
            <span className="gradient-text">Kumaar</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "2.5rem",
              marginBottom: "1.75rem",
            }}
          >
            <TypingRole />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            style={{ maxWidth: "480px", fontSize: "1rem", marginBottom: "2.5rem" }}
          >
            3rd-year Integrated M.Sc. Software Systems student at{" "}
            <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
              PSG College of Technology
            </span>
            . Building full-stack apps and design experiences from Coimbatore.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              id="hero-resume-cta"
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <DownloadIcon />
              Resume
            </a>

            <a
              id="hero-projects-cta"
              href="#projects"
              className="btn btn-outline"
            >
              View Projects
              <ArrowRightIcon />
            </a>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.5rem", marginLeft: "0.25rem" }}>
              <a
                id="hero-github"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub profile"
              >
                <GithubIcon />
              </a>
              <a
                id="hero-linkedin"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon />
              </a>
              <a
                id="hero-email"
                href={`mailto:${siteConfig.email}`}
                className="btn-icon"
                aria-label="Send email"
              >
                <EmailIcon />
              </a>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <motion.div
              style={{
                width: "1px",
                height: "2.5rem",
                background: "linear-gradient(to bottom, var(--orange), transparent)",
                borderRadius: "2px",
              }}
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--subtle)",
              }}
            >
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
