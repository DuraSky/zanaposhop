import React from "react";

import { ChessCategory } from "./categories/ChessCategory";
import { DartsCategory } from "./categories/DartsCategory";
import { PuzzleCategory } from "./categories/PuzzleCategory";
import { ChristmasCategory } from "./categories/ChristmasCategory";
import { TestCategory } from "./categories/testCategory";
import { TestCategory2 } from "./categories/testCategory2";

import { CategoriesWrapper } from "./categoriesStyle";

export const CategoriesSelection = () => {
  return (
    <CategoriesWrapper>
      <ChessCategory />
      <DartsCategory />
      <PuzzleCategory />
      <ChristmasCategory />
      <TestCategory />
      <TestCategory2 />
    </CategoriesWrapper>
  );
};
