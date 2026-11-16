import styled from "styled-components";

export const ToggleWrap = styled.div`
  .toggleBox {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .toggleButton {
    padding: 10px 20px;
    border-radius: 4px;
    background: var(--active);
    color: var(--text-white);

    &.on {
      background: var(--accent);
    }
  }

  .toggleText {
    color: var(--text);
  }
`;