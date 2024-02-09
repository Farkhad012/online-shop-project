// ProductList.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import productsData from '../Components/assets/products.json';

const ProductList = ({ selectedBrands }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    if (selectedBrands.length === 0) {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(product => selectedBrands.includes(product.brand));
      setFilteredProducts(filtered);
    }
  }, [selectedBrands]);

  return (
    <div className="product-list">
      <div className="product-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
