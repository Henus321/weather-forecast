import {
  DAY_ICON_NAME,
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
import { ForecastFetchedData } from '../../types/forecast';

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

export const createCurrentForecastObject = (data: ForecastFetchedData) => {
  const currentHour = +data.current_weather.time.slice(11, 13);
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

export const createHoursObject = (data: ForecastFetchedData) => {
  const allWeekTime = data.hourly.time;
  const currentTimeIndex = allWeekTime.findIndex(
    (item: string) => item === data.current_weather.time
  );
  const lastTimeIndex = currentTimeIndex + HOUR_CARDS_QUANTITY;
  const hourlyCardsTime = allWeekTime
    .slice(currentTimeIndex, lastTimeIndex)
    .map((time: string) => time.slice(-5).trim());
  const hourlyCardsDayTime = hourlyCardsTime
    .map((time: string) => time.slice(0, 2))
    .map((time: string) => convertHourToDaytime(+time));
  const hourlyCardsWeatherIcons = data.hourly.weathercode
    .slice(currentTimeIndex, lastTimeIndex)
    .map((code: number, idx: number) =>
      weatherCodeToIcon(code, hourlyCardsDayTime[idx])
    );
  const hourlyCardsTemperature = data.hourly.temperature_2m.slice(
    currentTimeIndex,
    lastTimeIndex
  );

  return hourlyCardsTime.map((_, idx) => {
    return {
      time: hourlyCardsTime[idx],
      weatherIcons: hourlyCardsWeatherIcons[idx],
      temperature: hourlyCardsTemperature[idx],
    };
  });
};

export const createWeekObject = (
  data: ForecastFetchedData,
  forecast: CityItem
) => {
  const allWeekTime = data.hourly.time;
  const allWeekTemp = data.hourly.temperature_2m;
  const allWeatherCodes = data.hourly.weathercode;
  const currentDayOfWeekIndex = forecast.dayOfWeek;

  const weekDaytimeTemp = allWeekTemp.filter(
    (_: number, idx: number) => (idx - DELAY_TO_DAYTIME) % HOURS_PER_DAY === 0
  );
  const weekNightimeTemp = allWeekTemp.filter(
    (_: number, idx: number) => (idx - DELAY_TO_NIGHTTIME) % HOURS_PER_DAY === 0
  );
  const weekWeatherIcons = allWeatherCodes
    .filter(
      (_: number, idx: number) => (idx - DELAY_TO_DAYTIME) % HOURS_PER_DAY === 0
    )
    .map((code: number) => weatherCodeToIcon(code, DAY_ICON_NAME));
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
  return currentWeekDays.map((_, idx) => {
    return {
      weekDaytimeTemp: weekDaytimeTemp[idx],
      weekNighttimeTemp: weekNightimeTemp[idx],
      weekWeatherIcons: weekWeatherIcons[idx],
      weekDays: currentWeekDays[idx],
      weekDates: currentDayAndMonth[idx],
    };
  });
};
