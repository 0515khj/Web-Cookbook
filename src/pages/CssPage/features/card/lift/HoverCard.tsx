import { HoverCardWrap } from "./liftStyle";

const HoverCard = () => {
    return (
        <HoverCardWrap>
            <div className="liftCard">
                <h3 className="liftTitle">Hover</h3>
                <p className="liftDesc">마우스를 올리면<br />카드가 떠올라요</p>
            </div>
        </HoverCardWrap>
    );
};

export default HoverCard;