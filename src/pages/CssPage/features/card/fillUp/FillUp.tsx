import { FillUpWrap } from "./fillUpStyle";

const FillUp = () => {
  return (
    <FillUpWrap className="fillUp">
      <div className="fillUpCard">
        <h3 className="fillUpTitle">마우스를 올려주세요.</h3>
        <p className="fillUpDesc">배경이 아래에서 차올라요</p>
      </div>
    </FillUpWrap>
  );
};

export default FillUp;