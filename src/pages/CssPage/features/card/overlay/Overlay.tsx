import { OverlayWrap } from "./overlayStyle";

const Overlay = () => {
  return (
    <OverlayWrap className="overlay">
      <div className="overlayCard">
        <h3 className="overlayTitle">Hover me</h3>
        <div className="overlayCover">숨겨둔 설명이 덮어씌워져요</div>
      </div>
    </OverlayWrap>
  );
};

export default Overlay;