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
      {/* Subtle decorative gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-32 -left-32 w-150 h-150 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-125 h-125 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        {/* ── Navbar ── */}
        <Navbar />

        {/* ── HERO ── */}
        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-4 md:px-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          {/* Back button */}
          <motion.button
            variants={fadeInUp}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors duration-200 mb-10 group cursor-none clickable"
            onClick={() => router.back()}
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back
          </motion.button>

          {/* Label pill */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 bg-neutral-200/60 border border-neutral-300 px-3 py-1.5 rounded-full">
              <GiAutoRepair className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-zinc-900 leading-none tracking-tight mb-8"
          >
            Spare Part<br />
            <span className="text-neutral-400">Info System</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-12"
          >
            A web-based sales support platform that empowers representatives to
            present comprehensive spare part catalogs—with hierarchy exploration,
            smart search, and one-click Excel export.
          </motion.p>

          {/* Meta grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-neutral-200 py-8"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  {m.label}
                </span>
                <span className="text-base md:text-lg font-bold text-black">{m.value}</span>
                {m.note && (
                  <span className="text-xs text-gray-400 leading-tight">{m.note}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── HERO VISUAL BANNER ── */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-200 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-700 min-h-80 md:min-h-115 flex items-center justify-center">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center icon cluster */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-white text-center px-6">
              <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <GiAutoRepair className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  Spare Part Information System
                </h2>
                <p className="text-white/60 mt-2 text-base font-medium">
                  Sales Support · Web Application · 2025
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {["Next.js", "React", "PostgreSQL", "Tailwind CSS"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Corner decorative icon */}
            <div className="absolute bottom-6 right-8 opacity-5">
              <GiAutoRepair className="w-48 h-48 text-white" />
            </div>
          </div>
        </motion.section>

        {/* ── OVERVIEW ── */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
              Overview
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 max-w-3xl leading-snug">
              Bringing spare part data to the sales floor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed">
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

            <motion.div variants={fadeInUp} className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed">
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
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl border-2 border-neutral-200 bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-black transition-all duration-300 cursor-none clickable"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-black mb-2">
                  {h.num}
                </span>
                <span className="text-sm font-semibold text-gray-500">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── FEATURES ── */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
              Built for the sales team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl border-2 border-neutral-200 bg-white/30 backdrop-blur-sm flex flex-col gap-4 hover:border-black transition-all duration-300 cursor-none clickable group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── TECH STACK ── */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
              Built with modern tools
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border-2 border-neutral-200 bg-white/30 backdrop-blur-sm hover:border-black transition-colors duration-300 cursor-none clickable"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-neutral-200 pb-3 mb-4">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-black hover:text-white px-3 py-1 rounded-lg border border-neutral-200 transition-all duration-200"
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
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-20"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-900 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>
            <div className="relative z-10">
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Have a project in mind?
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="relative z-10 flex items-center gap-2 px-7 py-4 bg-white text-black text-base font-bold rounded-xl hover:bg-neutral-100 transition-colors duration-200 whitespace-nowrap cursor-none clickable group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Write an Email
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.section>

        {/* ── Footer ── */}
        <motion.footer
          className="w-full py-8 bg-transparent text-center text-gray-500 text-sm font-medium"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Designed and developed by me
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Sparepart;
