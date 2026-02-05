import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import heroBg from "../assets/whiteban.png";
import windowImg from "../assets/window.jpeg";
import embeddedImg from "../assets/embedded.jpg";

export default function Hero() {
  const images = [heroBg, windowImg, embeddedImg];
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
    <section
      className="dncl-hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
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
