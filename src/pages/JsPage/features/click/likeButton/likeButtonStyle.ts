import styled from "styled-components";

export const LikeButtonWrap = styled.div`
  .likeButtonBox {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--sidebar);
    color: var(--text);
    transition: border-color 0.2s;

    &:hover {
      border-color: var(--accent);
    }

    &.liked {
      border-color: #e5484d;
      color: #e5484d;
    }
  }

  .likeButtonIcon {
    font-size: 18px;
  }

  .likeButtonCount {
    min-width: 20px;
  }
`;