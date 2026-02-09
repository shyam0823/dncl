import "./Careers.css";
import careerImg from "../assets/carreer.jpg";

export default function Careers() {
  return (
    <section className="dncl-careers">

      {/* HERO */}
      <div
        className="dncl-careers-hero"
        style={{ backgroundImage: `url(${careerImg})` }}
      >
        <div className="dncl-careers-overlay" />
        <div className="dncl-careers-content">
          <h1>Careers at DNCL Technologies</h1>
          <p>
            Build the future of retail & industrial automation with us.
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="dncl-careers-body">
        <h2>Why Work With Us?</h2>

        <div className="dncl-careers-grid">
          <div className="career-card">
            <h3>Innovation First</h3>
            <p>
              Work on emerging automation, IoT, and embedded technologies.
            </p>
          </div>

          <div className="career-card">
            <h3>Supportive Culture</h3>
            <p>
              Flat hierarchy, open ideas, and hands-on engineering culture.
            </p>
          </div>

          <div className="career-card">
            <h3>Real Impact</h3>
            <p>
              Build products used by businesses across India.
            </p>
          </div>
        </div>

        <div className="dncl-careers-cta">
          <p>Send your resume to</p>
          <a href="mailto:careers@dncltech.com">
            careers@dncltech.com
          </a>
        </div>
      </div>
    </section>
  );
}
