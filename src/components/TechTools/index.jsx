import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const TechTools = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false); // Reset animasi
    const timer = setTimeout(() => {
      setIsMounted(true);
      window.scrollTo(0, 0);
    }, 100); // Delay agar animasi bisa terdeteksi ulang

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleMouseMove = (e) => {
    const imageWidth = 192; // Sesuaikan ukuran gambar (misalnya w-48)
    const imageHeight = 192;

    setPosition({
      x: e.clientX - imageWidth,
      y: e.clientY - imageHeight + 50,
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 3.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const skills = [
    ["HTML", "CSS", "Javascript", "Tailwind", "Ant Design"],
    ["Typescript", "React.js", "Next.js", "Supabase", "PostgreSQL"],
    ["Express.js", "Styled Components", "Git", "Framer Motion", "GSAP"],
    ["SWR", "Figma", "Adobe XD", "Framer", "Photoshop"],
  ];

  return (
    isMounted && (
      <div className="relative justify-center bg-transparent px-4 md:pl-16 md:pr-16 w-full">
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
            Tech & Tools
          </motion.h1>
        </motion.section>

        <div className="grid gap-64">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "160px" }}
            variants={staggerChildren}
          >
            <motion.div
              className="w-full max-w-5xl mx-auto grid gap-10 md:gap-3"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <div className="flex gap-10 items-center text-center w-full pt-12 ">
                  <div className="w-full flex justify-left items-left py-10 bg-transparent">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-800 text-lg font-medium">
                      {skills.flat().map((skill, index) => (
                        <span key={index} className="text-left">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    )
  );
};

export default TechTools;
