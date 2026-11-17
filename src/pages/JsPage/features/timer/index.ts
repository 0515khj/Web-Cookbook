import type { FeatureGroup } from "../../../../types/feature";
import { stopwatch } from "./stopwatch/stopwatchData";
import { countdown } from "./countdown/countdownData";
import { debounce } from "./debounce/debounceData";

export const timerGroup: FeatureGroup = {
  id: "timer",
  name: "Timer",
  features: [stopwatch, countdown,debounce],
};