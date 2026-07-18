"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { DollarSign } from "lucide-react";
import { useTransitionState } from "../../PageTransition";
import { CropMarks, RisoText } from "../../BroadsheetHelpers";

const BroadsheetCashFlow = () => {
  const router = useRouter();
  const { isTransitioning } = useTransitionState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = [
    { label: "Role", value: "Solo Full Stack Web Developer" },
    { label: "Client", value: "Personal Finance App" },
    { label: "Timeline", value: "Jun - Jul 2024" },
    { label: "Deliverable", value: "Web Portal Sandbox" },
  ];

  const highlights = [
    { num: "01", label: "Realtime Auth Validation" },
    { num: "02", label: "Dynamic Cash charts" },
    { num: "03", label: "Transaction Filters" },
    { num: "04", label: "Responsive Data Sheets" },
  ];

  const features = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Category Analytics Map",
      desc: "Recharts dashboards visualizing monthly budgets, category-wise breakdowns, and expense distributions.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Realtime Firebase Store",
      desc: "Immediate document insertions, category filters validation, and ledger updates in real-time.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Clean Transaction Sheets",
      desc: "Sort and filter transactional logs by date range, amount, or custom tag descriptions.",
    },
  ];

  const techStack = [
    { cat: "Front-End", items: ["React.js", "Tailwind CSS", "Recharts"] },
    { cat: "Back-End", items: ["Firebase Firestore", "Firebase Auth"] },
    { cat: "Deployment", items: ["Vercel hosting", "Security headers"] },
    { cat: "Analytics", items: ["Budget limits", "Export CSV rules"] },
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
      key="cashflow-broadsheet"
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
              <DollarSign className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase text-foreground leading-[0.95] tracking-tight mb-8"
          >
            <RisoText className="text-5xl sm:text-7xl md:text-8xl font-display font-black uppercase leading-[0.95] tracking-tight">
              Cash Flow Tracker
            </RisoText>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-serif font-normal max-w-2xl leading-relaxed mb-12"
          >
            A smart expense dashboard tracking financial accounts,
            category charts, and budget notifications inside a real-time Firestore database.
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
              src="/images/cashflow/cashflow-1.webp"
              alt="Cash Flow Tracker - Main Analytics Hub"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-5 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-black border border-white/20 px-3 py-1.5 rounded-none">
                Main Analytics Hub
              </span>
            </div>
          </motion.div>

          {/* Grid screenshots */}
          <div className="grid grid-cols-2 border-b border-foreground/20">
            {[
              { src: "/images/cashflow/cashflow-2.webp", label: "Ledger Accounts" },
              { src: "/images/cashflow/cashflow-3.webp", label: "Budget Planners" },
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
              Visualizing micro-budgets with low latency
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
              <p>
                Cash Flow Tracker provides single-account ledger visualizations to calculate
                monthly expenditures. Recharts components parse transaction structures into clean area
                and radial budget graphs instantly, resolving visual load lags.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-serif leading-relaxed"
            >
              <p>
                The database utilizes Firebase Firestore integrations, maintaining instant synchronization
                hooks to write, read, and delete transaction blocks securely with zero hosting cost.
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
              <RisoText className="text-3xl md:text-5xl font-display font-black uppercase leading-none">Personal Finance Solution</RisoText>
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

export default BroadsheetCashFlow;
