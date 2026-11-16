import { Outlet } from "react-router-dom";
import ActivityBar from "../components/ActivityBar";
import EditorTabs from "../components/EditorTabs";
import TitleBar from "../components/TitleBar";
import StatusBar from "../components/StatusBar";
import { AppWrap } from "./style";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <AppWrap className="app">
            <TitleBar/>
            <div className="appBody">
                <ActivityBar/>
                <Sidebar/>
                <div className="appMain">
                    <EditorTabs/>
                    <Outlet/>
                </div>
            </div>
            <StatusBar/>
        </AppWrap>
    );
};

export default Layout;