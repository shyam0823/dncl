import billing7Img from "../assets/don.jpeg";

const BillingMachineData = [
  {
    id: "7-inch",

    title: "7-Inch Billing Machine",
    subtitle: "Compact Retail Billing Terminal",

    image: billing7Img,

    /* ⭐⭐⭐ ADD THIS (VERY IMPORTANT) */
    model: "/models/7-inch.glb",
    modelScale: 4,  

    specifications: {
      display: [
        ["Display Size", "7 Inch Touch Display"],
        ["Resolution", "800 × 480"],
        ["Touch Type", "Resistive / Capacitive"],
        ["Brightness", "Optimized for Indoor Retail"],
      ],

      device: [
        ["Billing Mode", "Standalone Billing"],
        ["Product Storage", "1000+ Products"],
        ["Daily Capacity", "500+ Bills / Day"],
        ["Usage", "Retail Stores & Pharmacies"],
      ],

      connectivity: [
        ["USB Support", "USB for Pen Drive"],
        ["Communication", "Serial / USB"],
        ["Peripheral Support", "Printer"],
      ],

      power: [
        ["Power Input", "9V 4A"],
        ["Power Consumption", "Low Power Design"],
      ],
    },

    features: [
      "7-inch touch display",
      "Compact and space-saving countertop design",
      "Designed for small retail stores and pharmacies",
      "Supports fast and reliable billing operations",
      "Low power consumption for continuous usage",
      "Simple and user-friendly billing interface",
      "Ideal for low to medium billing volumes",
    ],

    modelNumber: "BM_7INCH",

    download: "/downloads/7inch-billing.pdf",
  },
];

export default BillingMachineData;
