import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePreviousPath } from "../../context/PreviousPathContext";

export const useAnimatedEntry = (
  currentPath: string,
  baseClass: string,
  animationClass: string
): string => {
  const location = useLocation();
  const { previousPath } = usePreviousPath();
  const [finalClass, setFinalClass] = useState(baseClass);

  useEffect(() => {
    const isCurrent = location.pathname === currentPath;
    const fromOrToHome =
      (previousPath === "/" && isCurrent) ||
      (currentPath === "/" && previousPath !== null && isCurrent);

    if (isCurrent && fromOrToHome) {
      setFinalClass(`${baseClass} ${animationClass}`);
    } else if (isCurrent) {
      setFinalClass(baseClass);
    }
  }, [location.pathname, previousPath, currentPath, baseClass, animationClass]);

  return finalClass;
};
