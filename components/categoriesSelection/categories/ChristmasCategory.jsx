import React from "react";
import Image from "next/image";

import {
  StyledCategory,
  StyledCategoryHeader,
  StyledSubCategory,
  ImageWrapper,
} from "../categoriesStyle";

export const ChristmasCategory = () => {
  return (
    <StyledCategory>
      <StyledCategoryHeader>
        <Image
          src="https://test.zanapo.cz/files/upload/vanoce-ikona.svg"
          width={65}
          height={65}
          alt="ikona"
        />
        <h2>Vánoce</h2>
      </StyledCategoryHeader>

      <StyledSubCategory>
        <p>Umělé Vánoční stromky</p>
        <p>Vánoční figurky</p>
        <p>Vánoční věnce</p>
        <p>Vánoční baňky</p>
      </StyledSubCategory>

      {/* <ImageWrapper>
        <Image
          src="https://test.zanapo.cz/files/upload/vanoce-new.png"
          height={300}
          width={300}
          alt="sachy"
        ></Image>
      </ImageWrapper> */}
    </StyledCategory>
  );
};
