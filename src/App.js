import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import BrandsSideBar from './Components/BrandsSideBar';
import brandsData from './Components/assets/brands.json';

import './App.css';

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    setAllBrands(brandsData);
  }, []);

  const handleBrandClick = (brandId) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brandId)) {
        return prevSelectedBrands.filter((id) => id !== brandId);
      } else {
        return [...prevSelectedBrands, brandId];
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <BrandsSideBar brands={allBrands} selectedBrands={selectedBrands} onBrandClick={handleBrandClick} />
        <ProductList selectedProducts={selectedProducts} selectedBrands={selectedBrands} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
