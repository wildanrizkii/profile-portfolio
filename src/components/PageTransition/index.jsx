import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";

const PageTransitionContext = createContext({ isTransitioning: true });

export const PageTransitionProvider = ({ children }) => {
  const isTransitioning = usePageTransition();
  return (
    <PageTransitionContext.Provider value={{ isTransitioning }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const useTransitionState = () => useContext(PageTransitionContext);

export const usePageTransition = (duration = 1200) => {
  const pathname = usePathname();
  // Start isTransitioning as true so that on initial load/refresh, the transition is rendered immediately
  const [isTransitioning, setIsTransitioning] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), duration);
    return () => clearTimeout(timer);
  }, [pathname, duration]);

  useEffect(() => {
    if (isTransitioning) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isTransitioning, lenis]);

  return isTransitioning;
};

const PageTransition = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#181818] dark:bg-[#f9f2ed] z-50 page-transition-overlay"
    />
  );
};

export default PageTransition;

