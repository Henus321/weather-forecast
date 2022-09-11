import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import './countryInfo.scss';

const CountryInfo: React.FC = () => {
  const { name, country } = useTypedSelector(
    (state) => state.forecast.forecast.location
  );

  return (
    <div className="country-info">
      <span>
        {country} &#62; {name}
      </span>
    </div>
  );
};

export default CountryInfo;
