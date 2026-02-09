import { Link } from "react-router-dom";
import DataLoggerData from "../../details/DataLoggerData";
import "./DataLogger.css";

export default function DataLogger() {
  return (
    <section className="datalogger-section">
      <h2 className="datalogger-title">
        <span className="title-black">MultiFunctional</span>{" "}
        <span className="title-blue">Data Logger (PLC)</span>
      </h2>

      <div className="datalogger-wrapper">
        {DataLoggerData.map((item) => (
          <Link
            key={item.id}
            to={`/industrial/data-logger/${item.id}`}
            className="datalogger-card"
          >
            {/* IMAGE */}
            <img src={item.image} alt={item.title} />

            {/* OVERLAY */}
            <div className="datalogger-overlay">
              <p className="datalogger-model">{item.title}</p>
              <p className="datalogger-subtitle">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
