import { useState } from "react";
import { TabsWrap } from "./tabsStyle";

const TABS = [
  { label: "소개", content: "첫 번째 탭(소개)의 내용이에요." },
  { label: "기능", content: "두 번째 탭(기능)의 내용이에요." },
  { label: "후기", content: "세 번째 탭(후기)의 내용이에요." },
];

const Tabs = () => {
  const [current, setCurrent] = useState(0);

  return (
    <TabsWrap className="tabs">
      <div className="tabsBox">
        <div className="tabsList">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              className={current === i ? "tabsButton active" : "tabsButton"}
              onClick={() => setCurrent(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="tabsPanel">{TABS[current].content}</p>
      </div>
    </TabsWrap>
  );
};

export default Tabs;