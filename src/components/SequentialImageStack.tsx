import React from "react";
import { useSequentialImages } from "./animations/useSequentialImages";

interface SequentialImageStackProps {
  images: string[];
  delay?: number;
}

const SequentialImageStack: React.FC<SequentialImageStackProps> = ({
  images,
  delay = 500,
}) => {
  const visibleCount = useSequentialImages(images.length, delay);

  return (
    <div className="flex flex-col items-center gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className={`relative w-80 h-80 image-transition ${
            index < visibleCount ? "image-visible" : "image-hidden"
          }`}
          style={{ transitionDelay: `${index * delay}ms` }}
        >
          <img
            src={src}
            alt={`image-${index}`}
            className="w-full h-full object-cover rounded-[10px]"
          />
          {/* Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#d8b4fe] via-transparent to-transparent opacity-100 rounded-b-[10px] pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default SequentialImageStack;
