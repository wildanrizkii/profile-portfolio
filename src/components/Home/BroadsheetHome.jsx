"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Projects from "../Projects/About";
import { Palette, Code2, Globe } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { useTransitionState } from "../PageTransition";
import { CropMarks, RisoText } from "../BroadsheetHelpers";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

const BroadsheetHome = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isTransitioning } = useTransitionState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden min-h-screen pb-12">
        {/* Corner Crop Marks & Printer Bullseye */}
        <CropMarks />

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <motion.section
          className="relative max-w-5xl mx-auto px-6 pt-44 md:pt-52 pb-16 grid gap-8 z-10"
          initial="hidden"
          animate={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div className="w-full grid gap-5" variants={staggerChildren}>
            {/* Coupon-style status ticket */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 px-3 py-1 border-2 border-dashed border-foreground/40 bg-transparent text-foreground text-[10px] font-mono uppercase tracking-widest w-fit select-none mb-2"
            >
              <span className="relative flex h-1.5 w-1.5 bg-foreground"></span>
              Available for Freelance Projects
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight" variants={fadeInUp}>
              <RisoText className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase leading-none">
                Hi, I'm Wildan
              </RisoText>
            </motion.h1>

            <motion.h1 className="text-5xl md:text-8xl font-display uppercase tracking-tight" variants={fadeInUp}>
              <RisoText className="text-5xl md:text-8xl font-display font-black tracking-tight uppercase leading-[0.95]">
                Turning mind<br />into digital magic
              </RisoText>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-serif font-normal text-muted-foreground pt-4 max-w-2xl leading-relaxed"
              variants={fadeInUp}
            >
              I am a Web Designer and Full Stack Web Developer specializing in
              creating web applications with clean user interfaces, sharp layouts, and
              optimized user experiences.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4">
              <motion.button
                className="px-8 py-4 border-2 border-foreground bg-(--accent-vermilion) text-white hover:bg-foreground hover:text-background rounded-none text-xs font-mono uppercase tracking-wider cursor-none clickable font-semibold active:translate-y-px shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none transition-all duration-150"
                onClick={() => router.push("/about")}
              >
                Read About me
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Infinitely scrolling riso-banner marquee */}
        <div className="w-full overflow-hidden border-y-2 border-foreground py-3 bg-(--accent-teal) text-white font-mono text-[10px] uppercase tracking-widest rotate-[-1.2deg] my-10 shadow-sm z-20 relative select-none">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            <span>DESIGN & ENGINEERING • CREATING DIGITAL MAGIC • AVAILABLE FOR FREELANCE • FULL STACK DEVELOPMENT • DESIGN & ENGINEERING • CREATING DIGITAL MAGIC • AVAILABLE FOR FREELANCE • FULL STACK DEVELOPMENT •</span>
            <span>DESIGN & ENGINEERING • CREATING DIGITAL MAGIC • AVAILABLE FOR FREELANCE • FULL STACK DEVELOPMENT • DESIGN & ENGINEERING • CREATING DIGITAL MAGIC • AVAILABLE FOR FREELANCE • FULL STACK DEVELOPMENT •</span>
          </div>
        </div>

        {/* Section 1: About Brief & Stats */}
        <AboutBrief />

        {/* Section 2: Services capabilities */}
        <Services />

        {/* Projects Section */}
        <motion.div
          className="w-full max-w-5xl mx-auto overflow-hidden py-12 px-6 z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="mb-12">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none">
              <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Selected Works</RisoText>
            </h2>
          </div>
          <Projects className="max-w-5xl" />
        </motion.div>

        {/* Section 3: Tech Showcase */}
        <TechShowcase />

        {/* Section 4: Workflow/Creative Process */}
        <Workflow />

        {/* CTA Work Together */}
        <motion.section
          className="w-full max-w-5xl mx-auto overflow-hidden py-16 px-6 z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div
            className="border border-foreground/30 py-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center w-full px-8 bg-white/10 dark:bg-white/2 rounded-none relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            variants={fadeInUp}
          >
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Collaborate</p>
              <h1 className="text-4xl md:text-7xl font-display font-black uppercase text-foreground leading-none">
                <RisoText className="text-4xl md:text-7xl font-display font-black uppercase leading-none">Let's work together</RisoText>
              </h1>
            </div>

            <motion.a
              href="mailto:wildanrizki9560@gmail.com"
              className="px-8 py-4 border-2 border-foreground bg-(--accent-vermilion) text-white hover:bg-foreground hover:text-background rounded-none text-xs font-mono uppercase tracking-widest transition-all duration-150 cursor-none clickable font-semibold whitespace-nowrap z-10 shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
            >
              Write an Email
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="w-full py-12 bg-transparent mt-12 border-t border-foreground/20 z-10 relative"
          initial="hidden"
          whileInView={isTransitioning ? "hidden" : "visible"}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 px-8">
            <span>Designed & developed by wildanrizkii</span>
            <span>RISO-POSTER EDITION // C-04</span>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

/* --- Subcomponents --- */

const AboutBrief = () => {
  const router = useRouter();
  const { isTransitioning } = useTransitionState();

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "UNPAR", label: "Informatics Graduate" },
    { number: "2+", label: "Years Programming" },
    { number: "100%", label: "Responsive Design" },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <motion.div className="lg:col-span-7 space-y-6" variants={fadeInUp}>
        <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
          Who I Am
        </p>
        <h2 className="text-3xl md:text-5xl font-serif italic text-foreground leading-tight">
          Crafting web experiences that blend aesthetic beauty with robust performance.
        </h2>
        <p className="text-base font-serif text-muted-foreground font-normal leading-relaxed">
          I am a Web Designer and Full Stack Web Developer. With a solid computer
          science foundation, I specialize in building reactive user interfaces,
          optimized backend systems, and responsive layout architectures using modern
          frameworks like React and Next.js.
        </p>
        <motion.div className="pt-4">
          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background text-xs font-mono uppercase tracking-wider transition-all duration-150 rounded-none cursor-none clickable font-semibold shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-none active:translate-y-px"
            onClick={() => router.push("/about")}
          >
            Read my story
            <FiArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div className="lg:col-span-5 grid grid-cols-2" variants={staggerChildren}>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="p-6 border border-foreground/30 -mr-px -mt-px bg-white/10 dark:bg-white/2 backdrop-blur-xs flex flex-col justify-center text-center rounded-none cursor-none clickable hover:bg-(--accent-vermilion) hover:text-white transition-all duration-200 group"
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-1 text-foreground group-hover:text-white transition-colors">
              {stat.number}
            </h3>
            <p className="text-[9px] text-muted-foreground font-mono uppercase tracking-wider group-hover:text-white/80 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

const Services = () => {
  const { isTransitioning } = useTransitionState();
  const serviceList = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      desc: "Creating high-fidelity wireframes, interactive user flows, and modern design systems that captivate and convert.",
      deliverables: ["User Research", "Wireframing & Prototyping", "Aesthetic Light Themes", "Design Systems in Figma"],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Front-End Engineering",
      desc: "Building pixel-perfect interfaces with smooth animations, optimized core web vitals, and structured accessibility.",
      deliverables: ["React.js & Next.js Builds", "Tailwind CSS & Modern Styling", "Framer Motion Animations", "Responsive Mobile-First CSS"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full-Stack Development",
      desc: "Architecting backend integrations, relational databases, REST/GraphQL APIs, and secure application rules.",
      deliverables: ["Node.js & Express API Routes", "Supabase & Firebase Integration", "PostgreSQL & Schema Layouts", "Secure Authentication & Roles"],
    },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-6 py-20 z-10 relative"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2"
          variants={fadeInUp}
        >
          Capabilities
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none"
          variants={fadeInUp}
        >
          <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Services I Provide</RisoText>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {serviceList.map((service, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="p-8 border border-foreground/30 -mr-px bg-white/10 dark:bg-white/2 backdrop-blur-md flex flex-col justify-between hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 rounded-none cursor-none clickable group"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center text-foreground bg-transparent group-hover:border-white group-hover:text-white transition-colors">
                <span>
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-serif italic text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm font-serif text-muted-foreground leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                {service.desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-foreground/20 group-hover:border-white/20 transition-colors">
              <ul className="space-y-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground group-hover:text-white/80 transition-colors">
                {service.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 border border-foreground/40 bg-transparent group-hover:border-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const TechShowcase = () => {
  const { isTransitioning } = useTransitionState();
  const groups = [
    {
      name: "Front-End",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "React Query", "Shadcn UI", "Radix UI", "Ant Design"],
    },
    {
      name: "Back-End & DB",
      skills: ["Node.js", "NestJS", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "Docker", "REST APIs", "Swagger OpenAPI"],
    },
    {
      name: "Tools & Motion",
      skills: ["Git & GitHub", "Framer Motion", "GSAP", "Lenis Scroll", "Figma", "Adobe XD"],
    },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-6 py-20 z-10 relative"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2"
          variants={fadeInUp}
        >
          Stack
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none"
          variants={fadeInUp}
        >
          <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Tech & Tools</RisoText>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {groups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="p-8 border border-foreground/30 -mr-px bg-white/10 dark:bg-white/2 rounded-none cursor-none clickable flex flex-col justify-start hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 group"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-foreground/20 pb-3 mb-6 group-hover:text-white group-hover:border-white/20 transition-colors">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-foreground bg-white/40 dark:bg-white/5 hover:bg-foreground hover:text-background dark:hover:text-foreground px-2.5 py-1 border border-foreground/20 transition-all duration-200 rounded-none group-hover:border-white/30 group-hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const Workflow = () => {
  const { isTransitioning } = useTransitionState();
  const steps = [
    {
      num: "01",
      title: "Research & Concept",
      desc: "Analyzing user needs, domain research, planning site architecture, and wireframing UX pathways.",
    },
    {
      num: "02",
      title: "UI/UX Design",
      desc: "Designing responsive interfaces, modern typography scales, layouts, and high-fidelity Figma prototypes.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Writing Next.js/React components, database integrations, backend APIs, and responsive styles.",
    },
    {
      num: "04",
      title: "Launch & Audits",
      desc: "Performing SEO updates, web vitals speed audits, testing accessibility rules, and product release.",
    },
  ];

  return (
    <motion.section
      className="w-full max-w-5xl mx-auto px-6 py-20 z-10 relative"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <div className="mb-12">
        <motion.p
          className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2"
          variants={fadeInUp}
        >
          Workflow
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none"
          variants={fadeInUp}
        >
          <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Development Process</RisoText>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="relative p-6 border border-foreground/30 -mr-px bg-white/10 dark:bg-white/2 rounded-none flex flex-col gap-6 justify-between hover:bg-(--accent-teal) hover:text-white transition-colors duration-200 cursor-none clickable overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-[0.08] group-hover:opacity-20 transition-opacity duration-300 z-0">
              <span className="text-7xl font-display font-black text-foreground select-none group-hover:text-white">
                {step.num}
              </span>
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-transparent border border-foreground/20 px-2.5 py-1 group-hover:border-white/30 group-hover:text-white">
                Step {step.num}
              </span>
              <h3 className="text-xl font-serif italic text-foreground pt-2 group-hover:text-white">{step.title}</h3>
              <p className="text-sm font-serif text-muted-foreground font-normal leading-relaxed group-hover:text-white/80">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BroadsheetHome;
