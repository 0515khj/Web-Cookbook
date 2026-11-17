import { useParams } from "react-router-dom";
import CardGrid from "../../components/CardGrid";
import Preview from "../../components/Preview";
import { jsGroups } from "./features";

const JsPageIndex = () => {
  const { groupId, featureId } = useParams();
  const group = jsGroups.find((g) => g.id === groupId);
  const feature = group?.features.find((f) => f.id === featureId);

  // 1단계: /js → 모든 기능 카드
  if (!group) {
    return (
      <CardGrid
        title="JS"
        items={jsGroups.flatMap((g) =>
          g.features.map((f) => ({
            id: f.id,
            title: f.title,
            sub: g.name, // 어느 그룹 기능인지 작게 표시
            path: `/js/${g.id}/${f.id}`,
            Demo: f.component,
          }))
        )}
      />
    );
  }

  // 2단계: /js/click → 해당 그룹 기능 카드
  if (!feature) {
    return (
      <CardGrid
        title={`JS / ${group.name}`}
        items={group.features.map((f) => ({
          id: f.id,
          title: f.title,
          path: `/js/${group.id}/${f.id}`,
          Demo: f.component,
        }))}
      />
    );
  }

  // 3단계: /js/click/counter → 상세
  return <Preview key={`${group.id}/${feature.id}`} feature={feature} />;
};

export default JsPageIndex;