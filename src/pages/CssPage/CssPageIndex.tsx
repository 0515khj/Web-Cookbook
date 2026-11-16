import { useParams } from "react-router-dom";
import Preview from "../../components/Preview";
import { cssGroups } from "./features";
import CardGrid from "../../components/CardGrid";

const CssPageIndex = () => {
    const { groupId, featureId } = useParams();
    const group = cssGroups.find((g) => g.id === groupId)
    const feature = group?.features.find((f) => f.id === featureId);
    
  // 1단계: /css
if (!group) {
  return (
    <CardGrid
      title="CSS"
      items={cssGroups.flatMap((g) =>
        g.features.map((f) => ({
          id: f.id,
          title: f.title,
          sub: g.name,
          path: `/css/${g.id}/${f.id}`,
        }))
      )}
    />
  );
}

// 2단계: /css/card
if (!feature) {
  return (
    <CardGrid
      title={`CSS / ${group.name}`}
      items={group.features.map((f) => ({
        id: f.id,
        title: f.title,
        path: `/css/${group.id}/${f.id}`,
      }))}
    />
  );
}

  // 3단계: /css/hover/lift → 상세
  return <Preview key={`${group.id}/${feature.id}`} feature={feature} />;
};

export default CssPageIndex;