import styled from "styled-components";

export const TabsWrap = styled.div`
  .tabsBox {
    width: 320px;
  }

  .tabsList {
    display: flex;
    border-bottom: 1px solid #3c3c3c;
  }

  .tabsButton {
    padding: 8px 16px;
    color: #858585;
    border-bottom: 2px solid transparent;

    &.active {
      color: #ffffff;
      border-bottom-color: #007acc;
    }
  }

  .tabsPanel {
    padding: 16px 4px;
    color: #cccccc;
  }
`;