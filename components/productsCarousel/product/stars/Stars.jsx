import React from "react";
import styled from "styled-components";
import StarIcon from "./StarIcon"; // Import the StarIcon component

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  margin-right: 5px;
`;

const Stars = ({ review }) => {
  const maxStars = 5;
  const filledStars = Array(review).fill(true);
  const emptyStars = Array(maxStars - review).fill(false);

  return (
    <StarWrapper>
      {filledStars.map((_, index) => (
        <Star key={index}>
          <StarIcon filled={true} />
        </Star>
      ))}
      {emptyStars.map((_, index) => (
        <Star key={index + review}>
          <StarIcon filled={false} />
        </Star>
      ))}
    </StarWrapper>
  );
};

export default Stars;
