import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import CurrentForecast from '../current-forecast/CurrentForecast';
import HoursForecast from '../hours-forecast/HoursForecast';
import './todayForecast.scss';

const TodayForecast: React.FC = () => {
  const { weatherIcon } = useTypedSelector(
    (state) => state.forecast.forecast.currentForecast
  );

  return (
    <div className={`today-forecast today-forecast--${weatherIcon}`}>
      <CurrentForecast />
      <HoursForecast />
    </div>
  );
};

export default TodayForecast;
