import { useEffect } from "react";
import "./Distributor.css";
import { Helmet } from "react-helmet-async";

export default function Distributor() {


  useEffect(() => {
    document.body.classList.add("distributor-body-gap");
    return () => {
      document.body.classList.remove("distributor-body-gap");
    };
  }, []);


return (
<>
  <Helmet>

    <title>Become a Distributor | DNCL Technologies</title>

    <meta
      name="description"
      content="Partner with DNCL Technologies as an authorized distributor for retail POS systems, billing machines and industrial automation products."
    />

    <link
      rel="canonical"
      href="https://dncltech.com/distributor"
    />

    <meta property="og:title" content="Become a Distributor | DNCL Technologies" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dncltech.com/distributor" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DNCL Technologies",
        "url": "https://dncltech.com",
        "description": "Become an authorized distributor for DNCL retail POS systems and industrial automation products."
      })}
    </script>

  </Helmet>

  <section className="distributor-wrapper page-offset">
      <div className="distributor-container">

        {/* LEFT CONTENT */}
        <div className="distributor-left">
          <h1>
            <span className="text-dark">Become a</span>{" "}
            <span className="text-blue">Distributor</span>
          </h1>

          <p className="distributor-desc">
            Join hands with <strong>DNCL Technologies</strong> and expand your
            business by distributing our trusted retail and industrial automation
            products across your region.
          </p>

          <div className="distributor-info">
            <h3>Why Partner With Us?</h3>
            <ul>
              <li>Authorized distributor opportunity</li>
              <li>High-demand industrial & retail products</li>
              <li>Technical training & sales support</li>
              <li>Attractive margins & long-term growth</li>
              <li>Strong brand & marketing assistance</li>
            </ul>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="distributor-form-card">
          <h2>Distributor Registration</h2>

          <form
  className="distributor-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      address: form.address.value,
      city: form.city.value,
      state: form.state.value,
      product_interest: form.productInterest.value,
      experience: form.experience.value,
      message: form.message.value
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("/api/distributor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        alert("Submission failed");
        return;
      }

      alert("Application submitted successfully!");
      form.reset();
    } catch {
      alert("Server error. Try again later.");
    }
  }}
>



            {/* BASIC DETAILS */}
           <div className="form-row">
  <input
    type="text"
    name="city"
    placeholder="City *"
    required
  />
  <input
    type="text"
    name="state"
    placeholder="State *"
    required
  />
</div>

{/* BUSINESS DETAILS */}
<select
  name="productInterest"
  required
>
  <option value="">Type of Products Interested *</option>
  <option>Retail Products</option>
  <option>Industrial Automation</option>
  <option>Both Retail & Industrial</option>
</select>

<select
  name="experience"
  required
>
  <option value="">Years of Business Experience *</option>
  <option>Less than 1 year</option>
  <option>1 – 3 years</option>
  <option>3 – 5 years</option>
  <option>More than 5 years</option>
</select>

<textarea
  name="message"
  rows="4"
  placeholder="Briefly describe your business, customer base, and region coverage *"
  required
/>

            <button type="submit">
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </section>
    </>
  );
}
