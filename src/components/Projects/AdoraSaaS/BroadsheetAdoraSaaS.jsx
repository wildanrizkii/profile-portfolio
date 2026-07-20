"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
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
import { useTransitionState } from "../../PageTransition";
import { CropMarks, RisoText } from "../../BroadsheetHelpers";

const BroadsheetAdoraSaaS = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = [
    { label: "Client", value: "PT Adora Medika" },
    { label: "Project Type", value: "Pharmacy Management System" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Year", value: "2024" },
  ];

  const highlights = [
    { num: "Multi", label: "Tenant SaaS" },
    { num: "Multi", label: "Branch Support" },
    { num: "RBAC", label: "Access Control" },
    { num: "Cloud", label: "Native" },
  ];

  const features = [
    {
      icon: <Pill className="w-5 h-5" />,
      title: "Drug & Product Catalog",
      desc: "Comprehensive pharmacy inventory with drug information, batch tracking, expiry management, and restock alerts.",
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Prescription Management",
      desc: "Digital prescription processing with doctor verification, patient records, and dispensing history logs.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-Tenant Architecture",
      desc: "Each pharmacy branch operates in an isolated tenant environment with shared infrastructure—true SaaS scalability.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Sales & Revenue Analytics",
      desc: "Interactive dashboards displaying daily revenue, top-selling products, and monthly growth trends per branch.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Role-Based Access Control",
      desc: "Granular permission system for pharmacists, cashiers, managers, and super-admins with audit trail.",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Low Stock & Expiry Alerts",
      desc: "Automated notifications when products reach minimum stock levels or approach their expiration dates.",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Multi-Branch Management",
      desc: "Centralized admin panel to manage all pharmacy branches, staff, inventory, and reports from one dashboard.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Export & Reporting",
      desc: "Generate financial summaries, inventory snapshots, and prescription logs exportable to Excel and PDF.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Cloud-Native & Scalable",
      desc: "Fully cloud-hosted on Supabase and Vercel, auto-scaling to handle high transaction volumes without downtime.",
    },
  ];

  const techStack = [
    { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Ant Design"] },
    { cat: "Back-End", items: ["Node.js", "Express.js", "REST API"] },
    { cat: "Database", items: ["PostgreSQL", "Prisma ORM", "Supabase"] },
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
              <Pill className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase text-foreground leading-[0.95] tracking-tight mb-8"
          >
            <RisoText className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase leading-[0.95] tracking-tight">
              Adora Pharmacy
            </RisoText>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-serif font-normal max-w-2xl leading-relaxed mb-12"
          >
            A full-featured pharmacy management system built for PT Adora Medika—
            enabling pharmacies to manage prescriptions, drug inventory, staff roles,
            and cashier checkouts seamlessly.
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
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* SCREENSHOT SHOWCASE */}
        <motion.section
          className="w-full max-w-5xl mx-auto px-6 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Featured Screenshot */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-none overflow-hidden border border-foreground/30 shadow-sm mb-4 group cursor-none"
          >
            <img
              src="/images/adora-saas/adora-1.webp"
              alt="Adora SaaS - Landing Page & Dashboard Preview"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-5 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-black border border-white/20 px-3 py-1.5 rounded-none">
                Landing Page & Dashboard
              </span>
            </div>
          </motion.div>

          {/* Grid screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-foreground/20">
            {[
              { src: "/images/adora-saas/adora-5.webp", label: "Pharmacy Dashboard" },
              { src: "/images/adora-saas/adora-4.webp", label: "Super Admin Panel" },
              { src: "/images/adora-saas/adora-3.webp", label: "Login Page" },
              { src: "/images/adora-saas/adora-6.webp", label: "Subscription Plans" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-none overflow-hidden border-t border-r last:border-r-0 border-foreground/25 shadow-sm group cursor-none aspect-video"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white bg-black border border-white/10 px-2.5 py-1 rounded-none">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grid: 3 more screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground/20">
            {[
              { src: "/images/adora-saas/adora-2.webp", label: "Customer-Facing Portal" },
              { src: "/images/adora-saas/adora-7.webp", label: "AI Chatbot Management" },
              { src: "/images/adora-saas/adora-8.webp", label: "Server Monitoring" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-none overflow-hidden border-r last:border-r-0 border-foreground/25 shadow-sm group cursor-none aspect-video"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white bg-black border border-white/10 px-2.5 py-1 rounded-none">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
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
              Digitizing pharmacy operations for PT Adora Medika
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
              <p>
                Adora Pharmacy Management System is the foundational internal system
                built for PT Adora Medika in 2024. Developed as a full-stack web
                application using Next.js and Express.js, it serves as the digital
                backbone for pharmacy operations across multiple branches.
              </p>
              <p>
                The system handles the complete lifecycle of pharmacy operations—from
                drug procurement and inventory management to prescription processing,
                cashier transactions, and financial reporting.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
              <p>
                Role-based access control ensures that pharmacists, cashiers, branch
                managers, and administrators each experience a tailored interface with
                the relevant permissions and data scopes.
              </p>
              <p>
                This system later served as the foundation and inspiration for the
                evolution into a cloud-native, multi-tenant SaaS architecture—the
                Adora SaaS platform launched in 2026.
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
              <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Pharmacy Solution</RisoText>
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

export default BroadsheetAdoraSaaS;
