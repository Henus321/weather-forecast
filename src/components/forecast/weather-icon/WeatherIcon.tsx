import React from 'react';
import {
  FaMoon,
  FaSun,
  FaCloudSun,
  FaCloudMoon,
  FaCloudMoonRain,
  FaCloudSunRain,
  FaSnowflake,
  FaBolt,
  FaQuestion,
} from 'react-icons/fa';

import './weatherIcon.scss';

interface WeatherIconProps {
  icon: string;
  iconType: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, iconType }) => {
  const iconTransformer = (weatherIcon: string) => {
    switch (weatherIcon) {
      case 'moon':
        return <FaMoon className={`weather-icon__${iconType}`} />;
      case 'sun':
        return <FaSun className={`weather-icon__${iconType}`} />;
      case 'cloud-moon':
        return <FaCloudMoon className={`weather-icon__${iconType}`} />;
      case 'cloud-sun':
        return <FaCloudSun className={`weather-icon__${iconType}`} />;
      case 'cloud-moon-rain':
        return <FaCloudMoonRain className={`weather-icon__${iconType}`} />;
      case 'cloud-sun-rain':
        return <FaCloudSunRain className={`weather-icon__${iconType}`} />;
      case 'snowflake':
        return <FaSnowflake className={`weather-icon__${iconType}`} />;
      case 'cloud-bolt':
        return <FaBolt className={`weather-icon__${iconType}`} />;
      default:
        return <FaQuestion className={`weather-icon__${iconType}`} />;
    }
  };
  return <>{iconTransformer(icon)}</>;
};

export default WeatherIcon;
