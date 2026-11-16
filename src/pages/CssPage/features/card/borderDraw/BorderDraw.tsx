import { BorderDrawWrap } from "./borderDrawStyle";

const BorderDraw = () => {
  return (
    <BorderDrawWrap className="borderDraw">
      <div className="borderDrawCard">
        <h3 className="borderDrawTitle">마우스를 올려주세요.</h3>
        <p className="borderDrawDesc">테두리가 선으로 그려져요</p>
      </div>
    </BorderDrawWrap>
  );
};

export default BorderDraw;