import styled from "styled-components";

export const StyledIconsMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 10px;
  flex-grow: 1;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 2rem;
    position: relative;
    color: #333;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 1px;
      background-color: #d7d7d7;
    }

    &:nth-child(3)::after {
      background-color: transparent;
    }

    &:hover {
      background-color: ${({ theme }) => theme.backgroundGrey};
    }
  }

  .mobileMenu {
    display: none;
  }

  .cartAndPrice {
    display: flex;
    padding: 0 70px;
  }

  @media (max-width: 1300px) {
    .icon {
      padding: 0 1rem;
    }

    .cartAndPrice {
      padding: 0 30px;
    }
  }

  @media (max-width: 1000px) {
    .mobileMenu {
      display: flex;
      font-size: 28px;
      font-weight: 800;
    }
  }

  @media (max-width: 767px) {
    &.iconsMenuDesktop {
      display: none;
    }

    &.iconsMenuMobile {
      flex-grow: 1;
      justify-content: space-between;
      .icon {
        padding: 0 1rem;
      }
    }
  }

  @media (max-width: 556px) {
    .icon {
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 330px) {
    .icon {
      padding: 0 0.3rem;
    }
  }
`;
