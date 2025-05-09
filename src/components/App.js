// src/components/App.jsx
import React from 'react';
import { ProductsProvider } from '../context/ProductsContext';
import { SearchProvider } from '../context/SearchContext';
import AutocompleteInput from './AutocompleteInput';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <ProductsProvider>
      <SearchProvider>
        <div className="app-container">
          <AutocompleteInput />
          <ProductList />
          <ProductDetails />
        </div>
      </SearchProvider>
    </ProductsProvider>
  );
};

export default App;
