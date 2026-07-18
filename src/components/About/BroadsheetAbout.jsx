"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Projects from "../Projects/About";
import TechTools from "../TechTools";
import SmoothScrollHero from "../Parallax";
import { useTransitionState } from "../PageTransition";
import { GraduationCap, Briefcase, Award, MapPin, Sparkles } from "lucide-react";
import { CropMarks, RisoText } from "../BroadsheetHelpers";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const milestones = [
  {
    year: "2019",
    title: "Informatics Graduate",
    institution: "Parahyangan Catholic University",
    icon: <GraduationCap className="w-5 h-5 text-current" />,
    description: "Specialized in Software Engineering, database systems, and web frameworks. Built strong foundations in computing algorithms, system design, and cooperative software engineering.",
  },
  {
    year: "2023",
    title: "CyberOps & DevNet Associate",
    institution: "Cisco Networking Academy",
    icon: <Award className="w-5 h-5 text-current" />,
    description: "Gained core hands-on experience in networking automation scripts, cloud API security protocols, threat detection procedures, and infrastructure-as-code structures.",
  },
  {
    year: "2024",
    title: "Google Cloud Computing Foundations",
    institution: "Google Cloud Academic Program",
    icon: <Award className="w-5 h-5 text-current" />,
    description: "Completed comprehensive practical training in cloud infrastructure, container orchestration, cloud application deployments, and virtualization engines.",
  },
  {
    year: "2024",
    title: "Full-Stack Freelance Developer",
    institution: "Apotek Adora",
    icon: <Briefcase className="w-5 h-5 text-current" />,
    description: "Developed and launched custom high-performance web systems (e.g. Sales support tools, inventory dashboards, cash monitors) using Next.js, PostgreSQL, and Supabase.",
  },
  {
    year: "2025 - Present",
    title: "Web Developer",
    institution: "PT Ganesha Operation",
    icon: <Briefcase className="w-5 h-5 text-current" />,
    description: "Developing and maintaining internal web applications to support academic operations and digital learning management systems at one of Indonesia's leading educational institutions.",
  },
];

const quickFacts = [
  { icon: <MapPin className="w-5 h-5 text-current" />, label: "Bandung, Indonesia" },
  { icon: <GraduationCap className="w-5 h-5 text-current" />, label: "Informatics UNPAR" },
  { icon: <Sparkles className="w-5 h-5 text-current" />, label: "UI/UX & Full Stack" },
];

const BroadsheetAbout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden min-h-screen pb-12 flex flex-col justify-between">
        <CropMarks />
        <Navbar />

        {/* Hero Section */}
        <motion.section
          className="relative px-6 pt-44 pb-20 max-w-5xl mx-auto z-10 w-full"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full mx-auto">
            {/* Left side: Typography, Name & Quick Facts */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div className="space-y-4" variants={fadeInUp}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 px-3 py-1 border-2 border-dashed border-foreground/45 bg-transparent text-foreground text-[10px] font-mono uppercase tracking-widest w-fit select-none mb-2 rounded-none"
                >
                  <span className="relative flex h-1.5 w-1.5 bg-foreground"></span>
                  Available for Freelance Projects
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-display font-black uppercase text-foreground leading-none tracking-tight">
                  <RisoText className="text-5xl md:text-7xl font-display font-black uppercase leading-none tracking-tight">
                    Wildan Rizki
                  </RisoText>
                </h1>
                <p className="text-lg md:text-xl font-serif italic text-muted-foreground leading-relaxed pt-2">
                  "Turning complex logic into clean, delightful digital experiences."
                </p>
              </motion.div>

              {/* Quick Facts Cards */}
              <motion.div className="grid grid-cols-1" variants={staggerChildren}>
                {quickFacts.map((fact, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex flex-row items-center gap-4 p-4 border border-foreground/30 -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-md rounded-none cursor-none clickable hover:bg-(--accent-teal) hover:text-white transition-all duration-200 group"
                  >
                    <div className="p-2 border border-foreground/20 bg-transparent group-hover:border-white/30 transition-colors shrink-0">
                      {fact.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-foreground group-hover:text-white leading-tight transition-colors">
                      {fact.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side: Story & CV Download */}
            <motion.div className="lg:col-span-6 space-y-6" variants={fadeInUp}>
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground pb-2 border-b border-foreground/20">
                My Story
              </h2>
              <p className="text-base font-serif text-muted-foreground font-normal leading-relaxed">
                As a computer science graduate from Parahyangan Catholic University (UNPAR), I combine structured engineering methodologies with creative UI/UX paradigms. I am passionate about bringing full-stack web applications to life, from normalized SQL databases up to reactive micro-animations.
              </p>
              <p className="text-base font-serif text-muted-foreground font-normal leading-relaxed">
                My development core centers on Next.js, React, Tailwind CSS, Node.js, and PostgreSQL. I aim to write clean, modular components that are accessible, SEO-optimized, and performant.
              </p>
              <p className="text-base font-serif text-muted-foreground font-normal leading-relaxed">
                Whether designing user interfaces, wiring cloud-scale Supabase backends, or setting network infrastructure routines, I bring dedication and attention to detail.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <motion.a
                  href="mailto:wildanrizki9560@gmail.com"
                  className="px-6 py-3 border-2 border-foreground bg-(--accent-vermilion) text-white hover:bg-foreground hover:text-background rounded-none text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-none clickable font-semibold shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
                  whileHover={{ y: -1 }}
                >
                  Hire Me
                </motion.a>
                <motion.a
                  href="/files/cv.pdf"
                  download="en_CV_Wildan_Rizki_Nurfauzi_2025.pdf"
                  className="px-6 py-3 border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-none text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-none clickable font-semibold shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
                  whileHover={{ y: -1 }}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Gallery certifications scroll */}
        <div className="w-full z-10 relative">
          <SmoothScrollHero />
        </div>

        {/* Timeline Milestones */}
        <motion.section
          className="relative px-6 py-20 max-w-5xl mx-auto overflow-hidden z-10 w-full"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" variants={fadeInUp}>
              Timeline
            </motion.p>
            <motion.h2 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none" variants={fadeInUp}>
              <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Milestones</RisoText>
            </motion.h2>
          </div>

          <div className="relative border-l border-foreground/30 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative cursor-none clickable group"
              >
                {/* Timeline Square dot */}
                <div className="absolute -left-8 sm:-left-12 top-0 -translate-x-1/2 w-8 h-8 bg-background border border-foreground/30 rounded-none flex items-center justify-center group-hover:border-foreground group-hover:bg-(--accent-vermilion) group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                {/* Timeline content box */}
                <div className="p-6 border border-foreground/30 bg-white/10 dark:bg-white/2 backdrop-blur-md rounded-none group-hover:bg-white/20 transition-all duration-300 space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center gap-2">
                    <span className="text-[10px] font-mono text-white bg-(--accent-teal) px-2 py-0.5 rounded-none w-fit uppercase tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {item.institution}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif italic text-foreground leading-none">{item.title}</h3>
                  <p className="text-sm font-serif text-muted-foreground font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech tools bento */}
        <motion.div
          className="w-full mx-auto overflow-hidden py-12 z-10 relative max-w-5xl"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <TechTools />
        </motion.div>

        {/* Projects showcase list */}
        <motion.div
          className="w-full mx-auto overflow-hidden py-16 z-10 relative max-w-5xl px-6"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none">
              <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Selected Works</RisoText>
            </h2>
          </div>
          <Projects className="max-w-5xl" />
        </motion.div>

        {/* CTA work together */}
        <motion.section
          className="w-full max-w-5xl mx-auto overflow-hidden py-16 px-6 z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className="border border-foreground/30 py-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-8 bg-white/10 dark:bg-white/2 rounded-none relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            variants={fadeInUp}
          >
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Collaborate</p>
              <h1 className="text-4xl md:text-7xl font-display font-black uppercase text-foreground leading-none">
                <RisoText className="text-4xl md:text-7xl font-display font-black uppercase leading-none">Let's work together</RisoText>
              </h1>
            </div>

            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="px-8 py-4 border-2 border-foreground bg-(--accent-vermilion) text-white hover:bg-foreground hover:text-background rounded-none text-xs font-mono uppercase tracking-widest transition-all duration-150 cursor-none clickable font-semibold whitespace-nowrap z-10 shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
            >
              Write an Email
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="w-full py-12 bg-transparent mt-12 border-t border-foreground/20 z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 px-8">
            <span>Designed & developed by wildanrizkii</span>
            <span>RISO-POSTER EDITION // C-04</span>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default BroadsheetAbout;
