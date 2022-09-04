import React from 'react';

import { FaSun } from 'react-icons/fa';
import './currentForecast.scss';

const CurrentForecast: React.FC = () => {
  return (
    <div className="current-forecast">
      <h3>Погода в Токио</h3>
      <span>Сейчас 04:52. Вчера в это время +26&#176;</span>
      <div className="current-forecast__info-container">
        <h3 className="current-forecast__degree">+27&#176;</h3>
        <FaSun className="current-forecast__icon" />
        <div className="current-forecast__info">
          <span>Ясно</span>
          <span>Ощущается как +31&#176;</span>
        </div>
      </div>
      <div className="current-forecast__additional-info">
        <span>= 4,1 м/c,Ю</span>
        <span>= 90%</span>
        <span>=755 мм рт. ст.</span>
        <span>= 27&#176;</span>
      </div>
    </div>
  );
};

export default CurrentForecast;
