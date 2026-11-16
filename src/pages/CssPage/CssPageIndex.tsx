import { useParams } from "react-router-dom";
import Preview from "../../components/Preview";
import { cssGroups } from "./features";
import CardGrid from "../../components/CardGrid";

const CssPageIndex = () => {
    const { groupId, featureId } = useParams();
    const group = cssGroups.find((g) => g.id === groupId)
    const feature = group?.features.find((f) => f.id === featureId);
    
     // 1단계: /css → 그룹 카드들
  if (!group) {
    return (
      <CardGrid
        title="css"
        basePath="/css"
        items={cssGroups.map((g) => ({
          id: g.id,
          title: g.name,
          sub: `${g.features.length}가지 기능`,
        }))}
      />
    );
  }

  // 2단계: /css/hover → 기능 카드들
  if (!feature) {
    return (
      <CardGrid
        title={`css / ${group.name}`}
        basePath={`/css/${group.id}`}
        items={group.features.map((f) => ({
          id: f.id,
          title: f.title,
        }))}
      />
    );
  }

  // 3단계: /css/hover/lift → 상세
  return <Preview key={`${group.id}/${feature.id}`} feature={feature} />;
};

export default CssPageIndex;