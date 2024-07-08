// styledAllBlogPosts.js
import styled from "styled-components";

export const StyledBlogSection = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 40px 20px;

  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const StyledAllBlogPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
