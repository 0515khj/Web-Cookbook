import { BlurFocusWrap } from "./blurFocusStyle";

const BlurFocus = () => {
  return (
    <BlurFocusWrap className="blurFocus">
      <div className="blurFocusList">
        <div className="blurFocusCard">카드 1</div>
        <div className="blurFocusCard">카드 2</div>
        <div className="blurFocusCard">카드 3</div>
      </div>
    </BlurFocusWrap>
  );
};

export default BlurFocus;