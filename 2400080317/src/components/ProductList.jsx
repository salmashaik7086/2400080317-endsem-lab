import React, { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductItem from "./ProductItem";
import "../index.css";

const ProductList = () => {
  const products = [
    { name: "Notebook", price: 5, category: "Stationery" },
    { name: "Pen", price: 2, category: "Stationery" },
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Headphones", price: 150, category: "Electronics" },
    { name: "Backpack", price: 40, category: "Bags" },
    { name: "Tote Bag", price: 25, category: "Bags" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="page-container">
      <header className="header">
        <h1 className="title">🛒 Product Listing Page</h1>
        <p className="subtitle">Filter products by category below 👇</p>
      </header>

      <div className="filter-section">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <main className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </main>

      <footer className="footer">
        <p>© 2025 Product Store | Built with ❤️ in React</p>
      </footer>
    </div>
  );
};

export default ProductList;

