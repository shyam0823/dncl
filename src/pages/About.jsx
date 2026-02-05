import "./About.css";
import aboutTeam from "../assets/mainbanner.jpeg";
import lionBanner from "../assets/madein.png";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
      {/* HERO */}
      <section
        className="dncl-about-hero"
        style={{ backgroundImage: `url(${aboutTeam})` }}
      >
        <div className="dncl-about-hero-overlay"></div>

        <div className="dncl-about-hero-content">
          <h1>ABOUT US</h1>
          <div className="dncl-about-breadcrumb">
          </div>
        </div>
      </section>

      {/* ABOUT INFO SECTION */}
      <section className="dncl-about-info">
        <div className="dncl-about-container dncl-about-grid">

          {/* LEFT STATS */}
          <div className="dncl-about-stats">
            <div className="stat">
              <h2>2016</h2>
              <p>Founded In India</p>
            </div>

            <div className="stat">
              <h2>100%</h2>
              <p>Made In India</p>
            </div>

            <div className="stat">
              <h2>300+</h2>
              <p>Clients Served</p>
            </div>
          </div>


          {/* RIGHT CONTENT */}
          <div className="dncl-about-content">
           
            <h2>
              Engineering Smart Automation & Retail Solutions
            </h2>

            <p>
              <strong>DNCL Technologies</strong> is an India-based company founded
              in <strong>2016</strong>, offering
              <strong> 100% Indian-designed, manufactured, and Made-in-India products</strong>.
            </p>

            <p>
              The company specializes in industrial automation solutions,
              including IoT gateway devices, data loggers, field I/O modules,
              converters, and condition-monitoring and sensing products.
            </p>

            <p>
              DNCL Technologies also delivers a wide range of retail and POS
              solutions, such as 7-inch and 15.6-inch billing machines, Wi-Fi
              printers, kiosks, barcode and automatic billing machines,
              IoT-enabled billing systems, and both compact and touch-screen
              Point-of-Sale (POS) models.
            </p>

            {/* <button className="dncl-about-btn">
              Read More →
            </button> */}
          </div>

        </div>
      </section>

      {/* ===============================
    MAKE IN INDIA BANNER SECTION
================================ */}
<section className="dncl-about-makeindia">
  <div className="dncl-about-makeindia-container">
    <div className="dncl-about-makeindia-blend">
      <img src={lionBanner} alt="Make in India" />
    </div>
  </div>
</section>



      {/* DARK CONTACT / CTA SECTION */}
      <section className="dncl-about-cta">
        <div className="dncl-about-cta-overlay"></div>

        <div className="dncl-about-cta-container">
          <div className="dncl-about-cta-left">
            <h2>ABOUT COMPANY</h2>
            <h2>
              Powering the Future of <br /> <span>Industrial Automation</span>
            </h2>

            <p>
              DNCL Technologies designs reliable, scalable, and future-ready
              automation and retail systems that help businesses grow with
              confidence.
            </p>

            <Link to="/support">
            <button className="dncl-about-cta-btn">
              Contact Us →
            </button>
            </Link>
          </div>

          <div className="dncl-about-cta-right">
            <ul>
              <li>Industrial IoT & Automation </li>
              <li>Retail & POS Systems</li>
              <li>Field Monitoring & Data Logging</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
