import React, { useEffect } from 'react';

import LocationInfo from './location-info/LocationInfo';
import LocationMap from './location-map/LocationMap';
import TodayInfo from './today-info/TodayInfo';
import WeekForecast from './week-forecast/WeekForecast';
import WeekInfo from './week-info/WeekInfo';

import './forecast.scss';
import TodayForecast from './today-forecast/TodayForecast';

const Forecast: React.FC = () => {
  useEffect(() => {});

  return (
    <div className="forecast">
      <LocationInfo />
      <TodayInfo />
      <WeekInfo />
      <TodayForecast />
      <LocationMap />
      <WeekForecast />
    </div>
  );
};

export default Forecast;
