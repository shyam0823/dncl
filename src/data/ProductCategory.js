// src/data/productCategories.js

import img156 from "../assets/15.6.jpeg";
import img158 from "../assets/15.6-iot.jpeg";
import img171 from "../assets/17.1.jpeg";
import don from "../assets/don.jpeg";

import diInput from "../assets/Diinput.jpeg";
import doOutput from "../assets/Dooutput.jpeg";
import iotImage from "../assets/IOT_.jpeg";
import plcImage from "../assets/PLC-.jpeg";

const productCategories = [
  {
    id: "retail",
    title: "Retail Products",
    path: "/retail",

    products: [
  { 
    model: "DNCL-POS",
    subtitle: "BM-DM-151",
    image: img156 
  },
  { 
    model: "DNCL-POS",
    subtitle: "BM-DB-152",
    image: img171 
  },
  { 
    model: "DNCL-Billing Machine",
    subtitle: "BM-DN-152",
    image: img158 
  },
  { 
    model: "DNCL-Billing Machine",
    subtitle: "BM-DM-071",
    image: don 
  },
]

  },
  {
    id: "industrial",
    title: "Industrial Products",
    path: "/industrial",

   products: [
  { 
    model: "DI Input Module",
    subtitle: "IA-DO-M/E16",
    image: diInput 
  },
  { 
    model: "DO Output Module",
    subtitle: "IA-DI-M1/E6",
    image: doOutput 
  },
  { 
    model: "PLC MODULE",
    subtitle: "IA-DN-MD1",
    image: plcImage 
  },
  { 
    model: "Industrial Gateway",
    subtitle: "IA-DN-MQ1",
    image: iotImage 
  },
],

  },
];

export default productCategories;
