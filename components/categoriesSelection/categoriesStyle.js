import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;

  .chess {
    grid-column: 1/3;
  }

  .test {
    grid-row 2/3;
    grid-column: 2/4;
  }
  //background-color: ${({ theme }) => theme.backgroundGrey};
`;

export const StyledCategory = styled.div`
  //max-height: 300px;

  background-color: ${({ theme }) => theme.backgroundGrey};
  //min-width: 300px;
  padding: 0 30px;
  padding-top: 30px;

  //display: flex;

  //display: grid;
  //grid-template-columns: 1fr;
  //grid-template-rows: 0.1fr 0.3fr 0.6fr;
  //align-content: space-between;
`;

export const StyledCategoryHeader = styled.div`
  display: flex;
`;

export const StyledSubCategory = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    &:not(:last-child)::after {
      content: "|";
      padding: 0 5px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: clip;
`;
