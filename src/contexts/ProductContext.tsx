'use client'

import React, { createContext, useState, useEffect } from "react";
import { data } from "../constant/data";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts]: any = useState([]);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      // const response = await fetch("https://fakestoreapi.com/products");
      // const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
