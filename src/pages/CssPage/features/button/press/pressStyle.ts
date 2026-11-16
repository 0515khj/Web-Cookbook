import styled from "styled-components";

export const PressWrap = styled.div`
  .pressButton {
    padding: 12px 28px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    box-shadow: 0 6px 0 #005a9e;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;

    &:active {
      transform: translateY(6px);
      box-shadow: 0 0 0 #005a9e;
    }
  }
`;