import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import './search-bar.component.scss';

const SearchBar: React.FC = () => {
  const [city, setCity] = useState('');
  const { SearchGeocoding } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.geocoding);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    SearchGeocoding(city);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          className="search-bar__input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-bar__button">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((city) => <div key={city}>{city}</div>)}
    </div>
  );
};

export default SearchBar;
