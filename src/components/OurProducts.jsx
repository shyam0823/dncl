import CategoryCard from "./CategoryCard";
import productCategories from "../data/productCategory";
import { Helmet } from "react-helmet-async";
import "./OurProducts.css";

export default function OurProducts() {
return (
<>
  <Helmet>

    <title>Retail & Industrial Automation Products | DNCL Technologies</title>

    <meta
      name="description"
      content="Explore DNCL Technologies products including POS systems, billing machines, industrial IoT gateways, field IO modules and data loggers."
    />

    <link
      rel="canonical"
      href="https://dncltech.com/products"
    />

    <meta property="og:title" content="DNCL Technologies Products" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dncltech.com/products" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "DNCL Technologies Products",
        "description": "Retail POS systems, billing machines and industrial automation products."
      })}
    </script>

  </Helmet>

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
    </>
  );
}
