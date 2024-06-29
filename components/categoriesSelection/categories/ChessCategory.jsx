import React from "react";
import Image from "next/image";

import {
  StyledCategory,
  StyledCategoryHeader,
  StyledSubCategory,
  ImageWrapper,
} from "../categoriesStyle";

export const ChessCategory = () => {
  return (
    <StyledCategory className="chess">
      <StyledCategoryHeader>
        <Image
          src="https://test.zanapo.cz/files/upload/sachy-ikona.svg"
          width={65}
          height={65}
          alt="ikona"
        />
        <h2>Šachy</h2>
      </StyledCategoryHeader>
      <StyledSubCategory>
        <p>Dřevěné šachy</p>
        <p>Umělecké šachy</p>
        <p>Turnajové šachy</p>
        <p>Magnetické šachy</p>
        <p>Šachovnice</p>
        <p>Šachové figurky</p>
        <p>Šachové programy</p>
        <p>Levné šachy</p>
        <p>Dárkové šachy</p>
      </StyledSubCategory>

      {/* <ImageWrapper>
        <Image
          src="https://test.zanapo.cz/files/upload/sachy-new.png"
          height={300}
          width={300}
          alt="sachy"
        ></Image>
      </ImageWrapper> */}
    </StyledCategory>
  );
};
