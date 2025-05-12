import React, { useEffect, useState } from "react";

interface CarouselStackProps {
  images: string[];
  interval?: number;
}

const CarouselStack: React.FC<CarouselStackProps> = ({
  images,
  interval = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="about-image"
      />
    </div>
  );
};

export default CarouselStack;
