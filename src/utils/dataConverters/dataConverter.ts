import {
  DAY_ICON_NAME,
  DELAY_TO_DAYTIME,
  DELAY_TO_NIGHTTIME,
  HOURS_PER_DAY,
  HOUR_CARDS_QUANTITY,
  WEEK_DAY_NAMES,
} from '../../config';
import {
  addPlusIfPositiveValue,
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
  const currentTime = data.curCityTime.slice(0, 5);
  const currentHour = +data.curCityTime.slice(0, 2);
  const timeOfDay = convertHourToDaytime(currentHour);
  const { correctWeekday, correctWeekdayIdx } = convertDayOfWeek(
    data.dayOfWeek
  );
  return {
    time: currentTime,
    timeOfDay: timeOfDay,
    dayOfWeek: correctWeekday,
    dayOfWeekIndex: correctWeekdayIdx,
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
    temperature: addPlusIfPositiveValue(data.current_weather.temperature),
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

  const isTodayRain =
    hourlyCardsWeatherIcons.filter((item) => item.includes('rain')).length > 0
      ? true
      : false;
  const minTemp = Math.min(...hourlyCardsTemperature);
  const maxTemp = Math.max(...hourlyCardsTemperature);
  const hourlyCards = hourlyCardsTime.map((_, idx) => {
    return {
      time: hourlyCardsTime[idx],
      weatherIcons: hourlyCardsWeatherIcons[idx],
      temperature: addPlusIfPositiveValue(hourlyCardsTemperature[idx]),
    };
  });

  return {
    isTodayRain,
    minTemp: addPlusIfPositiveValue(minTemp),
    maxTemp: addPlusIfPositiveValue(maxTemp),
    hourlyCards,
  };
};

export const createWeekObject = (
  data: ForecastFetchedData,
  forecast: CityItem
) => {
  const allWeekTime = data.hourly.time;
  const allWeekTemp = data.hourly.temperature_2m;
  const allWeatherCodes = data.hourly.weathercode;
  const { correctWeekdayIdx } = convertDayOfWeek(forecast.dayOfWeek);

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
    ...WEEK_DAY_NAMES.slice(correctWeekdayIdx),
    ...WEEK_DAY_NAMES.slice(0, correctWeekdayIdx),
  ].map((day, idx) => {
    if (idx === 0) return 'Today';
    return day;
  });

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

  const isWeekRain =
    weekWeatherIcons.filter((item) => item.includes('rain')).length > 0
      ? true
      : false;
  const minTemp = Math.min(...allWeekTemp);
  const maxTemp = Math.max(...allWeekTemp);
  const weekCards = currentWeekDays.map((_, idx) => {
    return {
      weekDaytimeTemp: addPlusIfPositiveValue(weekDaytimeTemp[idx]),
      weekNighttimeTemp: addPlusIfPositiveValue(weekNightimeTemp[idx]),
      weekWeatherIcons: weekWeatherIcons[idx],
      weekDays: currentWeekDays[idx],
      weekDates: currentDayAndMonth[idx],
    };
  });

  return {
    isWeekRain,
    minTemp: addPlusIfPositiveValue(minTemp),
    maxTemp: addPlusIfPositiveValue(maxTemp),
    weekCards,
  };
};
