import { useState } from "react";
import { cssGroups } from "../pages/CssPage/features";
import { jsGroups } from "../pages/JsPage/features";
import { SidebarWrap } from "./style";
import { NavLink, useNavigate } from "react-router-dom";

const roots = [
  { name: "css", label: "CSS", icon: "#", groups: cssGroups },
  { name: "JS", label: "JS", icon: "JS", groups: jsGroups },
];

const Sidebar = () => {
  const [openKey, setOpenKey] = useState<string[]>([]);
  const navigate = useNavigate();

  const openRoot = (name: string) => {
    setOpenKey((prev) => (prev.includes(name) ? prev : [name]));
    navigate(`/${name}`);
  };

  const openGroup = (rootName: string, groupId: string) => {
    setOpenKey([rootName, `${rootName}/${groupId}`]);
    navigate(`/${rootName}/${groupId}`);
  };

  return (
    <SidebarWrap className="sidebar">
      <div className="sidebarHeader">EXPLORER</div>
      <div className="sidebarProject">▾ Web-Cookbook</div>

      {roots.map((root) => {
        const isOpen = openKey.includes(root.name);

        return (
          <div key={root.name}>
            <div className="sidebarFolder" onClick={() => openRoot(root.name)}>
              <span>{isOpen ? "▾" : "▸"}</span>
              {root.label}
            </div>

            {isOpen &&
              root.groups.map((group) => {
                const groupKey = `${root.name}/${group.id}`;
                const groupOpen = openKey.includes(groupKey);

                return (
                  <div key={groupKey}>
                    <div
                      className="sidebarGroup"
                      onClick={() => openGroup(root.name, group.id)}
                    >
                      <span>{groupOpen ? "▾" : "▸"}</span>
                      {group.name}
                    </div>

                    {groupOpen && (
                      <ul className="sidebarFileList">
                        {group.features.map((f) => (
                          <li key={f.id}>
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
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
          </div>
        );
      })}
    </SidebarWrap>
  );
};

export default Sidebar;