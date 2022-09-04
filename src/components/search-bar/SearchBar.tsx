import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';

import './searchBar.scss';

const SearchBar: React.FC = () => {
  const [city, setCity] = useState('');
  const { SearchGeocoding } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    SearchGeocoding(city);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={onSubmit}>
        <input
          placeholder="Введите город..."
          className="search-bar__input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-bar__button">Поиск</button>
      </form>
    </div>
  );
};

export default SearchBar;
