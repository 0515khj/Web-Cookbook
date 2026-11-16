import styled from "styled-components";

export const AccordionWrap = styled.div`
  .accordionBox {
    width: 320px;
  }

  .accordionItem {
    border: 1px solid #3c3c3c;
    border-bottom: none;
    background: #252526;

    &:last-child {
      border-bottom: 1px solid #3c3c3c;
    }
  }

  .accordionHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    color: #ffffff;
    text-align: left;
  }

  .accordionBody {
    padding: 0 16px 12px;
    color: #858585;
  }
`;