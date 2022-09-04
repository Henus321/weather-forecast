import React from 'react';
import CurrentForecast from '../current-forecast/CurrentForecast';
import HoursForecast from '../hours-forecast/HoursForecast';

import './todayForecast.scss';

const TodayForecast: React.FC = () => {
  return (
    <div className="today-forecast">
      <CurrentForecast />
      <HoursForecast />
    </div>
  );
};

export default TodayForecast;
