// src/context/SearchContext.jsx
import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { useProducts } from './ProductsContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  //const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return  matchesSearch;
    });
  }, [products, searchQuery]);

  const selectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedProduct,
        selectProduct,
        filteredProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
