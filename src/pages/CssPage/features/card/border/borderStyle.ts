import styled from "styled-components";

export const BorderWrap = styled.div`
.borderCard {
  width: 220px;
  padding: 24px;
  background: var(--sidebar);
  border: 2px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.25s;
  
  &:hover {
    border-color: #fff;
  }
  
  .borderTitle {
    color: var(--text-white);
    font-weight: 400;
  }
  
  .borderDesc {
    margin-top: 8px;
    color: var(--text-dim);
  }
}
`;