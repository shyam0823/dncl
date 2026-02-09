import "./CategoryCard.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, products, path }) {
  return (
    <div className="category-card">

      {/* TITLE */}
      <h3 className="category-title">{title}</h3>

      <div className="category-images">
        {products.map((product, index) => (
          <Link
            to={path}
            key={index}
            className="product-card"
          >
            {/* IMAGE */}
            <img src={product.image} alt={product.model} />

            {/* OVERLAY (BOTTOM 50%) */}
            <div className="product-overlay">
              <p className="product-model">{product.model}</p>

              {product.subtitle && (
                <span className="product-subtitle">
                  {product.subtitle}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
