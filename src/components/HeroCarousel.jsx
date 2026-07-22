import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CAROUSEL_SLIDES } from "../data";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + CAROUSEL_SLIDES.length) %
        CAROUSEL_SLIDES.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) =>
        (prev + 1) %
        CAROUSEL_SLIDES.length
    );
  };

  return (
    <section className="relative mt-0 w-full h-full sm:h-[550px] md:h-[520px] overflow-hidden">

      {/* Images */}
      <div className="relative w-full h-full">
        {CAROUSEL_SLIDES.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
      </div>



      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {CAROUSEL_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? "w-3 h-3 bg-purple-500"
                : "w-3 h-3 bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}