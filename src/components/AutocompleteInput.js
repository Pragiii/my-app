// src/components/AutocompleteInput.jsx
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useSearch } from '../context/SearchContext';
import { useProducts } from '../context/ProductsContext';
import useDebounce from '../hooks/useDebounce';

const AutocompleteInput = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { products } = useProducts();

  const [inputValue, setInputValue] = useState(searchQuery);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const debouncedInput = useDebounce(inputValue, 300);

  useEffect(() => {
    setSearchQuery(debouncedInput);
  }, [debouncedInput, setSearchQuery]);

  const suggestions = useMemo(() => {
    if (!debouncedInput) return [];
    const lower = debouncedInput.toLowerCase();
    return products
      .filter((p) => p.name.toLowerCase().includes(lower))
      .slice(0, 5); // Limit suggestions
  }, [products, debouncedInput]);

  const handleSelect = useCallback((name) => {
    setInputValue(name);
    setSearchQuery(name);
    setIsFocused(false);
  }, [setSearchQuery]);

  return (
    <div className="autocomplete-container">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        placeholder="Search products..."
       
      />
      {isFocused && suggestions.length > 0 && (
        <ul className="suggestions" >
          {suggestions.map((s) => (
            <li
              key={s.id}
              onMouseDown={() => handleSelect(s.name)}
              
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(AutocompleteInput);
