import styled from "styled-components";

export const CarouselWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth || "100%"};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const CarouselHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  //box-shadow: ${({ theme }) => theme.myLightBoxShadow};
`;

export const CarouselContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-grow: 1;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  //width: 80%;
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 20%; // Adjust this to show 5 items
  max-width: 20%; // Adjust this to show 5 items
  box-sizing: border-box;
  padding: 10px;
  height: 400px; // Set a fixed height
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  padding: 10px;
  border: none;
  color: white;
  background-color: #ddd;
  &:hover {
    background-color: ${({ theme }) => theme.fontOrange};
    transform: scale(1.1);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
