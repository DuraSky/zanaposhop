import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth || "1200px"};
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 20px; /* Increased gap for better spacing */
`;

export const StyledCategory = styled.div`
  box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
  padding: 20px;
  background-color: white;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  display: flex;
  flex-direction: column;

  &.chess,
  &.puzzle {
    //grid-column: span 2;
  }

  &.test {
    //grid-row: span 1;
    //grid-column: span 2;
  }
`;

export const StyledCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledSubCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  p {
    background-color: ${({ theme }) => theme.backgroundGrey};
    padding: 5px 10px;
    border-radius: ${({ theme }) => theme.myBorderRadius};
    margin: 0;
    font-size: 0.875rem;

    &:hover {
      color: ${({ theme }) => theme.fontOrange};
      cursor: pointer;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;
