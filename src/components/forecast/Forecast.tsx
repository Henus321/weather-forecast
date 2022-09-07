import React, { useEffect } from 'react';

import LocationInfo from './location-info/LocationInfo';
import TodayInfo from './today-info/TodayInfo';
import WeekInfo from './week-info/WeekInfo';
import TodayForecast from './today-forecast/TodayForecast';
import LocationMap from './location-map/LocationMap';
import WeekForecast from './week-forecast/WeekForecast';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './forecast.scss';

const Forecast: React.FC = () => {
  const { city } = useTypedSelector((state) => state.city);
  const { forecast } = useTypedSelector((state) => state.forecast);
  const { FetchForecastAsync } = useActions();

  useEffect(() => {
    if (city.name) FetchForecastAsync(city);
    // eslint-disable-next-line
  }, [city]);

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
