import React, { useEffect } from 'react';

import TodayForecast from './today-forecast/TodayForecast';
import LocationMap from './location-map/LocationMap';
import WeekForecast from './week-forecast/WeekForecast';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './forecast.scss';

const Forecast: React.FC = () => {
  const { city } = useTypedSelector((state) => state.city);
  const { FetchForecastAsync } = useActions();

  useEffect(() => {
    if (city.name) FetchForecastAsync(city);
    // eslint-disable-next-line
  }, [city]);

  return (
    <div className="forecast">
      <TodayForecast />
      <LocationMap />
      <WeekForecast />
    </div>
  );
};

export default Forecast;
