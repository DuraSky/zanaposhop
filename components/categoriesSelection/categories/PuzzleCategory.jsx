import React from "react";
import Image from "next/image";

import {
  StyledCategory,
  StyledCategoryHeader,
  StyledSubCategory,
  ImageWrapper,
} from "../categoriesStyle";

export const PuzzleCategory = () => {
  return (
    <StyledCategory>
      <StyledCategoryHeader>
        <Image
          src="https://test.zanapo.cz/files/upload/puzzle-ikona.svg"
          width={65}
          height={65}
          alt="ikona"
        />
        <h2>Puzzle</h2>
      </StyledCategoryHeader>

      <StyledSubCategory>
        <p>Puzzle pro děti</p>
        <p>Puzzle pro dospělé</p>
        <p>Puzzle dle počtu dílků</p>
        <p>Svíticí puzzle</p>
        <p>Panoramatické puzzle</p>
        <p>Černobílé puzzle</p>
        <p>Příslušenství</p>
      </StyledSubCategory>
      {/* <ImageWrapper>
        <Image
          src="https://test.zanapo.cz/files/upload/puzzle-new.png"
          height={300}
          width={300}
          alt="sachy"
        ></Image>
      </ImageWrapper> */}
    </StyledCategory>
  );
};
