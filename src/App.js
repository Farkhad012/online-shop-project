import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import BrandsSideBar from './components/BrandsSideBar/BrandsSideBar';
import brandsData from './components/ProductList/brands.json';

import './App.css';
import './components/Header/Header.css';
import './components/Footer/Footer.css';
import './components/ProductList/ProductList.css';
import './components/ProductCard/ProductCard.css';
import './components/BrandsSideBar/BrandsSideBar.css';
import './components/Cart/Cart.css';

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
