import {
  DELAY_TO_DAYTIME,
  DELAY_TO_NIGHTTIME,
  HOURS_PER_DAY,
  HOUR_CARDS_QUANTITY,
  WEEK_DAY_NAMES,
} from '../../config';
import {
  convertDateToMonth,
  convertDayOfWeek,
  convertHourToDaytime,
  weatherCodeToIcon,
} from '../../helpers/helpers';
import { CityItem } from '../../types/city';

export const createLocationObject = (data: CityItem) => {
  return {
    name: data.name,
    country: data.country,
    timezone: data.timezone,
    latitude: data.latitude,
    longitude: data.longitude,
  };
};

export const createCurrentTimeObject = (data: CityItem) => {
  const currentTime = data.curCityTime.slice(11, 16);
  const currentHour = +data.curCityTime.slice(11, 13);
  const timeOfDay = convertHourToDaytime(currentHour);
  const dayOfWeek = convertDayOfWeek(data.dayOfWeek);
  return {
    time: currentTime,
    timeOfDay: timeOfDay,
    dayOfWeek: dayOfWeek,
    dayOfWeekIndex: data.dayOfWeek,
  };
};

// DO TYPE LATER
export const createCurrentForecastObject = (data: any) => {
  const currentHour = data.current_weather.time.slice(11, 13);
  const currentDayTime = convertHourToDaytime(currentHour);
  const weatherIcon = weatherCodeToIcon(
    data.current_weather.weathercode,
    currentDayTime
  );
  return {
    temperature: data.current_weather.temperature,
    weatherIcon: weatherIcon,
    windSpeed: data.current_weather.windspeed,
  };
};

// DO TYPE LATER
export const createHoursObject = (data: any) => {
  const allWeekTime = data.hourly.time;
  const currentTimeIndex = allWeekTime.findIndex(
    (item: any) => item === data.current_weather.time
  );
  const lastTimeIndex = currentTimeIndex + HOUR_CARDS_QUANTITY;
  const hourlyCardsTime = allWeekTime
    .slice(currentTimeIndex, lastTimeIndex)
    .map((time: any) => time.slice(-5).trim());
  const hourlyCardsDayTime = hourlyCardsTime
    .map((time: any) => time.slice(0, 2))
    .map((time: any) => convertHourToDaytime(time));
  const hourlyCardsWeatherIcons = data.hourly.weathercode
    .slice(currentTimeIndex, lastTimeIndex)
    .map((code: any, idx: any) =>
      weatherCodeToIcon(code, hourlyCardsDayTime[idx])
    );
  const hourlyCardsTemperature = data.hourly.temperature_2m.slice(
    currentTimeIndex,
    lastTimeIndex
  );

  return {
    time: hourlyCardsTime,
    weatherIcons: hourlyCardsWeatherIcons,
    temperature: hourlyCardsTemperature,
  };
};

// DO TYPE LATER
export const createWeekObject = (data: any, forecast: any) => {
  const allWeekTime = data.hourly.time;
  const allWeekTemp = data.hourly.temperature_2m;
  const allWeatherCodes = data.hourly.weathercode;
  const currentDayOfWeekIndex = forecast.dayOfWeek;

  const weekDaytimeTemp = allWeekTemp.filter(
    (_: any, idx: any) => (idx - DELAY_TO_DAYTIME) % HOURS_PER_DAY === 0
  );
  const weekNightimeTemp = allWeekTemp.filter(
    (_: any, idx: any) => (idx - DELAY_TO_NIGHTTIME) % HOURS_PER_DAY === 0
  );
  const weekWeatherIcons = allWeatherCodes
    .filter(
      (_: any, idx: any) => (idx - DELAY_TO_DAYTIME) % HOURS_PER_DAY === 0
    )
    .map((code: any) => weatherCodeToIcon(code, 'day'));
  // CHANGE STRING ABOVE? WHY 'DAY'
  const currentWeekDays = [
    ...WEEK_DAY_NAMES.slice(currentDayOfWeekIndex - 1),
    ...WEEK_DAY_NAMES.slice(0, currentDayOfWeekIndex - 1),
  ];
  const allWeekDates = allWeekTime
    .filter(
      (_: any, idx: any) => (idx - DELAY_TO_DAYTIME) % HOURS_PER_DAY === 0
    )
    .map((date: any) => date.slice(5, -6).trim());
  const currentDateMonthName = allWeekDates
    .map((date: any) => (date.slice(0, 1) === '0' ? date.slice(1) : date))
    .map((date: any) => convertDateToMonth(Number(date.slice(0, -3))));
  const currentDateOfMonth = allWeekDates.map((date: any) => date.slice(3));
  const currentDayAndMonth = currentDateMonthName.map((name: any, idx: any) =>
    [name, currentDateOfMonth[idx]].join(',').replace(',', ' ')
  );
  return {
    weekDaytimeTemp: weekDaytimeTemp,
    weekNighttimeTemp: weekNightimeTemp,
    weekWeatherIcons: weekWeatherIcons,
    weekDays: currentWeekDays,
    weekDates: currentDayAndMonth,
  };
};