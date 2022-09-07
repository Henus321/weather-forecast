import React from 'react';
import SearchBar from './search-bar/SearchBar';

import { FaReact } from 'react-icons/fa';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <FaReact className="header__logo" />
          <h2 className="header__title">Weather Forecast</h2>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
