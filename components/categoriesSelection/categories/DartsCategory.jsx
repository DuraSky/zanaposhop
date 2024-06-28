import React from "react";
import Image from "next/image";

import {
  StyledCategory,
  StyledCategoryHeader,
  StyledSubCategory,
  ImageWrapper,
} from "../categoriesStyle";

export const DartsCategory = () => {
  return (
    <StyledCategory>
      <StyledCategoryHeader>
        <Image
          src="https://test.zanapo.cz/files/upload/sipky-ikona.svg"
          width={35}
          height={35}
        />
        <h2>Šipky</h2>
      </StyledCategoryHeader>

      <StyledSubCategory>
        <p>Terče</p>
        <p>Šipky soft</p>
        <p>Šipky steel</p>
        <p>Šipky podle hráčů</p>
        <p>Násadky</p>
        <p>Hroty</p>
        <p>Letky</p>
        <p>Doplňky</p>
      </StyledSubCategory>
      {/* 
      <ImageWrapper>
        <Image
          src="https://test.zanapo.cz/files/upload/sipky-new.png"
          height={300}
          width={300}
          alt="sachy"
        ></Image>
      </ImageWrapper> */}
    </StyledCategory>
  );
};
