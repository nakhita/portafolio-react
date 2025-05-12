// src/context/PreviousPathContext.tsx
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PreviousPathContextType {
  previousPath: string | null;
}

const PreviousPathContext = createContext<PreviousPathContextType>({
  previousPath: null,
});

export const usePreviousPath = () => useContext(PreviousPathContext);

export const PreviousPathProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <PreviousPathContext.Provider value={{ previousPath: previousPathRef.current }}>
      {children}
    </PreviousPathContext.Provider>
  );
};
