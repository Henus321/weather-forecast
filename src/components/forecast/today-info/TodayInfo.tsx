import React from 'react';

import { FaSun } from 'react-icons/fa';
import './todayInfo.scss';

const TodayInfo: React.FC = () => {
  return (
    <div className="today-info">
      <FaSun className="today-info__icon" />
      <span>
        Сегодня: +27...+32&#176;;слабый дождь начнётся около 0:00; ветер 6-8
        м/c, порывы до 16 м/с
      </span>
    </div>
  );
};

export default TodayInfo;
