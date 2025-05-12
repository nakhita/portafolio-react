import React, { useEffect, useState } from "react";

interface VerticalCarouselProps {
  images: string[];
  interval?: number;
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
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
    <div className="vertical-carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="vertical-carousel-image"
      />
    </div>
  );
};

export default VerticalCarousel;
