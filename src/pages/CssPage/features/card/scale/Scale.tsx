import { ScaleWrap } from "./scaleStyle";

const Scale = () => {
  return (
    <ScaleWrap>
      <div className="scaleCard">
        <h3 className="scaleTitle">Hover me</h3>
        <p className="scaleDesc">마우스를 올리면 카드가 커져요</p>
      </div>
    </ScaleWrap>
  );
};

export default Scale;