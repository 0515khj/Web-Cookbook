import styled from "styled-components";

export const BorderDrawWrap = styled.div`
  .borderDrawCard {
    position: relative;
    width: 220px;
    padding: 24px;
    background: var(--sidebar);

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 2px solid transparent;
      box-sizing: border-box;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      right: 0;
      bottom: 0;
    }

    &:hover::before {
      width: 100%;
      height: 100%;
      border-top-color: #fff;
      border-right-color: #fff;
      transition: width 0.25s, height 0.25s 0.25s;
    }

    &:hover::after {
      width: 100%;
      height: 100%;
      border-bottom-color: #fff;
      border-left-color: #fff;
      transition: width 0.25s, height 0.25s 0.25s;
    }

    .borderDrawTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .borderDrawDesc {
      margin-top: 8px;
      color: var(--text-dim);
    }
  }
`;