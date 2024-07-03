import React, { useState } from "react";
import { Product } from "./product/Product";
import itemLoader from "./ItemLoader";
import {
  CarouselWrapper,
  CarouselContainerWrapper,
  CarouselContainer,
  CarouselItem,
  CarouselButton,
  CarouselHeader,
} from "./productCarouselStyle";

export const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  itemLoader(setProducts);

  const next = () => {
    if (currentIndex < products.length - 5) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <CarouselWrapper>
      <CarouselHeader>Ten nejlepší výběr ze světa šachů</CarouselHeader>
      <CarouselContainerWrapper>
        <CarouselButton onClick={prev} disabled={currentIndex === 0}>
          {"<"}
        </CarouselButton>
        <CarouselContainer>
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {products.map((product) => (
              <CarouselItem key={product.bp_id}>
                <Product product={product} />
              </CarouselItem>
            ))}
          </div>
        </CarouselContainer>
        <CarouselButton
          onClick={next}
          disabled={currentIndex >= products.length - 5}
        >
          {">"}
        </CarouselButton>
      </CarouselContainerWrapper>
    </CarouselWrapper>
  );
};
