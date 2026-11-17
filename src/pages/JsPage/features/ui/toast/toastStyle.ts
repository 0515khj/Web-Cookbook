import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(95px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ToastWrap = styled.div`
  .toastButtons {
    display: flex;
    gap: 8px;
  }

  .toastButton {
    padding: 8px 16px;
    background: var(--active);
    border-radius: 4px;
    color: var(--text-white);
  }

  .toastStack {
    position: fixed;
    left: 55%;
    bottom: 100px;
    z-index: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: translateX(-55%);   
  }

  .toastItem {
    padding: 10px 16px;
    background: var(--sidebar);
    border: 1px solid var(--border);
    border-left: 3px solid #2e7d32;
    border-radius: 4px;
    color: var(--text-white);
    font-size: 13px;
    white-space: nowrap;
    animation: ${slideUp} 0.3s ease;

    &.error {
      border-left-color: #d32f2f;
    }
  }
`;