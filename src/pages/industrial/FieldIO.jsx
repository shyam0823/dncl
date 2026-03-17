import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FieldInputData from "../../details/FieldInputData";
import "./FieldIO.css";

export default function FieldIO() {
  return (
    <>
      <Helmet>
        <title>Industrial Field I/O Modules | DNCL Technologies</title>

        <link
          rel="canonical"
          href="https://dncltech.com/industrial/field-io"
        />

        <meta property="og:title" content="Industrial Field IO Modules | DNCL Technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dncltech.com/industrial/field-io" />

        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Industrial Field IO Modules",
            itemListElement: FieldInputData.map((item, index) => ({
              "@type": "Product",
              position: index + 1,
              name: item.title,
              url: `https://dncltech.com/industrial/field-io/${item.id}`
            }))
          })}
        </script>
      </Helmet>

      <section className="fieldio-section">

        {/* MAIN PAGE TITLE */}
        <h1 className="fieldio-title">
          <span className="title-black">Field I/O</span>{" "}
          <span className="title-blue">Modules</span>
        </h1>

        <div className="fieldio-wrapper">
          {FieldInputData.map((item) => (
            <Link
              key={item.id}
              to={`/industrial/field-io/${item.id}`}
              className="fieldio-card"
            >
              <img
                src={item.image}
                alt={`DNCL ${item.title} Industrial Field IO Module`}
                loading="lazy"
              />

              <div className="fieldio-overlay">
                <p className="fieldio-model">{item.subtitle}</p>
                <p className="fieldio-subtitle">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}