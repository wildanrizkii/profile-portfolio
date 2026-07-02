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
  Layers,
  Zap,
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
  { label: "Year", value: "2026" },
];

const techStack = [
  {
    cat: "Front-End",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    cat: "UI & UX",
    items: ["Shadcn UI", "Radix UI", "Framer Motion", "Lucide React"],
  },
  {
    cat: "Back-End",
    items: ["NestJS", "Node.js", "REST API", "Swagger"],
  },
  {
    cat: "Data & Auth",
    items: ["PostgreSQL", "Prisma ORM", "JWT", "Passport.js"],
  },
  {
    cat: "State & Query",
    items: ["TanStack Query", "Axios", "Zod", "Class Validator"],
  },
  {
    cat: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Vercel", "Biome"],
  },
];

const features = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Tenant SaaS Architecture",
    desc: "Each pharmacy client operates in a fully isolated tenant environment with dedicated data scopes—true enterprise SaaS scalability built on NestJS.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Prescription Management",
    desc: "Digital prescription processing with doctor verification, patient records, and dispensing history logs—fully integrated into the cashier workflow.",
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Drug & Inventory Catalog",
    desc: "Comprehensive pharmacy inventory with drug information, batch tracking, expiry management, and automated restock alerts.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Sales & Revenue Analytics",
    desc: "Interactive dashboards built with Recharts displaying daily revenue, top-selling products, and monthly growth trends per branch.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Role-Based Access Control",
    desc: "Granular permission system for pharmacists, cashiers, managers, and super-admins with full audit trail—powered by Passport.js and JWT.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Low Stock & Expiry Alerts",
    desc: "Automated notifications delivered via email (Nodemailer) when products hit minimum stock levels or approach expiration dates.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Multi-Branch Management",
    desc: "Centralized admin panel to manage all pharmacy branches, staff, inventory, and reports from one unified dashboard.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Export & Reporting",
    desc: "Generate financial summaries, inventory snapshots, and prescription logs exportable to Excel (xlsx) and PDF formats.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Optimistic UI & Fast UX",
    desc: "Built with TanStack Query for server-state management, providing instant optimistic updates and background data synchronization.",
  },
];

const highlights = [
  { num: "Multi", label: "Tenant SaaS" },
  { num: "NestJS", label: "API Backend" },
  { num: "RBAC", label: "Access Control" },
  { num: "React 19", label: "Frontend" },
];

/* ─── Mock dashboard data ─── */
const mockStats = [
  { label: "Today's Revenue", value: "Rp 6.870.000", sub: "+14% vs yesterday" },
  { label: "Prescriptions", value: "83", sub: "Processed today" },
  { label: "Active Tenants", value: "12", sub: "Pharmacy branches" },
  { label: "Low Stock Alerts", value: "7", sub: "Need restock" },
];

const mockPrescriptions = [
  { name: "Amoxicillin 500mg", qty: "3×1", status: "Dispensed", statusColor: "text-emerald-400" },
  { name: "Paracetamol 500mg", qty: "3×1", status: "Dispensed", statusColor: "text-emerald-400" },
  { name: "Omeprazole 20mg", qty: "1×1", status: "Pending", statusColor: "text-amber-400" },
  { name: "Vitamin C 1000mg", qty: "1×1", status: "Dispensed", statusColor: "text-emerald-400" },
];

/* ─── Component ─── */
const AdoraSaaSNew = () => {
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
              <Layers className="w-4 h-4" />
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
            A cloud-native, multi-tenant SaaS pharmacy platform—rebuilt from the
            ground up using NestJS, Next.js 16, and React 19—enabling PT Adora Medika
            to manage prescriptions, inventory, staff, and analytics across multiple
            branches from a single unified dashboard.
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
              A SaaS evolution—rebuilt with enterprise-grade architecture
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                Adora SaaS is the next evolution of the Adora Pharmacy Management
                System—rebuilt from the ground up as a fully cloud-native,
                multi-tenant SaaS platform. The backend was migrated from Express.js
                to NestJS for a modular, scalable architecture, while the frontend
                was upgraded to Next.js 16 with React 19.
              </p>
              <p>
                Each pharmacy client operates within a fully isolated tenant
                environment, sharing infrastructure while maintaining strict data
                boundaries—enabling true SaaS scalability for PT Adora Medika's
                growing pharmacy network.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                The API layer is built with NestJS, leveraging Passport.js for
                authentication, JWT for stateless session management, and
                class-validator with Zod for strict request validation—all
                documented via Swagger.
              </p>
              <p>
                The frontend leverages TanStack Query for performant server-state
                management, Shadcn UI and Radix UI for accessible components, and
                Recharts for rich analytics dashboards—delivering a polished,
                enterprise-grade user experience.
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
              A full-stack pharmacy SaaS operating system
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
              Built with modern enterprise tools
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-violet-950 to-indigo-900 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
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

export default AdoraSaaSNew;
