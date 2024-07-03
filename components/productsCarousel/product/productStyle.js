import styled from "styled-components";

export const StyledProduct = styled.div`
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-shadow: ${({ theme }) => theme.myBorderBoxShadow};
  border-radius: ${({ theme }) => theme.myBorderRadius};
  padding: 16px;
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  margin: 16px 0 8px 0;
  font-size: 1.2em;
  flex-grow: 1;
`;

export const ProductReview = styled.p`
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
