import React from 'react';
import uuid from 'react-uuid';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import WeatherIcon from '../weather-icon/WeatherIcon';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import './hoursForecast.scss';

const HoursForecast: React.FC = () => {
  const { hoursForecast } = useTypedSelector(
    (state) => state.forecast.forecast
  );

  return (
    <div className="hours-forecast">
      <button className="hours-forecast__button">
        <FaCaretLeft />
      </button>
      <ul className="hours-forecast__list">
        {hoursForecast.map((item) => (
          <li key={uuid()} className="hours-forecast__item">
            <span>{item.time}</span>
            <span>
              <WeatherIcon icon={item.weatherIcons} iconType="hour" />
            </span>
            <span>{item.temperature}&#176;</span>
          </li>
        ))}
      </ul>
      <button className="hours-forecast__button">
        <FaCaretRight />
      </button>
    </div>
  );
};

export default HoursForecast;
