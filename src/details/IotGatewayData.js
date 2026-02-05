import mqttImg from "../assets/IOT_.jpeg";
import canImg from "../assets/IOT_.jpeg";
import spiImg from "../assets/IOT_.jpeg";
import uartImg from "../assets/IOT_.jpeg";

const IotGatewayData = [
  {
    id: "mqtt",
    title: "IoT Gateway",
    subtitle: "MQTT",
    image: mqttImg,
    model: "/models/IOT.glb",

    specifications: [
      ["Protocol", "MQTT"],
      ["Connectivity", "Ethernet / 4G"],
      ["Power Supply", "12–24V DC"],
    ],
    features: [
      "Secure MQTT communication",
      "Cloud ready",
      "Industrial grade enclosure",
    ],
    download: "/downloads/iot-gateway-mqtt.pdf",
  },

  {
    id: "can",
    title: "IoT Gateway",
    subtitle: "CAN",
    image: canImg,
    model: "/models/IOT.glb",
    specifications: [
      ["Protocol", "CAN Bus"],
      ["Data Rate", "Up to 1 Mbps"],
      ["Isolation", "Built-in"],
    ],
    features: [
      "CAN to Cloud integration",
      "Real-time data transfer",
      "Rugged industrial design",
    ],
    download: "/downloads/iot-gateway-can.pdf",
  },

  {
    id: "spi",
    title: "IoT Gateway",
    subtitle: "SPI",
    image: spiImg,
    model: "/models/IOT.glb",
    specifications: [
      ["Protocol", "SPI"],
      ["Clock Speed", "Up to 10 MHz"],
      ["Operating Temp", "-20 to 70°C"],
    ],
    features: [
      "High-speed SPI communication",
      "Edge data processing",
      "Low latency",
    ],
    download: "/downloads/iot-gateway-spi.pdf",
  },

  {
    id: "uart",
    title: "IoT Gateway",
    subtitle: "UART",
    image: uartImg,
    model: "/models/IOT.glb",
    specifications: [
      ["Protocol", "UART"],
      ["Baud Rate", "Up to 115200"],
      ["Interface", "RS232 / RS485"],
    ],
    features: [
      "Legacy device integration",
      "Stable serial communication",
      "Easy configuration",
    ],
    download: "/downloads/iot-gateway-uart.pdf",
  },
];

export default IotGatewayData;
