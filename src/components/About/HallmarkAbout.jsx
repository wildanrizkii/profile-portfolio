"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Projects from "../Projects/About";
import TechTools from "../TechTools";
import SmoothScrollHero from "../Parallax";
import { useTransitionState } from "../PageTransition";
import { GraduationCap, Briefcase, Award, MapPin, Calendar, Download, Sparkles, ChevronRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const backgroundFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

const navbarFadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
  },
};

const milestones = [
  {
    year: "2019",
    title: "Informatics Graduate",
    institution: "Parahyangan Catholic University",
    icon: <GraduationCap className="w-5 h-5 text-foreground" />,
    description: "Specialized in Software Engineering, database systems, and web frameworks. Built strong foundations in computing algorithms, system design, and cooperative software engineering.",
  },
  {
    year: "2023",
    title: "CyberOps & DevNet Associate",
    institution: "Cisco Networking Academy",
    icon: <Award className="w-5 h-5 text-foreground" />,
    description: "Gained core hands-on experience in networking automation scripts, cloud API security protocols, threat detection procedures, and infrastructure-as-code structures.",
  },
  {
    year: "2024",
    title: "Google Cloud Computing Foundations",
    institution: "Google Cloud Academic Program",
    icon: <Award className="w-5 h-5 text-foreground" />,
    description: "Completed comprehensive practical training in cloud infrastructure, container orchestration, cloud application deployments, and virtualization engines.",
  },
  {
    year: "2024",
    title: "Full-Stack Freelance Developer",
    institution: "Apotek Adora",
    icon: <Briefcase className="w-5 h-5 text-foreground" />,
    description: "Developed and launched custom high-performance web systems (e.g. Sales support tools, inventory dashboards, cash monitors) using Next.js, PostgreSQL, and Supabase.",
  },
  {
    year: "2025 - Present",
    title: "Web Developer",
    institution: "PT Ganesha Operation",
    icon: <Briefcase className="w-5 h-5 text-foreground" />,
    description: "Developing and maintaining internal web applications to support academic operations and digital learning management systems at one of Indonesia's leading educational institutions.",
  },
];

const quickFacts = [
  { icon: <MapPin className="w-5 h-5 text-foreground" />, label: "Bandung, Indonesia" },
  { icon: <GraduationCap className="w-5 h-5 text-foreground" />, label: "Informatics UNPAR" },
  { icon: <Sparkles className="w-5 h-5 text-foreground" />, label: "UI/UX & Full Stack" },
];

import { useAesthetic } from "@/context/AestheticContext";

const About = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();

  const isHallmark = aesthetic === "hallmark";

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden min-h-screen">
        {/* Background Grid Pattern or Circle Animation */}
        {isHallmark ? (
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--muted-foreground) 1px, transparent 1px),
                linear-gradient(to bottom, var(--muted-foreground) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        ) : (
          <motion.section
            className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-0"
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            variants={backgroundFadeIn}
          >
            <CircleAnimatedBackground />
          </motion.section>
        )}

        {/* Navigation */}
        <Navbar />

        {/* Redesigned Hero Section */}
        <motion.section
          className={isHallmark
            ? "relative px-6 pt-44 pb-20 max-w-5xl mx-auto z-10"
            : "relative px-4 md:px-12 py-40 md:py-48 max-w-5xl mx-auto z-10"
          }
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className={isHallmark 
            ? "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full mx-auto"
            : "grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center w-full mx-auto"
          }>
            {/* Left side: Typography, Name & Quick Facts */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div className="space-y-4" variants={fadeInUp}>
                <motion.div
                  variants={fadeInUp}
                  className={isHallmark
                    ? "flex items-center gap-2 px-3 py-1 border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-white/5 text-foreground text-[10px] font-mono uppercase tracking-widest w-fit select-none mb-2 rounded-none"
                    : "flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-transparent text-foreground text-sm font-semibold w-fit select-none mb-2"
                  }
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full opacity-75 ${isHallmark ? "rounded-none bg-neutral-400 dark:bg-neutral-600" : "rounded-full bg-neutral-400 dark:bg-neutral-600"}`}></span>
                    <span className={`relative inline-flex h-1.5 w-1.5 bg-foreground ${isHallmark ? "rounded-none" : "rounded-full"}`}></span>
                  </span>
                  Available for Freelance Projects
                </motion.div>
                <h1 className={isHallmark 
                  ? "text-5xl md:text-7xl font-serif font-normal text-foreground leading-none tracking-tight" 
                  : "text-4xl md:text-6xl font-black text-dark-gray leading-none tracking-tight"
                }>
                  Wildan Rizki Nurfauzi
                </h1>
                <p className={isHallmark 
                  ? "text-xl font-serif italic text-muted-foreground leading-relaxed" 
                  : "text-lg md:text-xl font-semibold text-muted-foreground leading-relaxed"
                }>
                  "Turning complex logic into clean, delightful digital experiences."
                </p>
              </motion.div>

              {/* Quick Facts Cards */}
              <motion.div
                className={isHallmark ? "grid grid-cols-1" : "grid grid-cols-1 gap-4"}
                variants={staggerChildren}
              >
                {quickFacts.map((fact, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={isHallmark ? undefined : { y: -3, scale: 1.02 }}
                    className={isHallmark
                      ? "flex flex-row items-center gap-4 p-4 border border-neutral-300 dark:border-neutral-800 -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-md rounded-none cursor-none clickable hover:bg-foreground hover:text-background transition-all duration-300 group"
                      : "flex flex-row items-center gap-4 p-5 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md cursor-none clickable hover:border-foreground transition-all duration-500 group"
                    }
                  >
                    <div className={isHallmark
                      ? "p-2 border border-neutral-300 dark:border-neutral-800 bg-transparent group-hover:border-background/30 transition-colors shrink-0"
                      : "p-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shrink-0"
                    }>
                      {fact.icon}
                    </div>
                    <span className={isHallmark 
                      ? "text-sm font-mono uppercase tracking-wider text-foreground leading-tight" 
                      : "text-sm md:text-base font-bold text-foreground leading-tight"
                    }>
                      {fact.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side: Story & CV Download */}
            <motion.div className="lg:col-span-6 space-y-6" variants={fadeInUp}>
              <h2 className={isHallmark 
                ? "text-xs font-mono uppercase tracking-widest text-muted-foreground pb-2 border-b border-neutral-300/60 dark:border-neutral-800/60" 
                : "text-lg font-bold text-dark-gray pb-2 border-b border-neutral-200"
              }>
                My Story
              </h2>
              <p className={isHallmark ? "text-base text-muted-foreground font-normal leading-relaxed font-sans" : "text-base text-gray-600 dark:text-neutral-400 font-semibold leading-relaxed"}>
                As a computer science graduate from Parahyangan Catholic University (UNPAR), I combine structured engineering methodologies with creative UI/UX paradigms. I am passionate about bringing full-stack web applications to life, from normalized SQL databases up to reactive micro-animations.
              </p>
              <p className={isHallmark ? "text-base text-muted-foreground font-normal leading-relaxed font-sans" : "text-base text-gray-600 dark:text-neutral-400 font-semibold leading-relaxed"}>
                My development core centers on Next.js, React, Tailwind CSS, Node.js, and PostgreSQL. I aim to write clean, modular components that are accessible, SEO-optimized, and performant.
              </p>
              <p className={isHallmark ? "text-base text-muted-foreground font-normal leading-relaxed font-sans" : "text-base text-gray-600 dark:text-neutral-400 font-semibold leading-relaxed"}>
                Whether designing user interfaces, wiring cloud-scale Supabase backends, or setting network infrastructure routines, I bring dedication and attention to detail.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <motion.a
                  href="mailto:wildanrizki9560@gmail.com"
                  className={isHallmark
                    ? "px-6 py-3 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground rounded-none text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-none clickable font-semibold"
                    : "px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/80 transition-colors duration-300 cursor-none clickable text-base font-semibold"
                  }
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Hire Me
                </motion.a>
                <motion.a
                  href="/files/cv.pdf"
                  download="en_CV_Wildan_Rizki_Nurfauzi_2025.pdf"
                  className={isHallmark
                    ? "px-6 py-3 border border-neutral-300 dark:border-neutral-700 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background rounded-none text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-none clickable font-semibold"
                    : "px-6 py-3 bg-transparent text-foreground hover:bg-foreground/10 transition-colors duration-300 cursor-none clickable text-base font-semibold border-2 border-foreground rounded-full flex items-center gap-2"
                  }
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Parallax Gallery Clips & Certificates Section */}
        <div className="w-full z-10 relative">
          <SmoothScrollHero />
        </div>

        {/* Added Section: Timeline Milestones */}
        <motion.section
          className={isHallmark 
            ? "relative px-6 py-20 max-w-5xl mx-auto overflow-hidden z-10"
            : "relative px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto overflow-hidden"
          }
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.p className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" : "text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"} variants={fadeInUp}>
              Timeline
            </motion.p>
            <motion.h2 className={isHallmark ? "text-4xl md:text-6xl font-serif font-normal text-foreground" : "text-3xl md:text-5xl font-medium text-dark-gray"} variants={fadeInUp}>
              Education & Milestones
            </motion.h2>
          </div>

          <div className={isHallmark
            ? "relative border-l border-neutral-300 dark:border-neutral-800 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12"
            : "relative border-l-2 border-neutral-300 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12"
          }>
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative cursor-none clickable group"
              >
                {/* Timeline Square/Circular Dot Indicator */}
                <div className={isHallmark
                  ? "absolute -left-8 sm:-left-12 top-0 -translate-x-1/2 w-8 h-8 bg-background border border-neutral-300 dark:border-neutral-800 rounded-none flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                  : "absolute -left-8 sm:-left-12 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 [&>svg]:group-hover:text-background"
                }>
                  {item.icon}
                </div>

                {/* Timeline Box Content */}
                <div className={isHallmark
                  ? "p-6 border border-neutral-300 dark:border-neutral-800 bg-white/10 dark:bg-white/2 backdrop-blur-md rounded-none group-hover:bg-neutral-100/30 dark:group-hover:bg-neutral-900/30 transition-all duration-300 space-y-3"
                  : "p-6 rounded-2xl border-2 border-neutral-300/80 dark:border-neutral-800 bg-white/20 dark:bg-white/5 backdrop-blur-md group-hover:border-foreground transition-colors duration-500 space-y-3"
                }>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-2">
                    <span className={isHallmark
                      ? "text-[10px] font-mono text-muted-foreground uppercase tracking-wider bg-transparent border border-neutral-300/80 dark:border-neutral-800/80 px-2 py-0.5 rounded-none w-fit"
                      : "text-sm font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 px-2.5 py-0.5 rounded-md w-fit"
                    }>
                      {item.year}
                    </span>
                    <span className={isHallmark
                      ? "text-xs font-mono uppercase tracking-wider text-muted-foreground"
                      : "text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1"
                    }>
                      {item.institution}
                    </span>
                  </div>
                  <h3 className={isHallmark ? "text-xl font-serif italic text-foreground" : "text-xl font-bold text-foreground"}>{item.title}</h3>
                  <p className={isHallmark ? "text-sm text-muted-foreground font-normal leading-relaxed" : "text-base text-gray-600 font-medium leading-relaxed"}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Tools Section */}
        <motion.div
          className={`w-full mx-auto overflow-hidden py-12 z-10 relative ${isHallmark ? "max-w-5xl" : "max-w-6xl"}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <TechTools />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className={`w-full mx-auto overflow-hidden py-16 z-10 relative ${isHallmark ? "max-w-5xl" : "max-w-6xl"}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Projects className={isHallmark ? "max-w-5xl" : "max-w-6xl"} />
        </motion.div>

        {/* Let's Work Together CTA */}
        <motion.section
          className={`w-full max-w-5xl mx-auto overflow-hidden z-10 relative ${isHallmark ? "py-16 md:py-24 px-6" : "py-16 md:py-24"}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className={isHallmark
              ? "border-y border-neutral-300 dark:border-neutral-800 py-16 md:py-20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-6 bg-white/10 dark:bg-white/2"
              : "flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-4 relative"
            }
            variants={fadeInUp}
          >
            <h1 className={isHallmark ? "text-4xl md:text-6xl font-serif italic text-foreground leading-tight" : "text-3xl md:text-5xl font-medium text-dark-gray"}>
              Let's work together
            </h1>

            {isHallmark ? (
              <motion.a
                href="mailto:wildanrizki9560@gmail.com"
                className="px-8 py-4 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs font-mono uppercase tracking-widest transition-colors duration-200 rounded-none cursor-none clickable font-semibold whitespace-nowrap"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Write an Email
              </motion.a>
            ) : (
              <motion.button
                className="w-12 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-sm bg-foreground text-background mt-4 md:mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ width: "180px" }}
              >
                <a href="mailto:wildanrizki9560@gmail.com" className="w-full h-full flex items-center justify-center font-semibold cursor-none clickable">
                  Write an Email
                </a>
              </motion.button>
            )}
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className={`w-full py-12 bg-transparent mt-12 z-10 relative ${isHallmark ? "border-t border-neutral-300/40 dark:border-neutral-800/40" : ""}`}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex flex-col md:flex-row justify-center items-center gap-1 text-center">
            {isHallmark ? (
              <span>Designed & developed by wildanrizkii</span>
            ) : (
              <div className="text-gray-500 flex flex-col md:flex-row justify-center items-center gap-1 text-center font-medium">
                <span>Designed and developed by me</span>
              </div>
            )}
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default About;
