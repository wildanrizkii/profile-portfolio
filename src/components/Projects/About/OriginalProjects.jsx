"use client";
import React, { useState, useEffect, useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
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
    featured: true,
  },
  {
    title: "Cash Flow Tracking Application",
    category: "Financial Dashboard",
    description: "A tracking application with clean analytics, charts, and transaction history filters for personal financial management.",
    tech: ["Next.js", "Recharts", "PostgreSQL", "Supabase"],
    img: "/images/Cashify.png",
    href: "/projects/cashflow",
    featured: false,
  },
  {
    title: "Adora Pharmacy Management System",
    category: "Healthcare · Management System",
    description: "A full-featured pharmacy management system built for PT Adora Medika (2024) — managing prescriptions, drug inventory, staff roles, and financial reporting from a centralized dashboard.",
    tech: ["Next.js", "Express.js", "Ant Design", "PostgreSQL"],
    img: "/images/Apotek.jpg",
    href: "/projects/adora",
    featured: false,
  },
  {
    title: "Spare Part Information System",
    category: "Full-Stack Sales Platform",
    description: "An intuitive web platform designed to manage complex spare part hierarchies, vendor specifications, materials, and automated order generation.",
    tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    img: "",
    href: "/projects/sparepart",
    featured: false,
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

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(false);
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    isMounted && (
      <motion.section
        className="bg-transparent py-12 md:py-20 px-4 md:px-8 w-full"
        key={pathname}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerChildren}
      >
        <div className="max-w-5xl mx-auto mb-12">
          <motion.p
            className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
            variants={fadeInUp}
          >
            Selected Works
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-medium text-dark-gray"
            variants={fadeInUp}
          >
            Projects
          </motion.h1>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className={project.featured ? "md:col-span-2 h-full" : "md:col-span-1 h-full"}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    )
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  // Motion values for tilt animation
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { damping: 25, stiffness: 180 });

  // Spotlight highlight background tracking
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);

    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Link href={project.href} className="block group h-full">
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
        className={`relative overflow-hidden rounded-2xl border-2 border-neutral-300/60 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between h-full hover:border-foreground transition-colors duration-500 min-h-115 cursor-none clickable`}
      >
        {/* Spotlight Effect Overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([sx, sy]) => `radial-gradient(400px circle at ${sx}px ${sy}px, rgba(0, 0, 0, 0.03), transparent 80%)`
            ),
          }}
        />

        {/* Top Info */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-500 bg-white/80 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-full backdrop-blur-xs mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-gray leading-tight">
                {project.title}
              </h2>
            </div>
            {/* Arrow with frame-motion style */}
            <motion.div
              className="bg-foreground text-background p-3 rounded-full flex items-center justify-center shadow-lg group-hover:bg-foreground/80 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowRight className="text-xl" />
            </motion.div>
          </div>

          <p className="text-base text-gray-600 dark:text-neutral-400 font-medium max-w-2xl group-hover:text-foreground transition-colors duration-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 px-2.5 py-1 rounded-md transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Display Image in Card */}
        <div
          className={`relative w-full rounded-xl overflow-hidden mt-8 border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100 dark:bg-neutral-900 grow flex items-center justify-center min-h-55 max-h-75 shadow-inner`}
          style={{ transform: "translateZ(30px)" }}
        >
          {project.img ? (
            <motion.img
              src={project.img}
              alt={project.title}
              className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${project.imgFit === "contain" ? "object-cover object-top" : "object-cover"
                }`}
            />
          ) : (
            <div className="text-gray-400 font-medium text-sm">Preview Unavailable</div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default Projects;
