import React, { useRef } from 'react';
import uuid from 'react-uuid';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SCROLL_OFFSET } from '../../../config';

import WeatherIcon from '../weather-icon/WeatherIcon';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import './weekForecast.scss';

const WeekForecast: React.FC = () => {
  const { weekForecast } = useTypedSelector((state) => state.forecast.forecast);

  const containerEl = useRef<HTMLUListElement>(null);

  const scroll = (scrollOffset: number) => {
    containerEl.current!.scrollLeft += scrollOffset;
  };

  return (
    <div className="week-forecast">
      <h2 className="week-forecast__title">Week Weather Forecast</h2>
      <div className="week-forecast__info-container">
        <button
          onClick={() => scroll(-SCROLL_OFFSET)}
          className="week-forecast__button"
        >
          <FaCaretLeft />
        </button>
        <ul ref={containerEl} className="week-forecast__list">
          {weekForecast.map((item) => (
            <li className="week-forecast__item" key={uuid()}>
              <h3>{item.weekDays}</h3>
              <span className="week-forecast__sub-item">{item.weekDates}</span>
              <WeatherIcon icon={item.weekWeatherIcons} iconType="week" />
              <strong>{item.weekDaytimeTemp}&#176;</strong>
              <span className="week-forecast__sub-item">
                {item.weekNighttimeTemp}&#176;
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scroll(SCROLL_OFFSET)}
          className="week-forecast__button"
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default WeekForecast;
