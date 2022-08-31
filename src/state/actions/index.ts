import { ActionType } from '../action-types';

interface SearchGeocodingAction {
  type: ActionType.SEARCH_GEOCODING;
}

interface SearchGeocodingSuccessAction {
  type: ActionType.SEARCH_GEOCODING_SUCCESS;
  payload: string[];
}

interface SearchGeocodingErrorAction {
  type: ActionType.SEARCH_GEOCODING_ERROR;
  payload: string;
}

export type Action =
  | SearchGeocodingAction
  | SearchGeocodingSuccessAction
  | SearchGeocodingErrorAction;
