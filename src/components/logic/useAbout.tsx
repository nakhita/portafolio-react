import { useAnimatedEntry } from "../animations/useAnimatedEntry";
import { animationMap } from "../constants/animationClasses";

export const useAbout = () => {
  const { base, animation } = animationMap["/about"];
  const aboutClass = useAnimatedEntry("/about", base, animation);
  console.log("[About] Final class applied:", aboutClass);

  return { aboutClass };
};
