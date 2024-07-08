// styledPost.js
import styled from "styled-components";

export const StyledPost = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
  margin: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;

    border-bottom: 1px solid #ddd;
    object-fit: cover;
  }

  .post-title {
    padding: 15px;
    font-size: 18px;
    color: #333;
  }

  p {
    padding: 0 15px 15px;
    font-size: 14px;
    color: #666;
  }
`;
