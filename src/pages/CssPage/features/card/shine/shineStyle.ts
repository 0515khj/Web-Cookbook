import styled from "styled-components";

export const ShineWrap = styled.div`
  .shineCard {
    position: relative;
    width: 220px;
    padding: 24px;
    overflow: hidden;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.25),
        transparent
      );
      transition: left 0.6s;
    }

    &:hover::after {
      left: 140%;
    }

    .shineTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .shineDesc {
      margin-top: 8px;
      color: var(--text-dim);
    }
  }
`;