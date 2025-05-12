import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export const usePreviousPath = () => {
  const location = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    previousPath.current = location.pathname;
  }, [location]);

  return previousPath.current;
};
