import { useEffect, useRef, type ComponentType, useState } from "react";
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

const page_item = 9;

const CardGrid = ({ items, hoverDemo = false }: Props) => {
    const [count, setCount] = useState(page_item);
    const wrapRef = useRef<HTMLElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const hasMore = count < items.length;

    useEffect(()=>{
        if(!hasMore || !sentinelRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) setCount((c)=> c + page_item);
            },
            {root:wrapRef.current, rootMargin: "200px"}
        );
        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    },[count, hasMore])

    return (
        <GridWrap ref={wrapRef} className="cardGrid">
            <div className="gridList">
                {items.slice(0, count).map(({path, title: itemTitle, Demo}) => (
                   <Link key={path} to={path} className="gridItem">
                    {Demo && (
                        <div className={hoverDemo ? "gridItemDemo" : "gridItemDemo locked"} inert={!hoverDemo}>
                            <Demo/>
                        </div>
                    )}
                    <span className="gridItemName">{itemTitle}</span>
                   </Link>
                ))}
            </div>
            {hasMore && <div ref={sentinelRef} className="gridSentinel"/> }
        </GridWrap>
    );
};

export default CardGrid;