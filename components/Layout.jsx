import React from "react";
import { Header } from "./header/Header";
import { Banner } from "./banner/Banner";
import { CategoriesSelection } from "./categoriesSelection/CategoriesSelection";

export const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <CategoriesSelection />
    </>
  );
};
