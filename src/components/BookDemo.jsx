import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./BookDemo.css";

export default function BookDemo() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation after mount
    setAnimate(true);
  }, []);

return (
<>
  <Helmet>

    <title>Book a Demo | DNCL Technologies</title>

    <meta
      name="description"
      content="Book a free demo of DNCL Technologies retail POS systems and industrial automation products. Download our company brochure."
    />

    <link
      rel="canonical"
      href="https://dncltech.com/book-demo"
    />

    <meta property="og:title" content="Book a Demo | DNCL Technologies" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dncltech.com/book-demo" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "DNCL Technologies Product Demo",
        "provider": {
          "@type": "Organization",
          "name": "DNCL Technologies"
        },
        "url": "https://dncltech.com/book-demo"
      })}
    </script>

  </Helmet>

  <section className="bookdemo-section" id="book-demo">
      <div className="bookdemo-wrapper">
        <div className="bookdemo-container">

          {/* LEFT – FORM */}
          <div className={`bookdemo-form ${animate ? "slide-in" : ""}`}>

            <h2 className="bookdemo-title">
              Book A <span className="bookdemo-badge">FREE</span> Demo
            </h2>

            <p className="bookdemo-subtitle">
              & Download Company Brochure
            </p>

            <div className="bookdemo-grid">
              <input placeholder="Full Name" />
              <input placeholder="Location" />
              <input placeholder="Phone Number" />
              <input placeholder="Email Address" />

              <select>
              <option value="">Types of Products for Demo</option>
              <option value="retail">Retail Products</option>
              <option value="industrial">Industrial Products</option>
            </select>

              <input type="date" />
              <input type="time" />
            </div>

            <button className="bookdemo-btn">
              Submit
            </button>

          </div>

          {/* RIGHT – IMAGE */}
          <div className="bookdemo-image">
           <img
            src="/Booking1.png"
            alt="DNCL Technologies Product Demo for POS Systems and Industrial Automation"
            loading="lazy"
          />
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
