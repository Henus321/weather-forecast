import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { FaCaretLeft } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';

import './forecast.component.scss';

const Forecast: React.FC = () => {
  return (
    <div className="forecast">
      <span className="forecast__navigation">
        Япония &rsaquo; Префектура Токио &rsaquo; Токио
      </span>
      <div className="forecast__today-brief">
        <FaSun className="forecast__icon" />
        <span>
          Сегодня: +27...+32&#176;;слабый дождь начнётся около 0:00; ветер 6-8
          м/c, порывы до 16 м/с
        </span>
      </div>
      <div className="forecast__week-brief">
        <FaSun className="forecast__icon" />
        <span>
          На этой неделе: дожди; жара спадёт до +26&#176;; ветер 5-8 м/с, порывы
          до 16 м/с
        </span>
      </div>
      <div className="forecast__today">
        <div className="forecast__today-current">
          <h3>Погода в Токио</h3>
          <span>Сейчас 04:52. Вчера в это время +26&#176;</span>
          <div className="forecast__today-current-container">
            <h3 className="forecast__today-degree">+27&#176;</h3>
            <FaSun className="forecast__icon" />
            <div className="forecast__today-current-info">
              <span>Ясно</span>
              <span>Ощущается как +31&#176;</span>
            </div>
          </div>
          <div className="forecast__today-additional-info">
            <span>= 4,1 м/c,Ю</span>
            <span>= 90%</span>
            <span>=755 мм рт. ст.</span>
            <span>= 27&#176;</span>
          </div>
        </div>
        <div className="forecast__today-body">
          <button className="forecast__today-button">
            <FaCaretLeft />
          </button>
          <ul className="forecast__today-hourly-list">
            <li className="forecast__today-hourly-item">
              <span>0:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>1:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>2:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>3:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>4:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>5:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>6:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>7:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>8:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
            <li className="forecast__today-hourly-item">
              <span>9:00</span>
              <span>
                <FaMoon />
              </span>
              <span>+27&#176;</span>
            </li>
          </ul>
          <button className="forecast__today-button">
            <FaCaretRight />
          </button>
        </div>
      </div>
      <div className="forecast__location">
        <h2>Leaflet Map Here</h2>
      </div>
      <div className="forecast__week">
        <h2 className="forecast__week-title">Прогноз на 10 дней</h2>
        <div className="forecast__week-body">
          <button className="forecast__week-button">
            <FaCaretLeft />
          </button>
          <ul className="forecast__week-list">
            <li className="forecast__week-item">
              <h3>Вчера</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Сегодня</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Пт</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Сб</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Вск</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Пн</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Вт</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Ср</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Чт</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
            <li className="forecast__week-item">
              <h3>Пт</h3>
              <span>31 авг</span>
              <FaMoon className="forecast__week-icon" />
              <span>+32&#176;</span>
              <span>+26&#176;</span>
              <span>Малооблачно</span>
            </li>
          </ul>
          <button className="forecast__week-button">
            <FaCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
