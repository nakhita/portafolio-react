import React from "react";
import { timelineItems } from "../components/data/timelineItems";
import { useSequentialTimeline } from "./animations/useSequentialTimeline";
import TimelineItem from "./logic/TimelineItem";
import { ProjectItem } from "../components/types/TimelineItemTypes";
import TimelineYear from "./logic/TimelineYear";

import "../styles/projects.css";

const SequentialTimeline: React.FC = () => {
  const visibleCount = useSequentialTimeline(timelineItems.length, 250);

  return (
    <ol className="timeline-list">
      {timelineItems.map((item, index) => {
        const isVisible = index < visibleCount;

        if (item.type === "year") {
          return (
            <TimelineYear
              key={index}
              year={item.year}
              index={index}
              isVisible={isVisible}
            />
          );
        }

        if (item.type === "item") {
          const project = item as ProjectItem;
          return (
            <TimelineItem
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              index={index}
              isVisible={isVisible}
            />
          );
        }

        return null;
      })}
    </ol>
  );
};

export default SequentialTimeline;
