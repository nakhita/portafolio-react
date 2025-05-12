import React, { useEffect, useState } from "react";
import "../../styles/projects.css";

interface TimelineItemProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  index: number;
  isVisible: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  tags,
  link,
  index,
  isVisible,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShow(true);
        });
      });
    }
  }, [isVisible]);

  return (
    <li
      className={`relative mb-6 ms-6 transform transition-all duration-700 ease-out
    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <span className="timeline-dot" />
      <div className="timeline-box">
        <h3 className="timeline-title">
          {title}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-2 text-[#a855f7] font-normal"
              title="View project"
            >
              {"[>]"}
            </a>
          )}
        </h3>
        <p className="timeline-description">{description}</p>
        <div className="timeline-tags">
          {tags.map((tag, i) => (
            <span key={i} className="timeline-tag">
              # {tag}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
