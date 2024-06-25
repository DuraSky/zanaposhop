import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px 4px 16px 4px;
  background-color: #fff;
  //width: 100%;
  flex-grow: 0.6;
  //padding: 6px 0 6px 60px;
  input {
    //padding: 6px 0 6px 60px;
    //padding: 60px 0;
    //width: 80%;
    width: 100%;
    border: none;
  }

  button {
    height: calc(100% - 8px);
    padding: 4px 16px;
    background: ${({ theme }) => theme.fontOrange};

    border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-top-left-radius: ${({ theme }) => theme.myBorderRadius};
    border-bottom-right-radius: 16px;
    opacity: 1;
    color: #f7f7f7;
    border: none;
    margin-left: -1px;
    margin-right: 2px;
  }
`;
