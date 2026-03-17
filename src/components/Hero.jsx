import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import heroBg from "../assets/RetailNew.jpg";
import embeddedImg from "../assets/IndustrialNew.jpg";

export default function Hero() {
  const images = [heroBg, embeddedImg];
  const [currentImage, setCurrentImage] = useState(0);
  const timerRef = useRef(null);

  const SLIDE_TIME = 5000;

  const startTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, SLIDE_TIME);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current);
  }, [currentImage]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
  <section className="dncl-hero">

  {/* BACKGROUND IMAGES (DESKTOP) */}
  <div className="dncl-hero-bg">
    {images.map((img, index) => (
      <img
      key={index}
      src={img}
      className={`hero-bg-image ${index === currentImage ? "active" : ""} slide-${index}`}
      alt=""
      loading="lazy"
    />
    ))}
  </div>

  {/* MOBILE IMAGE */}
  <div className="dncl-hero-mobile-image">
    <img
      src={images[currentImage]}
      alt="DNCL Technologies Industrial Automation and Retail POS Products"
      loading="lazy"
    />
  </div>

  {/* OVERLAY */}
  <div className="dncl-hero-overlay" />

  {/* ARROWS */}
  <button className="hero-arrow left" onClick={prevSlide}>
    ❮
  </button>
  <button className="hero-arrow right" onClick={nextSlide}>
    ❯
  </button>

  {/* DOTS */}
  <div className="hero-dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentImage ? "active" : ""}`}
        onClick={() => setCurrentImage(index)}
      />
    ))}
  </div>

</section>
  );
}
