import { Link } from "react-router-dom";
import IotGatewayData from "../../details/IotGatewayData";
import "./FieldIO.css";

export default function IotGateway() {
  return (
    <section className="fieldio-wrapper">
      <h1>Industrial IOT Gateway</h1>

      <div className="fieldio-grid">
        {IotGatewayData.map((item) => (
          <Link
            key={item.id}
            to={`/industrial/iot-gateway/${item.id}`}
            className="fieldio-card"
          >
            <div className="fieldio-image-wrapper">
              <img src={item.image} alt={item.subtitle} />
            </div>

            <div className="fieldio-content">
              <h3>
                <span className="title-blue">{item.title}</span>
                <br />
                <span className="title-dark">{item.subtitle}</span>
              </h3>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
