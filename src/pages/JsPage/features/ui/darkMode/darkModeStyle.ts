import styled from "styled-components";

export const DarkModeWrap = styled.div`
  .darkBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 300px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: background 0.3s;

    &.dark {
      background: #121212;
    }
  }

  .darkTitle {
    color: #222222;
    font-size: 15px;
    font-weight: 600;
    transition: color 0.3s;
  }

  .darkText {
    margin-top: 4px;
    color: #666666;
    font-size: 12px;
    transition: color 0.3s;
  }

  .darkButton {
    padding: 8px 14px;
    border-radius: 4px;
    background: #222222;
    color: #ffffff;
    white-space: nowrap;
    transition: background 0.3s, color 0.3s;
  }

  .darkBox.dark {
    .darkTitle { color: #eeeeee; }
    .darkText { color: #999999; }
    .darkButton { background: #eeeeee; color: #121212; }
  }
`;