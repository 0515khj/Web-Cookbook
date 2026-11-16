import styled from "styled-components";

export const HoverCardWrap = styled.div`
.liftCard {
  width: 220px;
  padding: 24px;
  background: var(--sidebar);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    border-color: var(--accent);
  }
  
  .liftTitle {
    color: var(--text-white);
    font-weight: 400;
    font-size: 150;
  }
  
  .liftDesc {
    margin-top: 8px;
    color: var(--text-dim);
  }
}
`;