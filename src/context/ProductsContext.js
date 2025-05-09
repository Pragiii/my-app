// src/context/ProductsContext.jsx
import React, { createContext, useContext, useMemo } from 'react';
import productsData from '../data/products';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
//     const allCategories = productsData.map(p => p.category);
//     return [ ...new Set(allCategories)];
//   }, []);

  return (
    <ProductsContext.Provider value={{ products: productsData}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
