import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const useNavbar = () => {
  const location = useLocation();

  const [isHome, setIsHome] = useState(location.pathname === "/");
  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [forceFixed, setForceFixed] = useState(location.pathname !== "/");

  useEffect(() => {
    const goingToHome = location.pathname === "/" && !isHome;
    const leavingHome = location.pathname !== "/" && isHome;

    if (goingToHome) {
      setIsEntering(true);
      setIsHome(true);
      setTimeout(() => {
        setIsEntering(false);
      }, 300);
    }

    if (leavingHome) {
      setIsLeaving(true);
      setTimeout(() => {
        setIsLeaving(false);
        setIsHome(false);
        setForceFixed(true);
      }, 300);
    }

    if (!isHome && location.pathname !== "/") {
      setForceFixed(true);
    }
  }, [location]);

  let navbarClass = "";

  if (isEntering) {
    navbarClass = "navbar-entering";
  } else if (isLeaving) {
    navbarClass = "navbar-home navbar-leaving";
  } else if (isHome) {
    navbarClass = "navbar-home";
  } else if (forceFixed) {
    navbarClass = "navbar-fixed";
  }

  return { navbarClass };
};
