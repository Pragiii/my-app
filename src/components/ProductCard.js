// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = React.memo(({ product, onSelect }) => {
  return (
    <div
      className="product-card"
      onClick={() => onSelect(product)}
    >
      <h4>{product.name}</h4>
      <p>{product.category}</p>
    </div>
  );
});

export default ProductCard;
