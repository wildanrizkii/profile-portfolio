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

const About = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative" style={{ overflowX: "clip" }}>
        {/* Background animation */}
        <motion.section
          className="absolute top-0 left-0 w-screen h-screen overflow-hidden"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={backgroundFadeIn}
        >
          <CircleAnimatedBackground />
        </motion.section>

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={navbarFadeDown}
        >
          <Navbar />
        </motion.nav>

        {/* Redesigned Hero Section */}
        <motion.section
          className="relative px-4 md:px-12 pt-40 pb-20 max-w-6xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full max-w-5xl mx-auto">
            {/* Left side: Typography, Name & Quick Facts */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div className="space-y-4" variants={fadeInUp}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-transparent text-foreground text-sm font-semibold w-fit select-none mb-1"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 dark:bg-neutral-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                  </span>
                  Available for Freelance Projects
                </motion.div>
                <h1 className="text-4xl sm:text-6xl font-semibold text-dark-gray leading-tight">
                  Wildan Rizki Nurfauzi
                </h1>
                <p className="text-xl font-medium text-gray-600 leading-relaxed italic">
                  "Turning complex logic into clean, delightful digital experiences."
                </p>
              </motion.div>

              {/* Quick Facts Cards */}
              <motion.div
                className="grid grid-cols-1 gap-3"
                variants={staggerChildren}
              >
                {quickFacts.map((fact, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex flex-row items-center gap-3 p-3 lg:p-4 rounded-xl border border-neutral-300/80 dark:border-neutral-800 bg-white/20 dark:bg-white/5 backdrop-blur-md cursor-none clickable hover:border-foreground transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 shrink-0">
                      {fact.icon}
                    </div>
                    <span className="text-sm font-semibold text-foreground leading-tight">{fact.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side: Story & CV Download */}
            <motion.div className="lg:col-span-6 space-y-6" variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-foreground pb-2 border-b border-neutral-200 dark:border-neutral-800">
                My Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                As a computer science graduate from Parahyangan Catholic University (UNPAR), I combine structured engineering methodologies with creative UI/UX paradigms. I am passionate about bringing full-stack web applications to life, from normalized SQL databases up to reactive micro-animations.
              </p>
              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                My development core centers on Next.js, React, Tailwind CSS, Node.js, and PostgreSQL. I aim to write clean, modular components that are accessible, SEO-optimized, and performant.
              </p>
              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                Whether designing user interfaces, wiring cloud-scale Supabase backends, or setting network infrastructure routines, I bring dedication and attention to detail.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <motion.a
                  href="mailto:wildanrizki9560@gmail.com"
                  className="flex items-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-md text-sm font-semibold hover:bg-foreground/80 transition-colors shadow-lg cursor-none clickable"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/files/cv.pdf"
                  download="en_CV_Wildan_Rizki_Nurfauzi_2025.pdf"
                  className="flex items-center gap-2 px-6 py-3.5 border-2 border-neutral-300 dark:border-neutral-700 rounded-md text-foreground text-sm font-semibold hover:border-foreground hover:text-foreground transition-colors shadow-lg cursor-none clickable bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Parallax Gallery Clips & Certificates Section */}
        <div className="w-full">
          <SmoothScrollHero />
        </div>

        {/* Added Section: Timeline Milestones */}
        <motion.section
          className="relative pl-8 pr-4 md:px-12 py-12 md:py-16 max-w-5xl mx-auto overflow-hidden"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2" variants={fadeInUp}>
              Timeline
            </motion.p>
            <motion.h2 className="text-3xl md:text-5xl font-medium text-dark-gray" variants={fadeInUp}>
              Education & Milestones
            </motion.h2>
          </div>

          <div className="relative border-l-2 border-neutral-300 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative cursor-none clickable group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-8 sm:-left-12 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 [&>svg]:group-hover:text-background">
                  {item.icon}
                </div>

                {/* Timeline Box Content */}
                <div className="p-6 rounded-2xl border-2 border-neutral-300/80 dark:border-neutral-800 bg-white/20 dark:bg-white/5 backdrop-blur-md group-hover:border-foreground transition-colors duration-500 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                    <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 px-2.5 py-0.5 rounded-md w-fit">
                      {item.year}
                    </span>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      {item.institution}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Tools Section */}
        <motion.div
          className="w-full max-w-6xl mx-auto overflow-hidden py-12"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <TechTools />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="w-full max-w-6xl mx-auto overflow-hidden py-16"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Projects className="max-w-5xl" />
        </motion.div>

        {/* Let's Work Together CTA */}
        <motion.section
          className="w-full max-w-5xl mx-auto overflow-hidden py-16 md:py-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-4 relative"
            variants={fadeInUp}
          >
            <h1 className="text-3xl md:text-5xl font-medium text-dark-gray">
              Let's Work Together
            </h1>

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
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="w-full py-8 bg-transparent mt-12"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-gray-500 flex flex-col md:flex-row justify-center items-center gap-1 text-center font-medium">
            <span>Designed and developed by me</span>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default About;
