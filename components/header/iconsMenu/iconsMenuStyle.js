import styled from "styled-components";

export const StyledIconsMenu = styled.div`
  display: flex;
  flex-grow: 0.2;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 1rem;
    position: relative;
    color: #333;

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 1px;
      background-color: #d7d7d7;
    }
  }

  .cartAndPrice {
    display: flex;
  }
`;
