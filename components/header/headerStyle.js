import styled from "styled-components";

export const StyledHeader = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  z-index: 1;
  position: relative;
  width: 100%;

  .menuRow {
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .topRow {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .logoIconsRow {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }

  .searchBarRow {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      width: 100%;
    }
  }

  .topNavRow {
    display: none;

    @media (min-width: 430px) {
      display: flex;
      width: 100%;

      .topNav {
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
    }
  }
`;

export const StyledWrapper = styled.div`
  padding-bottom: 15px;
  box-shadow: ${({ theme }) => theme.myLightBoxShadow};
  width: 100%;

  @media (max-width: 1200px) {
    box-shadow: none;
  }
`;
