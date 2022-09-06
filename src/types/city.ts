export enum CityActionTypes {
  FETCH_CITY = 'FETCH_CITY',
  FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS',
  FETCH_CITY_ERROR = 'FETCH_CITY_ERROR',
}

export interface CityState {
  loading: boolean;
  error: string | null;
  city: CityItem;
}

export interface CityItem {
  latitude: number;
  longitude: number;
  country: string;
  name: string;
  timezone: string;
  dayOfWeek: number;
  curCityTime: string;
}

interface FetchCityAction {
  type: CityActionTypes.FETCH_CITY;
}

interface FetchCitySuccessAction {
  type: CityActionTypes.FETCH_CITY_SUCCESS;
  payload: CityItem;
}

interface FetchCityErrorAction {
  type: CityActionTypes.FETCH_CITY_ERROR;
  payload: string;
}

export type CityAction =
  | FetchCityAction
  | FetchCitySuccessAction
  | FetchCityErrorAction;
