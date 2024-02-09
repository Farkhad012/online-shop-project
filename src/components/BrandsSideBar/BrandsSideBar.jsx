// BrandsSideBar.js
import React from "react";

const BrandsSideBar = ({ brands, selectedBrands, onBrandClick }) => {
  return (
    <div className="brands-sidebar">
      <h2>Brands</h2>
      <ul>
        {brands.map(brand => (
          <li key={brand.id} onClick={() => onBrandClick(brand.id)}>
            {brand.title} {selectedBrands.includes(brand.id) ? "(selected)" : ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BrandsSideBar;
