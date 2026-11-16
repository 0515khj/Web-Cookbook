import styled from "styled-components";

export const ShadowWrap = styled.div`
  .shadowCard {
    width: 220px;
    padding: 24px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: box-shadow 0.25s;

    &:hover {
      box-shadow: 0 8px 24px rgba(255, 255, 255, 0.25);
    }

    .shadowTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .shadowDesc {
      margin-top: 8px;
      color: var(--text-dim);
    }
  }
`;