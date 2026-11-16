import type { FeatureGroup } from "../../../../types/feature";
import { todoList } from "./todoList/todoListData";
import { searchFilter } from "./searchFilter/searchFilterData";

export const listGroup: FeatureGroup = {
  id: "list",
  name: "list",
  features: [todoList, searchFilter],
};