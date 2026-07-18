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

/* ÔöÇÔöÇÔöÇ Animation Variants ÔöÇÔöÇÔöÇ */
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

/* ÔöÇÔöÇÔöÇ Data ÔöÇÔöÇÔöÇ */
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
    desc: "Fully responsive design optimized for mobile-first usageÔÇötrack finances anywhere, anytime.",
  },
];

const highlights = [
  { num: "Multi", label: "Account Support" },
  { num: "100%", label: "Responsive" },
  { num: "Real-Time", label: "Dashboard" },
  { num: "CSV/PDF", label: "Export" },
];

/* ÔöÇÔöÇÔöÇ Bar chart mock data ÔöÇÔöÇÔöÇ */
const mockBars = [
  { month: "Jan", income: 72, expense: 45 },
  { month: "Feb", income: 60, expense: 52 },
  { month: "Mar", income: 85, expense: 38 },
  { month: "Apr", income: 78, expense: 62 },
  { month: "May", income: 92, expense: 55 },
  { month: "Jun", income: 68, expense: 48 },
];

/* ÔöÇÔöÇÔöÇ Component ÔöÇÔöÇÔöÇ */
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
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-32 -right-32 w-150 h-150 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--foreground) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-125 h-125 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, var(--foreground) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        {/* ÔöÇÔöÇ Navbar ÔöÇÔöÇ */}
        <Navbar />

        {/* ÔöÇÔöÇ HERO ÔöÇÔöÇ */}
        <motion.section
          className="relative pt-36 sm:pt-44 md:pt-52 pb-20 px-4 md:px-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          variants={staggerChildren}
        >
          {/* Back */}
          <motion.button
            variants={fadeInUp}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-foreground transition-colors duration-200 mb-10 group cursor-none clickable"
            onClick={() => router.back()}
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back
          </motion.button>

          {/* Label pill */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 bg-neutral-200/60 dark:bg-neutral-800/40 border border-neutral-300 dark:border-neutral-800 px-3 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4" />
              Project Case Study
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-zinc-900 leading-none tracking-tight mb-8"
          >
            Cash Flow<br />
            <span className="text-neutral-400">Tracker</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-12"
          >
            A personal finance web application that gives you complete visibility
            over your income and expensesÔÇöwith beautiful analytics, multi-account
            wallets, and smart budget alerts.
          </motion.p>

          {/* Meta grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-neutral-200 dark:border-neutral-800 py-8"
          >
            {meta.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  {m.label}
                </span>
                <span className="text-base md:text-lg font-bold text-foreground">{m.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ÔöÇÔöÇ HERO VISUAL / MOCKUP ÔöÇÔöÇ */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-24"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-200 bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 min-h-90 md:min-h-120 p-8 flex flex-col justify-between">
            {/* Grid bg */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Top: header row */}
            <div className="relative z-10 flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Cash Flow Tracker</p>
                <h2 className="text-2xl md:text-3xl font-black text-white">June 2025 Overview</h2>
              </div>
              <div className="flex gap-3 flex-wrap">
                {["Income", "Expense", "Balance"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold text-white/70 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: stat cards */}
            <div className="relative z-10 grid grid-cols-3 gap-3 md:gap-5 my-6">
              {[
                { label: "Total Income", value: "Rp 8.400.000", trend: "+12%", positive: true },
                { label: "Total Expense", value: "Rp 4.800.000", trend: "-5%", positive: false },
                { label: "Net Cash Flow", value: "Rp 3.600.000", trend: "+27%", positive: true },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm p-4 md:p-5"
                >
                  <p className="text-white/50 text-xs font-semibold mb-2">{card.label}</p>
                  <p className="text-white text-base md:text-xl font-black leading-tight">{card.value}</p>
                  <p className={`text-xs font-bold mt-1 ${card.positive ? "text-emerald-400" : "text-rose-400"}`}>
                    {card.trend} vs last month
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom: mini bar chart */}
            <div className="relative z-10">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">
                Monthly Trend
              </p>
              <div className="flex items-end gap-2 h-20">
                {mockBars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col gap-0.5">
                      <div
                        className="w-full rounded-t bg-emerald-400/70"
                        style={{ height: `${(bar.income / 100) * 64}px` }}
                      />
                      <div
                        className="w-full rounded-b bg-rose-400/60"
                        style={{ height: `${(bar.expense / 100) * 64}px` }}
                      />
                    </div>
                    <span className="text-white/30 text-[10px] font-semibold">{bar.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-3">
                <span className="flex items-center gap-1.5 text-xs text-white/50 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400/70" />
                  Income
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/50 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-400/60" />
                  Expense
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ÔöÇÔöÇ OVERVIEW ÔöÇÔöÇ */}
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
              Your money, fully in view
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              <p>
                Cash Flow Tracker is a full-stack personal finance application built to
                give users complete visibility over their financial health. It allows
                users to log every income and expense, categorize transactions, and
                monitor their cash position in real time.
              </p>
              <p>
                The dashboard surfaces interactive charts and trend graphs that transform
                raw transaction data into actionable insightsÔÇöhelping users understand
                exactly where their money comes from and where it goes.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-gray-600 font-medium leading-relaxed"
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

        {/* ÔöÇÔöÇ HIGHLIGHTS ÔöÇÔöÇ */}
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
                className="p-8 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-foreground transition-all duration-300 cursor-none clickable"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                  {h.num}
                </span>
                <span className="text-sm font-semibold text-gray-500">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ÔöÇÔöÇ FEATURES ÔöÇÔöÇ */}
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
              Everything you need to track your finances
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-sm flex flex-col gap-4 hover:border-foreground transition-all duration-300 cursor-none clickable group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center group-hover:bg-foreground dark:group-hover:bg-foreground group-hover:text-background dark:group-hover:text-background group-hover:border-foreground transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ÔöÇÔöÇ TECH STACK ÔöÇÔöÇ */}
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
                className="p-6 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-sm hover:border-foreground transition-colors duration-300 cursor-none clickable"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-foreground hover:text-background px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ÔöÇÔöÇ CTA ÔöÇÔöÇ */}
        <motion.section
          className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-20"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#f3eae1] via-[#f7eade] to-[#eedcd0] dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 border border-neutral-300/40 dark:border-neutral-800/80 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm"
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-500 dark:text-neutral-400 text-sm font-bold uppercase tracking-widest mb-3">
                Let's Work Together
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-black dark:text-foreground leading-tight">
                Have a project in mind?
              </h2>
            </div>
            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="relative z-10 flex items-center gap-2 px-7 py-4 bg-foreground text-background text-base font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap cursor-none clickable group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Write an Email
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.section>

        {/* ÔöÇÔöÇ Footer ÔöÇÔöÇ */}
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

export default CashFlow;
