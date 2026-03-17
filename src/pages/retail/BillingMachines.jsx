import { Link } from "react-router-dom";
import BillingMachineData from "../../details/BillingMachineData";
import "./BillingMachines.css";
import { Helmet } from "react-helmet-async";

export default function BillingMachines() {
  return (
    <>
      <Helmet>
        <title>POS Billing Machines for Retail Stores | DNCL Technologies</title>

        <meta
          name="description"
          content="DNCL Technologies provides POS billing machines for retail shops, supermarkets and stores. Fast billing, barcode scanning and inventory management."
        />

        <link rel="canonical" href="https://dncltech.com/retail/billing-machines" />

        {/* OpenGraph */}
        <meta property="og:title" content="POS Billing Machines | DNCL Technologies" />
        <meta property="og:description" content="Retail POS billing machines with fast checkout and barcode scanning." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://dncltech.com/retail/billing-machines" />

        {/* PRODUCT SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type":"ItemList",
            "name": "POS Billing Machines",
            "brand": "DNCL Technologies",
            "description":
              "Retail POS billing machines for supermarkets and stores with barcode scanning and fast checkout.",
            "url": "https://dncltech.com/retail/billing-machines"
          })}
        </script>
      </Helmet>

      <section className="billing-section">
        <h1 className="billing-title">
          <span className="title-black">POS Billing</span>{" "}
          <span className="title-blue">Machines</span>
        </h1>

        <div className="billing-wrapper">
          {BillingMachineData.map((item) => (
            <Link
              key={item.id}
              to={`/retail/billing/${item.id}`}
              className="billing-card"
            >
              <img
                src={item.image}
                alt={`Retail POS Billing Machine ${item.title}`}
                loading="lazy"
              />

              <div className="billing-overlay">
                <p className="billing-model">{item.title}</p>
                <p className="billing-subtitle">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}