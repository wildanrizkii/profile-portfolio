"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import AnimatedScrollMouse from "../AnimatedScrollMouse";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Projects from "../Projects/About";
import { Palette, Code2, Globe } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { useTransitionState } from "../PageTransition";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 1.4 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const backgroundFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.7 },
  },
};

const navbarFadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.7 },
  },
};

const Portfolio = () => {
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
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden">
        {/* Background Animation */}
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

        {/* Hero Section */}
        <motion.section
          className="relative grid gap-16 px-4 md:px-12 py-48 md:py-56"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className="w-full max-w-5xl mx-auto grid gap-4 md:gap-3"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-transparent text-foreground text-sm font-semibold w-fit select-none mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 dark:bg-neutral-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
              </span>
              Available for Freelance Projects
            </motion.div>
            <motion.h1
              className="text-3xl md:text-7xl font-medium text-dark-gray"
              variants={fadeInUp}
            >
              Hi, I'm Wildan
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-7xl font-semibold text-dark-gray"
              variants={fadeInUp}
            >
              I'm turning my mind into magic
            </motion.h1>
            <motion.h1
              className="text-xl md:text-2xl font-medium text-dark-gray pt-4"
              variants={fadeInUp}
            >
              I am a Web Designer and Full Stack Web Developer specializing in
              creating web applications with clean user interfaces and
              optimized user experiences.
            </motion.h1>
            <motion.div variants={fadeInUp}>
              <motion.button
                className="mt-2 md:mt-8 px-4 py-4 bg-foreground text-background rounded-md focus:outline-none text-lg md:text-xl w-37.5 md:w-45 cursor-none clickable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => router.push("/about")}
              >
                About me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Mouse */}
          <motion.div
            className="w-full flex justify-center"
            variants={fadeIn}
          >
            <AnimatedScrollMouse />
          </motion.div>
        </motion.section>

        {/* Section 1: About Brief & Stats */}
        <AboutBrief />

        {/* Section 2: Services capabilities */}
        <Services />

        {/* Projects Section */}
        <motion.div
          className="w-full max-w-6xl mx-auto overflow-hidden"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Projects />
        </motion.div>

        {/* Section 3: Tech Showcase */}
        <TechShowcase />

        {/* Section 4: Workflow/Creative Process */}
        <Workflow />

        {/* CTA Work Together */}
        <motion.section
          className="w-full max-w-5xl mx-auto overflow-hidden py-16 md:py-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className="relative flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-4"
            variants={fadeInUp}
          >
            <h1 className="text-3xl md:text-5xl font-medium text-dark-gray">
              Let's Work Together
            </h1>

            <motion.button
              className="w-12 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-sm bg-foreground text-background mt-4 md:mt-0 cursor-none clickable"
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

/* --- Subcomponents --- */

const AboutBrief = () => {
  const router = useRouter();
  const { isTransitioning } = useTransitionState();

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "UNPAR", label: "Informatics Graduate" },
    { number: "2+", label: "Years Programming" },
    { number: "100%", label: "Responsive Design" },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <motion.div className="lg:col-span-7 space-y-6" variants={fadeInUp}>
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Who I Am
        </p>
        <h2 className="text-3xl md:text-5xl font-medium text-dark-gray leading-tight">
          Crafting web experiences that blend aesthetic beauty with robust performance.
        </h2>
        <p className="text-lg text-gray-600 font-medium leading-relaxed">
          I am a Web Designer and Full Stack Web Developer. With a solid computer
          science foundation, I specialize in building reactive user interfaces,
          optimized backend systems, and responsive layout architectures using modern
          frameworks like React and Next.js.
        </p>
        <motion.div className="pt-4">
          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-md text-base font-semibold group cursor-none clickable"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/about")}
          >
            Read my story
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div className="lg:col-span-5 grid grid-cols-2 gap-6" variants={staggerChildren}>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-xl border-2 border-neutral-300 bg-white/20 backdrop-blur-xs flex flex-col justify-center text-center cursor-none clickable hover:border-black transition-colors duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">
              {stat.number}
            </h3>
            <p className="text-sm text-gray-500 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

const Services = () => {
  const { isTransitioning } = useTransitionState();
  const serviceList = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "Creating high-fidelity wireframes, interactive user flows, and modern design systems that captivate and convert.",
      deliverables: ["User Research", "Wireframing & Prototyping", "Aesthetic Light Themes", "Design Systems in Figma"],
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Front-End Engineering",
      desc: "Building pixel-perfect interfaces with smooth animations, optimized core web vitals, and structured accessibility.",
      deliverables: ["React.js & Next.js Builds", "Tailwind CSS & Modern Styling", "Framer Motion Animations", "Responsive Mobile-First CSS"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Development",
      desc: "Architecting backend integrations, relational databases, REST/GraphQL APIs, and secure application rules.",
      deliverables: ["Node.js & Express API Routes", "Supabase & Firebase Integration", "PostgreSQL & Schema Layouts", "Secure Authentication & Roles"],
    },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
          variants={fadeInUp}
        >
          Capabilities
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-medium text-dark-gray"
          variants={fadeInUp}
        >
          Services I Provide
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md flex flex-col justify-between hover:border-foreground transition-all duration-500 cursor-none clickable group"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-foreground dark:group-hover:bg-foreground group-hover:text-background dark:group-hover:text-background transition-colors duration-500">
                <span className="transition-colors duration-500 [&>svg]:group-hover:text-background">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <p className="text-base text-gray-600 font-medium leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <ul className="space-y-2 text-sm font-semibold text-neutral-600">
                {service.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const TechShowcase = () => {
  const { isTransitioning } = useTransitionState();
  const groups = [
    {
      name: "Front-End",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "React Query", "Shadcn UI", "Radix UI", "Ant Design"],
    },
    {
      name: "Back-End & DB",
      skills: ["Node.js", "NestJS", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "Docker", "REST APIs", "Swagger OpenAPI"],
    },
    {
      name: "Tools & Motion",
      skills: ["Git & GitHub", "Framer Motion", "GSAP", "Lenis Scroll", "Figma", "Adobe XD"],
    },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
          variants={fadeInUp}
        >
          Stack
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-medium text-dark-gray"
          variants={fadeInUp}
        >
          Tech & Tools
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {groups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="p-8 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md hover:border-foreground transition-colors duration-500 cursor-none clickable flex flex-col justify-start"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-foreground hover:text-background px-3.5 py-1.5 rounded-lg border border-neutral-200/60 dark:border-neutral-700 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const Workflow = () => {
  const { isTransitioning } = useTransitionState();
  const steps = [
    {
      num: "01",
      title: "Research & Concept",
      desc: "Analyzing user needs, domain research, planning site architecture, and wireframing UX pathways.",
    },
    {
      num: "02",
      title: "UI/UX Design",
      desc: "Designing responsive interfaces, modern typography scales, layouts, and high-fidelity Figma prototypes.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Writing componentized Next.js/React code, database integrations, backend APIs, and responsive styles.",
    },
    {
      num: "04",
      title: "Launch & Audits",
      desc: "Performing SEO updates, core web vital speed audits, testing accessibility rules, and product release.",
    },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
          variants={fadeInUp}
        >
          Workflow
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-medium text-dark-gray"
          variants={fadeInUp}
        >
          Development Process
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="relative p-6 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/20 dark:bg-white/5 backdrop-blur-xs flex flex-col gap-4 justify-between hover:border-foreground transition-colors duration-500 cursor-none clickable overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <span className="text-7xl font-black text-foreground select-none">
                {step.num}
              </span>
            </div>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-widest bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 rounded-md">
                Step {step.num}
              </span>
              <h3 className="text-xl font-bold text-foreground pt-2">{step.title}</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
