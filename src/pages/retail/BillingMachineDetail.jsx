import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BillingMachineData from "../../details/BillingMachineData";
import ModelViewer from "../../components/ModelViewer";
import "./BillingMachineDetail.css";

export default function BillingMachineDetail() {
  const { id } = useParams();
  const [tab, setTab] = useState("specs");

  const product = BillingMachineData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  const techHighlights = [
    ...(product.specifications.display || []).slice(0, 2),
    ...(product.specifications.device || []).slice(0, 1),
    ...(product.specifications.connectivity || []).slice(0, 1),
    ...(product.specifications.power || []).slice(0, 1),
  ].slice(0, 5);

  return (
    <section className="billing-detail">
      
      {/* ================= TOP ================= */}
      <div className="billing-top">
        <div className="billing-image-box">
          <img src={product.image} alt={product.title} />

          <div className="billing-model">
            Model No: <strong>{product.modelNumber}</strong>
          </div>
        </div>

        <div className="billing-info">
          <h1>{product.title}</h1>
          <p className="billing-subtitle">{product.subtitle}</p>

          <ul className="billing-highlights">
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

      {/* ================= SPECIFICATIONS ================= */}
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

      {/* ================= FEATURES ================= */}
      {tab === "features" && (
        <ul className="feature-list">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}


      {/* ================= 3D MODEL ================= */}
{tab === "model" && (
  <div className="model-section">
    <h2>3D Model</h2>

    <div className="model-card">
      <ModelViewer 
        model={product.model}
        scale={product.modelScale}
      />
    </div>
  </div>
)}

      {/* ================= DOWNLOAD ================= */}
      {tab === "download" && (
        <div className="download-actions">
          <a href={product.download} target="_blank" rel="noopener noreferrer">
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
