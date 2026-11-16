import { BorderWrap } from "./borderStyle";

const Border = () => {
  return (
    <BorderWrap>
      <div className="borderCard">
        <h3 className="borderTitle">마우스를 올려주세요.</h3>
        <p className="borderDesc">테두리 색이 바뀌어요</p>
      </div>
    </BorderWrap>
  );
};

export default Border;