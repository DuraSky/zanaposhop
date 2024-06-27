import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { StyledTopBar } from "./topBarStyle";
import CountryDropDown from "./countryDropdown/CountryDropDown";

export const TopBar = () => {
  const [country, setCountry] = useState({
    name: "Česká republika",
    flag: "https://www.zanapo.cz/resources/shared/flags/4x3/cs.svg",
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <StyledTopBar ref={dropdownRef}>
      <div className="text">
        <p>Potřebujete poradit ?</p>
        <p>
          <span>Volejte </span>+420 703 694 133
          <span> (po - pá 8:00 - 16:00)</span>
        </p>
      </div>
      <div className="langPicker" onClick={toggleDropdown}>
        <Image
          src={country.flag}
          width={32}
          height={24}
          alt={`${country.name} flag`}
        />
      </div>
      {showDropdown && (
        <CountryDropDown
          country={country}
          setCountry={setCountry}
          setShowDropdown={setShowDropdown}
        />
      )}
    </StyledTopBar>
  );
};

export default TopBar;
