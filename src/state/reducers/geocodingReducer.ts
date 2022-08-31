import { ActionType } from '../action-types';
import { Action } from '../actions';

interface GeocodingState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: GeocodingState = initialState,
  action: Action
): GeocodingState => {
  switch (action.type) {
    case ActionType.SEARCH_GEOCODING:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_GEOCODING_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_GEOCODING_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
