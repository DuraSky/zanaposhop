import React from "react";
import Image from "next/image";

import {
  StyledCategory,
  StyledCategoryHeader,
  StyledSubCategory,
  ImageWrapper,
} from "../categoriesStyle";

export const AnotherTestCategory = () => {
  return (
    <StyledCategory className="anothertest">
      <StyledCategoryHeader>
        <Image
          src="https://test.zanapo.cz/files/upload/vanoce-ikona.svg"
          width={65}
          height={65}
          alt="testing"
        />
        <h2>Houpaci site a kresla</h2>
      </StyledCategoryHeader>

      <StyledSubCategory>
        <p>Puzzle pro děti</p>
        <p>Puzzle pro dospělé</p>

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
