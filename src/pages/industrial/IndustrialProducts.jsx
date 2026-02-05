import FieldIO from "./FieldIO";
import IotGateway from "./IotGateway";
import DataLogger from "./DataLogger";

export default function IndustrialProducts() {
  return (
    <>
      {/* FIELD I/O MODULES */}
      <FieldIO />

      {/* IOT GATEWAY MODULES */}
      <IotGateway />

      {/* DATA LOGGER MODULES */}
      <DataLogger />
    </>
  );
}
