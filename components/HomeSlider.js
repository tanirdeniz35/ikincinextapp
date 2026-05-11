import React, { useState } from "react";

const slides = [
  {
    image: "/slider/slider1.png",
    title: "Slider 1 Başlık",
    description: "Slider 1 açıklama metni",
  },
  {
    image: "/slider/slider2.jpg",
    title: "Slider 2 Başlık",
    description: "Slider 2 açıklama metni",
  },
  {
    image: "/slider/slider3.jpg",
    title: "Slider 3 Başlık",
    description: "Slider 3 açıklama metni",
  },
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <>
      <div className="home-slider">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="slider-image"
        />
        <div className="slider-content">
          <h2>{currentSlide.title}</h2>
          <p>{currentSlide.description}</p>
        </div>
        <button className="slider-button prev" onClick={previousSlide}>
          Önceki
        </button>
        <button className="slider-button next" onClick={nextSlide}>
          Sonraki
        </button>
      </div>
    </>
  );
};

export default HomeSlider;
