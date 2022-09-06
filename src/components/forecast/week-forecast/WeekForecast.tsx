import React from 'react';

import { FaMoon, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import './weekForecast.scss';

const WeekForecast: React.FC = () => {
  // const iconType = (icon: string) => {
  //   switch (icon) {
  //     case 'moon': {
  //       return <FaMoon />;
  //     }
  //     default:
  //       return <FaCloudMoon />;
  //   }
  // };

  return (
    <div className="week-forecast">
      <h2 className="week-forecast__title">Прогноз на 10 дней</h2>
      <div className="week-forecast__info-container">
        {/* {iconType('moon')} */}
        <button className="week-forecast__button">
          <FaCaretLeft />
        </button>
        <ul className="week-forecast__list">
          <li className="week-forecast__item">
            <h3>Вчера</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Сегодня</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Пт</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Сб</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Вск</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Пн</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Вт</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Ср</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Чт</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
          <li className="week-forecast__item">
            <h3>Пт</h3>
            <span>31 авг</span>
            <FaMoon className="week-forecast__icon" />
            <span>+32&#176;</span>
            <span>+26&#176;</span>
            <span>Малооблачно</span>
          </li>
        </ul>
        <button className="week-forecast__button">
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default WeekForecast;
