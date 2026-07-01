import { useState, useEffect } from "react";

/**
 * useDebounce
 * Delays updating the returned value until after the specified delay
 * has passed without the input value changing.
 *
 * @param {any} value - The value to debounce.
 * @param {number} delay - Delay in milliseconds (default: 300ms).
 * @returns {any} debouncedValue
 */
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
