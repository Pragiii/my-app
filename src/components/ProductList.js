
import React, { useCallback } from 'react';
import { useSearch } from '../context/SearchContext';
import { useProducts } from '../context/ProductsContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const {
    filteredProducts,
    selectProduct
  } = useSearch();

  return (
    <div>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={selectProduct} />
        ))
      )}
    </div>
  );
};

export default ProductList;
