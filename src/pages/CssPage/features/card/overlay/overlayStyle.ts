import styled from "styled-components";

export const OverlayWrap = styled.div`
  .overlayCard {
    position: relative;
    width: 220px;
    height: 140px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;

    &:hover .overlayCover {
      opacity: 1;
    }

    .overlayTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .overlayCover {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      text-align: center;
      background: rgba(0, 122, 204, 0.9);
      color: var(--text-white);
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
`;