import CategoryCard from "./CategoryCard";
import productCategories from "../data/ProductCategory";
import "./OurProducts.css";

export default function OurProducts() {
  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">
        {productCategories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            products={category.products}
            path={category.path}
          />
        ))}
      </div>
    </section>
  );
}
