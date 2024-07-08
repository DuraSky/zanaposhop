// Post.js
import React from "react";
import Image from "next/image";
import { StyledPost } from "./styledPost";

export const Post = ({ post }) => {
  return (
    <StyledPost>
      <Image src={post.img} alt={post.title} width={500} height={300} />
      <h3 className="post-title">{post.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        eligendi.
      </p>
    </StyledPost>
  );
};
