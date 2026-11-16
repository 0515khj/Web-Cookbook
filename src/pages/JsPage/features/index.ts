import type { FeatureGroup } from "../../../types/feature";
import { clickGroup } from "./click";
import { listGroup } from "./list";
import { timerGroup } from "./timer";
import { uiGroup } from "./ui";

export const jsGroups: FeatureGroup[] = [clickGroup,listGroup,uiGroup,timerGroup];