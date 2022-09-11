import React, { useRef } from 'react';
import uuid from 'react-uuid';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SCROLL_OFFSET } from '../../../config';

import WeatherIcon from '../weather-icon/WeatherIcon';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import './hoursForecast.scss';

const HoursForecast: React.FC = () => {
  const { hoursForecast } = useTypedSelector(
    (state) => state.forecast.forecast
  );
  const { hourlyCards } = hoursForecast;

  const containerEl = useRef<HTMLUListElement>(null);

  const scroll = (scrollOffset: number) => {
    containerEl.current!.scrollLeft += scrollOffset;
  };

  return (
    <div className="hours-forecast">
      <button
        onClick={() => scroll(-SCROLL_OFFSET)}
        className="hours-forecast__button"
      >
        <FaCaretLeft />
      </button>
      <ul ref={containerEl} className="hours-forecast__list">
        {hourlyCards.map((item) => (
          <li key={uuid()} className="hours-forecast__item">
            <span>{item.time}</span>
            <span>
              <WeatherIcon icon={item.weatherIcons} iconType="hour" />
            </span>
            <span>{item.temperature}&#176;</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => scroll(SCROLL_OFFSET)}
        className="hours-forecast__button"
      >
        <FaCaretRight />
      </button>
    </div>
  );
};

export default HoursForecast;
