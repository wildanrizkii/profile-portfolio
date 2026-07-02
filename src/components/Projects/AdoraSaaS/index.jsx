"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import {
  Pill,
  Users,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Globe,
  Building2,
  Database,
  Settings,
  Bell,
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

/* ─── Data ─── */
const meta = [
  { label: "Client", value: "PT Adora Medika" },
  { label: "Project Type", value: "Pharmacy Management System" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Year", value: "2024" },
];

const techStack = [
  { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Ant Design"] },
  { cat: "Back-End", items: ["Node.js", "Express.js", "REST API"] },
  { cat: "Database", items: ["PostgreSQL", "Prisma ORM", "Supabase"] },
  { cat: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
];

const features = [
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Drug & Product Catalog",
    desc: "Comprehensive pharmacy inventory with drug information, batch tracking, expiry management, and restock alerts.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Prescription Management",
    desc: "Digital prescription processing with doctor verification, patient records, and dispensing history logs.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-Tenant Architecture",
    desc: "Each pharmacy branch operates in an isolated tenant environment with shared infrastructure—true SaaS scalability.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Sales & Revenue Analytics",
    desc: "Interactive dashboards displaying daily revenue, top-selling products, and monthly growth trends per branch.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Role-Based Access Control",
    desc: "Granular permission system for pharmacists, cashiers, managers, and super-admins with audit trail.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Low Stock & Expiry Alerts",
    desc: "Automated notifications when products reach minimum stock levels or approach their expiration dates.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Multi-Branch Management",
    desc: "Centralized admin panel to manage all pharmacy branches, staff, inventory, and reports from one dashboard.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Export & Reporting",
    desc: "Generate financial summaries, inventory snapshots, and prescription logs exportable to Excel and PDF.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cloud-Native & Scalable",
    desc: "Fully cloud-hosted on Supabase and Vercel, auto-scaling to handle high transaction volumes without downtime.",
  },
];

const highlights = [
  { num: "Multi", label: "Tenant SaaS" },
  { num: "Multi", label: "Branch Support" },
  { num: "RBAC", label: "Access Control" },
  { num: "Cloud", label: "Native" },
];

/* ─── Component ─── */
const AdoraSaaS = () => {
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
      {/* Decorative blobs */}
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
          {/* Back */}
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
              <Pill className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-zinc-900 leading-none tracking-tight mb-8"
          >
            Adora<br />
            <span className="text-neutral-400">Pharmacy</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-12"
          >
            A full-featured pharmacy management system built for PT Adora Medika—
            enabling pharmacies to manage prescriptions, drug inventory, staff roles,
            and financial reporting from a single centralized dashboard.
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
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── SCREENSHOT SHOWCASE ── */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Featured Screenshot */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden border-2 border-neutral-200 shadow-2xl mb-4 group cursor-none"
          >
            <img
              src="/images/adora-saas/adora-1.webp"
              alt="Adora SaaS - Landing Page & Dashboard Preview"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-5 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                Landing Page & Dashboard
              </span>
            </div>
          </motion.div>

          {/* Grid: 4 screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { src: "/images/adora-saas/adora-5.webp", label: "Pharmacy Dashboard" },
              { src: "/images/adora-saas/adora-4.webp", label: "Super Admin Panel" },
              { src: "/images/adora-saas/adora-3.webp", label: "Login Page" },
              { src: "/images/adora-saas/adora-6.webp", label: "Subscription Plans" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-md group cursor-none aspect-video"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grid: 3 more screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/adora-saas/adora-2.webp", label: "Customer-Facing Portal" },
              { src: "/images/adora-saas/adora-7.webp", label: "AI Chatbot Management" },
              { src: "/images/adora-saas/adora-8.webp", label: "Server Monitoring" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-md group cursor-none aspect-video"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
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
              Digitizing pharmacy operations for PT Adora Medika
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                Adora Pharmacy Management System is the foundational internal system
                built for PT Adora Medika in 2024. Developed as a full-stack web
                application using Next.js and Express.js, it serves as the centralized
                digital backbone for pharmacy operations across multiple branches.
              </p>
              <p>
                The system handles the complete lifecycle of pharmacy operations—from
                drug procurement and inventory management to prescription processing,
                cashier transactions, and financial reporting.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                Role-based access control ensures that pharmacists, cashiers, branch
                managers, and administrators each experience a tailored interface with
                the relevant permissions and data scopes.
              </p>
              <p>
                This system later served as the foundation and inspiration for the
                evolution into a cloud-native, multi-tenant SaaS architecture—the
                Adora SaaS platform launched in 2025.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </div>
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
              A complete pharmacy management solution
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
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-violet-950 to-indigo-900 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
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

export default AdoraSaaS;
