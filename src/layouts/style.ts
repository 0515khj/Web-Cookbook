import styled from "styled-components";

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .appBody {
    display: flex;
    flex: 1;
    min-height: 0;
  }

  .appMain {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
  }
`;