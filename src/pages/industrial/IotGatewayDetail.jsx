import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import IotGatewayData from "../../details/IotGatewayData";
import ModelViewer from "../../components/ModelViewer";
import "./IotGatewayDetail.css";

export default function IotGatewayDetail() {
  const { id } = useParams();
  const [tab, setTab] = useState("specs");

  const product = IotGatewayData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <>
      {/* SEO */}
<Helmet>

<title>
{product.title} Industrial IoT Gateway Manufacturer in India | DNCL Technologies
</title>

<meta
name="description"
content={`${product.title} Industrial IoT Gateway manufacturer and supplier in India. DNCL Technologies provides IoT gateways for industries in Bangalore, Chennai, Hyderabad, Mumbai,Pune and Delhi. Our IoT gateways support Modbus communication, remote monitoring and industrial automation applications.`}
/>

<meta
name="keywords"
content={`${product.title}, Industrial IoT Gateway manufacturer India, IoT Gateway Bangalore, IoT Gateway Chennai, IoT Gateway Hyderabad, IoT Gateway Mumbai, IoT Gateway Pune`}
/>

<link
rel="canonical"
href={`https://dncltech.com/industrial/iot-gateway/${product.id}`}
/>

{/* Open Graph */}

<meta property="og:title" content={`${product.title} Industrial IoT Gateway`} />
<meta property="og:site_name" content="DNCL Technologies" />
<meta property="og:url" content={`https://dncltech.com/industrial/iot-gateway/${product.id}`} />

<meta
property="og:description"
content={`${product.title} Industrial IoT Gateway manufacturer in India supplying automation gateways to Bangalore, Chennai, Hyderabad, Mumbai and other major cities.`}
/>

<meta property="og:type" content="product" />
<meta property="og:image" content={product.image} />

{/* Twitter */}

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={`${product.title} Industrial IoT Gateway`} />
<meta
name="twitter:description"
content={`${product.title} Industrial IoT Gateway for industrial automation and remote monitoring systems in India.`}
/>
<meta name="twitter:image" content={product.image} />

{/* Product Schema */}

<script type="application/ld+json">
{JSON.stringify({
"@context": "https://schema.org",
"@type": "Product",
"@id": `https://dncltech.com/industrial/iot-gateway/${product.id}`,
"name": product.title,
"image": [product.image],
"description": `${product.title} Industrial IoT Gateway for Modbus communication, remote monitoring and industrial automation systems designed and manufactured by DNCL Technologies in India.`,
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
"url": `https://dncltech.com/industrial/iot-gateway/${product.id}`
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
"item":"https://dncltech.com/industrial"
},
{
"@type":"ListItem",
"position":3,
"name":product.title,
"item":`https://dncltech.com/industrial/iot-gateway/${product.id}`
}
]
})}
</script>

</Helmet>

      <section className="fieldio-detail-page">
      {/* ================= TOP LAYOUT ================= */}
      <div className="fieldio-top">
        {/* LEFT IMAGE CARD */}
        <div className="fieldio-image-box">
          <img
          src={product.image}
          alt={`DNCL ${product.title} Industrial IoT Gateway`}
          loading="lazy"
        />

          {product.modelNumber && (
            <div className="fieldio-model">
              Model No: <strong>{product.modelNumber}</strong>
            </div>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div className="fieldio-info">
        <h1 className="iot-title">
  <span className="title-black">{product.title}</span>{" "}
  <span className="title-blue">{product.subtitle}</span>
</h1>

<p className="seo-text">
DNCL Technologies manufactures Industrial IoT Gateway devices used for
Modbus communication, remote monitoring, data logging and industrial
automation systems. Our IoT gateways support MQTT, Ethernet and RS485
connectivity for Industry 4.0 applications.
</p>

        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="tabs">
        <button onClick={() => setTab("specs")} className={tab === "specs" ? "active" : ""}>
          Specifications
        </button>

        <button onClick={() => setTab("features")} className={tab === "features" ? "active" : ""}>
          Features
        </button>

        {product.model && (
          <button onClick={() => setTab("model")} className={tab === "model" ? "active" : ""}>
            3D Model
          </button>
        )}

        <button onClick={() => setTab("download")} className={tab === "download" ? "active" : ""}>
          Downloads
        </button>
      </div>

      {/* ================= SPECIFICATIONS ================= */}
      {tab === "specs" && (
        <table>
          <tbody>
            {product.specifications.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ================= FEATURES ================= */}
      {tab === "features" && (
        <ul className="feature-list">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {/* ================= 3D MODEL ================= */}
      {tab === "model" && product.model && (
        <div className="model-section">
          <h2>3D Model</h2>
          <div className="model-card">
            <ModelViewer model={product.model} />
          </div>
        </div>
      )}

      {/* ================= DOWNLOADS ================= */}
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
