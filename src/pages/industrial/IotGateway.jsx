import { Link } from "react-router-dom";
import IotGatewayData from "../../details/IotGatewayData";
import "./IotGateway.css";

export default function IotGateway() {
  return (
    <section className="bong-section">
      <h2 className="bong-title">
        <span className="title-black">Industrial</span>{" "}
        <span className="title-blue">IoT Gateway</span>
      </h2>

      <div className="bong-wrapper">
        {IotGatewayData.map((item) => (
          <Link
            key={item.id}
            to={`/industrial/iot-gateway/${item.id}`}
            className="bong-card"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.subtitle}
              className="bong-image"
            />

            {/* OVERLAY */}
            <div className="bong-overlay">
              <p className="bong-model">{item.title}</p>
              <p className="bong-subtitle">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
