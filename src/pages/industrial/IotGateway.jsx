import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import IotGatewayData from "../../details/IotGatewayData";
import "./IotGateway.css";

export default function IotGateway() {
  return (
    <>
      <Helmet>
        <title>
          Industrial IoT Gateway Manufacturer in India | DNCL Technologies
        </title>

        <meta
          name="description"
          content="DNCL Technologies is a manufacturer of Industrial IoT Gateways for automation systems, Modbus communication and remote monitoring. Supplying IoT gateways across India including Bangalore, Chennai, Hyderabad and Mumbai."
        />

        <meta
          name="keywords"
          content="Industrial IoT Gateway manufacturer India, Modbus IoT Gateway supplier India, IoT Gateway Bangalore, IoT Gateway Chennai, IoT Gateway Hyderabad, Industrial automation gateway"
        />

        <link
          rel="canonical"
          href="https://dncltech.com/industrial/iot-gateway"
        />

        <meta
          property="og:title"
          content="Industrial IoT Gateway | DNCL Technologies"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dncltech.com/industrial/iot-gateway"
        />

        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Industrial IoT Gateways",
            itemListElement: IotGatewayData.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": item.title,
                "url": `https://dncltech.com/industrial/iot-gateway/${item.id}`,
                "image": item.image,
                "brand": {
                  "@type": "Brand",
                  "name": "DNCL Technologies"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="bong-section">
        <h1 className="bong-title">
          <span className="title-black">Industrial</span>{" "}
          <span className="title-blue">IoT Gateway</span>
        </h1>

        {/* SEO Content */}
        <section className="seo-content">

          <p>
            DNCL Technologies manufactures Industrial IoT Gateway devices used
            for Modbus communication, remote monitoring and industrial
            automation systems. Our IoT gateways support MQTT, Ethernet and
            RS485 connectivity for Industry 4.0 applications.
          </p>
        </section>

        <div className="bong-wrapper">
          {IotGatewayData.map((item) => (
            <Link
              key={item.id}
              to={`/industrial/iot-gateway/${item.id}`}
              className="bong-card"
            >
              <img
                src={item.image}
                alt={`DNCL ${item.title} Industrial IoT Gateway`}
                className="bong-image"
                loading="lazy"
              />

              <div className="bong-overlay">
                <p className="bong-model">{item.title}</p>
                <p className="bong-subtitle">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}