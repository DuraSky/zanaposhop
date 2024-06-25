import styled from "styled-components";

export const StyledHeader = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  //background-color: ${({ theme }) => theme.backgroundGrey};
  margin: 0 auto;
  z-index: 1;
  position: relative;
  .menuRow {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const StyledWrapper = styled.div`
  padding-bottom: 15px;
  box-shadow: ${({ theme }) => theme.myLightBoxShadow};
`;
