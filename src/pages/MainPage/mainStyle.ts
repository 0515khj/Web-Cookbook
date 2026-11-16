import styled from "styled-components";

export const MainWrap = styled.section`
  flex: 1;
  overflow-y: auto;
  padding: 48px 56px;

  .mainTitle {
    font-size: 32px;
    font-weight: 300;
    color: var(--text-white);
  }

  .mainDesc {
    margin-top: 12px;
    line-height: 1.7;
    color: var(--text-dim);
  }

  .mainLinks {
    display: flex;
    gap: 12px;
    margin-top: 32px;
  }

  .mainLink {
    padding: 10px 20px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text);

    &:hover {
      border-color: #fff;
      color: var(--text-white);
    }
  }
`;