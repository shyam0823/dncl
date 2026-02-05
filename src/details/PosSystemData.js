import pos15Img from "../assets/15.6.jpeg";
import posTouchImg from "../assets/barcode.jpeg";

const PosSystemData = [
  {
    id: "15-inch-pos",
    title: "15.6-Inch POS System",
    subtitle: "Compact Retail Terminal",
    image: pos15Img,

    model: "/models/15.6_03.glb",

    specifications: {
      display: [
        ["Resolution", "1920 × 1080 (Full HD)"],
        ["Touch Type", "Capacitive Touch"],
        ["Color Depth", "16.7M (24-bit) Colors"],
        ["UX", "Modern Premium UI"],
      ],

      printer: [
        ["Print Method", "Direct Thermal"],
        ["Paper Width", "80 mm (3 inches)"],
        ["Print Width", "72 mm (Standard)"],
        ["Print Speed", "70 mm/sec"],
        ["Cutting Method", "Manual Tear Bar"],
      ],

      device: [
        ["Product Storage", "3000+ Products"],
        ["Billing", "Fully GST Enabled"],
        ["Daily Capacity", "Up to 2000 Bills / Day"],
        ["Reports", "7+ Detailed Reports"],
        ["Logo Printing", "Custom Logo Supported on Bills"],
      ],

      connectivity: [
        ["USB Support", "Pen Drive & Serial Cable"],
        ["Communication", "UART & RS-232"],
        ["RS-232 Ports", "Multiple (Peripheral Support)"],
        ["Architecture", "Independent Dual Power Architecture"],
      ],

      power: [
        ["Main Unit Input", "9V DC"],
        ["Display Input", "12V DC, 1A"],
      ],
    },

    features: [
      "15.6-inch Full HD capacitive touch display",
      "Industrial-grade metal body construction",
      "High brightness display for retail environments",
      "Silent fanless cooling design",
      "Compact all-in-one POS architecture",
      "Supports storage of 3000+ products",
      "Built-in discount feature supported",
      "Fully GST-enabled billing system",
      "Capable of generating up to 2000 bills per day",
      "Supports 7+ detailed sales & tax reports",
      "Custom logo printing supported on bills",
      "Multiple RS-232 ports for peripheral integration",
      "USB & RS-232 connectivity with independent power design",
    ],

    modelNumber: "BM_DM151",
    download: "/downloads/15inch-pos-datasheet.pdf",
  },

  {
    id: "touch-pos",
    title: "15.6-Inch POS with Barcode",
    subtitle: "High-Performance Retail Terminal",
    image: posTouchImg,

    model: "/models/15.6_03.glb",

    specifications: {
      display: [
        ["Resolution", "1920 × 1080 (Full HD)"],
        ["Touch Type", "Capacitive Multi-Touch"],
        ["Color Depth", "16.7M (24-bit) Colors"],
        ["Brightness", "High Brightness Retail Panel"],
      ],

      scanner: [
        ["Scanner Type", "Integrated 1D / 2D Barcode Scanner"],
        ["Scan Speed", "High-speed Omni-directional"],
        ["Supported Codes", "QR / UPC / EAN / Code128"],
      ],

      device: [
        ["Product Storage", "5000+ Products"],
        ["Billing", "High-Speed GST Enabled"],
        ["Daily Capacity", "3000+ Bills / Day"],
        ["Reports", "10+ Advanced Reports"],
      ],

      connectivity: [
        ["USB Ports", "USB 2.0 / USB 3.0"],
        ["Serial Ports", "RS-232 (Multiple)"],
        ["Wi-Fi", "Supported"],   // FIXED (needed 2 values)
      ],

      power: [
        ["Board Power Supply", "9 Volts"],
        ["Display Power Supply", "12 Volts"],
      ],
    },

    features: [
      "Integrated 1D / 2D barcode scanner",
      "High-speed billing for supermarkets",
      "Capacitive multi-touch Full HD display",
      "Optimized for heavy billing counters",
      "Industrial-grade retail durability",
    ],

    modelNumber: "BM_TOUCH_151",
    download: "/downloads/touch-pos-datasheet.pdf",
  },
];

export default PosSystemData;
