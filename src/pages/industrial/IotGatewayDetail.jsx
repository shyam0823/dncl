import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <section className="fieldio-detail-iot">
      <h1>{product.title} – {product.subtitle}</h1>

      <img src={product.image} alt={product.subtitle} />

      <div className="tabs">
        <button onClick={() => setTab("specs")} className={tab === "specs" ? "active" : ""}>
          Specifications
        </button>
       <button onClick={() => setTab("features")} className={tab === "features" ? "active" : ""}>
  Features
</button>

{/* ⭐ SHOW ONLY IF MODEL EXISTS */}
{product.model && (
  <button onClick={() => setTab("model")} className={tab === "model" ? "active" : ""}>
    3D Model
  </button>
)}

<button onClick={() => setTab("download")} className={tab === "download" ? "active" : ""}>
  Downloads
</button>

      </div>

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

      {tab === "features" && (
        <ul>
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


      {tab === "download" && (
        <div className="download-actions">
          <a href={product.download} target="_blank" rel="noopener noreferrer" className="view-btn">
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
