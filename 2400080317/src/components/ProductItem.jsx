import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-category">{product.category}</p>
    </div>
  );
};

export default ProductItem;

