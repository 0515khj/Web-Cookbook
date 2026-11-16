import styled from "styled-components";

export const ModalWrap = styled.div`
  .modalOpen {
    padding: 10px 20px;
    border-radius: 4px;
    background: #007acc;
    color: #ffffff;
  }

  .modalOverlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
  }

  .modalBox {
    width: 320px;
    padding: 24px;
    background: #252526;
    border: 1px solid #3c3c3c;
    border-radius: 8px;
    color: #ffffff;
  }

  .modalTitle {
    font-size: 18px;
    font-weight: 400;
  }

  .modalDesc {
    margin-top: 8px;
    color: #858585;
  }

  .modalClose {
    margin-top: 20px;
    padding: 8px 16px;
    border-radius: 4px;
    background: #37373d;
    color: #ffffff;
  }
`;