export enum GeocodingActionTypes {
  FETCH_GEOCODING = 'FETCH_GEOCODING',
  FETCH_GEOCODING_SUCCESS = 'FETCH_GEOCODING_SUCCESS',
  FETCH_GEOCODING_ERROR = 'FETCH_GEOCODING_ERROR',
}

export interface GeocodingState {
  loading: boolean;
  error: string | null;
  data: GeocodingItem;
}

export interface GeocodingItem {
  name: string;
  country: string;
}

interface FetchGeocodingAction {
  type: GeocodingActionTypes.FETCH_GEOCODING;
}

interface FetchGeocodingSuccessAction {
  type: GeocodingActionTypes.FETCH_GEOCODING_SUCCESS;
  payload: GeocodingItem;
}

interface FetchGeocodingErrorAction {
  type: GeocodingActionTypes.FETCH_GEOCODING_ERROR;
  payload: string;
}

export type GeocodingAction =
  | FetchGeocodingAction
  | FetchGeocodingSuccessAction
  | FetchGeocodingErrorAction;
