import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavbar } from "../components/logic/useNavbar";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const { navbarClass } = useNavbar();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleClick = (path: string) => {
    setActiveLink(path);
    setTimeout(() => setMenuOpen(false), 150);
  };

  return (
    <nav className={navbarClass}>
      {/* Desktop */}
      <ul className="navbar-list hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Overlay  */}
      <div
        className={`mobile-overlay md:hidden ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile toggle */}
      <div
        className={`menu-toggle md:hidden ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger top-line" />
        <div className="hamburger middle-line" />
        <div className="hamburger bottom-line" />
      </div>

      {/* Mobile panel */}
      <div className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/certifications", label: "Certifications" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <li
              key={path}
              className={
                location.pathname === path || activeLink === path
                  ? "selected"
                  : ""
              }
              onClick={() => handleClick(path)}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
