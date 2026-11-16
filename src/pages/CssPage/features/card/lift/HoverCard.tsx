import { HoverCardWrap } from "./liftStyle";

const HoverCard = () => {
    return (
        <HoverCardWrap>
            <div className="liftCard">
                <h3 className="liftTitle">마우스를 올려주세요.</h3>
                <p className="liftDesc">카드가 떠올라요</p>
            </div>
        </HoverCardWrap>
    );
};

export default HoverCard;