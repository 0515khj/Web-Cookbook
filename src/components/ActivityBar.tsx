import {ActivityWrap } from "./style";
import { VscDebugAlt, VscExtensions, VscFiles, VscSearch, VscSourceControl } from "react-icons/vsc";

const ActivityBar = () => {

    const icons = [
        {id:"files", Icon:VscFiles},
        {id:"search", Icon:VscSearch},
        {id:"git", Icon:VscSourceControl},
        {id:"debug", Icon:VscDebugAlt },
        {id:"extensions", Icon: VscExtensions },
    ];

    return (
        <ActivityWrap className="activityBar">
            {icons.map(({id,Icon}, i)=>(
                <span key={id} className={i === 0 ? "activityIcon active" : "activityIcon"}>
                    <Icon/>
                </span> 
            ))}
        </ActivityWrap>
    );
};

export default ActivityBar;