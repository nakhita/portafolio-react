import React from "react";
import SequentialTimeline from "../components/SequentialTimeline";
import { useProjects } from "../components/logic/useProjects";
import "../styles/projects.css";

const Projects: React.FC = () => {
  const { projectsClass } = useProjects();

  return (
    <section className={`projects-section ${projectsClass}`}>
      <SequentialTimeline />
    </section>
  );
};

export default Projects;
