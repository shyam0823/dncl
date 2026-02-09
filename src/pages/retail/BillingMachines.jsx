import { Link } from "react-router-dom";
import BillingMachineData from "../../details/BillingMachineData";
import "./BillingMachines.css";

export default function BillingMachines() {
  return (
    <section className="billing-section">
      <h2 className="billing-title">
        <span className="title-black">Billing</span>{" "}
        <span className="title-blue">Machines</span>
      </h2>

      <div className="billing-wrapper">
        {BillingMachineData.map((item) => (
          <Link
            key={item.id}
            to={`/retail/billing/${item.id}`}
            className="billing-card"
          >
            <img src={item.image} alt={item.title} />

            {/* OVERLAY – SAME AS POS */}
            <div className="billing-overlay">
              <p className="billing-model">{item.title}</p>
              <p className="billing-subtitle">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
