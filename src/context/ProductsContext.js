
import React, { createContext, useContext, useMemo } from 'react';
import productsData from '../data/products';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {


  return (
    <ProductsContext.Provider value={{ products: productsData}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
