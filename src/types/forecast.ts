export enum ForecastActionTypes {
  FETCH_FORECAST = 'FETCH_FORECAST',
  FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS',
  FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR',
}

export interface ForecastFetchedData {
  latitude: number;
  longitude: number;
  timezone: string;
  current_weather: {
    time: string;
    weathercode: number;
    temperature: number;
    windspeed: number;
  };
  hourly: {
    time: string[];
    weathercode: number[];
    temperature_2m: number[];
  };
}

export interface ForecastState {
  loading: boolean;
  error: string | null;
  forecast: ForecastItem;
}

export interface ForecastItem {
  location: Location;
  currentTime: CurrentTime;
  currentForecast: CurrentForecast;
  hoursForecast: HoursForecast;
  weekForecast: WeekForecast;
}

export interface Location {
  name: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

export interface CurrentTime {
  time: string;
  timeOfDay: string;
  dayOfWeek: string;
  dayOfWeekIndex: number;
}

export interface CurrentForecast {
  temperature: string;
  weatherIcon: string;
  windSpeed: number;
}

export interface HoursForecast {
  isTodayRain: boolean;
  minTemp: string;
  maxTemp: string;
  hourlyCards: HourlyCard[];
}

export interface HourlyCard {
  time: string;
  weatherIcons: string;
  temperature: string;
}

export interface WeekForecast {
  isWeekRain: boolean;
  minTemp: string;
  maxTemp: string;
  weekCards: WeekCard[];
}

export interface WeekCard {
  weekDaytimeTemp: string;
  weekNighttimeTemp: string;
  weekWeatherIcons: string;
  weekDays: string;
  weekDates: string;
}

interface fetchForecastAction {
  type: ForecastActionTypes.FETCH_FORECAST;
}

interface fetchForecastSuccessAction {
  type: ForecastActionTypes.FETCH_FORECAST_SUCCESS;
  payload: ForecastItem;
}

interface fetchForecastErrorAction {
  type: ForecastActionTypes.FETCH_FORECAST_ERROR;
  payload: string;
}

export type ForecastAction =
  | fetchForecastAction
  | fetchForecastSuccessAction
  | fetchForecastErrorAction;
