"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import {
  TrendingUp,
  PieChart,
  CalendarRange,
  Bell,
  Download,
  LayoutDashboard,
  Wallet,
  ArrowUpDown,
  ShieldCheck,
  Smartphone,
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
  { label: "Client", value: "Personal Project" },
  { label: "Project Type", value: "Finance Tracker" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Year", value: "2025" },
];

const techStack = [
  { cat: "Front-End", items: ["Next.js", "React", "Tailwind CSS", "Recharts"] },
  { cat: "Back-End", items: ["Next.js API Routes", "Prisma ORM"] },
  { cat: "Database", items: ["PostgreSQL", "Supabase"] },
  { cat: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
];

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Real-Time Dashboard",
    desc: "Bird's-eye view of your income, expenses, and net cash flow with live updating charts and balances.",
  },
  {
    icon: <ArrowUpDown className="w-6 h-6" />,
    title: "Income & Expense Tracking",
    desc: "Log every transaction with category tags, notes, and timestamps for complete financial transparency.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Interactive Charts & Analytics",
    desc: "Beautiful donut charts, bar graphs, and trend lines powered by Recharts to visualize spending habits.",
  },
  {
    icon: <CalendarRange className="w-6 h-6" />,
    title: "Period-Based Reporting",
    desc: "Filter and compare cash flow by day, week, month, or custom date range for granular analysis.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Budget Alerts",
    desc: "Set monthly spending limits per category and receive automatic alerts when approaching thresholds.",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Export to CSV / PDF",
    desc: "Download your financial reports in structured formats ready for bookkeeping or auditing.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Multi-Account Wallet",
    desc: "Manage cash, bank, and e-wallet accounts in one place with unified balance tracking.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure Auth",
    desc: "Email and OAuth sign-in with session management and role-based access powered by NextAuth.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Responsive",
    desc: "Fully responsive design optimized for mobile-first usage—track finances anywhere, anytime.",
  },
];

const highlights = [
  { num: "Multi", label: "Account Support" },
  { num: "100%", label: "Responsive" },
  { num: "Real-Time", label: "Dashboard" },
  { num: "CSV/PDF", label: "Export" },
];

/* ─── Bar chart mock data ─── */
const mockBars = [
  { month: "Jan", income: 72, expense: 45 },
  { month: "Feb", income: 60, expense: 52 },
  { month: "Mar", income: 85, expense: 38 },
  { month: "Apr", income: 78, expense: 62 },
  { month: "May", income: 92, expense: 55 },
  { month: "Jun", income: 68, expense: 48 },
];

/* ─── Component ─── */
const CashFlow = () => {
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
          {/* Back */}
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
              <TrendingUp className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal text-foreground leading-[1.05] tracking-tight mb-8"
          >
            Cash Flow<br />
            <span className="text-neutral-400">Tracker</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed mb-12"
          >
            A personal finance web application that gives you complete visibility
            over your income and expenses—with beautiful analytics, multi-account
            wallets, and smart budget alerts.
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
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── SCREENSHOT SHOWCASE ── */}
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
            className="relative rounded-none overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-sm mb-4 group cursor-none"
          >
            <img
              src="/images/Cashify.png"
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
              Your money, fully in view
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans"
            >
              <p>
                Cash Flow Tracker is a full-stack personal finance application built to
                give users complete visibility over their financial health. It allows
                users to log every income and expense, categorize transactions, and
                monitor their cash position in real time.
              </p>
              <p>
                The dashboard surfaces interactive charts and trend graphs that transform
                raw transaction data into actionable insights—helping users understand
                exactly where their money comes from and where it goes.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans"
            >
              <p>
                Multi-account support lets users track cash, bank accounts, and digital
                wallets side by side. Budget alerts send timely notifications before
                spending limits are breached, keeping finances disciplined.
              </p>
              <p>
                Reports can be exported to CSV or PDF for bookkeeping and tax filing.
                The fully responsive design ensures a seamless experience on both
                desktop and mobile devices.
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
          <div className="grid grid-cols-2 md:grid-cols-4">
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
          </div>
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
              Everything you need to track your finances
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

export default CashFlow;
