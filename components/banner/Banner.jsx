import React, { useState } from "react";
import {
  CarouselWrapper,
  CarouselImage,
  CarouselControls,
} from "./bannerStyle";

export const Banner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    "https://test.zanapo.cz/files/thumbs/d20d4aefaa0c290f8774b104f6a93b40/5e33752d5d546bb92d49a41e3b0e3c951a96a76679d4e064282daf7c11b66798-1456x.webp",
    "https://test.zanapo.cz/files/thumbs/21999d663177aab1c5467673a0516f18/e14a11251d09b314e0c33b0fb536beba81ce6c63e28ae7157733992eac6afab5-1456x.webp",
  ];

  const handleDotClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <CarouselWrapper>
      <CarouselImage
        src={images[selectedIndex]}
        alt={`Banner ${selectedIndex + 1}`}
      />
      <CarouselControls>
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselControls>
    </CarouselWrapper>
  );
};
