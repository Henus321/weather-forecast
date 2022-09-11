import { DAWN_TIME, DUSK_TIME, MONTH_NAMES, WEEK_DAY_NAMES } from '../config';

export const convertHourToDaytime = (time: number) => {
  return time > DAWN_TIME && time < DUSK_TIME ? 'day' : 'night';
};

export const convertDateToMonth = (idx: number) => {
  const [correctMonth] = MONTH_NAMES.filter((_, monthIdx) => monthIdx === idx);
  return correctMonth;
};

export const convertDayOfWeek = (idx: number) => {
  const [correctWeekday] = WEEK_DAY_NAMES.filter((_, dayWeekIdx) => {
    return dayWeekIdx === idx;
  });
  return correctWeekday;
};

export const addPlusIfPositiveValue = (number: number) => {
  return number > 0 ? '+' + number : '' + number;
};

export const weatherCodeToIcon = (weatherCode: number, timeOfDay: string) => {
  switch (weatherCode) {
    case 0:
      return timeOfDay === 'night' ? 'moon' : 'sun';
    case 1:
    case 2:
    case 3:
    case 45:
    case 48:
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
      return timeOfDay === 'night' ? 'cloud-moon-rain' : 'cloud-sun-rain';
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return 'snowflake';
    case 95:
    case 96:
    case 99:
      return 'cloud-bolt';
    default:
      return 'question';
  }
};
