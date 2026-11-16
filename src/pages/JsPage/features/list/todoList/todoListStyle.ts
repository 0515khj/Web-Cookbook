import styled from "styled-components";

export const TodoListWrap = styled.div`
  .todoListBox {
    width: 280px;
  }

  .todoListForm {
    display: flex;
    gap: 8px;
  }

  .todoListInput {
    flex: 1;
    padding: 8px 10px;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    background: #1e1e1e;
    color: #ffffff;
    outline: none;

    &:focus {
      border-color: #007acc;
    }
  }

  .todoListAdd {
    padding: 8px 14px;
    border-radius: 4px;
    background: #007acc;
    color: #ffffff;
  }

  .todoListItems {
    margin-top: 12px;
  }

  .todoListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    margin-top: 6px;
    background: #252526;
    border-radius: 4px;

    &.done .todoListText {
      color: #858585;
      text-decoration: line-through;
    }
  }

  .todoListText {
    flex: 1;
    cursor: pointer;
    color: #ffffff;
  }

  .todoListDelete {
    color: #858585;

    &:hover {
      color: #e5484d;
    }
  }
`;