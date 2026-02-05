import "./RetailProducts.css";

import PosSystems from "./PosSystems";
import BillingMachines from "./BillingMachines";

export default function RetailProducts() {
  return (
    <>
      {/* POS SYSTEMS */}
      <PosSystems />

      {/* BILLING MACHINES */}
      <BillingMachines />
    </>
  );
}
