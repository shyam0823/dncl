import { Link } from "react-router-dom";
import DataLoggerData from "../../details/DataLoggerData";
import "./DataLogger.css";

export default function DataLogger() {
  return (
    <section className="datalogger-wrapper">
      <h1>MultiFunctional Data Logger (PLC)</h1>

      <div className="datalogger-grid">
        {DataLoggerData.map((item) => (
          <Link
            key={item.id}
            to={`/industrial/data-logger/${item.id}`}
            className="datalogger-card"
          >
            {/* IMAGE */}
            <div className="datalogger-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            {/* INFO */}
            <div className="datalogger-info">
              <div className="datalogger-model">
                Model No: <strong>{item.title}</strong>
              </div>

              <div className="datalogger-desc">
                {item.subtitle}
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
