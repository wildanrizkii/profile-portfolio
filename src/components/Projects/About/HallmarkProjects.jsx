"use client";
import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const projectList = [
  {
    title: "Adora SaaS",
    category: "SaaS · Healthcare ERP",
    description: "A cloud-native, multi-tenant SaaS pharmacy platform rebuilt with NestJS & Next.js 16 — managing prescriptions, drug inventory, staff roles, and branch analytics across multiple tenants.",
    tech: ["Next.js 16", "NestJS", "React 19", "Shadcn UI"],
    img: "/images/adora-saas/adora-1.webp",
    imgFit: "contain",
    href: "/projects/adora-saas",
  },
  {
    title: "Cash Flow Tracking Application",
    category: "Financial Dashboard",
    description: "A tracking application with clean analytics, charts, and transaction history filters for personal financial management.",
    tech: ["Next.js", "Recharts", "PostgreSQL", "Supabase"],
    img: "/images/Cashify.png",
    href: "/projects/cashflow",
  },
  {
    title: "Adora Pharmacy Management System",
    category: "Healthcare · Management System",
    description: "A full-featured pharmacy management system built for PT Adora Medika (2024) — managing prescriptions, drug inventory, staff roles, and financial reporting from a centralized dashboard.",
    tech: ["Next.js", "Express.js", "Ant Design", "PostgreSQL"],
    img: "/images/Apotek.jpg",
    href: "/projects/adora",
  },
  {
    title: "Spare Part Information System",
    category: "Full-Stack Sales Platform",
    description: "An intuitive web platform designed to manage complex spare part hierarchies, vendor specifications, materials, and automated order generation.",
    tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    img: "",
    href: "/projects/sparepart",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const HallmarkProjects = () => {
  return (
    <motion.section
      className="bg-transparent py-12 md:py-20 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerChildren}
    >
      <div className="max-w-5xl mx-auto mb-12">
        <motion.p
          className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2"
          variants={fadeInUp}
        >
          Selected Works
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-normal text-foreground leading-none"
          variants={fadeInUp}
        >
          Projects
        </motion.h1>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { damping: 25, stiffness: 180 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Link href={project.href} className="block group h-full cursor-none clickable">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative overflow-hidden rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/10 dark:bg-white/2 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between h-full hover:border-foreground transition-all duration-300 min-h-115 cursor-none clickable"
      >
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-3 py-1 rounded-none mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-normal text-foreground leading-tight">
                {project.title}
              </h2>
            </div>
            <motion.div
              className="bg-transparent border border-foreground/30 text-foreground p-3 rounded-none flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowRight className="text-xl" />
            </motion.div>
          </div>

          <p className="text-sm text-muted-foreground font-normal leading-relaxed font-sans max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-2.5 py-1 rounded-none"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative w-full rounded-none overflow-hidden mt-8 border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/50 dark:bg-neutral-900/50 grow flex items-center justify-center min-h-50 max-h-65 shadow-inner"
          style={{ transform: "translateZ(30px)" }}
        >
          {project.img ? (
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover object-top select-none rounded-none transition-transform duration-700 group-hover:scale-103"
            />
          ) : (
            <div className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Preview Unavailable</div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default HallmarkProjects;
