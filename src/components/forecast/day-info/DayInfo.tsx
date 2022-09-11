import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { FaCloud, FaCloudRain } from 'react-icons/fa';
import './dayInfo.scss';

const DayInfo: React.FC = () => {
  const { isTodayRain, minTemp, maxTemp } = useTypedSelector(
    (state) => state.forecast.forecast.hoursForecast
  );

  const information = isTodayRain ? 'rain is possible' : 'no rain is expected';

  return (
    <div className="day-info">
      <div className="day-info__icon-container">
        {isTodayRain ? (
          <FaCloudRain className="day-info__icon" />
        ) : (
          <FaCloud className="day-info__icon" />
        )}
      </div>
      <span>
        Today: {information}; temperature from {minTemp} to {maxTemp}
      </span>
    </div>
  );
};

export default DayInfo;
