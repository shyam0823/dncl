import { Link } from "react-router-dom";
import FieldInputData from "../../details/FieldInputData";
import "./FieldIO.css";

export default function FieldIO() {
  return (
    <section className="fieldio-wrapper">
      <h1>Field I/O Modules</h1>

      <div className="fieldio-grid">
        {FieldInputData.map((item) => (
          <Link
            key={item.id}
            to={`/industrial/field-io/${item.id}`}
            className="fieldio-card"
          >
            {/* IMAGE */}
            <div className="fieldio-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            {/* INFO */}
            <div className="fieldio-info">
              <p className="fieldio-model">
                Model No: <strong>{item.subtitle}</strong>
              </p>

              <p className="fieldio-desc">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
