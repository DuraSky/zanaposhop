import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "./productsCarousel/ItemLoaders"; // Import the mock API function

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [favProducts, setFavProducts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setCategories(data.categories);
      setFavProducts(data.fav_products);
      setBlogPosts(data.blog_posts);
    });
  }, []);

  return (
    <DataContext.Provider value={{ categories, favProducts, blogPosts }}>
      {children}
    </DataContext.Provider>
  );
};
