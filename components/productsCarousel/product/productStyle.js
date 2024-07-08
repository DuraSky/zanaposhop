import styled from "styled-components";

export const StyledProduct = styled.div`
  border-radius: ${({ theme }) => theme.myBorderRadius};
  box-shadow: ${({ theme }) => theme.myBorderBoxShadow};
  padding: 16px;
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  //max-width: 220px;
  &:hover {
    transform: translateY(-9px);

    h3 {
      color: ${({ theme }) => theme.fontOrange};
    }

    cursor: pointer;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px; // Fixed height for the image container
  border-radius: 8px 8px 0 0;
  object-fit: contain; // Ensures the image covers the container
`;

export const ProductName = styled.h3`
  margin: 16px 0 8px 0;
  font-size: 1.2em;
  flex-grow: 1;
`;

export const ProductReview = styled.div`
  margin: 8px 0;
  font-size: 0.9em;
  color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductPrice = styled.p`
  margin: 8px 0;
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
`;

export const ProductAvailability = styled.p`
  margin: 8px 0;
  font-size: 0.9em;
  color: green;
`;
