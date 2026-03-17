import "./Careers.css";
import careerImg from "../assets/carreer.jpg";
import { Helmet } from "react-helmet-async";

import helpCircleIcon from "../assets/HelpCircle.svg";
import trendingUpIcon from "../assets/TrendingUp.svg";
import shuffleIcon from "../assets/Shuffle.svg";
import brainIcon from "../assets/Brain.svg";
import thumbsUpIcon from "../assets/ThumbsUp.svg";
import lightbulbIcon from "../assets/Lightbulb.svg";
import searchIcon from "../assets/search.svg";
import infinityIcon from "../assets/Infinity.svg";
import locationIcon from "../assets/location.svg";
import timeIcon from "../assets/time.svg";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers at DNCL Technologies | Automation & IoT Jobs</title>
        <meta
          name="description"
          content="Join DNCL Technologies. Explore careers in embedded systems, industrial automation and IoT development."
        />
        <link rel="canonical" href="https://dncltech.com/careers" />
      </Helmet>

      <section className="dncl-careers">

        {/* HERO */}
        <div
          className="dncl-careers-hero"
          style={{ backgroundImage: `url(${careerImg})` }}
        >
          <div className="dncl-careers-overlay" />
          <div className="dncl-careers-content">
            <h1>Join Our Team</h1>
            <p>Build Industrial Automation & IoT Solutions with DNCL.</p>
          </div>
        </div>

        {/* WHAT WE LOOK FOR */}

<div className="dncl-values">

  <h2>
What <span className="blue-text">We Look</span> For
</h2>

  <p className="values-sub">
    We hire engineers who love building, solving problems, and learning.
  </p>

  <div className="values-grid">

    <div className="value-card">
      <img src={brainIcon} alt="Technically strong" />
      <h4>Technically Strong</h4>
      <p>Eager to learn and build real systems</p>
    </div>

    <div className="value-card">
      <img src={shuffleIcon} alt="Flexible adaptable" />
      <h4>Flexible & Adaptable</h4>
      <p>Comfortable with evolving technologies</p>
    </div>

    <div className="value-card">
      <img src={trendingUpIcon} alt="Impact driven" />
      <h4>Impact Driven</h4>
      <p>Focused on building meaningful products</p>
    </div>

    <div className="value-card">
      <img src={helpCircleIcon} alt="Curious mindset" />
      <h4>Curious & Self-Motivated</h4>
      <p>Always exploring better solutions</p>
    </div>

  </div>

</div>


<div className="dncl-careers-openings">

<h2>Job Openings</h2>

<div className="jobs-grid">

{/* JOB 1 */}
<div className="job-card">

<h3>Embedded Hardware Engineer</h3>

<div className="job-meta">

<div className="job-meta-item">
<img src={locationIcon} alt="location"/>
<span>Hosur</span>
</div>

<div className="job-meta-item">
<img src={timeIcon} alt="experience"/>
<span>0-2 Years</span>
</div>

</div>

<p>
Work on industrial embedded hardware design,
sensor integration and PCB level debugging.
</p>

<h4>Requirements</h4>

<ul>
<li>B.E / B.Tech – ECE / EEE</li>
<li>Basic electronics knowledge</li>
<li>Microcontroller fundamentals</li>
</ul>

<a
href="mailto:careers@dncltech.com?subject=Embedded Hardware Engineer"
className="apply-btn"
>
Send Resume
</a>

</div>


{/* JOB 2 */}
<div className="job-card">

<h3>Embedded Software Engineer</h3>

<div className="job-meta">

<div className="job-meta-item">
<img src={locationIcon} alt="location"/>
<span>Hosur</span>
</div>

<div className="job-meta-item">
<img src={timeIcon} alt="experience"/>
<span>0-2 Years</span>
</div>

</div>

<p>
Develop firmware for industrial automation
controllers and IoT devices.
</p>

<h4>Requirements</h4>

<ul>
<li>Strong C / Embedded C</li>
<li>Microcontroller programming</li>
<li>Debugging firmware</li>
</ul>

<a
href="mailto:careers@dncltech.com?subject=Embedded Software Engineer"
className="apply-btn"
>
Send Resume
</a>

</div>


{/* JOB 3 */}
<div className="job-card">

<h3>IoT Developer</h3>

<div className="job-meta">

<div className="job-meta-item">
<img src={locationIcon} alt="location"/>
<span>Hosur</span>
</div>

<div className="job-meta-item">
<img src={timeIcon} alt="experience"/>
<span>1-3 Years</span>
</div>

</div>

<p>
Build cloud connectivity for automation systems
using MQTT and industrial communication protocols.
</p>

<h4>Requirements</h4>

<ul>
<li>Knowledge of MQTT</li>
<li>NodeJS / Python basics</li>
<li>REST API integration</li>
</ul>

<a
href="mailto:careers@dncltech.com?subject=IoT Developer"
className="apply-btn"
>
Send Resume
</a>

</div>


{/* JOB 4 */}
<div className="job-card">

<h3>Industrial Automation Engineer</h3>

<div className="job-meta">

<div className="job-meta-item">
<img src={locationIcon} alt="location"/>
<span>Hosur</span>
</div>

<div className="job-meta-item">
<img src={timeIcon} alt="experience"/>
<span>1-3 Years</span>
</div>

</div>

<p>
Implement industrial automation solutions,
sensor systems and machine interfaces.
</p>

<h4>Requirements</h4>

<ul>
<li>Automation basics</li>
<li>PLC / Industrial interfaces</li>
<li>Electrical fundamentals</li>
</ul>

<a
href="mailto:careers@dncltech.com?subject=Automation Engineer"
className="apply-btn"
>
Send Resume
</a>

</div>

</div>

</div>


     <div className="dncl-careers-body">

  <h2>
    Why Work With <span className="blue-text">DNCL</span>?
  </h2>

  <p className="careers-sub">
    At DNCL, you won’t just work on tasks — you’ll build real systems, solve real problems, and see your work used in the real world.
  </p>

  <div className="dncl-careers-grid">

    <div className="career-card">
      <h3>Real Engineering Work</h3>
      <p>
        You’ll work on automation, IoT, and embedded systems that are actually deployed — not just prototypes or demos.
      </p>
    </div>

    <div className="career-card">
      <h3>Hands-On Culture</h3>
      <p>
        We believe in learning by doing. You’ll be writing code, debugging systems, and building products from day one.
      </p>
    </div>

    <div className="career-card">
      <h3>Impact That Matters</h3>
      <p>
        The solutions you build will be used by industries across India — your work directly creates value.
      </p>
    </div>

  </div>

</div>
      </section>
    </>
  );
}