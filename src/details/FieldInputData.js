import digitalInputImg from "../assets/Diinput.jpeg";
import digitalOutputImg from "../assets/Dooutput.jpeg";
import analogInputImg from "../assets/Diinput.jpeg";
import analogOutputImg from "../assets/Dooutput.jpeg";

const FieldInputData = [
  {
    id: "digital-input",
    title: "16-CH Digital Input",
    subtitle: "Modbus RTU Remote I/O",
    image: digitalInputImg,
    model: "/models/DI_V1.glb",

    specifications: {
      input: [
        ["Channels", "16 Digital Inputs"],
        ["Input Type", "12–24V DC, Sink / Source"],
        ["Signal Type", "Dry Contact / Active Signal"],
        ["Sensor Support", "2-wire & 3-wire"],
      ],

      power: [
        ["Power Consumption", "143mA @ 5VDC"],
        ["Field Power", "19.2–28.8VDC (Nominal 24VDC)"],
      ],

      wiring: [
        ["Wiring Diameter (Min)", "0.2 mm² (AWG24)"],
        ["Wiring Diameter (Max)", "1.5 mm² (AWG16)"],
        ["Terminal Type", "Pluggable"],
      ],

      isolation: [
        ["Isolation Method", "Optocoupler Isolation"],
        ["Isolation Voltage", "2500Vrms"],
      ],

      communication: [
        ["Protocol", "Modbus RTU"],
        ["Slave Addressing", "Supported"],
        ["Backplane Bus", "Double Bus Redundancy"],
      ],

      mechanical: [
        ["Installation", "35mm DIN-Rail"],
        ["Dimensions", "119 × 14 × 80 mm"],
      ],

      certification: [
        ["Certification", "CE"],
      ],
    },

    features: [
      "16-channel digital input module",
      "Supports sink and source input modes",
      "Compatible with dry contact and active output signals",
      "Supports 2-wire and 3-wire sensors",
      "Optocoupler isolation between field and logic",
      "Modbus RTU communication with slave addressing",
      "Double backplane bus redundancy",
      "DIN-rail mountable industrial design",
    ],

    modelNumber: "DI_16_MB",
    download: "/downloads/16ch-digital-input.pdf",
  },

  {
    id: "digital-output",
    title: "16-CH Digital Output",
    subtitle: "Relay Output with Modbus",
    image: digitalOutputImg,
    model: "/models/DO.glb",

    specifications: {
      output: [
        ["Channels", "16 Relay Outputs"],
        ["Output Type", "Relay Output (Potential Free)"],
        ["Load Capacity", "2A Resistive / 2A Inductive"],
        ["Max Voltage", "250VAC / 30VDC"],
      ],

      indication: [
        ["Channel Indicator", "8-Channel LED"],
      ],

      communication: [
        ["Protocol", "Modbus RTU"],
        ["Addressing", "DIP Switch"],
      ],
    },

    features: [
      "8-channel relay digital output module",
      "Potential-free relay contacts",
      "Suitable for AC and DC loads",
      "LED indication for each relay",
      "Modbus RTU communication",
    ],

    modelNumber: "DO_08_MB",
    download: "/downloads/16ch-digital-output.pdf",
  },

  {
    id: "analog-input",
    title: "8-CH Analog Input",
    subtitle: "Voltage & Current Input",
    image: analogInputImg,
    model: "/models/DI_V1.glb",

    specifications: {
      input: [
        ["Channels", "8 Analog Inputs"],
        ["Input Type", "0–10V / 4–20mA"],
        ["Resolution", "16-bit"],
      ],

      communication: [
        ["Protocol", "Modbus RTU"],
      ],
    },

    features: [
      "8-channel analog input",
      "High accuracy signal acquisition",
      "Supports voltage and current inputs",
    ],

    modelNumber: "AI_08_MB",
    download: "/downloads/8ch-analog-input.pdf",
  },

  {
    id: "analog-output",
    title: "8-CH Analog Output",
    subtitle: "Voltage & Current Output",
    image: analogOutputImg,
    model: "/models/IOT.glb", 

    specifications: {
      output: [
        ["Channels", "8 Analog Outputs"],
        ["Output Type", "0–10V / 4–20mA"],
        ["Resolution", "16-bit"],
      ],

      communication: [
        ["Protocol", "Modbus RTU"],
      ],
    },

    features: [
      "8-channel analog output",
      "Stable and precise analog signals",
      "Supports voltage and current outputs",
    ],

    modelNumber: "AO_08_MB",
    download: "/downloads/8ch-analog-output.pdf",
  },
];

export default FieldInputData;
