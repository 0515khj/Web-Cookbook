import { ShineWrap } from "./shineStyle";

const Shine = () => {
  return (
    <ShineWrap className="shine">
      <div className="shineCard">
        <h3 className="shineTitle">마우스를 올려주세요.</h3>
        <p className="shineDesc">빛이 지나가며 반짝여요</p>
      </div>
    </ShineWrap>
  );
};

export default Shine;