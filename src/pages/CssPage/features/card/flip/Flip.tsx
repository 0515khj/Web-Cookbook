import { FlipWrap } from "./flipStyle";

const Flip = () => {
  return (
    <FlipWrap className="flip">
      <div className="flipCard">
        <div className="flipInner">
          <div className="flipFront">앞면</div>
          <div className="flipBack">뒷면</div>
        </div>
      </div>
    </FlipWrap>
  );
};

export default Flip;