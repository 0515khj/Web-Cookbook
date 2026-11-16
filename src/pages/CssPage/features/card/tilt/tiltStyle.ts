import styled from "styled-components";

export const TiltWrap = styled.div`
  .tiltScene {
    perspective: 600px;
  }

  .tiltCard {
    width: 220px;
    padding: 24px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: rotateX(12deg) rotateY(-12deg);
    }

    .tiltTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .tiltDesc {
      margin-top: 8px;
      color: var(--text-dim);
    }
  }
`;