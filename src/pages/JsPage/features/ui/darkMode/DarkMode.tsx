import { useState } from "react";
import { DarkModeWrap } from "./darkModeStyle";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkModeWrap className="darkMode">
      <div className={isDark ? "darkBox dark" : "darkBox"}>
        <div className="darkInfo">
          <h3 className="darkTitle">{isDark ? "다크 모드" : "라이트 모드"}</h3>
          <p className="darkText">버튼을 눌러 보세요</p>
        </div>
        <button className="darkButton" onClick={() => setIsDark(!isDark)}>
          {isDark ? "☀️ 라이트" : "🌙 다크"}
        </button>
      </div>
    </DarkModeWrap>
  );
};

export default DarkMode;