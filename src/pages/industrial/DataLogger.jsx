import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DataLoggerData from "../../details/DataLoggerData";
import "./DataLogger.css";

export default function DataLogger() {
  return (
    <>
      <Helmet>
        <title>Industrial Data Logger (PLC) | DNCL Technologies</title>

        <meta
          name="description"
          content="DNCL Technologies multifunction industrial data logger (PLC) for monitoring temperature, voltage, digital signals and industrial automation systems."
        />

        <link
          rel="canonical"
          href="https://dncltech.com/industrial/data-logger"
        />

        <meta
          property="og:title"
          content="Industrial Data Logger PLC | DNCL Technologies"
        />

        <meta
          property="og:url"
          content="https://dncltech.com/industrial/data-logger"
        />

        <meta property="og:type" content="website" />

        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Industrial Data Loggers",
            itemListElement: DataLoggerData.map((item, index) => ({
              "@type": "Product",
              position: index + 1,
              name: item.title,
              url: `https://dncltech.com/industrial/data-logger/${item.id}`
            }))
          })}
        </script>
      </Helmet>

      <section className="datalogger-section">
        {/* MAIN PAGE TITLE */}
        <h1 className="datalogger-title">
          <span className="title-black">MultiFunctional</span>{" "}
          <span className="title-blue">Data Logger (PLC)</span>
        </h1>

        <div className="datalogger-wrapper">
          {DataLoggerData.map((item) => (
            <Link
              key={item.id}
              to={`/industrial/data-logger/${item.id}`}
              className="datalogger-card"
            >
              <img
                src={item.image}
                alt={`DNCL ${item.title} Industrial Data Logger`}
                loading="lazy"
              />

              <div className="datalogger-overlay">
                <p className="datalogger-model">{item.title}</p>
                <p className="datalogger-subtitle">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}