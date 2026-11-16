import { ShadowWrap } from "./shadowStyle";

const Shadow = () => {
  return (
    <ShadowWrap className="shadow">
      <div className="shadowCard">
        <h3 className="shadowTitle">Hover me</h3>
        <p className="shadowDesc">마우스를 올리면 그림자가 생겨요</p>
      </div>
    </ShadowWrap>
  );
};

export default Shadow;