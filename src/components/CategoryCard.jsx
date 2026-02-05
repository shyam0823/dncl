import "./CategoryCard.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, products, path }) {
  return (
    <Link to={path} className="category-link">
      <div className="category-card">

        {/* TITLE */}
        <h3 className="category-title">{title}</h3>

        <div className="category-images">
         {products.map((product, index) => (
  <div key={index} className="product-card">
    <img src={product.image} alt={product.model} />

    <p className="product-model">
      {product.model}
    </p>

    {/* ✅ ADD THIS LINE */}
    {product.subtitle && (
      <span className="product-subtitle">
        {product.subtitle}
      </span>
    )}
    
  </div>
))}

        </div>

      </div>
    </Link>
  );
}
