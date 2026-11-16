import styled from "styled-components";

export const FlipWrap = styled.div`
  .flipCard {
    width: 220px;
    height: 140px;
    perspective: 800px;

    &:hover .flipInner {
      transform: rotateY(180deg);
    }
  }

  .flipInner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flipFront,
  .flipBack {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 8px;
    backface-visibility: hidden;
  }

  .flipFront {
    background: var(--sidebar);
    color: var(--text-white);
  }

  .flipBack {
    background: var(--accent);
    color: var(--text-white);
    transform: rotateY(180deg);
  }
`;