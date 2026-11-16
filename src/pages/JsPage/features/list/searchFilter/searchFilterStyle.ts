import styled from "styled-components";

export const SearchFilterWrap = styled.div`
  .searchFilterBox {
    width: 240px;
  }

  .searchFilterInput {
    width: 100%;
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

  .searchFilterItems {
    margin-top: 10px;
  }

  .searchFilterItem {
    padding: 8px 10px;
    margin-top: 6px;
    background: #252526;
    border-radius: 4px;
    color: #ffffff;
  }

  .searchFilterEmpty {
    margin-top: 10px;
    color: #858585;
  }
`;