import { ScaleWrap } from "./scaleStyle";

const Scale = () => {
  return (
    <ScaleWrap>
      <div className="scaleCard">
        <h3 className="scaleTitle">마우스를 올려주세요.</h3>
        <p className="scaleDesc">카드가 커져요</p>
      </div>
    </ScaleWrap>
  );
};

export default Scale;