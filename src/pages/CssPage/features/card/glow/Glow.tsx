import { GlowWrap } from "./glowStyle";

const Glow = () => {
  return (
    <GlowWrap className="glow">
      <div className="glowCard">
        <h3 className="glowTitle">Hover me</h3>
        <p className="glowDesc">마우스를 올리면 파란 빛이 나요</p>
      </div>
    </GlowWrap>
  );
};

export default Glow;