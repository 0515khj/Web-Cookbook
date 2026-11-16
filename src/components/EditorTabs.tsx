import { useLocation } from "react-router-dom";
import { cssGroups } from "../pages/CssPage/features";
import { jsGroups } from "../pages/JsPage/features";
import { EditorTabsWrap } from "./style";

const EditorTabs = () => {
  const { pathname } = useLocation();
  const [root, groupId, featureId] = pathname.split("/").filter(Boolean);

  let label = "Welcome";
  let icon = "⚛";

  if (root) {
    const groups = root === "css" ? cssGroups : jsGroups;
    const feature = groups.find((g)=> g.id === groupId)?.features.find((f)=>f.id === featureId);
    label = feature ? feature.fileName : groupId ?? root;
    icon = root === "css" ? "#" : "JS";
  }

  return (
    <EditorTabsWrap className="editorTabs">
       <div className="tabCurrent">
        <span className="tabIcon">{icon}</span>
        {label}
      </div>
    </EditorTabsWrap>
  );
};

export default EditorTabs;