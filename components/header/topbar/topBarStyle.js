import styled from "styled-components";

export const StyledTopBar = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
    gap: 10px;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    font-size: 13px;

    span {
      font-weight: bold;
    }

    .text {
      display: flex;
      gap: 5px;
    }

    .langPicker {
      background-color: #f0f0f0;
      border-radius: 0 0 8px 8px;
      padding: 0px 20px;
      cursor: pointer;

      img {
        padding-top: 5px;
      }

      &::after {
        margin-left: 0.5em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }
    }
  }

  @media (max-width: 1000px) {
    margin-left: 15px;
  }

  @media (max-width: 875px) {
    justify-content: space-between;
  }
`;
