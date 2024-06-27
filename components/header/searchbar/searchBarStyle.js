import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px 4px 16px 4px;
  background-color: #fff;
  flex-grow: 1;
  width: 50%;

  .searchIcon {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 10px;
  }

  input {
    width: 100%;
    height: 80%;
    border: none;
    font-weight: 400;
    font-size: 16px;
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

  @media (max-width: 1000px) {
    margin-left: 10px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 10px;
  }
`;
