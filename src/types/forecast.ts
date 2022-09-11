export enum ForecastActionTypes {
  FETCH_FORECAST = 'FETCH_FORECAST',
  FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS',
  FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR',
}

export interface ForecastFetchedData {
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
  temperature: number;
  weatherIcon: string;
  windSpeed: number;
}

export interface HoursForecast {
  isTodayRain: boolean;
  minTemp: number;
  maxTemp: number;
  hourlyCards: HourlyCard[];
}

export interface HourlyCard {
  time: string;
  weatherIcons: string;
  temperature: number;
}

export interface WeekForecast {
  isWeekRain: boolean;
  minTemp: number;
  maxTemp: number;
  weekCards: WeekCard[];
}

export interface WeekCard {
  weekDaytimeTemp: number;
  weekNighttimeTemp: number;
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
