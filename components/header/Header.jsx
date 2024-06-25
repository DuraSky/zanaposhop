// components/header/Header.js
import React from "react";
import { StyledHeader } from "./headerStyle";
import { StyledWrapper } from "./headerStyle";

import { TopBar } from "./topbar/TopBar";
import { LogoAndInfo } from "./logoAndInfo/LogoAndInfo";
import { Menu } from "./menu/Menu";
import { SearchBar } from "./searchbar/SearchBar";
import { IconsMenu } from "./iconsMenu/IconsMenu";

export const Header = () => (
  <StyledWrapper>
    <StyledHeader>
      <TopBar />
      <LogoAndInfo />
      <div className="menuRow">
        <Menu />
        <SearchBar />
        <IconsMenu />
      </div>
    </StyledHeader>
  </StyledWrapper>
);
