import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

import logoInner from "../assets/newlogo.png";
import madeIn from "../assets/madein.png";

export default function Header() {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      // Always show near top
      if(window.scrollY < 80){
        setShowHeader(true);
      }
      // scrolling DOWN
      else if(window.scrollY > lastScroll && !isHeaderHovered){
        setShowHeader(false);
      }
      // scrolling UP
      else{
        setShowHeader(true);
      }

      setLastScroll(window.scrollY);
    };


    const handleMouseMove = (e) => {

      // cursor in header area OR dropdown area (top ~300px for dropdown)
      if(e.clientY <= 300 || isHeaderHovered){
        setShowHeader(true);
      }
      // cursor moved away AND page is scrolled
      else if(window.scrollY > 120 && !isHeaderHovered){
        setShowHeader(false);
      }

    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, [lastScroll, isHeaderHovered]);


  return (
    <header 
      className={`dncl-header ${showHeader ? "show" : "hide"}`}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      <div className="dncl-header-container">

        <Link to="/" className="dncl-logo">
          <img src={logoInner} className="logo-inner" alt="DNCL"/>
        </Link>

        <nav className="dncl-nav">
          <Link to="/" className="nav-link">Home</Link>

          <div className="nav-item dropdown">
            <Link to="/retail" className="nav-link">Retail Products</Link>
            <div className="dropdown-menu">
              <Link to="/retail/pos">POS Systems</Link>
              <Link to="/retail/billing">Billing Machines</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <Link to="/industrial" className="nav-link">Industrial Products</Link>
            <div className="dropdown-menu">
              <Link to="/industrial/field-io">Field I/O</Link>
              <Link to="/industrial/iot-gateway">Ethernet IOS</Link>
              <Link to="/industrial/data-logger">Multi-Functional Data Logger</Link>
            </div>
          </div>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/distributor" className="nav-link">Become a Distributor</Link>
           <Link to="/book-demo" className="dncl-header-btn">
    Book a Demo
  </Link>
        </nav>

        <div className="dncl-header-right">
  <img
    src={madeIn}
    alt="Made in India"
    className="madein-badge"
  />

 

</div>


      </div>
    </header>
  );
}
