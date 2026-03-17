import "./About.css";
import aboutTeam from "../assets/mainbanner.jpeg";
import { Helmet } from "react-helmet-async";
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
<>
  <Helmet>

    <title>About DNCL Technologies | Industrial Automation & Retail Solutions</title>

    <meta
      name="description"
      content="DNCL Technologies is an Indian company providing industrial automation, IoT gateways, data loggers, field IO modules and retail POS solutions."
    />

    <link
      rel="canonical"
      href="https://dncltech.com/about"
    />

    <meta property="og:title" content="About DNCL Technologies" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dncltech.com/about" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DNCL Technologies",
        "url": "https://dncltech.com",
        "description": "DNCL Technologies develops industrial automation products, IoT gateways, data loggers and retail POS systems.",
        "foundingDate": "2016"
      })}
    </script>

  </Helmet>

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
================================ */}
<section className="dncl-about-info">
  <div className="dncl-about-container dncl-about-grid">

    {/* JOURNEY TIMELINE */}
    <div className="dncl-journey">

      {/* S CURVE PATH */}
      <svg
        className="timeline-path"
        viewBox="0 0 200 700"
        preserveAspectRatio="none"
      >
        <path
          d="
            M45 30
            C20 120, 140 120, 90 210
            S20 380, 45 460
            S140 600, 90 660
          "
        />
      </svg>

      {/* ITEM 1 */}
      <div className="dncl-journey-item left">
        <div className="icon">
          <Building2 />
        </div>

        <div className="content">
          <h4>2016</h4>
          <p>Company Incorporated in India</p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="dncl-journey-item right">
        <div className="icon">
          <PenTool />
        </div>

        <div className="content">
          <h4>May 2016</h4>
          <p>Incorporation & Foundation</p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="dncl-journey-item left">
        <div className="icon">
          <Briefcase />
        </div>

        <div className="content">
          <h4>2016 – 2025</h4>
          <p>Design & Engineering Services</p>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="dncl-journey-item right">
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
              DNCL Technologies is an India-based company founded in 2016 that delivers 100% Indian-designed and manufactured products.
            </p>

            <p>
              We specialize in industrial automation solutions, including IoT gateways, data loggers, field I/O modules, converters, protocol and condition-monitoring systems.
            </p>

            <p>
              DNCL also provides advanced retail and POS solutions such as billing machines, kiosks, barcode systems, and IoT-enabled POS platforms
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
   </>
);

}
