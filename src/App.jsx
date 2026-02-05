import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookDemo from "./components/BookDemo";



/* ===============================
   MAIN PAGES
================================ */
import Home from "./pages/Home";
import About from "./pages/About";
import Distributor from "./pages/Distributor";
import Support from "./pages/support/Support";


/* ===============================
   RETAIL – LIST PAGES
================================ */
import RetailProducts from "./pages/retail/RetailProducts";
import PosSystems from "./pages/retail/PosSystems";
import BillingMachines from "./pages/retail/BillingMachines";

/* ===============================
   RETAIL – DETAIL PAGES
================================ */
import PosSystemDetail from "./pages/retail/PosSystemDetail";
import BillingMachineDetail from "./pages/retail/BillingMachineDetail";

/* ===============================
   INDUSTRIAL – LIST PAGES
================================ */
import IndustrialProducts from "./pages/industrial/IndustrialProducts";
import FieldIO from "./pages/industrial/FieldIO";
import DataLogger from "./pages/industrial/DataLogger";
import IotGateway from "./pages/industrial/IotGateway";

/* ===============================
   INDUSTRIAL – DETAIL PAGES
================================ */
import FieldIODetail from "./pages/industrial/FieldIODetail";
import DataLoggerDetail from "./pages/industrial/DataLoggerDetail";
import IotGatewayDetail from "./pages/industrial/IotGatewayDetail";

export default function App() {
  const location = useLocation();

  //  Hide footer on home page only
  const hideFooter = location.pathname === "/";

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>

        {/* MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/support" element={<Support />} />
        <Route path="/book-demo" element={<BookDemo />} />

        {/* RETAIL */}
        <Route path="/retail" element={<RetailProducts />} />
        <Route path="/retail/pos" element={<PosSystems />} />
        <Route path="/retail/pos/:id" element={<PosSystemDetail />} />
        <Route path="/retail/billing" element={<BillingMachines />} />
        <Route path="/retail/billing/:id" element={<BillingMachineDetail />} />

        {/* INDUSTRIAL */}
        <Route path="/industrial" element={<IndustrialProducts />} />
        <Route path="/industrial/field-io" element={<FieldIO />} />
        <Route path="/industrial/field-io/:id" element={<FieldIODetail />} />
        <Route path="/industrial/data-logger" element={<DataLogger />} />
        <Route path="/industrial/data-logger/:id" element={<DataLoggerDetail />} />
        <Route path="/industrial/iot-gateway" element={<IotGateway />} />
        <Route path="/industrial/iot-gateway/:id" element={<IotGatewayDetail />} />

      </Routes>

      {/* FOOTER (hidden on Home) */}
      {!hideFooter && <Footer />}
    </>
  );
}
