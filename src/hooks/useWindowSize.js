import { useState, useEffect } from "react";

/**
 * useWindowSize
 * Tracks and returns the current browser window width and height.
 * Returns { width: undefined, height: undefined } on the server (SSR-safe).
 *
 * @returns {{ width: number|undefined, height: number|undefined }}
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
