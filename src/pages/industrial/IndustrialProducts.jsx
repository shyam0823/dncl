import { Helmet } from "react-helmet-async";
import FieldIO from "./FieldIO";
import IotGateway from "./IotGateway";
import DataLogger from "./DataLogger";

export default function IndustrialProducts() {
  return (
    <>
      <Helmet>
        <title>
          Industrial Automation Products Manufacturer in India | DNCL Technologies
        </title>

        <meta
          name="description"
          content="DNCL Technologies manufactures industrial automation products including Field IO modules, Industrial IoT Gateways and Data Loggers for monitoring, control and Industry 4.0 systems."
        />

        <meta
          name="keywords"
          content="Industrial automation products India, Field IO modules manufacturer, Industrial IoT Gateway supplier, Industrial data logger manufacturer, automation monitoring systems"
        />

        <link
          rel="canonical"
          href="https://dncltech.com/industrial-products"
        />

        <meta
          property="og:title"
          content="Industrial Automation Products | DNCL Technologies"
        />

        <meta
          property="og:description"
          content="Industrial Field IO modules, IoT gateways and Data Loggers for automation systems designed by DNCL Technologies."
        />

        <meta
          property="og:url"
          content="https://dncltech.com/industrial-products"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://dncltech.com/og-image.png"
        />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://dncltech.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Industrial Products",
                item: "https://dncltech.com/industrial-products"
              }
            ]
          })}
        </script>

        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Industrial Automation Products",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Field IO Modules",
                url: "https://dncltech.com/industrial/field-io"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Industrial IoT Gateway",
                url: "https://dncltech.com/industrial/iot-gateway"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Industrial Data Logger",
                url: "https://dncltech.com/industrial/data-logger"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* PRODUCT SECTIONS */}
      <FieldIO />
      <IotGateway />
      <DataLogger />
    </>
  );
}