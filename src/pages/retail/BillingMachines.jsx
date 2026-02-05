import { Link } from "react-router-dom";
import BillingMachineData from "../../details/BillingMachineData";
import "./BillingMachines.css";

export default function BillingMachines() {
  return (
    <section className="retail-wrapper">
      <h1>Billing Machines</h1>

      <div className="retail-grid">
        {BillingMachineData.map((item) => (
          <Link
            key={item.id}
            to={`/retail/billing/${item.id}`}
            className="retail-card"
          >
            <div className="retail-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="retail-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
