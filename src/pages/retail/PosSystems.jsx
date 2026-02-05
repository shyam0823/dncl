import { Link } from "react-router-dom";
import "./PosSystems.css";
import PosSystemData from "../../details/PosSystemData";

export default function PosSystems() {
  return (
   <section className="pos-product-wrapper">
      <h1 className="pos-title">Point-of-Sale Systems</h1>

    <div className="pos-product-grid">
        {PosSystemData.map((item) => (
          <Link
            key={item.id}
            to={`/retail/pos/${item.id}`}
             className="pos-product-card"
          >
            {/* IMAGE */}
            <div className="pos-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            {/* INFO */}
            <div className="pos-info">
              <p className="pos-rock-model">
                {item.title}
              </p>

              <p className="pos-desc">
                {item.subtitle}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
