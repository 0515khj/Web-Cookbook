import styled from "styled-components";

export const BlurFocusWrap = styled.div`
  .blurFocusList {
    display: flex;
    gap: 12px;

    &:hover .blurFocusCard:not(:hover) {
      filter: blur(3px);
      opacity: 0.5;
    }
  }

  .blurFocusCard {
    width: 100px;
    padding: 20px 12px;
    text-align: center;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-white);
    transition: filter 0.3s, opacity 0.3s;
  }
`;