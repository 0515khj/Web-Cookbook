import styled from "styled-components";

export const ArrowWrap = styled.div`
  .arrowButton {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    background: #37373d;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;

    &:hover .arrowIcon {
      transform: translateX(6px);
    }
  }

  .arrowIcon {
    transition: transform 0.25s;
  }
`;