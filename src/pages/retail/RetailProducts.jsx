import "./RetailProducts.css";
import { Helmet } from "react-helmet-async";

import PosSystems from "./PosSystems";
import BillingMachines from "./BillingMachines";

export default function RetailProducts() {
  return (
    <>
      <Helmet>
        <title>Retail POS Systems & Billing Machines | DNCL Technologies</title>

        <meta
          name="description"
          content="DNCL Technologies retail automation products including POS systems and billing machines for shops, supermarkets and retail businesses."
        />

        <link rel="canonical" href="https://dncltech.com/retail-products" />

        <meta
          property="og:title"
          content="Retail POS Systems & Billing Machines | DNCL Technologies"
        />

        <meta
          property="og:description"
          content="Retail POS systems and billing machines for fast checkout and store management."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dncltech.com/retail-products" />
      </Helmet>

      {/* POS SYSTEMS */}
      <PosSystems />

      {/* BILLING MACHINES */}
      <BillingMachines />
    </>
  );
}