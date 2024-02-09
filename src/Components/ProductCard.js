// ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  const { title, brand, image, regular_price } = product;

  return (
    <div className = "product-card">
      <img src={image} alt={title} />
      <h3 className="product-title">{title}</h3>
      <p className="brand-name">Brand: {brand}</p>
      <p>Price: {regular_price.currency} {regular_price.value}</p>
    </div>
  );  
}

export default ProductCard;