import { ShadowWrap } from "./shadowStyle";

const Shadow = () => {
  return (
    <ShadowWrap className="shadow">
      <div className="shadowCard">
        <h3 className="shadowTitle">마우스를 올려주세요.</h3>
        <p className="shadowDesc">그림자가 생겨요</p>
      </div>
    </ShadowWrap>
  );
};

export default Shadow;