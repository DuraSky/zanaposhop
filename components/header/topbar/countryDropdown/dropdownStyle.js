import styled from "styled-components";

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  top: 30px;
  position: absolute;
  padding: 10px;
  gap: 10px;

  background-color: ${({ theme }) => theme.backgroundGrey};

  .dropdown-item {
    display: flex;
    align-items: center;
    cursor: pointer;

    gap: 10px;
  }
`;
