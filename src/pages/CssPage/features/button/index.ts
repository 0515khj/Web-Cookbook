import type { FeatureGroup } from "../../../../types/feature";
import { underline } from "./underline/underlineData";
import { outlineFill } from "./outlineFill/outlineFillData";
import { press } from "./press/pressData";
import { arrow } from "./arrow/arrowData";
import { gradientMove } from "./gradientMove/gradientMoveData";

export const buttonGroup: FeatureGroup = {
  id: "button",
  name: "Button",
  features: [underline, outlineFill, press, arrow, gradientMove],
};