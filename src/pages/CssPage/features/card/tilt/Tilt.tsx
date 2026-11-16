import { TiltWrap } from "./tiltStyle";

const Tilt = () => {
  return (
    <TiltWrap className="tilt">
      <div className="tiltScene">
        <div className="tiltCard">
          <h3 className="tiltTitle">Hover me</h3>
          <p className="tiltDesc">카드가 3D로 기울어져요</p>
        </div>
      </div>
    </TiltWrap>
  );
};

export default Tilt;