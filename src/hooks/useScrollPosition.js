import { useState, useEffect } from "react";

/**
 * useScrollPosition
 * Tracks and returns the current vertical scroll position of the page.
 * Returns 0 on the server (SSR-safe).
 *
 * @returns {number} scrollY
 *
 * @example
 * const scrollY = useScrollPosition();
 * <header className={scrollY > 80 ? "scrolled" : ""}>...</header>
 */
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

export default useScrollPosition;
