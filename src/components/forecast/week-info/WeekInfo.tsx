import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { FaCloudRain } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import './weekInfo.scss';

const WeekInfo: React.FC = () => {
  const { isWeekRain, minTemp, maxTemp } = useTypedSelector(
    (state) => state.forecast.forecast.weekForecast
  );

  const information = isWeekRain ? 'rain is possible' : 'no rain is expected';

  return (
    <div className="week-info">
      <div className="week-info__icon-container">
        {isWeekRain ? (
          <FaCloudRain className="week-info__icon" />
        ) : (
          <FaCloud className="week-info__icon" />
        )}
      </div>
      <span>
        This week: {information}; temperature from{' '}
        {minTemp >= 0 ? '+' + minTemp : minTemp} to{' '}
        {maxTemp >= 0 ? '+' + maxTemp : maxTemp}
      </span>
    </div>
  );
};

export default WeekInfo;
