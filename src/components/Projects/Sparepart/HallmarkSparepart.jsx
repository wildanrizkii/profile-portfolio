"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import {
  GiAutoRepair,
} from "react-icons/gi";
import {
  Search,
  FileSpreadsheet,
  PackageSearch,
  Users,
  Database,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const navbarFadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
};

/* ─── Data ─── */
const meta = [
  { label: "Company", value: "PT XXX", note: "* Company requested anonymity" },
  { label: "Project Type", value: "Sales Support System" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Year", value: "2025" },
];

const techStack = [
  { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
  { cat: "Back-End", items: ["Node.js", "Express.js", "REST API"] },
  { cat: "Database", items: ["PostgreSQL", "Prisma ORM"] },
  { cat: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
];

const features = [
  {
    icon: <PackageSearch className="w-6 h-6" />,
    title: "Part Hierarchy Explorer",
    desc: "Visualize parent–child relationships between spare parts with intuitive nested tree navigation.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Advanced Search & Filter",
    desc: "Find any spare part instantly using smart filters by serial number, material, supplier, or manufacturer.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Comprehensive Part Database",
    desc: "Centralized repository with complete specifications: material grade, dimensions, origin, and lifecycle data.",
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6" />,
    title: "Excel Report Generator",
    desc: "Generate structured Excel files of selected parts for streamlined ordering and documentation workflows.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Facing Presentation",
    desc: "Clean, professional interface designed to impress clients and prospects during sales engagements.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Role-Based Access Control",
    desc: "Granular permission levels for sales reps, admins, and managers to keep data secure and relevant.",
  },
];

const highlights = [
  { num: "500+", label: "Parts Catalogued" },
  { num: "3", label: "User Roles" },
  { num: "100%", label: "Web-Based" },
  { num: "Excel", label: "Export Ready" },
];

/* ─── Component ─── */
const Sparepart = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--muted-foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--muted-foreground) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 min-h-screen">
        {/* ── Navbar ── */}
        <Navbar />

        {/* ── HERO ── */}
        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          {/* Back button */}
          <motion.button
            variants={fadeInUp}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-250 mb-10 group cursor-none clickable"
            onClick={() => router.back()}
          >
            <FiArrowLeft className="text-sm" />
            Back
          </motion.button>

          {/* Label pill */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-3 py-1.5 rounded-none">
              <GiAutoRepair className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal text-foreground leading-[1.05] tracking-tight mb-8"
          >
            Spare Part<br />
            <span className="text-neutral-400">Info System</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed mb-12"
          >
            A web-based sales support platform that empowers representatives to
            present comprehensive spare part catalogs—with hierarchy exploration,
            smart search, and one-click Excel export.
          </motion.p>

          {/* Meta grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 border-y border-neutral-300 dark:border-neutral-800 py-8 gap-6"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </span>
                <span className="text-base font-semibold text-foreground">{m.value}</span>
                {m.note && (
                  <span className="text-[10px] font-mono text-muted-foreground tracking-wide">{m.note}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── HERO VISUAL BANNER ── */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="relative rounded-none overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-neutral-950 dark:bg-neutral-900 min-h-80 md:min-h-115 flex items-center justify-center">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center icon cluster */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-white text-center px-6">
              <div className="flex items-center justify-center w-24 h-24 border border-white/20 bg-white/5 rounded-none backdrop-blur-sm">
                <GiAutoRepair className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-serif italic text-white">
                  Spare Part Information System
                </h2>
                <p className="text-white/60 mt-2 text-[10px] font-mono uppercase tracking-wider">
                  Sales Support · Web Application · 2025
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {["Next.js", "React", "PostgreSQL", "Tailwind CSS"].map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono uppercase text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-none"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Corner decorative icon */}
            <div className="absolute bottom-6 right-8 opacity-[0.02]">
              <GiAutoRepair className="w-48 h-48 text-white" />
            </div>
          </div>
        </motion.section>

        {/* ── OVERVIEW ── */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Overview
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground max-w-3xl leading-snug">
              Bringing spare part data to the sales floor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div variants={fadeInUp} className="space-y-5 text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans">
              <p>
                This Spare Part Information System was built to empower sales
                representatives and employees with an intuitive, web-based platform
                for showcasing and delivering comprehensive spare part information
                to clients and prospective buyers.
              </p>
              <p>
                Users can explore a rich catalog of spare parts, navigate the
                parent–child hierarchy between components, and instantly access
                detailed specs such as supplier information, material grades,
                manufacturer details, and unique serial identifiers.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-5 text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans">
              <p>
                With a user-friendly interface and efficient search, the system
                significantly enhances the effectiveness of the sales process,
                ensuring customers always receive accurate, up-to-date information.
              </p>
              <p>
                A robust reporting feature enables users to generate organized
                Excel files containing lists of selected parts for ordering—
                streamlining documentation and supporting more systematic spare
                part management.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── HIGHLIGHTS ── */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 flex flex-col items-center justify-center text-center hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300 rounded-none cursor-none clickable"
              >
                <span className="text-3xl md:text-4xl font-serif italic text-foreground mb-2">
                  {h.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── FEATURES ── */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground">
              Built for the sales team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-neutral-300 dark:border-neutral-800 -mr-px -mt-px bg-white/10 dark:bg-white/2 flex flex-col gap-6 hover:bg-neutral-100/30 dark:hover:bg-neutral-900/30 transition-all duration-300 rounded-none cursor-none clickable group"
              >
                <div className="w-12 h-12 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-foreground bg-transparent">
                  {f.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-normal leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── TECH STACK ── */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground">
              Built with modern tools
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 border border-neutral-300 dark:border-neutral-800 -mr-px bg-white/10 dark:bg-white/2 rounded-none hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-300 cursor-none clickable"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-neutral-300/60 dark:border-neutral-800/60 pb-3 mb-6">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 px-2.5 py-1 rounded-none transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-20"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden border border-neutral-300 dark:border-neutral-800 py-16 md:py-20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-8 bg-white/10 dark:bg-white/2"
          >
            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-5xl font-serif italic text-foreground leading-tight">
                Have a project in mind?
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="px-8 py-4 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-xs font-mono uppercase tracking-widest transition-colors duration-200 rounded-none cursor-none clickable font-semibold whitespace-nowrap z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Write an Email
            </motion.a>
          </motion.div>
        </motion.section>

        {/* ── Footer ── */}
        <motion.footer
          className="w-full py-12 bg-transparent border-t border-neutral-300/40 dark:border-neutral-800/40 mt-12 text-center"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Designed & developed by wildanrizkii
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Sparepart;
