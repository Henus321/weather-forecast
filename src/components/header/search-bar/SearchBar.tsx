import React, { useState } from 'react';
import { useActions } from '../../../hooks/useActions';

import './searchBar.scss';

const SearchBar: React.FC = () => {
  const [searchCity, setSearchCity] = useState('');
  const { FetchCityAsync } = useActions();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    FetchCityAsync(searchCity);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={onSubmit}>
        <input
          placeholder="City name..."
          className="search-bar__input"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button className="search-bar__button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
