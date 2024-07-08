// BlogPosts.js
import React from "react";
import { Post } from "./post/Post";

import { StyledBlogSection, StyledAllBlogPosts } from "./styledAllBlogPosts";

export const BlogPosts = ({ posts }) => {
  return (
    <StyledBlogSection>
      <h2>Novinky</h2>
      <StyledAllBlogPosts>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </StyledAllBlogPosts>
    </StyledBlogSection>
  );
};
