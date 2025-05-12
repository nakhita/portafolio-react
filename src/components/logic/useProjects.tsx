import { useAnimatedEntry } from "../animations/useAnimatedEntry";
import { animationMap } from "../constants/animationClasses";

export const useProjects = () => {
  const projectsClass = useAnimatedEntry(
    "/projects",
    animationMap["/projects"].base,
    animationMap["/projects"].animation
  );

  return { projectsClass };
};
