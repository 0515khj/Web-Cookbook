import styled from "styled-components";

export const CountdownWrap = styled.div`
  .countdownBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .countdownTime {
    font-family: Consolas, "Courier New", monospace;
    font-size: 56px;
    color: #ffffff;

    &.end {
      color: #e5484d;
    }
  }

  .countdownButton {
    padding: 8px 16px;
    border-radius: 4px;
    background: #007acc;
    color: #ffffff;
  }
`;