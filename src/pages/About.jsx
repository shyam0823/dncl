import "./About.css";
import aboutTeam from "../assets/mainbanner.jpeg";
import lionBanner from "../assets/madein.png";
import { Link } from "react-router-dom";

import {
  Building2,
  PenTool,
  Briefcase,
  Rocket
} from "lucide-react";

export default function About() {
 return (
  <div className="about-page">

      {/* ===============================
         HERO
      =============================== */}
      <section
        className="dncl-about-hero"
        style={{ backgroundImage: `url(${aboutTeam})` }}
      >
        <div className="dncl-about-hero-overlay"></div>

        <div className="dncl-about-hero-content">
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/* ===============================
         ABOUT INFO + JOURNEY
      =============================== */}
      <section className="dncl-about-info">
        <div className="dncl-about-container dncl-about-grid">

          {/* ===============================
             LEFT : JOURNEY TIMELINE
          =============================== */}
          <div className="dncl-journey">

            <h3 className="dncl-journey-title"></h3>

            <div className="dncl-journey-line"></div>

            <div className="dncl-journey-item">
              <span className="dot"></span>
              <div className="icon">
                <Building2 />
              </div>
              <div className="content">
                <h4>2016</h4>
                <p>Company Incorporated in India</p>
              </div>
            </div>

            <div className="dncl-journey-item">
              <span className="dot"></span>
              <div className="icon">
                <PenTool />
              </div>
              <div className="content">
                <h4>May 2016</h4>
                <p>Incorporation & Foundation</p>
              </div>
            </div>

            <div className="dncl-journey-item">
              <span className="dot"></span>
              <div className="icon">
                <Briefcase />
              </div>
              <div className="content">
                <h4>2016 – 2025</h4>
                <p>Design & Engineering Services</p>
              </div>
            </div>

            <div className="dncl-journey-item">
              <span className="dot"></span>
              <div className="icon">
                <Rocket />
              </div>
              <div className="content">
                <h4>2026</h4>
                <p>Retail & Industrial Products Launched</p>
              </div>
            </div>

          </div>

          {/* ===============================
             RIGHT : ABOUT CONTENT
          =============================== */}
          <div className="dncl-about-content">
            <h2>Engineering Smart Automation & Retail Solutions</h2>

            <p>
              <strong>DNCL Technologies</strong> is an India-based company founded
              in <strong>2016</strong>, delivering
              <strong> 100% Indian-designed and manufactured products</strong>.
            </p>

            <p>
              We specialize in industrial automation solutions such as IoT
              gateways, data loggers, field I/O modules, converters, and
              condition-monitoring systems.
            </p>

            <p>
              DNCL also provides advanced retail and POS solutions including
              billing machines, kiosks, barcode systems, and IoT-enabled POS
              platforms.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         MAKE IN INDIA
      =============================== */}
      <section className="dncl-about-makeindia">
        <div className="dncl-about-makeindia-container">
          <img src={lionBanner} alt="Make in India" />
        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="dncl-about-cta">
        <div className="dncl-about-cta-overlay"></div>

        <div className="dncl-about-cta-container">
          <div className="dncl-about-cta-left">
            <h2>
              Powering the Future of <br />
              <span>Industrial Automation</span>
            </h2>

            <p>
              DNCL Technologies builds scalable, future-ready automation and
              retail systems for modern industries.
            </p>

            <Link to="/support">
              <button className="dncl-about-cta-btn">
                Contact Us →
              </button>
            </Link>
          </div>

          <div className="dncl-about-cta-right">
            <ul>
              <li>Industrial IoT & Automation</li>
              <li>Retail & POS Systems</li>
              <li>Data Logging & Monitoring</li>
            </ul>
          </div>
        </div>
      </section>
   </div>
);

}
