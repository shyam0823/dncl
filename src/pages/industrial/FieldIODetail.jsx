import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FieldInputData from "../../details/FieldInputData";
import FieldIOModelViewer from "../../components/FieldIOModelViewer";

// ✅ FIXED IMAGE IMPORTS (Vite way)
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
  );
}
