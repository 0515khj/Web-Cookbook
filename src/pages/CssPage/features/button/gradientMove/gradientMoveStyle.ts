import styled from "styled-components";

export const GradientMoveWrap = styled.div`
  .gradientMoveButton {
    padding: 12px 28px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(90deg, #007acc, #8a2be2, #007acc);
    background-size: 200% 100%;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: background-position 0.5s;

    &:hover {
      background-position: 100% 0;
    }
  }
`;