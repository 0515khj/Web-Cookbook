import { GridWrap } from "./style";
import { useNavigate } from "react-router-dom";

interface CardData {
    id: string;
    title: string;
    sub?: string;
}

interface Props {
    title: string;
    items: CardData[];
    basePath: string;
}

const CardGrid = ({ title, items, basePath }: Props) => {
    const navigate = useNavigate();

    return (
        <GridWrap className="cardGrid">
            <h2 className="gridTitle">{title}</h2>
            <div className="gridList">
                {items.map((item) => (
                    <button
                        key={item.id}
                        className="gridItem"
                        onClick={() => navigate(`${basePath}/${item.id}`)}>
                        <span className="gridItemName">{item.title}</span>
                        {item.sub && <span className="gridItemSub">{item.sub}</span>}
                    </button>
                ))}
            </div>
        </GridWrap>
    );
};

export default CardGrid;