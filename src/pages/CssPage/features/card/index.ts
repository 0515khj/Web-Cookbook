import type { FeatureGroup } from "../../../../types/feature";
import { blurFocus } from "./blurFocus/blurFocusData";
import { borderData } from "./border/borderData";
import { borderDraw } from "./borderDraw/borderDrawData";
import { fillUp } from "./fillUp/fillUpData";
import { flip } from "./flip/flipData";
import { glow } from "./glow/glowData";
import { lift } from "./lift/lift";
import { overlay } from "./overlay/overlayData";
import { scale } from "./scale/scaleData";
import { shadow } from "./shadow/shadowData";
import { shine } from "./shine/shineData";
import { tilt } from "./tilt/tiltData";

export const cardGroup: FeatureGroup = {
    id:"card",
    name:"card",
    features: [lift, scale,borderData,shadow,glow,flip,fillUp,tilt,overlay,borderDraw,shine,blurFocus],
}