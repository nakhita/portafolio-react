import { useEffect, useState } from "react";

/**
 * Sequentially shows timeline items one by one like a cascade.
 *
 * @param count - total number of items
 * @param delay - delay in ms between each appearance
 */
export const useSequentialTimeline = (count: number, delay = 250): number => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleCount((prev) => Math.min(prev + 1, count));
      if (current >= count) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [count, delay]);

  return visibleCount;
};
