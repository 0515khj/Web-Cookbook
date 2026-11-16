import { StatusBarWrap } from './style';
import { useLocation } from 'react-router-dom';

const StatusBar = () => {
    const { pathname } = useLocation();
    const language = pathname.startsWith("/js") ? "TypeScript React" : "CSS";
    return (
        <StatusBarWrap className="statusBar">
            <span className="statusBranch">⎇ main</span>
            <span className="statusLanguage">{language} · UTF-8</span>
        </StatusBarWrap>
    );
};

export default StatusBar;