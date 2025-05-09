// src/components/ProductDetails.jsx
import React from 'react';
import { useSearch } from '../context/SearchContext';

const ProductDetails = React.memo(() => {
  const { selectedProduct } = useSearch();

  if (!selectedProduct) return null;

  return (
    <div>
      <h3>Product Details</h3>
      <h4>{selectedProduct.name}</h4>
      <p><strong>Category:</strong> {selectedProduct.category}</p>
      <p><strong>Description:</strong> {selectedProduct.description || 'No description available.'}</p>
    </div>
  );
});

export default ProductDetails;
