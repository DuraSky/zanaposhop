import React, { useContext } from "react";
import { Header } from "./header/Header";
import { Banner } from "./banner/Banner";
import { CategoriesSelection } from "./categoriesSelection/CategoriesSelection";
import { ProductCarousel } from "./productsCarousel/ProductCarousel";
import { Benefits } from "./benefits/Benefits";
import { DataContext } from "./DataContext";
import { BlogPosts } from "./blogPosts/BlogPosts";

export const Layout = () => {
  const { categories, favProducts, blogPosts } = useContext(DataContext);

  return (
    <>
      <Header />
      <Banner />
      <CategoriesSelection />
      {favProducts.map((category, index) => (
        <ProductCarousel
          key={index}
          title={category.title}
          products={category.products}
        />
      ))}
      <Benefits />
      <BlogPosts posts={blogPosts} />
    </>
  );
};
