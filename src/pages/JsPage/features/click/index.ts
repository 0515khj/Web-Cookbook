import type { FeatureGroup } from "../../../../types/feature";
import { counter } from "./counter/counterData";
import { toggle } from "./toggle/toggleData";
import { likeButton } from "./likeButton/likeButtonData";

export const clickGroup: FeatureGroup = {
  id: "click",
  name: "Click",
  features: [counter, toggle, likeButton],
};