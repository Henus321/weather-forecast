import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import './locationInfo.scss';

const LocationInfo: React.FC = () => {
  const { data } = useTypedSelector((state) => state.geocoding);

  return (
    <span className="location-info">
      {data.country} &rsaquo; {data.name}
    </span>
  );
};

export default LocationInfo;
