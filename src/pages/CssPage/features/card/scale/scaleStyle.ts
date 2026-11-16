import styled from "styled-components";

export const ScaleWrap = styled.div`
.scaleCard {
  width: 220px;
  padding: 24px;
  background: var(--sidebar);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: transform 0.25s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  .scaleTitle {
    color: var(--text-white);
    font-weight: 400;
  }
  
  .scaleDesc {
    margin-top: 8px;
    color: var(--text-dim);
  }
}
`;