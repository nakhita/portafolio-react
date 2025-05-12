import { useAnimatedEntry } from "../animations/useAnimatedEntry";
import { animationMap } from "../constants/animationClasses";

export const useCertifications = () => {
  const { base, animation } = animationMap["/certifications"];
  const certificationsClass = useAnimatedEntry(
    "/certifications",
    base,
    animation
  );
  return { certificationsClass };
};
