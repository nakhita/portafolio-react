import { useAnimatedEntry } from "../animations/useAnimatedEntry";
import { animationMap } from "../constants/animationClasses";

export const useHome = () => {
  const { base, animation } = animationMap["/"];
  const homeClass = useAnimatedEntry("/", base, animation);
  return { homeClass };
};
