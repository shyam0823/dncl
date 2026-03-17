import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./PosSystems.css";
import PosSystemData from "../../details/PosSystemData";

export default function PosSystems() {
  return (
    <>
      <Helmet>
        <title>Retail POS Systems for Shops & Supermarkets | DNCL Technologies</title>

        <meta
          name="description"
          content="DNCL Technologies retail POS systems for shops, supermarkets and businesses. Fast billing, barcode scanning and inventory management."
        />

        <link rel="canonical" href="https://dncltech.com/retail/pos-systems" />

        <meta property="og:title" content="Retail POS Systems | DNCL Technologies" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://dncltech.com/retail/pos-systems" />
      </Helmet>

      <section className="pos-section">
        <h2 className="pos-title">
          <span className="title-black">Point-of-Sale</span>{" "}
          <span className="title-blue">Systems</span>
        </h2>

        <div className="pos-wrapper">
          {PosSystemData.map((item) => (
            <Link
              key={item.id}
              to={`/retail/pos/${item.id}`}
              className="pos-card"
            >
              <img
                src={item.image}
                alt={`Retail POS System ${item.title}`}
                loading="lazy"
              />

              <div className="pos-overlay">
                <p className="pos-model">{item.title}</p>
                <p className="pos-subtitle">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}