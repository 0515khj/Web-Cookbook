import styled from "styled-components";

export const ClipboardWrap = styled.div`
  .clipboardBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 10px 12px 10px 16px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 6px;
  }

  .clipboardText {
    color: var(--text-white);
    font-family: var(--font-mono);
  }

  .clipboardButton {
    min-width: 64px;
    padding: 6px 12px;
    background: var(--active);
    border-radius: 4px;
    color: var(--text-white);
    transition: background 0.2s;

    &.copied {
      background: #2e7d32;
    }
  }
`;