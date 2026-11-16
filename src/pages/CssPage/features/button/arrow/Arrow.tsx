import { ArrowWrap } from "./arrowStyle";

const Arrow = () => {
  return (
    <ArrowWrap className="arrow">
      <button className="arrowButton">
        더 보기
        <span className="arrowIcon">→</span>
      </button>
    </ArrowWrap>
  );
};

export default Arrow;