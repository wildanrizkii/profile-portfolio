import { useState, useRef, useEffect } from "react";

/**
 * useHover
 * Returns a ref to attach to an element and a boolean indicating
 * whether the mouse is currently hovering over that element.
 *
 * @returns {[React.RefObject, boolean]} [ref, isHovered]
 *
 * @example
 * const [ref, isHovered] = useHover();
 * <div ref={ref}>{isHovered ? "Hovered!" : "Hover me"}</div>
 */
function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return [ref, isHovered];
}

export default useHover;
