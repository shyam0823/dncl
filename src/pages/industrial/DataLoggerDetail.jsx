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
    <section className="pop-section">
      {/* ================= TITLE ================= */}
      <h1 className="pop-title">
        <span className="title-black">{product.title}</span>{" "}
        <span className="title-blue">{product.subtitle}</span>
      </h1>

      {/* ================= CARD ================= */}
      <div className="pop-card">
        <img
          src={product.image}
          alt={product.subtitle}
          className="pop-image"
        />

        <div className="pop-overlay">
          {product.modelNumber && (
            <div className="pop-model">{product.modelNumber}</div>
          )}
          <div className="pop-subtitle">{product.subtitle}</div>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="pop-tabs">
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

      {/* ================= SPECIFICATIONS ================= */}
      {tab === "specs" && (
        <table className="pop-table">
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
        <ul className="pop-features">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {/* ================= 3D MODEL ================= */}
      {tab === "model" && product.model && (
        <div className="pop-model-section">
          <ModelViewer model={product.model} />
        </div>
      )}

      {/* ================= DOWNLOAD ================= */}
      {tab === "download" && (
        <div className="pop-download">
          <a
            href={product.download}
            target="_blank"
            rel="noopener noreferrer"
            className="pop-view"
          >
            View Datasheet
          </a>

          <a href={product.download} download className="pop-download-btn">
            Download Datasheet
          </a>
        </div>
      )}
    </section>
  );
}

export default DataLoggerDetail;
