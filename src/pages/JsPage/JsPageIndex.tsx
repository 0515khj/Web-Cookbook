import { useParams } from "react-router-dom";
import CardGrid from "../../components/CardGrid";
import Preview from "../../components/Preview";
import { jsGroups } from "./features";

const JsPageIndex = () => {
  const { groupId, featureId } = useParams();
  const group = jsGroups.find((g) => g.id === groupId);
  const feature = group?.features.find((f) => f.id === featureId);

  // 1단계: /js → 그룹 카드들
  if (!group) {
    return (
      <CardGrid
        title="js"
        basePath="/js"
        items={jsGroups.map((g) => ({
          id: g.id,
          title: g.name,
          sub: `${g.features.length}개의 기능`,
        }))}
      />
    );
  }

  // 2단계: /js/click → 기능 카드들
  if (!feature) {
    return (
      <CardGrid
        title={`js / ${group.name}`}
        basePath={`/js/${group.id}`}
        items={group.features.map((f) => ({
          id: f.id,
          title: f.title,
        }))}
      />
    );
  }

  // 3단계: /js/click/counter → 상세
  return <Preview key={`${group.id}/${feature.id}`} feature={feature} />;
};

export default JsPageIndex;