import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DataLoggerData from "../../details/DataLoggerData";
import ModelViewer from "../../components/ModelViewer";
import "./DataLoggerDetail.css";

function DataLoggerDetail() {
  const { id } = useParams();
  const [tab, setTab] = useState("specs");

  const product = DataLoggerData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  if (!product?.model && tab === "model") {
    setTab("specs");
  }
}, [product, tab]);


  if (!product) return <h2 style={{ padding: 40 }}>Product not found</h2>;

  return (
    <section className="fieldio-detail-data">
      <h1>
        {product.title} – {product.subtitle}
      </h1>

      <img src={product.image} alt={product.subtitle} />

      <div className="tabs">
        <button
          className={tab === "specs" ? "active" : ""}
          onClick={() => setTab("specs")}
        >
          Specifications
        </button>
        <button
  className={tab === "features" ? "active" : ""}
  onClick={() => setTab("features")}
>
  Features
</button>

{product.model && (
  <button
    className={tab === "model" ? "active" : ""}
    onClick={() => setTab("model")}
  >
    3D Model
  </button>
)}

<button
  className={tab === "download" ? "active" : ""}
  onClick={() => setTab("download")}
>
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
    <a
      href={product.download}
      target="_blank"
      rel="noopener noreferrer"
      className="view-btn"
    >
      View Datasheet
    </a>

    <a
      href={product.download}
      download
      className="download-btn"
    >
      Download Datasheet
    </a>
  </div>
)}

    </section>
  );
}

export default DataLoggerDetail;
