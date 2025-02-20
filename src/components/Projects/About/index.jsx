import React, { useState, useEffect, useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

const projects = [
  {
    title: "Spare Part Information System",
    link: "/projects/sparepart",
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
      <motion.section
        className="bg-transparent md:p-8 pb-20 md:pb-20"
        key={pathname}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerChildren}
      >
        <motion.h1
          className="text-6xl font-medium text-dark-gray py-14 px-3 md:px-8"
          variants={fadeInUp}
        >
          Projects
        </motion.h1>
        <div className="mx-auto max-w-5xl px-8">
          <motion.div variants={fadeInUp}>
            <Link
              heading="Spare Part Information System"
              subheading="Learn what we do here"
              imgSrc="/images/CMW.png"
              href="/projects/sparepart"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              heading="Cash Flow Tracking Application"
              subheading="We work with great people"
              imgSrc="/images/Cashify.png"
              href="/projects"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              heading="Adora Pharmacy Information System"
              subheading="Our work speaks for itself"
              imgSrc="/images/Apotek.jpg"
              href="/projects"
            />
          </motion.div>
        </div>
      </motion.section>
    )
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-300 py-4 transition-colors duration-500 hover:border-black md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-3xl font-semibold transition-colors duration-500 md:text-4xl"
        >
          {heading}
        </motion.span>
        {/* <span className="relative z-10 mt-2 block text-base transition-colors duration-500">
          {subheading}
        </span> */}
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-25%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-auto w-96 rounded-lg object-cover shadow-2xl md:w-72 sm:w-60"
        alt={`Image ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 1,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4 text-black"
      >
        <FiArrowRight className="text-5xl" />
      </motion.div>
    </motion.a>
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
    transition: { staggerChildren: 0.4, delayChildren: 0.4 },
  },
};

export default Projects;
