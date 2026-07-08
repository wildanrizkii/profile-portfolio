"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Layout, Database, Sparkles, PenTool } from "lucide-react";
import { useTransitionState } from "../PageTransition";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const TechTools = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const { isTransitioning } = useTransitionState();

  useEffect(() => {
    setIsMounted(false);
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  const skillCategories = [
    {
      title: "Front-End Development",
      description: "Building responsive, componentized user interfaces with absolute attention to layout structure and design details.",
      icon: <Layout className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "React Query", "Shadcn UI", "Radix UI", "Ant Design", "Styled Components", "SWR"],
    },
    {
      title: "Backend & Systems",
      description: "Creating secure APIs, routing logical controllers, modeling relational database tables, and integrating storage assets.",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "NestJS", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "Docker", "REST APIs", "Swagger OpenAPI", "CRUD Operations"],
    },
    {
      title: "Creative Motion",
      description: "Creating immersive scroll animations, micro-interactions, page transitions, and responsive spring effects.",
      icon: <Sparkles className="w-6 h-6" />,
      skills: ["Framer Motion", "GSAP", "Lenis Scroll", "Git & GitHub"],
    },
    {
      title: "Design & Prototyping",
      description: "Mapping intuitive user flows, framing interactive layouts, building responsive mockups, and assets editing.",
      icon: <PenTool className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "Framer Studio", "Adobe Photoshop"],
    },
  ];

  return (
    isMounted && (
      <div className="relative justify-center bg-transparent px-4 md:px-8 w-full max-w-5xl mx-auto py-16">
        <motion.section
          key={pathname}
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
          className="space-y-12"
        >
          <div>
            <motion.p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2" variants={fadeInUp}>
              Competencies
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-medium text-dark-gray"
              variants={fadeInUp}
            >
              Tech & Tools
            </motion.h1>
          </div>

          {/* Styled Bento Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md hover:border-foreground transition-colors duration-500 cursor-none clickable flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-foreground dark:group-hover:bg-foreground group-hover:text-background dark:group-hover:text-background transition-colors duration-500">
                      <span className="transition-colors duration-500 [&>svg]:group-hover:text-background">
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 font-semibold leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-foreground hover:text-background px-2.5 py-1.5 rounded-lg border border-neutral-200/60 dark:border-neutral-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    )
  );
};

export default TechTools;
