import React from "react";
import Image from "next/image";

import { StyledLogoAndInfo } from "./logoAndInfoStyle";

export const LogoAndInfo = () => {
  return (
    <StyledLogoAndInfo>
      <div className="logoWrapper">
        <Image
          src="https://www.zanapo.cz/files/upload/logo-zanapo-cz-index.svg"
          width={250}
          height={41}
          alt="logo"
        />
      </div>
      <ul>
        <li>Doprava a Platba </li>
        <li>O nás </li>
        <li>Kontakty</li>
      </ul>
    </StyledLogoAndInfo>
  );
};
