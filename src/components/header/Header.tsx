import React from 'react';
import SearchBar from '../search-bar/SearchBar';

import { FaReact } from 'react-icons/fa';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <FaReact className="header__logo" />
          <h2 className="header__title">Погода</h2>
        </div>
        <h3 className="header__sub-title">Прогноз на 10 дней</h3>
        {/* Add class as prop late */}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
