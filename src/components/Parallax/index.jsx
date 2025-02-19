"use client";
import { ReactLenis, useLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import React, { useRef, useEffect, useState } from "react";

const SmoothScrollHero = () => {
  const [sectionHeight, setSectionHeight] = useState(1300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSectionHeight(810);
      } else {
        setSectionHeight(1300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-tranparent">
      <Hero sectionHeight={sectionHeight} />
    </div>
  );
};

const Hero = ({ sectionHeight }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        height: isMobile
          ? `calc(${sectionHeight}px + 120vh)`
          : `calc(${sectionHeight}px + 100vh)`,
      }}
      className="relative w-full"
    >
      <CenterImage sectionHeight={sectionHeight} />
      {isMobile ? <ImagesNormal /> : <ParallaxImages />}
    </div>
  );
};

const CenterImage = ({ sectionHeight }) => {
  const { scrollY } = useScroll({
    smooth: true,
    axis: "y",
    layoutEffect: false,
  });

  useEffect(() => {
    window.scrollTo(0, window.scrollY);

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0], {
    clamp: true,
  });
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100], {
    clamp: true,
  });

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, sectionHeight + 500],
    ["140%", "80%"],
    {
      clamp: true,
    }
  );

  const opacity = useTransform(
    scrollY,
    [sectionHeight, sectionHeight * 4],
    [1, 0],
    {
      clamp: true,
    }
  );

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity: 1,
        backgroundImage: "url(/images/about-main-me.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        willChange: "transform, opacity, clip-path",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
      initial={false}
      onContextMenu={handleContextMenu}
      loading="eager"
    />
  );
};

const certificates = [
  {
    src: "/images/sertif-gccf.webp",
    alt: "Sertifikat Google Cloud Computing Foundation",
  },
  { src: "/images/sertif-cyberops.webp", alt: "Sertifikat Cyber Ops" },
  {
    src: "/images/sertif-ifws.webp",
    alt: "Sertifikat Informatics Webinar Series",
  },
  { src: "/images/sertif-devnet.webp", alt: "Sertifikat Cyber Ops" },
];

const ImagesNormal = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
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

  return (
    <motion.section
      className="mx-auto max-w-5xl px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      <motion.div
        className="text-center text-2xl font-semibold pb-4"
        variants={fadeInUp}
      >
        My Certificates
      </motion.div>
      <div className="grid grid-cols-1 gap-4">
        {certificates.map((cert, index) => (
          <div key={index} className="flex justify-center">
            <motion.img
              src={cert.src}
              alt={cert.alt}
              width={300}
              height={200}
              className="rounded-lg shadow-lg select-none"
              onContextMenu={handleContextMenu}
              variants={fadeInUp}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px] md:pt-[210px] sm:pt-[60px]">
      <ParallaxImg
        src="/images/sertif-gccf.webp"
        alt="Sertifikat Google Cloud Computing Foundation"
        start={-200}
        end={200}
        className="w-1/3 mt-8 sm:mt-12 md:mt-0 select-none"
      />
      <ParallaxImg
        src="/images/sertif-cyberops.webp"
        alt="Sertifikat Cyber Ops"
        start={200}
        end={-250}
        className="mx-auto w-2/3 mt-8 sm:mt-12 md:mt-0 select-none"
      />
      <ParallaxImg
        src="/images/sertif-ifws.webp"
        alt="Sertifikat Informatics Webinar Series"
        start={-200}
        end={200}
        className="ml-auto w-1/3 mt-8 sm:mt-12 md:mt-0 select-none"
      />
      <ParallaxImg
        src="/images/sertif-devnet.webp"
        alt="Sertifikat Cyber Ops"
        start={0}
        end={-500}
        className="ml-24 w-5/12 mt-8 sm:mt-12 md:mt-0 select-none"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, window.scrollY);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
    smooth: true,
    axis: "y",
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.25]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0.15, 0.8], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <motion.img
      loading="eager"
      initial={false}
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
      onContextMenu={handleContextMenu}
      draggable="false"
    />
  );
};

export default SmoothScrollHero;
