"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useTransitionState } from "../../PageTransition";
import useDebounce from "@/hooks/useDebounce";
import { CropMarks, RisoText } from "../../BroadsheetHelpers";

const projectList = [
  {
    title: "Adora SaaS",
    category: "SaaS · Healthcare ERP",
    description: "A cloud-native, multi-tenant SaaS pharmacy platform rebuilt with NestJS & Next.js 16 — managing prescriptions, drug inventory, staff roles, and branch analytics across multiple tenants.",
    tech: ["Next.js 16", "NestJS", "React 19", "Shadcn UI"],
    img: "/images/adora-saas/adora-1.webp",
    imgFit: "contain",
    href: "/projects/adora-saas",
    categoryFilter: "saas",
  },
  {
    title: "Cash Flow Tracking Application",
    category: "Financial Dashboard",
    description: "A tracking application with clean analytics, charts, and transaction history filters for personal financial management.",
    tech: ["Next.js", "Recharts", "PostgreSQL", "Supabase"],
    img: "/images/Cashify.png",
    href: "/projects/cashflow",
    categoryFilter: "finance",
  },
  {
    title: "Adora Pharmacy Management System",
    category: "Healthcare · Management System",
    description: "A full-featured pharmacy management system built for PT Adora Medika (2024) — managing prescriptions, drug inventory, staff roles, and financial reporting from a centralized dashboard.",
    tech: ["Next.js", "Express.js", "Ant Design", "PostgreSQL"],
    img: "/images/Apotek.jpg",
    href: "/projects/adora",
    categoryFilter: "saas",
  },
  {
    title: "Spare Part Information System",
    category: "Full-Stack Sales Platform",
    description: "An intuitive web platform designed to manage complex spare part hierarchies, vendor specifications, materials, and automated order generation.",
    tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    img: "",
    href: "/projects/sparepart",
    categoryFilter: "full-stack",
  },
];

const categories = [
  { id: "all", label: "All Works" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "saas", label: "Healthcare SaaS" },
  { id: "finance", label: "Finance" },
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

const BroadsheetProjectsList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 600);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 1500); // matches stagger animations
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setIsInitialLoad(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsInitialLoad(false);
  };

  const filteredProjects = useMemo(() => {
    return projectList.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.categoryFilter === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.category.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(debouncedSearch.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, selectedCategory]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden min-h-screen flex flex-col justify-between">
        <CropMarks />
        <Navbar />

        <div className="relative w-full max-w-5xl mx-auto pt-36 md:pt-44 pb-12 grow z-10 px-6">
          <motion.section
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="space-y-12 pb-12"
          >
            <div>
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                Catalog
              </p>
              <h1 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none">
                <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Selected Works</RisoText>
              </h1>
            </div>

            {/* Controls Bar */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-foreground/20 pb-8">
              {/* Search */}
              <div className="relative w-full md:max-w-xs">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-white/40 dark:bg-white/5 border border-foreground/30 px-4 py-2.5 pl-10 focus:outline-none focus:border-foreground rounded-none text-sm font-mono placeholder-muted-foreground cursor-none"
                />
                <FiSearch className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap border border-foreground/30 bg-transparent rounded-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 text-xs font-mono tracking-wider transition-colors duration-150 rounded-none cursor-none clickable border-r last:border-r-0 border-foreground/20 uppercase font-semibold ${
                      selectedCategory === cat.id
                        ? "bg-(--accent-vermilion) text-white"
                        : "text-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Catalog list */}
            <div className="relative z-10 mb-20">
              <AnimatePresence mode="popLayout">
                {filteredProjects.length > 0 ? (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2"
                    key="grid"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredProjects.map((project, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 45, scale: 0.96 }}
                          animate={isTransitioning 
                            ? { opacity: 0, y: 45, scale: 0.96 }
                            : {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                  type: "spring",
                                  stiffness: 90,
                                  damping: 15,
                                  delay: isInitialLoad ? 0.55 + index * 0.12 : 0
                                }
                              }
                          }
                          exit={{ 
                            opacity: 0, 
                            scale: 0.96, 
                            y: 20, 
                            transition: { duration: 0.2, ease: "easeInOut" } 
                          }}
                          key={project.title}
                          className="h-full"
                        >
                          <div
                            onClick={() => router.push(project.href)}
                            className="p-8 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-sm flex flex-col justify-between hover:bg-white/20 transition-all duration-200 cursor-none clickable rounded-none group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-none active:translate-y-px min-h-115"
                          >
                            <div className="space-y-6">
                              <div className="flex justify-between items-start">
                                <span className="text-[10px] font-mono text-white bg-(--accent-teal) px-2 py-0.5 uppercase tracking-wider">
                                  {project.category}
                                </span>
                                 <span className="text-xs font-mono text-muted-foreground">
                                   {(() => {
                                     const slug = project.href.split('/').pop();
                                     if (slug === 'adora-saas') return '2026';
                                     if (slug === 'sparepart') return '2023';
                                     return '2024';
                                   })()}
                                 </span>
                              </div>

                              <div className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-foreground leading-none group-hover:text-(--accent-vermilion) transition-colors">
                                  {project.title}
                                </h2>
                                <p className="text-sm font-serif text-muted-foreground leading-relaxed">
                                  {project.description}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[10px] font-mono text-foreground bg-white/40 dark:bg-white/5 border border-foreground/20 px-2.5 py-1 rounded-none"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>

                              <div className="pt-4 border-t border-foreground/10 flex justify-between items-center group-hover:border-foreground/30 transition-colors">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                                  Case Study
                                </span>
                                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-(--accent-vermilion)" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="text-center py-20 border border-dashed border-foreground/20"
                    key="empty"
                  >
                    <p className="font-serif italic text-muted-foreground">No projects match your search guidelines.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default BroadsheetProjectsList;
