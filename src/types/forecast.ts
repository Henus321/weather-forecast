export enum ForecastActionTypes {
  FETCH_FORECAST = 'FETCH_FORECAST',
  FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS',
  FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR',
}

export interface ForecastItem {
  time: string;
  temperature: number;
}

export interface ForecastState {
  loading: boolean;
  error: string | null;
  forecast: ForecastItem;
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
