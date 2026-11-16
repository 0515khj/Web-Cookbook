import { GridWrap } from "./style";
import { useNavigate } from "react-router-dom";

interface CardData {
    id: string;
    title: string;
    sub?: string;
    path: string;
}

interface Props {
    title: string;
    items: CardData[];
}

const CardGrid = ({ title, items }: Props) => {
    const navigate = useNavigate();

    return (
        <GridWrap className="cardGrid">
            <h2 className="gridTitle">{title}</h2>
            <div className="gridList">
                {items.map((item) => (
                    <button
                        key={item.path}
                        className="gridItem"
                        onClick={() => navigate(item.path)}>
                        <span className="gridItemName">{item.title}</span>
                        {item.sub && <span className="gridItemSub">{item.sub}</span>}
                    </button>
                ))}
            </div>
        </GridWrap>
    );
};

export default CardGrid;