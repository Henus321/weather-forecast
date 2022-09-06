export enum ForecastActionTypes {
  FETCH_FORECAST = 'FETCH_FORECAST',
  FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS',
  FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR',
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
  time: any[];
  weatherIcons: any[];
  temperature: any[];
}

export interface WeekForecast {
  weekDaytimeTemp: any[];
  weekNighttimeTemp: any[];
  weekWeatherIcons: any[];
  weekDays: any[];
  weekDates: any[];
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
