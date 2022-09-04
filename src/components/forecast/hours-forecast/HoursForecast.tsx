import React from 'react';

import { FaMoon } from 'react-icons/fa';
import { FaCaretLeft } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';

import './hoursForecast.scss';

const HoursForecast: React.FC = () => {
  return (
    <div className="hours-forecast">
      <button className="hours-forecast__button">
        <FaCaretLeft />
      </button>
      <ul className="hours-forecast__list">
        <li className="hours-forecast__item">
          <span>0:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>1:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>2:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>3:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>4:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>5:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>6:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>7:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>8:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
        <li className="hours-forecast__item">
          <span>9:00</span>
          <span>
            <FaMoon />
          </span>
          <span>+27&#176;</span>
        </li>
      </ul>
      <button className="hours-forecast__button">
        <FaCaretRight />
      </button>
    </div>
  );
};

export default HoursForecast;
