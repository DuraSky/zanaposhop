import React from "react";
import { Header } from "./header/Header";
import { Banner } from "./banner/Banner";
import { CategoriesSelection } from "./categoriesSelection/CategoriesSelection";
import { ProductCarousel } from "./productsCarousel/ProductCarousel";

export const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <CategoriesSelection />
      <ProductCarousel />
    </>
  );
};
