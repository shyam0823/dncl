import CategoryCard from "./CategoryCard";
import productCategories from "../data/productCategory";
import "./OurProducts.css";

export default function OurProducts() {
  return (
    <section className="products-section page-offset">
      <div className="products-container">

        <h1 className="products-title">
          <span className="title-black">Our</span>{" "}
          <span className="title-blue">Products</span>
        </h1>

        <div className="products-wrapper">
          {productCategories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              products={category.products}
              path={category.path}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
