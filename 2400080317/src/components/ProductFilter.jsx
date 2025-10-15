import React from "react";

const ProductFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-container">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="filter-dropdown"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;

