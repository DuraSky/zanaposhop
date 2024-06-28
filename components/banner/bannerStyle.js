import styled from "styled-components";

export const CarouselWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  margin-top: 15px;
  position: relative;
  overflow: hidden; /* Ensure images don't overflow */
`;

export const CarouselImage = styled.img`
  width: 100%;
  display: block;
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .dot {
    width: 60px;
    height: 5px;
    margin: 0 5px;
    border-radius: 0;
    background-color: ${({ theme }) => theme.backgroundGrey};
    cursor: pointer;
  }

  .dot.selected {
    background-color: #000;
  }
`;
