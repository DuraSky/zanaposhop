import React from "react";
import { StyledHeader, StyledWrapper } from "./headerStyle";
import { TopBar } from "./topbar/TopBar";
import { LogoAndInfo } from "./logoAndInfo/LogoAndInfo";
import { Menu } from "./menu/Menu";
import { SearchBar } from "./searchbar/SearchBar";
import { IconsMenu } from "./iconsMenu/IconsMenu";
import useWindowSize from "./useWindowSize";

export const Header = () => {
  const size = useWindowSize();

  return (
    <StyledWrapper>
      <StyledHeader>
        <TopBar />
        {size.width > 767 ? (
          <>
            <div className="topRow">
              <LogoAndInfo />
            </div>
            <div className="menuRow">
              <Menu />
              <SearchBar />
              <IconsMenu />
            </div>
          </>
        ) : (
          <>
            <div className="topNavRow">
              <ul className="topNav">
                <li>Doprava a Platba</li>
                <li>O nás</li>
                <li>Kontakty</li>
              </ul>
            </div>
            <div className="logoIconsRow">
              <LogoAndInfo />
              <IconsMenu />
            </div>
            <div className="searchBarRow">
              <SearchBar />
            </div>
          </>
        )}
      </StyledHeader>
    </StyledWrapper>
  );
};
