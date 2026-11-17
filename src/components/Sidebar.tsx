import { useState } from "react";
import { cssGroups } from "../pages/CssPage/features";
import { jsGroups } from "../pages/JsPage/features";
import { SidebarWrap } from "./style";
import { NavLink, useNavigate } from "react-router-dom";

const roots = [
  { name: "css", label: "CSS", icon: "#", groups: cssGroups },
  { name: "js", label: "JS", icon: "JS", groups: jsGroups },
];

const Sidebar = () => {
  const [openKey, setOpenKey] = useState<string[]>([]);
  const navigate = useNavigate();

  const openRoot = (name: string) => {
    setOpenKey((prev) => (prev.includes(name) ? prev : [name]));
    navigate(`/${name}`);
  };

  const goHome = () => {
  setOpenKey([]);
  navigate("/");
};

  return (
    <SidebarWrap className="sidebar">
      <div className="sidebarHeader">EXPLORER</div>
      <div className="sidebarProject" onClick={goHome}>▾ Web-Cookbook - (Home)</div>

      {roots.map((root) => {
        const isOpen = openKey.includes(root.name);

        return (
          <div key={root.name}>
            <div className="sidebarFolder" onClick={() => openRoot(root.name)}>
              <span>{isOpen ? "▾" : "▸"}</span>
              {root.label}
            </div>
            {isOpen && (
              <ul className="sidebarFileList">
                {root.groups.flatMap((group) =>
                  group.features.map((f) => (
                    <li key={`${group.id}/${f.id}`}>
                      <NavLink
                        to={`/${root.name}/${group.id}/${f.id}`}
                        className={({ isActive }) =>
                          isActive ? "sidebarFile active" : "sidebarFile"
                        }
                      >
                        <span className="sidebarFileIcon">{root.icon}</span>
                        {f.fileName}
                      </NavLink>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        );
      })}
    </SidebarWrap>
  );
};

export default Sidebar;