import React from "react";

import { ChessCategory } from "./categories/ChessCategory";
import { DartsCategory } from "./categories/DartsCategory";
import { PuzzleCategory } from "./categories/PuzzleCategory";
import { ChristmasCategory } from "./categories/ChristmasCategory";
import { TestCategory } from "./categories/TestCategory";
import { AnotherTestCategory } from "./categories/AnotherTestCategory";

import { CategoriesWrapper } from "./categoriesStyle";

export const CategoriesSelection = () => {
  return (
    <CategoriesWrapper>
      <ChessCategory />
      <DartsCategory />
      <PuzzleCategory />
      <ChristmasCategory />
      <TestCategory />
      <AnotherTestCategory />
      <ChessCategory />

      <AnotherTestCategory />
    </CategoriesWrapper>
  );
};
