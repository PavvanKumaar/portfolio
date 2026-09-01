"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiReact, SiFlutter, SiDart, SiJavascript,
  SiDocker, SiGit, SiPostman, SiMongodb,
  SiMysql, SiSpring, SiLinux,
  SiCplusplus, SiExpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import type { IconType } from "react-icons";

/* ── Skill data ───────────────────────────────────────────── */

type Skill = {
  name: string;
  Icon: IconType;
  iconColor: string;
};

type Category = {
  label: string;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python",     Icon: SiPython,     iconColor: "#4B8BBE" },
      { name: "Java",       Icon: FaJava,        iconColor: "#ED8B00" },
      { name: "C++",        Icon: SiCplusplus,   iconColor: "#00599C" },
      { name: "JavaScript", Icon: SiJavascript,  iconColor: "#F7DF1E" },
      { name: "Dart",       Icon: SiDart,        iconColor: "#0175C2" },
    ],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      { name: "Flutter",    Icon: SiFlutter,     iconColor: "#54C5F8" },
      { name: "React.js",   Icon: SiReact,       iconColor: "#61DAFB" },
      { name: "Express.js", Icon: SiExpress,     iconColor: "#999999" },
      { name: "Spring MVC", Icon: SiSpring,      iconColor: "#6DB33F" },
      { name: "Docker",     Icon: SiDocker,      iconColor: "#2496ED" },
      { name: "Git",        Icon: SiGit,         iconColor: "#F05032" },
      { name: "Postman",    Icon: SiPostman,     iconColor: "#FF6C37" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL",      Icon: SiMysql,       iconColor: "#4479A1" },
      { name: "MongoDB",    Icon: SiMongodb,     iconColor: "#47A248" },
    ],
  },
  {
    label: "Platforms",
    skills: [
      { name: "Linux",   Icon: SiLinux,   iconColor: "#FCC624" },
      { name: "Windows", Icon: FaWindows, iconColor: "#0078D6" },
    ],
  },
];

/* ── Animation variants ───────────────────────────────────── */

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const } },
};

const headingVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0,
    transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ── SkillCard ────────────────────────────────────────────── */

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.55rem",
        padding: "1rem 0.75rem",
        borderRadius: "var(--radius-md)",
        background: "rgba(45, 32, 64, 0.55)",
        border: "1px solid rgba(255,255,255,0.07)",
        cursor: "default",
        transition: "border-color 0.25s, box-shadow 0.25s",
        minWidth: "80px",
      }}
      onHoverStart={(e) => {
        const el = e.target as HTMLElement;
        el.style.borderColor = "rgba(242, 89, 18, 0.45)";
        el.style.boxShadow = "0 0 20px rgba(242, 89, 18, 0.18)";
      }}
      onHoverEnd={(e) => {
        const el = e.target as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.boxShadow = "none";
      }}
    >
      <skill.Icon
        size={26}
        style={{ color: skill.iconColor, flexShrink: 0 }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "var(--muted)",
          textAlign: "center",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ── SkillsSection ────────────────────────────────────────── */

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
        >
          <p className="section-label">Skill set</p>
          <h2>Tools of the trade</h2>
          <p style={{ marginTop: "0.6rem", maxWidth: "440px", fontSize: "0.95rem" }}>
            Languages, frameworks, and platforms I reach for when building.
          </p>
        </motion.div>

        {/* Categories */}
        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--subtle)",
                  marginBottom: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "1.5rem",
                    height: "1px",
                    background: "var(--subtle)",
                  }}
                />
                {cat.label}
              </motion.p>

              {/* Skill grid */}
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.625rem",
                }}
              >
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
