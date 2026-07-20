"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import {
  Wrench,
  Search,
  FileSpreadsheet,
  PackageSearch,
  Users,
  Database,
  ShieldCheck,
} from "lucide-react";
import { useTransitionState } from "../../PageTransition";
import { CropMarks, RisoText } from "../../BroadsheetHelpers";
import { GiAutoRepair } from "react-icons/gi";

const BroadsheetSparepart = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = [
    { label: "Company", value: "PT XXX", note: "* Company requested anonymity" },
    { label: "Project Type", value: "Sales Support System" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Year", value: "2025" },
  ];

  const highlights = [
    { num: "500+", label: "Parts Catalogued" },
    { num: "3", label: "User Roles" },
    { num: "100%", label: "Web-Based" },
    { num: "Excel", label: "Export Ready" },
  ];

  const features = [
    {
      icon: <PackageSearch className="w-5 h-5" />,
      title: "Part Hierarchy Explorer",
      desc: "Visualize parent–child relationships between spare parts with intuitive nested tree navigation.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Advanced Search & Filter",
      desc: "Find any spare part instantly using smart filters by serial number, material, supplier, or manufacturer.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Comprehensive Part Database",
      desc: "Centralized repository with complete specifications: material grade, dimensions, origin, and lifecycle data.",
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: "Excel Report Generator",
      desc: "Generate structured Excel files of selected parts for streamlined ordering and documentation workflows.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client-Facing Presentation",
      desc: "Clean, professional interface designed to impress clients and prospects during sales engagements.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Role-Based Access Control",
      desc: "Granular permission levels for sales reps, admins, and managers to keep data secure and relevant.",
    },
  ];

  const techStack = [
    { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
    { cat: "Back-End", items: ["Node.js", "Express.js", "REST API"] },
    { cat: "Database", items: ["PostgreSQL", "Prisma ORM"] },
    { cat: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden min-h-screen pb-12">
        <CropMarks />
        <Navbar />

        {/* HERO */}
        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          {/* Back */}
          <motion.button
            variants={fadeInUp}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-(--accent-vermilion) transition-colors duration-150 mb-10 group cursor-none clickable"
            onClick={() => router.back()}
          >
            <FiArrowLeft className="text-sm" />
            Back
          </motion.button>

          {/* Label pill */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-3 py-1.5 rounded-none">
              <Wrench className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase text-foreground leading-[0.95] tracking-tight mb-8"
          >
            <RisoText className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase leading-[0.95] tracking-tight">
              Sparepart System
            </RisoText>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-serif font-normal max-w-2xl leading-relaxed mb-12"
          >
            A backend system for enterprise warehouses—
            supporting database index lookups, relational transaction tracking,
            and dynamic Swagger OpenAPI logs.
          </motion.p>

          {/* Meta grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 border-y border-foreground/20 py-8 gap-6"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </span>
                <span className="text-base font-serif italic text-foreground font-semibold">{m.value}</span>
                {m.note && (
                  <span className="text-[10px] font-mono text-muted-foreground leading-tight">{m.note}</span>
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
          variants={fadeInUp}
        >
          <div className="relative rounded-none overflow-hidden border border-foreground/30 bg-white/10 dark:bg-white/2 min-h-80 md:min-h-115 flex items-center justify-center">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center icon cluster */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-foreground text-center px-6">
              <div className="flex items-center justify-center w-24 h-24 border border-foreground/30 bg-transparent rounded-none">
                <GiAutoRepair className="w-12 h-12 text-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-black uppercase text-foreground">
                  <RisoText className="text-2xl md:text-3xl font-display font-black uppercase">
                    Spare Part Information System
                  </RisoText>
                </h2>
                <p className="text-muted-foreground mt-2 text-[10px] font-mono uppercase tracking-wider">
                  Sales Support · Web Application · 2025
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {["Next.js", "React", "PostgreSQL", "Tailwind CSS"].map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono uppercase text-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-3 py-1 rounded-none"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Corner decorative icon */}
            <div className="absolute bottom-6 right-8 opacity-[0.02]">
              <GiAutoRepair className="w-48 h-48 text-foreground" />
            </div>
          </div>
        </motion.section>

        {/* OVERVIEW */}
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
            <h2 className="text-3xl md:text-5xl font-serif italic text-foreground max-w-3xl leading-snug">
              Bringing spare part data to the sales floor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
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
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
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

        {/* HIGHLIGHTS */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 border border-foreground/30">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border-r last:border-r-0 border-foreground/20 bg-white/10 dark:bg-white/2 flex flex-col items-center justify-center text-center hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 rounded-none cursor-none clickable group"
              >
                <span className="text-3xl md:text-4xl font-display font-black text-foreground group-hover:text-white mb-2 transition-colors">
                  {h.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground group-hover:text-white/80 transition-colors">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FEATURES */}
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
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none">
              <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Logistics Solution</RisoText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 flex flex-col gap-6 hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 rounded-none cursor-none clickable group"
              >
                <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center text-foreground bg-transparent group-hover:border-white group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-foreground group-hover:text-white transition-colors">{f.title}</h3>
                  <p className="text-sm font-serif text-muted-foreground font-normal leading-relaxed group-hover:text-white/80 transition-colors">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TECH STACK */}
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
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none">
              <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Built with modern tools</RisoText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 border border-foreground/30 -mr-px bg-white/10 dark:bg-white/2 rounded-none hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 group cursor-none clickable"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-foreground/20 pb-3 mb-6 group-hover:text-white group-hover:border-white/20 transition-colors">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-2.5 py-1 rounded-none group-hover:border-white/30 group-hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-20"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden border border-foreground/30 py-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-8 bg-white/10 dark:bg-white/2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] rounded-none"
          >
            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground leading-none">
                <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Have a project in mind?</RisoText>
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="px-8 py-4 border-2 border-foreground bg-(--accent-vermilion) text-white hover:bg-foreground hover:text-background text-xs font-mono uppercase tracking-widest transition-all duration-150 rounded-none cursor-none clickable font-semibold whitespace-nowrap z-10 shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Write an Email
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="w-full py-12 bg-transparent border-t border-foreground/20 text-center z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Designed & developed by wildanrizkii • broadsheet c-04
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default BroadsheetSparepart;
