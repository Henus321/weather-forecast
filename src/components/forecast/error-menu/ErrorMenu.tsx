import React from 'react';

import './errorMenu.scss';

interface Errors {
  errors: {
    searchError: string | null;
    fetchError: string | null;
  };
}

const ErrorMenu: React.FC<Errors> = ({ errors }) => {
  const { searchError, fetchError } = errors;

  return (
    <div className="error">
      {searchError && <h2>{searchError}</h2>}
      {fetchError && <h2>{fetchError}</h2>}
    </div>
  );
};

export default ErrorMenu;
