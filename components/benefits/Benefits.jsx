import React from "react";
import Image from "next/image";

import { StyledAllBenefits, StyledBenefit } from "./styledBenefits";

export const Benefits = () => {
  return (
    <StyledAllBenefits>
      <StyledBenefit>
        <Image src={"../assets/sync.svg"} width={45} height={45} alt="cycle" />
        <p className="head">Jsme přímí dovozci od výrobce</p>
        <p className="tail">Z výrobny přimo k vám</p>
      </StyledBenefit>
      <StyledBenefit>
        <Image src={"../assets/star.svg"} width={45} height={45} alt="star" />
        <p className="head">Prémiová kvalita produktů</p>
        <p className="tail">dbáme na kvalitu produktů</p>
      </StyledBenefit>
      <StyledBenefit>
        <Image src={"../assets/heart.svg"} width={45} height={45} alt="heart" />
        <p className="head">100% spokojenost</p>
        <p className="tail">ověřeno zákazníky, heureka.cz </p>
      </StyledBenefit>
      <StyledBenefit>
        <Image src={"../assets/truck.svg"} width={45} height={45} alt="truck" />
        <p className="head">Rychlá expedice</p>
        <p className="tail">Patříme mezi nejrychlejší na trhu</p>
      </StyledBenefit>
    </StyledAllBenefits>
  );
};
