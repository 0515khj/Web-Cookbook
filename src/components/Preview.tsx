import { useState } from "react";
import type { Feature } from "../types/feature";
import { PreviewWrap, Empty } from "./style";

type CodeKey = "html" | "css" | "js";
const CODE_KEYS: CodeKey[] = ["html", "css", "js"];

interface Props {
  feature?: Feature;
}

const Preview = ({ feature }: Props) => {
  const tabs = feature ? CODE_KEYS.filter((k) => feature.code[k]) : [];
  const [activeTab, setActiveTab] = useState<CodeKey>(tabs[0] ?? "html");

  if (!feature) return <Empty>왼쪽에서 파일을 선택하세요</Empty>;

  const Component = feature.component;

  return (
    <PreviewWrap className="preview">
      <h2 className="previewTitle">{feature.title}</h2>

      <section className="previewSection">
        <h4 className="previewSectionTitle">PREVIEW</h4>
        <div className="previewDemo">
          <Component />
        </div>
      </section>

      <section className="previewSection">
        <h4 className="previewSectionTitle">DESCRIPTION</h4>
        <p className="previewDesc">{feature.description}</p>
      </section>

      <section className="previewSection">
        <h4 className="previewSectionTitle">CODE</h4>
        <div className="previewTabList">
          {tabs.map((key) => (
            <button
              key={key}
              className={activeTab === key ? "previewTab active" : "previewTab"}
              onClick={() => setActiveTab(key)}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
        <pre className="previewCode">{feature.code[activeTab]}</pre>
      </section>
    </PreviewWrap>
  );
};

export default Preview;