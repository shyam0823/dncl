import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

import logoInner from "../assets/newlogo.png";
import madeIn from "../assets/madein.png";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScroll = useRef(0);
  const hideTimer = useRef(null);

  // ================= DROPDOWN =================
  const handleDropdownEnter = () => {
    clearTimeout(hideTimer.current);
    setIsDropdownHovered(true);
    setShowHeader(true);
  };

  const handleDropdownLeave = () => {
    hideTimer.current = setTimeout(() => {
      setIsDropdownHovered(false);
      if (window.scrollY > 60) setShowHeader(false);
    }, 200);
  };

  // ================= SCROLL + TOP HOVER =================
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScroll.current && !isDropdownHovered) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScroll.current = window.scrollY;
    };

    const onMouseMove = (e) => {
      if (e.clientY <= 60) {
        setShowHeader(true);
      } else if (!isDropdownHovered && window.scrollY > 60) {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDropdownHovered]);

  return (
    <header className={`dncl-header ${showHeader ? "show" : "hide"}`}>
      <div className="dncl-header-container">

        {/* LEFT — LOGO */}
        <Link to="/" className="dncl-logo">
          <img src={logoInner} className="logo-inner" alt="DNCL" />
        </Link>

        {/* CENTER — DESKTOP NAV */}
        <nav className="dncl-nav desktop-nav">
          <Link to="/" className="nav-link">Home</Link>

          <div
            className="nav-item dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link to="/retail" className="nav-link nav-parent">
              Retail Products
            </Link>
            <div className="dropdown-menu">
              <Link to="/retail/pos">POS Systems</Link>
              <Link to="/retail/billing">Billing Machines</Link>
            </div>
          </div>

          <div
            className="nav-item dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link to="/industrial" className="nav-link nav-parent">
              Industrial Products
            </Link>
            <div className="dropdown-menu">
              <Link to="/industrial/field-io">Field I/O</Link>
              <Link to="/industrial/iot-gateway">Ethernet IOS</Link>
              <Link to="/industrial/data-logger">
                Multi-Functional Data Logger
              </Link>
            </div>
          </div>

          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/distributor" className="nav-link">Become a Distributor</Link>
        </nav>

        {/* RIGHT — LION + HAMBURGER */}
        <div className="dncl-header-right">
          <img src={madeIn} alt="Made in India" className="madein-badge" />

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

        <details>
          <summary>Retail Products</summary>
          <Link to="/retail/pos" onClick={() => setMobileMenuOpen(false)}>POS Systems</Link>
          <Link to="/retail/billing" onClick={() => setMobileMenuOpen(false)}>Billing Machines</Link>
        </details>

        <details>
          <summary>Industrial Products</summary>
          <Link to="/industrial/field-io" onClick={() => setMobileMenuOpen(false)}>Field I/O</Link>
          <Link to="/industrial/iot-gateway" onClick={() => setMobileMenuOpen(false)}>Ethernet IOS</Link>
          <Link to="/industrial/data-logger" onClick={() => setMobileMenuOpen(false)}>
            Multi-Functional Data Logger
          </Link>
        </details>

        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link to="/distributor" onClick={() => setMobileMenuOpen(false)}>Become a Distributor</Link>
      </div>
    </header>
  );
}
