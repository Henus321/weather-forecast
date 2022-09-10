import React from 'react';
import uuid from 'react-uuid';
import { CAPITALS } from '../../../config';
import { useActions } from '../../../hooks/useActions';

import './errorMenu.scss';

interface Errors {
  errors: {
    searchError: string | null;
    fetchError: string | null;
  };
}

const ErrorMenu: React.FC<Errors> = ({ errors }) => {
  const { FetchCityAsync } = useActions();
  const { searchError, fetchError } = errors;

  const onClickHandler = (capital: string) => {
    FetchCityAsync(capital);
  };

  return (
    <div className="error">
      {searchError && <h2 className="error__message">{searchError}</h2>}
      {fetchError && <h2 className="error__message">{fetchError}</h2>}
      <ul className="error__capitals-list">
        {CAPITALS.map((capital) => (
          <li
            onClick={() => onClickHandler(capital)}
            className="error__capitals-item"
            key={uuid()}
          >
            - {capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMenu;
