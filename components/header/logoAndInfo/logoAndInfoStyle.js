import styled from "styled-components";

export const StyledLogoAndInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .logoWrapper {
    display: flex;
    flex-grow: 1;
    padding: 0 10px;

    img {
      max-width: 100%;
      height: auto;
      min-width: 80px;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 10px;
    padding: 0px 15px;
    font-size: 13px;
    flex-grow: 1;
    //justify-content: flex-end;
    width: 100%;

    li {
      &:not(:last-child)::after {
        content: "|";
        padding: 0 5px;
      }
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.backgroundBrown};
      }
    }
  }

  @media (max-width: 767px) {
    ul {
      display: none;
    }
  }

  @media (max-width: 430px) {
    ul {
      display: none;
    }
  }
`;
