import diModbus from "../assets/PLC-.jpeg";
import doModbus from "../assets/Dooutput.jpeg";

const DataLoggerData = [
  {
    id: "di-modbus",
    title: "16-CH IOT",
    subtitle: "Modbus Data Logger",
    image: diModbus,
    model: "/models/DI_V1.glb",

    specifications: [
      ["Input Type", "12–24V Digital"],
      ["Channels", "16"],
      ["Protocol", "Modbus RTU & Mqtt & TCP"],
    ],

    features: [
      "16 digital input channels",
      "Event & time-based logging",
      "Reliable Modbus RTU communication",
      "Industrial-grade compact design",
    ],

    download: "/downloads/datalogger-di-modbus.pdf",
  },

  {
    id: "do-modbus",
    title: "16-CH IOT",
    subtitle: "Modbus Data Logger",
    image: doModbus,
    model: "/models/IOT.glb",

    specifications: [
      ["Output Type", "Relay / Transistor"],
      ["Channels", "16"],
      ["Protocol", "Modbus RTU, Modbus TCP & Mqtt"],
    ],

    features: [
      "16 digital output channels",
      "Remote output control",
      "Stable Modbus RTU communication",
      "Designed for industrial automation",
    ],

    download: "/downloads/datalogger-do-modbus.pdf",
  },
];

export default DataLoggerData;
