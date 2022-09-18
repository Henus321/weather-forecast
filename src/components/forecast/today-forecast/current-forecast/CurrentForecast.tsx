import React from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

import WeatherIcon from '../../weather-icon/WeatherIcon';
import { FaWind } from 'react-icons/fa';
import './currentForecast.scss';

const CurrentForecast: React.FC = () => {
  const { currentForecast, currentTime, location } = useTypedSelector(
    (state) => state.forecast.forecast
  );

  const { windSpeed, temperature, weatherIcon } = currentForecast;
  const { time, dayOfWeek } = currentTime;
  const { name, country } = location;

  return (
    <div className="current-forecast">
      <h2>{name}</h2>
      <span className="current-forecast__sub-title">{country}</span>
      <span>
        {dayOfWeek}, {time}
      </span>
      <div className="current-forecast__info-container">
        <h3 className="current-forecast__degree">{temperature}&#176;</h3>
        <WeatherIcon icon={weatherIcon} iconType="today" />
      </div>
      <div className="current-forecast__additional-info">
        <FaWind className="current-forecast__wind-icon" />
        <span>{windSpeed} m/s</span>
      </div>
    </div>
  );
};

export default CurrentForecast;
