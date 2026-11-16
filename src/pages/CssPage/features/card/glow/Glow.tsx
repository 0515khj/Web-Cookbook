import { GlowWrap } from "./glowStyle";

const Glow = () => {
  return (
    <GlowWrap className="glow">
      <div className="glowCard">
        <h3 className="glowTitle">마우스를 올려주세요.</h3>
        <p className="glowDesc">파란 빛이 나요</p>
      </div>
    </GlowWrap>
  );
};

export default Glow;