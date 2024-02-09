import React from 'react';
import logoImage from '../Components/assets/images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logoImage} alt="logo" />
      </div>
      <div className='cart'>
        {/* Предположим, что тут будет значок корзины */}
        <span role="img" aria-label="Shopping Cart">🛒</span>
      </div>
    </header>
  )
}


export default Header