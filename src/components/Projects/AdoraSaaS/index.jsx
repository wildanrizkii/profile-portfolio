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
  { label: "Project Type", value: "SaaS Platform" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Year", value: "2025" },
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

/* ─── Mock prescription items ─── */
const mockPrescriptions = [
  { name: "Amoxicillin 500mg", qty: "3×1", status: "Dispensed", statusColor: "text-emerald-400" },
  { name: "Paracetamol 500mg", qty: "3×1", status: "Dispensed", statusColor: "text-emerald-400" },
  { name: "Omeprazole 20mg", qty: "1×1", status: "Pending", statusColor: "text-amber-400" },
  { name: "Vitamin C 1000mg", qty: "1×1", status: "Dispensed", statusColor: "text-emerald-400" },
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
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        {/* ── Navbar ── */}
        <motion.nav
          className="fixed top-0 left-0 w-full bg-[#f9f2ed]/80 backdrop-blur-md shadow-sm z-50"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={navbarFadeDown}
        >
          <Navbar />
        </motion.nav>

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
            <span className="text-neutral-400">SaaS</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-12"
          >
            A cloud-native, multi-tenant pharmacy management SaaS platform built for
            PT Adora Medika—enabling pharmacies to manage prescriptions, inventory,
            staff, and analytics across multiple branches from a single dashboard.
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

        {/* ── HERO VISUAL MOCKUP ── */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-200 bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 min-h-[400px] md:min-h-[520px] p-6 md:p-10 flex flex-col justify-between">
            {/* Grid bg */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <Pill className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-tight">Adora SaaS</p>
                  <p className="text-white/40 text-xs font-semibold">Pharmacy Management Platform</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Tenant: Adora Cimahi", "Branch: Main"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold text-white/60 bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Body: 2-column */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {/* Left: Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Today's Revenue", value: "Rp 4.250.000", sub: "+8% vs yesterday" },
                  { label: "Prescriptions", value: "47", sub: "Processed today" },
                  { label: "Products", value: "1.240", sub: "In inventory" },
                  { label: "Low Stock Alerts", value: "12", sub: "Need restock" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm p-4"
                  >
                    <p className="text-white/50 text-xs font-semibold mb-1">{card.label}</p>
                    <p className="text-white text-xl font-black">{card.value}</p>
                    <p className="text-white/40 text-xs mt-1">{card.sub}</p>
                  </div>
                ))}
              </div>

              {/* Right: Prescription table */}
              <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm p-4">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">
                  Recent Prescriptions
                </p>
                <div className="space-y-2">
                  {mockPrescriptions.map((rx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{rx.name}</p>
                        <p className="text-white/40 text-xs">{rx.qty}</p>
                      </div>
                      <span className={`text-xs font-bold ${rx.statusColor}`}>{rx.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom badge row */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {["Multi-Tenant", "Role-Based Access", "Cloud-Native", "Real-Time Alerts"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-bold text-white/60 bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-6 right-8 opacity-[0.04]">
              <Pill className="w-52 h-52 text-white" />
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
              Reimagining pharmacy operations as a SaaS product
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                Adora SaaS is a transformation of PT Adora Medika's internal pharmacy
                information system into a fully cloud-native, multi-tenant SaaS
                platform. The project was scoped to support multiple pharmacy branches
                under a single platform instance, each operating within isolated data
                boundaries.
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
                managers, and platform administrators each experience a tailored
                interface with relevant permissions and data scopes.
              </p>
              <p>
                Built on a modern cloud stack with Supabase and Vercel, Adora SaaS
                is designed for resilience and scalability—supporting high transaction
                volumes with real-time updates, automated stock alerts, and branch-level
                analytics.
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
              A full-stack pharmacy operating system
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-950 to-indigo-900 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
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
