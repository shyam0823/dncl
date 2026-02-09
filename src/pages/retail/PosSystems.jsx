import { Link } from "react-router-dom";
import "./PosSystems.css";
import PosSystemData from "../../details/PosSystemData";

export default function PosSystems() {
  return (
    <section className="pos-section">
      <h2 className="pos-title">
        <span className="title-black">Point-of-Sale</span>{" "}
        <span className="title-blue">Systems</span>
      </h2>

      <div className="pos-wrapper">
        {PosSystemData.map((item) => (
          <Link
            key={item.id}
            to={`/retail/pos/${item.id}`}
            className="pos-card"
          >
            <img src={item.image} alt={item.title} />

            {/* OVERLAY */}
            <div className="pos-overlay">
              <p className="pos-model">{item.title}</p>
              <p className="pos-subtitle">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
