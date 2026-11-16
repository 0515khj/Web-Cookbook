import styled from "styled-components";

export const StopwatchWrap = styled.div`
  .stopwatchBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .stopwatchTime {
    font-family: Consolas, "Courier New", monospace;
    font-size: 40px;
    color: #ffffff;
  }

  .stopwatchButtons {
    display: flex;
    gap: 8px;
  }

  .stopwatchButton {
    padding: 8px 16px;
    border-radius: 4px;
    background: #37373d;
    color: #ffffff;

    &.start {
      background: #007acc;
    }
  }
`;