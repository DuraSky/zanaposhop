import React from "react";
import { StyledMenu } from "./styledMenu";

export const Menu = () => {
  return (
    <StyledMenu>
      <div className="textAndIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
          ></path>
        </svg>
        <p>Kategorie produktů</p>
      </div>
      <div className="arrow"></div>
    </StyledMenu>
  );
};
