import React from "react";
import Image from "next/image";
import { StyledDropdown } from "./dropdownStyle";

const countries = [
  {
    name: "Česká republika",
    flag: "https://www.zanapo.cz/resources/shared/flags/4x3/cs.svg",
  },
  {
    name: "Slovensko",
    flag: "https://www.zanapo.cz/resources/shared/flags/4x3/sk.svg",
  },
];

export const CountryDropDown = ({ setCountry, setShowDropdown }) => {
  const handleCountrySelect = (country) => {
    setCountry(country);
    setShowDropdown(false);
  };

  return (
    <StyledDropdown>
      {countries.map((c) => (
        <div
          key={c.name}
          onClick={() => handleCountrySelect({ name: c.name, flag: c.flag })}
          className="dropdown-item"
        >
          <Image src={c.flag} width={32} height={24} alt={`${c.name} flag`} />
          <p>{c.name}</p>
        </div>
      ))}
    </StyledDropdown>
  );
};

export default CountryDropDown;
