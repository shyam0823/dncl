import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FieldInputData from "../../details/FieldInputData";
import FieldIOModelViewer from "../../components/FieldIOModelViewer";

import mqttImg from "/src/assets/mqtt.png";
import diMoImg from "/src/assets/DI_MQTT.png";
import doMqttImg from "/src/assets/do_mqtt.png";
import analogInputImg from "/src/assets/FieldInput.png";
import analogOutputImg from "/src/assets/FieldOutput.png";

import "./FieldIODetail.css";

export default function FieldIODetail() {
  const { id } = useParams();
  const [tab, setTab] = useState("specs");

  const product = FieldInputData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  const specRows = Object.values(product.specifications).flat();

  return (
  <>
<Helmet>

<title>
{product.title} Industrial Field IO Module Manufacturer India | DNCL Technologies
</title>

<p className="seo-text">
DNCL Technologies manufactures Industrial Field IO modules used for
digital input, digital output and analog signal monitoring in industrial
automation systems. Our IO modules support MQTT communication and are
designed for Industry 4.0 and remote monitoring applications.
</p>

<meta
name="description"
content={`${product.title} Industrial Field IO Module for digital input, digital output and analog signal monitoring with MQTT connectivity. DNCL Technologies manufactures automation IO modules for Industry 4.0 systems in India.`}
/>

<meta
name="keywords"
content={`${product.title} Field IO Module, Industrial IO module manufacturer India, Digital Input Module, Digital Output Module, Analog IO module, Industrial automation IO`}
/>

<link
rel="canonical"
href={`https://dncltech.com/industrial/field-io/${product.id}`}
/>

<meta property="og:title" content={`${product.title} Industrial Field IO Module`} />
<meta property="og:type" content="product" />
<meta property="og:image" content={product.image} />
<meta
property="og:url"
content={`https://dncltech.com/industrial/field-io/${product.id}`}
/>

<meta
property="og:description"
content={`${product.title} industrial field IO module for digital input, digital output and analog signal monitoring used in industrial automation systems.`}
/>

{/* Product Schema */}

<script type="application/ld+json">
{JSON.stringify({
"@context": "https://schema.org",
"@type": "Product",
"@id": `https://dncltech.com/industrial/field-io/${product.id}`,
"name": product.title,
"image": [product.image],
"description": `${product.title} Industrial Field IO Module for digital input, digital output and analog signal monitoring used in industrial automation systems.`,
"sku": product.modelNumber,
"brand": {
"@type": "Brand",
"name": "DNCL Technologies"
},
"manufacturer": {
"@type": "Organization",
"name": "DNCL Technologies",
"url": "https://dncltech.com"
},
"url": `https://dncltech.com/industrial/field-io/${product.id}`
})}
</script>

{/* Breadcrumb Schema */}

<script type="application/ld+json">
{JSON.stringify({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"https://dncltech.com"
},
{
"@type":"ListItem",
"position":2,
"name":"Industrial Products",
"item":"https://dncltech.com/industrial-products"
},
{
"@type":"ListItem",
"position":3,
"name":"Field IO Modules",
"item":"https://dncltech.com/industrial/field-io"
},
{
"@type":"ListItem",
"position":4,
"name":product.title,
"item":`https://dncltech.com/industrial/field-io/${product.id}`
}
]
})}
</script>

</Helmet>

    <section className="fieldio-detail-page">
      <div className="fieldio-top">
        <div className="fieldio-image-box">
          <img src={product.image} alt={product.title} />

          {product.modelNumber && (
            <div className="fieldio-model">
              Model No: <strong>{product.modelNumber}</strong>
            </div>
          )}
        </div>

        <div className="fieldio-info">
  <div className="fieldio-ui-card">
    {product.title === "16-CH Digital Input" && (
      <img src={diMoImg} alt="DI MQTT" />
    )}

    {product.title === "16-CH Digital Output" && (
      <img src={doMqttImg} alt="DO MQTT" />
    )}

    {product.title === "8-CH Analog Input" && (
      <img src={analogInputImg} alt="Analog Input" />
    )}

    {product.title === "8-CH Analog Output" && (
      <img src={analogOutputImg} alt="Analog Output" />
    )}

    {/* SMALL TITLE LIKE MODEL NUMBER */}
    <div className="fieldio-small-title">
      {product.title}
    </div>
  </div>
</div>
</div>

      <div className="tabs">
        <button
          onClick={() => setTab("specs")}
          className={tab === "specs" ? "active" : ""}
        >
          Specifications
        </button>

        <button
          onClick={() => setTab("features")}
          className={tab === "features" ? "active" : ""}
        >
          Features
        </button>

        {product.model && (
          <button
            onClick={() => setTab("model")}
            className={tab === "model" ? "active" : ""}
          >
            3D Model
          </button>
        )}

        <button
          onClick={() => setTab("download")}
          className={tab === "download" ? "active" : ""}
        >
          Downloads
        </button>
      </div>

      {tab === "specs" && (
        <table>
          <tbody>
            {specRows.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {tab === "features" && (
        <ul className="feature-list">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {tab === "model" && product.model && (
        <div className="model-section">
          <h2>3D Model</h2>
          <div className="model-card">
            <FieldIOModelViewer model={product.model} />
          </div>
        </div>
      )}

      {tab === "download" && (
        <div className="download-actions">
          <a
            href={product.download}
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            View Datasheet
          </a>

          <a href={product.download} download className="download-btn">
            Download Datasheet
          </a>
        </div>
      )}
    </section>
    </>
  );
}
