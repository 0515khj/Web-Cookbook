import type { ComponentType } from "react";
import { GridWrap } from "./style";
import { Link } from "react-router-dom";

interface CardData {
    id: string;
    title: string;
    sub?: string;
    path: string;
    Demo?: ComponentType;
}

interface Props {
    title: string;
    items: CardData[];
    hoverDemo?:boolean;
}

const CardGrid = ({ title, items, hoverDemo = false }: Props) => {

    return (
        <GridWrap className="cardGrid">
            <h2 className="gridTitle">{title}</h2>
            <div className="gridList">
                {items.map(({path, title: itemTitle, Demo}) => (
                   <Link key={path} to={path} className="gridItem">
                    {Demo && (
                        <div className={hoverDemo ? "gridItemDemo" : "gridItemDemo"} inert={!hoverDemo}>
                            <Demo/>
                        </div>
                    )}
                    <span className="gridItemName">{itemTitle}</span>
                   </Link>
                ))}
            </div>
        </GridWrap>
    );
};

export default CardGrid;