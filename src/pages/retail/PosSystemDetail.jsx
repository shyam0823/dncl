import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PosSystemData from "../../details/PosSystemData";
import ModelViewer from "../../components/ModelViewer";
import "./PosSystemDetail.css";

export default function PosSystemDetail() {
  const { id } = useParams();
  const [tab, setTab] = useState("specs");

  const product = PosSystemData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h2>Product not found</h2>;

  /* ===============================
     TECHNICAL HIGHLIGHTS (TOP RIGHT)
     =============================== */
  const techHighlights = [
    ...(product.specifications.display || []).slice(0, 2),
    ...(product.specifications.scanner || []).slice(0, 1),
    ...(product.specifications.connectivity || []).slice(0, 1),
    ...(product.specifications.device || []).slice(0, 1),
  ].slice(0, 5);

  return (
    <section className="pos-detail">
      {/* ================= TOP SECTION ================= */}
      <div className="pos-top">
        {/* IMAGE */}
        <div className="pos-image-box">
          <img src={product.image} alt={product.title} />

          {/* MODEL NUMBER */}
          <div className="pos-model">
            Model No: <strong>{product.modelNumber}</strong>
          </div>
        </div>

        {/* INFO */}
        <div className="pos-info">
          <h1>{product.title}</h1>

          <ul className="pos-highlights">
            {techHighlights.map((item, i) => (
              <li key={i}>
                <strong>{item[0]}:</strong> {item[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= TABS ================= */}
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

<button
  onClick={() => setTab("model")}
  className={tab === "model" ? "active" : ""}
>
  3D Model
</button>

<button
  onClick={() => setTab("download")}
  className={tab === "download" ? "active" : ""}
>
  Downloads
</button>

      </div>

      {/* ================= TAB CONTENT ================= */}

      {/* ===== SPECIFICATIONS ===== */}
      {tab === "specs" && (
        <>
          {Object.entries(product.specifications).map(
            ([section, rows]) => (
              <div className="spec-block" key={section}>
                <h3 className="spec-title">
                  {section.replace("_", " ").toUpperCase()}
                </h3>

                <table>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}

        </>
      )}

      {/* ===== FEATURES ===== */}
      {tab === "features" && (
        <ul className="feature-list">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}


      {/* ===== 3D MODEL TAB ===== */}
{tab === "model" && (
  <div className="model-section">
    <h2>3D Product View</h2>

    <div className="model-card">
      <ModelViewer model={product.model} />
    </div>
  </div>
)}


      {/* ===== DOWNLOAD ===== */}
      {tab === "download" && (
        <div className="download-actions">
          <a
            href={product.download}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Datasheet
          </a>

          <a href={product.download} download>
            Download Datasheet
          </a>
        </div>
      )}
    </section>
  );
}
