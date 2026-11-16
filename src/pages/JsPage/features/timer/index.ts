import type { FeatureGroup } from "../../../../types/feature";
import { stopwatch } from "./stopwatch/stopwatchData";
import { countdown } from "./countdown/countdownData";

export const timerGroup: FeatureGroup = {
  id: "timer",
  name: "timer",
  features: [stopwatch, countdown],
};