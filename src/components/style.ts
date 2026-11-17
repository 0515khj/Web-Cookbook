import styled from "styled-components";

/* TitleBar */
export const HeaderWrap = styled.header`
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--activitybar);
  color: var(--text-dim);
  font-size: 12px;
  border-bottom: 1px solid var(--border);

  .titleText {
    letter-spacing: 0.2px;
  }
`;

/* ActivityBar */
export const ActivityWrap = styled.nav`
  width: 48px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-top: 12px;
  background: var(--activitybar);
  font-size: 20px;

  .activityIcon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    color: #858585;
    cursor: pointer;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #ffffff;
  }

  &.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ffffff;
  }
  }
`;

/* Sidebar */
export const SidebarWrap = styled.aside`
  width: 240px;
  flex-shrink: 0;
  background: var(--sidebar);
  overflow-y: auto;

  .sidebarHeader {
    padding: 10px 20px;
    font-size: 11px;
    letter-spacing: 0.5px;
    color: var(--text-dim);
  }

  .sidebarProject {
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  .sidebarFolder {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px 3px 16px;
    cursor: pointer;

    &:hover {
      background: var(--hover);
    }
  }

  .sidebarGroup {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px 3px 32px;
    cursor: pointer;

    &:hover {
      background: var(--hover);
    }
  }

  .sidebarFileList {
  padding: 0;
  }

  .sidebarFile {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 8px 3px 52px;

    &:hover {
      background: var(--hover);
    }

    &.active {
      background: var(--active);
      color: var(--text-white);
    }
  }

  .sidebarFileIcon {
    color: #e8ab53;
    font-size: 10px;
    font-weight: 700;
  }
  
`;

/* EditorTabs */
export const EditorTabsWrap = styled.div`
  display: flex;
  height: 35px;
  flex-shrink: 0;
  background: var(--sidebar);

  .tabCurrent {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 16px;
    background: var(--bg);
    color: var(--text-white);
    border-top: 1px solid var(--accent);
  }

  .tabIcon {
    color: #e8ab53;
    font-size: 10px;
    font-weight: 700;
  }
`;

/* StatusBar */
export const StatusBarWrap = styled.footer`
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  background: var(--accent);
  color: var(--text-white);
  font-size: 13px;
  .statusWrap {
    display: flex;
    align-items: center;
    .statusRemote {
      display: inline-block;
      padding: 0 18px 0 6px;
      font-size: 15px;
    }
  }
`;

/* CardGrid */
export const GridWrap = styled.section`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 32px;

  .gridTitle {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 400;
    color: var(--text-white);
  }

  .gridList {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 16px;
  }

  .gridItem {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 16px;
    text-align: left;
    text-decoration: none;
    color: inherit;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: transform 0.2s, border-color 0.2s;

    &:hover {
      transform: translateY(-4px);
      border-color: #fff;
    }
  }

  .gridItemDemo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    margin-bottom: 8px;
    padding: 90px 0;
    overflow: hidden;
    border-radius: 6px;
    background: var(--bg);      
  }
  .gridItemDemo.locked {
    pointer-events: none;
  }

  .gridItemName {
    font-size: 15px;
    color: var(--text-white);
  }

  .gridItemSub {
    font-size: 12px;
    color: var(--text-dim);
  }
`;

/* Preview */
export const PreviewWrap = styled.section`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 32px;

  .previewTitle {
    font-size: 22px;
    font-weight: 400;
    color: var(--text-white);
  }

  .previewSection {
    margin-top: 28px;
  }

  .previewSectionTitle {
    margin-bottom: 8px;
    font-size: 11px;
    letter-spacing: 0.5px;
    color: var(--text-dim);
  }

  .previewDemo {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 240px;
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 4px;
  }

  .previewDesc {
    line-height: 1.7;
  }

  .previewTabList {
    display: flex;
    background: var(--sidebar);
  }

  .previewTab {
    padding: 8px 16px;
    color: var(--text-dim);
    background: var(--tab-inactive);
    border-top: 1px solid transparent;

    &.active {
      color: var(--text-white);
      background: var(--bg);
      border: 1px solid #fff;
    }
  }

  .previewCode {
    padding: 16px;
    overflow-x: auto;
    background: var(--bg);
    border: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.5;
    color: #d4d4d4;
  }
`;

export const Empty = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dim);
  font-size: 14px;
`;