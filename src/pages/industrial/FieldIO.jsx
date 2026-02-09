import { Link } from "react-router-dom";
import FieldInputData from "../../details/FieldInputData";
import "./FieldIO.css";

export default function FieldIO() {
  return (
    <section className="fieldio-section">
      <h2 className="fieldio-title">
        <span className="title-black">Field I/O</span>{" "}
        <span className="title-blue">Modules</span>
      </h2>

      <div className="fieldio-wrapper">
        {FieldInputData.map((item) => (
          <Link
            key={item.id}
            to={`/industrial/field-io/${item.id}`}
            className="fieldio-card"
          >
            {/* IMAGE */}
            <img src={item.image} alt={item.title} />

            {/* OVERLAY */}
            <div className="fieldio-overlay">
              <p className="fieldio-model">{item.subtitle}</p>
              <p className="fieldio-subtitle">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
