import { useEffect, useState } from "react";

export const useSequentialImages = (total: number, delay: number = 500) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleCount(current);
      if (current >= total) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [total, delay]);

  return visibleCount;
};
