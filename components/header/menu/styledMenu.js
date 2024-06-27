import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  //gap: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundGrey};
  max-height: 50px;
  //width: 250px;
  flex-grow: 1;
  //min-width: 340px;
  padding: 20px;
  margin: 0px 15px;
  max-width: 300px;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.myBorderRadius};

  flex-grow: 0.2;

  .textAndIcon {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .arrow {
    border-bottom: 2px solid;
    border-right: 2px solid;
    width: 10px;
    height: 10px;
    transform: rotate(45deg) translateY(-50%);
  }

  @media (max-width: 1200px) {
    background-color: transparent;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
