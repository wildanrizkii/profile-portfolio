import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const projects = [
  {
    title: "Spare Part Information System",
    link: "https://trialbasemakercmw.online",
    img: "/images/CMW.png",
  },
  {
    title: "Cash Flow Tracking Application",
    link: "/projects",
    img: "/images/Cashify.png",
  },
  {
    title: "Adora Pharmacy Information System",
    link: "/projects",
    img: "/images/Apotek.jpg",
  },
];

const ProjectItem = ({ title, link, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleMouseMove = (e) => {
    const imageWidth = 192;
    const imageHeight = 192;

    setPosition({
      x: e.clientX - imageWidth,
      y: e.clientY - imageHeight + 50,
    });
  };

  return (
    <motion.div variants={fadeInUp}>
      <div className="items-center text-center w-full">
        <div
          className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-8 md:px-32 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onClick={() =>
            link.startsWith("http")
              ? window.open(link, "_blank")
              : router.push(link)
          }
        >
          <h1 className="text-3xl md:text-4xl w-80 md:w-auto lg:w-98 font-medium text-dark-gray text-left">
            {title}
          </h1>

          <motion.button
            className="min-w-14 min-h-14 md:min-w-16 md:min-h-16 flex items-center justify-center rounded-full bg-black text-white md:mt-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <ArrowRight size={24} />
            </motion.span>
          </motion.button>

          <motion.div
            className="absolute bottom-[-24px] left-0 right-0 h-[2px] bg-gray-200 transition-colors duration-300"
            style={{ backgroundColor: isHovered ? "#000000" : "#e5e7eb" }}
          />
        </div>
      </div>

      {isHovered && (
        <motion.img
          src={img}
          alt={title}
          className="w-96 h-auto rounded-md shadow-2xl pointer-events-none fixed top-0 left-0 z-[-1]"
          animate={{ x: position.x, y: position.y, opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(false);
    const timer = setTimeout(() => {
      setIsMounted(true);
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    isMounted && (
      <div className="relative justify-center bg-transparent px-4 md:pl-16 md:pr-16 py-28 w-full">
        <motion.section
          key={pathname}
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.h1
            className="text-6xl font-medium text-dark-gray"
            variants={fadeInUp}
          >
            Projects
          </motion.h1>
        </motion.section>

        <div className="grid gap-64 pt-20">
          {projects.map((project, index) => (
            <motion.section
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "160px" }}
              variants={staggerChildren}
            >
              <motion.div
                className="w-full max-w-5xl mx-auto grid gap-10 md:gap-3"
                variants={staggerChildren}
              >
                <ProjectItem {...project} />
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    )
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

export default Projects;
