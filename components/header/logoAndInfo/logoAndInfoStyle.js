import styled from "styled-components";

export const StyledLogoAndInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    padding: 0px 15px;
    //flex-grow: 0.1;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 10px;
    padding: 0px 15px;
    font-size: 13px;
    //flex-grow: 0.9;

    li {
      &:not(:last-child)::after {
        content: "|";
      }
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.backgroundBrown};
      }
    }
  }
`;
