import { StatusBarWrap } from './style';
import { useLocation } from 'react-router-dom';
import { VscRemote, VscSourceControl } from "react-icons/vsc";

const StatusBar = () => {
    const { pathname } = useLocation();
    const language = pathname.startsWith("/js") ? "TypeScript React" : "CSS";
    return (
        <StatusBarWrap className="statusBar">
            <div className='statusWrap'>
                <span className='statusRemote'><VscRemote /></span>
                <span className="statusBranch"><VscSourceControl /> main</span>
            </div>
            <span className="statusLanguage">{language} · UTF-8</span>
        </StatusBarWrap>
    );
};

export default StatusBar;