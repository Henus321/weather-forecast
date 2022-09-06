import { DAWN_TIME, DUSK_TIME, MONTH_NAMES, WEEK_DAY_NAMES } from '../config';

export const convertHourToDaytime = (time: number) => {
  return time > DAWN_TIME && time < DUSK_TIME ? 'day' : 'night';
};

export const convertDateToMonth = (idx: number) => {
  const [correctMonth] = MONTH_NAMES.filter((_, monthIdx) => monthIdx === idx);
  return correctMonth;
};

export const convertDayOfWeek = (idx: number) => {
  const [correctWeekday] = WEEK_DAY_NAMES.filter(
    (_, dayWeekIdx) => dayWeekIdx === idx - 1
  );
  return correctWeekday;
};

export const weatherCodeToIcon = (weatherCode: number, timeOfDay: string) => {
  switch (weatherCode) {
    case 0:
      //   console.log('Clear sky');
      return timeOfDay === 'night' ? 'moon' : 'sun';
    case 1:
    case 2:
    case 3:
    case 45:
    case 48:
      //   console.log('Mainly clear, partly cloudy, and overcast');
      // console.log('Fog and depositing rime fog');
      return timeOfDay === 'night' ? 'cloud-moon' : 'cloud-sun';
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 67:
    case 66:
    case 80:
    case 81:
    case 82:
      // console.log('Drizzle Light, moderate, and dense intensity');
      // console.log('Freezing Drizzle: Light and dense intensity');
      // console.log('Rain: Slight, moderate and heavy intensity');
      // console.log('Freezing Rain: Light and heavy intensity');
      // console.log('Rain showers: Slight, moderate, and violent');
      return timeOfDay === 'night' ? 'cloud-moon-rain' : 'cloud-sun-rain';
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      // console.log('Snow fall: Slight, moderate, and heavy intensity');
      // console.log('Snow grains');
      // console.log('Snow showers slight and heavy');
      return 'snowflake';
    case 95:
    case 96:
    case 99:
      // console.log('Thunderstorm: Slight or moderate');
      // console.log('Thunderstorm with slight and heavy hail');
      return 'cloud-bolt';
    default:
      // console.log('Condition not found');
      return 'circle-question';
  }
};
