import styled from "styled-components";

export const UnderlineWrap = styled.div`
  .underlineButton {
    position: relative;
    padding: 15px;
    background: #333;
    border: none;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 3px;
      background: #007acc;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;