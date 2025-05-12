import React from "react";

interface TimelineYearProps {
  year: string;
  index: number;
  isVisible: boolean;
}

const TimelineYear: React.FC<TimelineYearProps> = ({
  year,
  index,
  isVisible,
}) => {
  return (
    <li
      className={`text-2xl font-bold text-[#d4d4d4] text-left mt-3 pt-3 pb-0 leading-none transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms`, marginLeft: "1rem" }}
    >
      {year}
    </li>
  );
};

export default TimelineYear;
