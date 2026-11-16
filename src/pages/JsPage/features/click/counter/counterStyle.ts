import styled from "styled-components";

export const CounterWrap = styled.div`
  .counterBox {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .counterButton {
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background: var(--active);
    color: var(--text-white);
    font-size: 18px;

    &:hover {
      background: var(--accent);
    }
  }

  .counterValue {
    min-width: 40px;
    text-align: center;
    font-size: 24px;
    color: var(--text-white);
  }
`;