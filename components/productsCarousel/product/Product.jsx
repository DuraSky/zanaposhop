import React from "react";
import {
  StyledProduct,
  ProductImage,
  ProductName,
  ProductReview,
  ProductPrice,
  ProductAvailability,
} from "./productStyle";
import Stars from "./stars/Stars"; // Import the Stars component

export const Product = ({ product }) => {
  return (
    <StyledProduct>
      <ProductImage src={product.img} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductReview>
        Hodnoceni: <Stars review={product.review} />
      </ProductReview>
      <ProductPrice>{product.price} Kč</ProductPrice>
      <ProductAvailability>{product.dostupnost}</ProductAvailability>
    </StyledProduct>
  );
};
