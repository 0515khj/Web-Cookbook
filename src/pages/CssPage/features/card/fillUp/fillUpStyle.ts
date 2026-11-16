import styled from "styled-components";

export const FillUpWrap = styled.div`
  .fillUpCard {
    position: relative;
    width: 220px;
    padding: 24px;
    overflow: hidden;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      background: var(--accent);
      transition: height 0.35s;
    }

    &:hover::before {
      height: 100%;
    }

    .fillUpTitle,
    .fillUpDesc {
      position: relative;
      z-index: 1;
    }

    .fillUpTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .fillUpDesc {
      margin-top: 8px;
      color: var(--text-white);
    }
  }
`;