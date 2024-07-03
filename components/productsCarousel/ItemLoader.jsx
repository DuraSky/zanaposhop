import React, { useEffect, useState } from "react";

const ItemLoader = (setProducts) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("mockDBs/favproducts.json");
        const data = await response.json();
        setProducts(data.fav_products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
};

export default ItemLoader;
