import type { FeatureGroup } from "../../../../types/feature";
import { modal } from "./modal/modalData";
import { tabs } from "./tabs/tabsData";
import { accordion } from "./accordion/accordionData";

export const uiGroup: FeatureGroup = {
  id: "ui",
  name: "Ui",
  features: [modal, tabs, accordion],
};