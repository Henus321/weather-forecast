import React from 'react';

import { FaSun } from 'react-icons/fa';
import './weekInfo.scss';

const WeekInfo: React.FC = () => {
  return (
    <div className="week-info">
      <FaSun className="week-info__icon" />
      <span>
        На этой неделе: дожди; жара спадёт до +26&#176;; ветер 5-8 м/с, порывы
        до 16 м/с
      </span>
    </div>
  );
};

export default WeekInfo;
