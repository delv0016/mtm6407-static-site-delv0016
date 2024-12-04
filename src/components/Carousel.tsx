import React from "react"
import { useState } from "react"
const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="relative w-full max-w-md mx-auto mt-4">
        <img
          src={images[currentIndex]}
          alt={`Carrusel image ${currentIndex + 1}`}
          className="w-full rounded-lg shadow-lg"
        />
        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };

  export default Carousel