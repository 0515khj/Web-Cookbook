import styled from "styled-components";

export const DebounceWrap = styled.div`
  .dtBox {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 300px;
  }

  .dtInput {
    padding: 10px 12px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 4px;
    color: var(--text-white);
    outline: none;
  }

  .dtList {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .dtItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 4px;
  }

  .dtLabel {
    color: var(--text);

    small {
      margin-left: 6px;
      color: var(--text-dim);
      font-size: 11px;
    }
  }

  .dtCount {
    color: var(--text-white);
    font-size: 16px;
  }

  .dtReset {
    align-self: flex-end;
    padding: 6px 12px;
    background: var(--active);
    border-radius: 4px;
    color: var(--text-white);
  }
`;