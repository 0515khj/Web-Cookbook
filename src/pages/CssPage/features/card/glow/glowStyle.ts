import styled from "styled-components";

export const GlowWrap = styled.div`
  .glowCard {
    width: 220px;
    padding: 24px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: box-shadow 0.3s, border-color 0.3s;

    &:hover {
      border-color: var(--accent);
      box-shadow: 0 0 16px rgba(0, 122, 204, 0.7);
    }

    .glowTitle {
      color: var(--text-white);
      font-weight: 400;
    }

    .glowDesc {
      margin-top: 8px;
      color: var(--text-dim);
    }
  }
`;